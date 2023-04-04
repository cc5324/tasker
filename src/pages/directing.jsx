import { redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export async function loader({ request }) {
  console.log(`loader`);
  //是否存有 token
  let token = Cookies.get("token");
  if (token) return null;
  console.log(token);

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log(`code`, code);
  if (!code) return redirect("/login");

  try {
    const response = await axios({
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbxwOLQ23GYg_QVAblvvQxf-qJIHaloOudc_hC_62m2d4mfGb-TLUCmB_bj9itI5Naz2_w/exec",
      data: JSON.stringify({ code }),
      headers: {
        "Content-Type": "text/plain",
      },
    });
    console.log(`res`, response);
    const data = JSON.parse(response.data);

    if (data.access_token) {
      Cookies.set("token", data.access_token);
      console.log(`get token`, data.access_token);
      return null;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }

  return redirect("/login");
}

export default function redirecting() {
  return <></>;
}

import { redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export async function loader({ request }) {
  console.log(`loader`);
  let token = Cookies.get("token");
  if (token) return null;
  console.log(token);

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log(`code`, code);
  const response = await axios({
    method: "post",
    url: "https://script.google.com/macros/s/AKfycbxwOLQ23GYg_QVAblvvQxf-qJIHaloOudc_hC_62m2d4mfGb-TLUCmB_bj9itI5Naz2_w/exec",
    data: JSON.stringify({ code }),
    headers: {
      "Content-Type": "text/plain",
    },
  });

  const data = JSON.parse(response.data);
  token = data.access_token;

  if (token) {
    Cookies.set("token", token);
    console.log(`get token`, token);
    return redirect("/");
  }
  // return null;
  return redirect("/login");
}

export default function redirecting() {
  return <></>;
}

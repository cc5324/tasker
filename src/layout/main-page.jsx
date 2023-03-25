import { useSearchParams, useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const res = await axios({
    method: "post",
    url: "https://script.google.com/macros/s/AKfycbxwOLQ23GYg_QVAblvvQxf-qJIHaloOudc_hC_62m2d4mfGb-TLUCmB_bj9itI5Naz2_w/exec",
    data: JSON.stringify({ code }),
    headers: {
      "Content-Type": "text/plain",
    },
  });

  console.log(`load axios get`, res);
  return JSON.parse(res.data);
}

export default function main() {
  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  console.log(`searchParams.code`, code);

  const res = useLoaderData();
  console.log(`res`, res);

  return (
    <>
      <p>main page component</p>
    </>
  );
}

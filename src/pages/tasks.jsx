import { useState } from "react";
import { useSearchParams, useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

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

function loadBtn() {
  return (
    <button
      className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded w-fit"
      onClick={handleLoadIssue}
    >
      Load
    </button>
  );
}

export default function main() {
  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  console.log(`searchParams.code`, code);

  // let [token, setToken] = useState(null); \

  const res = useLoaderData();
  console.log(`res`, res);
  const token = res.access_token;
  // setToken(res.access_token);
  if (token) {
    Cookies.set("token", token);
    console.log(`get token`, token);
  }

  async function handleLoadIssue() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
    };
    const res = await axios({
      method: "get",
      url: `https://api.github.com/issues`,
      params: {
        filter: "assigned",
        state: "open",
        per_page: 10,
        page: 1,
      },
      headers: headers,
    });
    console.log(res);
  }

  return (
    <>
      <p>main page component</p>
      <button
        className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded w-fit"
        onClick={handleLoadIssue}
      >
        Load
      </button>
    </>
  );
}

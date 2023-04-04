import { redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { useUserStore } from "@/stores/taskStore";

export async function loader({ request }) {
  console.log(`loader`);

  //是否存有 token
  let token = Cookies.get("token");
  if (token) {
    await useUserStore.getState().fetchAccount();
    return null;
  }

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log(`code`, code);
  if (!code) return redirect("/login");

  try {
    const response = await axios({
      method: "post",
      // url: "https://script.google.com/macros/s/AKfycbxwOLQ23GYg_QVAblvvQxf-qJIHaloOudc_hC_62m2d4mfGb-TLUCmB_bj9itI5Naz2_w/exec",
      url: "https://script.google.com/macros/s/AKfycbxQrzmbLdLO7f1qhfszyYygTY5oN2bSwQdmv-ewV9Ml2E1j4SHFA8LM-_m3SOjqbOIgRA/exec",
      data: JSON.stringify({
        code,
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
      }),
      headers: {
        "Content-Type": "text/plain",
      },
    });
    console.log(`res`, response);
    const data = JSON.parse(response.data);

    if (data.access_token) {
      console.log(`get token`, data.access_token);
      Cookies.set("token", data.access_token);
      await useUserStore.getState().fetchAccount();
      return null;
    }

    if (data.error) {
      alert("授權失敗，請重新操作");
      return redirect("/login");
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }

  return redirect("/login");
}

export default function LoginPage() {
  const requestConfig = {
    base: "https://github.com/login/oauth/authorize",
    client_id: "5aa5158efe2c1966295d",
    redirect_uri: "https://cc5324.github.io/tasker/",
    scope: "repo",
  };

  const redirect_uri = import.meta.env.VITE_REDIRECT_URL;
  console.log(redirect_uri);
  // const endpoint = `https://github.com/login/oauth/authorize?client_id=5aa5158efe2c1966295d;scope=repo;redirect_uri=${redirect_uri};state=${state}`;
  const endpoint = `https://github.com/login/oauth/authorize?client_id=5aa5158efe2c1966295d;scope=repo;`;

  return (
    <div className="p-8">
      <p>Click it!</p>
      <a href={endpoint} className="btn btn-primary text-xl mt-1">
        Login with Github
      </a>
      <p className="mt-4">取得 Github 帳戶使用授權方可使用</p>
    </div>
  );
}

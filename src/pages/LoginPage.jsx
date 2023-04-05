import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { getGithubToken } from "@/API";
import { useUserStore } from "@/stores/userStore";

export async function loader({ request }) {
  // console.log(`loader`);

  //是否存有 token
  let token = Cookies.get("token");
  if (token) {
    await useUserStore.getState().fetchAccount();
    return null;
  }

  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) return redirect("/login");

  try {
    const response = await getGithubToken(code);

    if (response.access_token) {
      // console.log(`get token`, response.access_token);
      Cookies.set("token", response.access_token);
      await useUserStore.getState().fetchAccount();
      return null;
    }

    if (response.error) {
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
  const appClientID = import.meta.env.VITE_CLIENT_ID;
  const endpoint = `https://github.com/login/oauth/authorize?client_id=${appClientID};scope=repo;`;

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

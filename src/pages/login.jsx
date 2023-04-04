export default function LoginPage() {
  const requestConfig = {
    base: "https://github.com/login/oauth/authorize",
    client_id: "5aa5158efe2c1966295d",
    redirect_uri: "https://cc5324.github.io/tasker/",
    scope: "repo",
  };
  const state = "jiwqoejioqwjeoj";
  const redirect_uri = import.meta.env.VITE_REDIRECT_URL;
  const endpoint = `https://github.com/login/oauth/authorize?client_id=5aa5158efe2c1966295d;scope=repo;redirect_uri=${redirect_uri};state=${state}`;
  // const endpoint = `https://github.com/login/oauth/authorize?client_id=5aa5158efe2c1966295d;scope=repo;state=${state}`;

  return (
    <div className="p-8">
      <p>Click it!</p>
      <a href={endpoint} className="btn btn-primary text-xl mt-1">
        Go to Github
      </a>
      <p className="mt-4">取得 Github 帳戶使用授權方可使用</p>
    </div>
  );
}

export default function AuthButton() {
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
    <>
      <a
        href={endpoint}
        className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded w-fit"
      >
        Go to Github
      </a>
    </>
  );
}

export default function AuthButton() {
  const requestConfig = {
    base: "https://github.com/login/oauth/authorize",
    client_id: "5aa5158efe2c1966295d",
    redirect_uri: "https://cc5324.github.io/tasker/",
    scope: "repo",
  };

  const redirect_uri = import.meta.env.VITE_REDIRECT_URL;
  const endpoint = `https://github.com/login/oauth/authorize?client_id=5aa5158efe2c1966295d;scope=user;redirect_uri=${redirect_uri}`;

  return (
    <>
      <a
        href={endpoint}
        className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded w-fit"
      >
        Primary
      </a>
    </>
  );
}

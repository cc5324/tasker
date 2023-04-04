import { useEffect, useState } from "react";
import { useRouteError, useNavigate, Link } from "react-router-dom";

import Header from "@/component/Header";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  // const [countdown, setCountdown] = useState(5);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCountdown((prev) => prev - 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(timer);
  //     navigate("/");
  //   };
  // });

  return (
    <div id="error-page">
      <Header />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-extrabold text-error">Oops!</h2>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"} className="btn btn-primary mt-5">
          回到首頁
        </Link>
        {/* <p>{countdown} 秒後將重新導向</p> */}
      </div>
    </div>
  );
}

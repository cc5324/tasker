import { useState } from "react";
import {
  useMatches,
  useSearchParams,
  useLocation,
  Outlet,
} from "react-router-dom";

import "./App.css";

import AuthButton from "./AuthButton";

function App() {
  //! 測試區 router hooks 區域
  const url = new URL(window.location);
  // console.log(`url`, url.searchParams.get("code"));

  const matches = useMatches();
  // console.log(`matches`, matches);

  let location = useLocation();
  // console.log(`location`, location);
  //! 測試區 ----------------

  let [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  // console.log(`searchParams.code`, code);

  const getTokenUrl = "https//github.com/login/oauth/access_token";

  return (
    <div className="App flex flex-col">
      <header className="grow-0 p-5 bg-yellow-500 text-2xl font-serif">
        <h1>Tasker</h1>
      </header>
      <Outlet className="grow"></Outlet>
    </div>
  );
}

export default App;

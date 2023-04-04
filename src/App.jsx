import { Outlet } from "react-router-dom";

import Header from "@/component/Header";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <Outlet className="grow"></Outlet>
    </div>
  );
}

export default App;

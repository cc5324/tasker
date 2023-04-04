import { Outlet } from "react-router-dom";

import Header from "@/component/Header";

function App() {
  return (
    <div className="flex flex-col min-w-[375px] my-0 mx-auto text-center">
      <Header />
      <Outlet className="grow"></Outlet>
    </div>
  );
}

export default App;

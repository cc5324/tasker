import { Outlet, useNavigation } from "react-router-dom";
import cn from "classnames";

import Header from "@/component/Header";

function App() {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-w-[375px] my-0 mx-auto text-center">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;

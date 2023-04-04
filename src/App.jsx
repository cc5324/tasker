import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col">
      <header className="grow-0 p-5 bg-primary text-3xl text-center font-bold">
        <h1>Tasker</h1>
      </header>
      <Outlet className="grow"></Outlet>
    </div>
  );
}

export default App;

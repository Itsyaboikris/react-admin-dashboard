import Topbar from "./components/topbar/Topbar";
import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/home";

function App() {
  return (
    <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <Home />
        </div>
    </div>
  );
}

export default App;

import Topbar from "./components/topbar/Topbar";
import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div>
        <Topbar/>
        <div className="container">
            <SideBar/>
            <div className="other">
                other pages
            </div>
        </div>
    </div>
  );
}

export default App;

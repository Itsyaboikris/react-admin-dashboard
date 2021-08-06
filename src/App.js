import Topbar from "./components/topbar/Topbar";
import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";

function App() {
    return (
        <Router>
            <Topbar/>
            <div className="container">
                <SideBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users" component={UserList}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

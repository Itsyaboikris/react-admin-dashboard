import Topbar from "./components/topbar/Topbar";
import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/userPage/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/Product/Product";
import NewProduct from "./components/pages/NewProduct/NewProduct";

function App() {
    return (
        <Router>
            <Topbar/>
            <div className="container">
                <SideBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users" component={UserList}/>
                    <Route exact path="/user/:userId" component={User}/>
                    <Route exact path="/newUser" component={NewUser}/>
                    <Route exact path="/products" component={ProductList}/>
                    <Route exact path="/product/:productId" component={Product}/>
                    <Route exact path="/newproduct" component={NewProduct}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

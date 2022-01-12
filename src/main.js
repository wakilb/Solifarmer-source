import { Component } from "react";
import Farms from "./Farms";
import Farm from "./Farm";
import Users from "./Users";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AddFarm from "./AddFarm";
import FarmManage from "./FarmManage";
import User from "./User";

class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/farms" element={<Farms></Farms>}></Route>
        <Route path="/farm/:farmName" element={<Farm></Farm>}></Route>
        <Route
          path="/farm/:farmName/manage"
          element={<FarmManage></FarmManage>}
        ></Route>
        <Route path="/farms/new" element={<AddFarm></AddFarm>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/user/add" element={<User></User>}></Route>
        <Route path="/user/edit/:userName" element={<User></User>}></Route>
        <Route path="/user/new/:userName" element={<User></User>}></Route>
      </Routes>
    );
  }
}

export default Main;

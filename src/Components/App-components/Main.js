import { Component } from "react";
import Farms from "../../Pages/Farms";
import Farm from "../Farm-components/Farm";
import Users from "../../Pages/Users";
import Home from "../../Pages/Home";
import { Routes, Route } from "react-router-dom";
import AddFarm from "../../Pages/AddFarm";
import FarmManage from "../Farm-components/FarmManage";
import User from "../User-components/User";

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
        <Route
          path="/user/create"
          element={<User mode="insert"></User>}
        ></Route>
        <Route
          path="/user/edit/:id"
          element={<User mode="edit"></User>}
        ></Route>
        <Route
          path="/user/create/:id"
          element={<User mode="duplicate"></User>}
        ></Route>
        <Route
          path="/user/view/:id"
          element={<User mode="view"></User>}
        ></Route>
      </Routes>
    );
  }
}

export default Main;

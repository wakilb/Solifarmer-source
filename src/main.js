import { Component } from "react";
import Farms from "./Farms";
import Users from "./Users";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/farms" element={<Farms></Farms>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    );
  }
}

export default Main;

import { Component } from "react";
import { GiFarmer, GiWoodenFence } from "react-icons/gi";
import { IoHome, IoLogOut, IoHelpCircle } from "react-icons/io5";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>SoliFarmer Logo</h3>
        </div>
        <div className="m-2 fs-5 text-warning">Avatar and Welcome {user}</div>
        <ul className="list-unstyled">
          <li className="">
            <a href="#" className="fs-4">
              <IoHome className="fs-3 me-2" />
              Home
            </a>
          </li>
          <li className="d-3">
            <a href="#" className="fs-4">
              <GiWoodenFence className="fs-3 me-2" />
              Farms
            </a>
          </li>
          <li className="">
            <a href="#" className="fs-4">
              <GiFarmer className="fs-3 me-2" />
              Users
            </a>
          </li>
          <li className="">
            <a href="#" className="fs-4">
              <IoLogOut className="fs-3 me-2" />
              Logout
            </a>
          </li>
          <li className="">
            <a href="#" className="fs-4">
              <IoHelpCircle className="fs-3 me-2" />
              Help
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

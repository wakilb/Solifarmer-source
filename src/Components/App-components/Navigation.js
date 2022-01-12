import { Component } from "react";
import { GiFarmer, GiWoodenFence } from "react-icons/gi";
import { IoLogOut, IoHelpCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="fs-4">
            <h3>SoliFarmer Logo</h3>
          </Link>
        </div>
        <div className="m-2 fs-5 text-warning">Avatar and Welcome {user}</div>
        <ul className="list-unstyled">
          <li className=""></li>
          <li className="d-3">
            <Link to="/farms" className="fs-4">
              <GiWoodenFence className="fs-3 me-2" />
              Farms
            </Link>
          </li>
          <li className="">
            <Link to="/users" className="fs-4">
              <GiFarmer className="fs-3 me-2" />
              Users
            </Link>
          </li>
          <li className="">
            <Link to="#" className="fs-4">
              <IoLogOut className="fs-3 me-2" />
              Logout
            </Link>
          </li>
          <li className="">
            <Link to="#" className="fs-4">
              <IoHelpCircle className="fs-3 me-2" />
              Help
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

import { Component } from "react";
import Navigation from "./Navigation";
import Main from "./main";

class Dashboard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="wrapper">
        <Navigation user={user} />
        <Main></Main>
      </div>
    );
  }
}

export default Dashboard;

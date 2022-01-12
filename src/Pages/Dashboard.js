import { Component } from "react";
import Navigation from "../Components/App-components/Navigation";
import Main from "../Components/App-components/Main";

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

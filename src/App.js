import { Component } from "react";
import Dashboard from "./Pages/Dashboard";
import Welcome from "./Pages/Welcome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "null",
    };
  }

  render() {
    return (
      <div>
        {this.state.user == null && <Welcome />}
        {this.state.user && <Dashboard user={this.state.user} />}
      </div>
    );
  }
}

export default App;

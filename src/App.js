import { Component } from "react";
import Dashboard from "./Dashboard";
import Welcome from "./Welcome";

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

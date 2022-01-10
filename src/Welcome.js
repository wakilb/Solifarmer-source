import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-10 col-md-10 col-lg-8 col-xl-7">
              <div className="display-4 text-primary mt-3 mb-2">SoliFarmer</div>
              <p className="lead">
                This simple app creates to manage farms' data
              </p>

              <a href="/register" className="btn btn-outline-primary ms-2">
                Register
              </a>
              <a href="/login" className="btn btn-primary ms-2">
                Log In
              </a>
              <a href="/meetings" className="btn btn-outline-primary ms-2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;

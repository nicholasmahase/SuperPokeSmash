import React, { Component } from "react";
import "./Signin.css";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
    
    <div className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-header">
          <h1>Sign In</h1>
        </div>
        <div className="card-body">
          <form id="signin" name="signin" method="post" action="/signin">
          <div className="col-xs-4">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" name="username" id="username" placeholder="username" />
            </div>
            <div className="col-xs-4">
              <div className="input-group-prepend">
                <span className="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" name="password" id="password" placeholder="password" />
            </div>
            <div className="col-xs-4"><button type="submit" className="btn btn-primary btn-lg signup">Sign In</button></div>

          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account? <a className="loginlink" href="/">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
}
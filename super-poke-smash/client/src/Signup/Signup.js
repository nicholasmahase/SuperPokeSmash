import React, { Component } from "react";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //AXion POST REQUEST
    //TODO POST REQUEST TO /api/users/register
  }

  render() {
    return (
      <div className="container">
      <div className="d-flex justify-content-center h-100">
          <div className="card">
              <div className="card-header"><h1>Sign Up</h1></div>
              <p>Please fill in this form to create an account!</p>
          </div>

  <form id="signup" name="signup" method="post" action="/signup">
              <div className="form-group">
    <div className="row">
      <div className="col-xs-4"><input type="text" className="text form-control" name="firstname" placeholder="First Name" required="required" /></div>
      <div className="col-xs-4"><input type="text" className="text form-control" name="lastname" placeholder="Last Name" required="required" /></div>
       <div className="col-xs-4"><input type="text" className="text form-control" name="username" placeholder="Username" required="required" /></div>
       <div className="col-xs-4"><input type="email" className="text form-control" name="email" placeholder="Email" required="required" /></div>
       <div className="col-xs-4"><input type="password" className="text form-control" name="password" placeholder="Password" required="required" /></div>        
       <div className="col-xs-4"><button type="submit" className="btn btn-primary btn-lg signup">Sign Up</button></div>
    </div>        	
      </div>

  </form>
      </div>
  <div className="card-footer">
      <div className="d-flex justify-content-center links">
          <div className="hint-text">Already have an account? <a className="loginlink" href="/signin">Login here</a></div>
      </div>
  </div>

  </div> 
    );
  }
}

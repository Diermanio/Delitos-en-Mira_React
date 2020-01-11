import React, { Component } from "react";
import loginf from "../assets/js/loginfocus";
import "../assets/css/stylelogin.css";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="log">
          <body>
            <form action="index.html" class="login-form">
              <h1>Register</h1>

              <div class="txtb">
                <input type="text"></input>
                <span data-placeholder="Email"></span>
              </div>

              <div class="txtb">
                <input type="text"></input>
                <span data-placeholder="Username"></span>
              </div>

              <div class="txtb">
                <input type="password"></input>
                <span data-placeholder="Password"></span>
              </div>

              <input
                type="submit"
                class="logbtn"
                value="Register"
                href="index.html"
              ></input>

              <div class="bottom-text">
                Have an account?<a href="login.html"> Login here!</a>
              </div>
            </form>
          </body>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    loginf();
  }
}

export default Register;

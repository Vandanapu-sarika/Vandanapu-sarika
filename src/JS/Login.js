import React from "react";
import "./Login.css";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./Registration";
import Forgot from "./Forgot";
function Login() {
  return (
    <div class="padd">
      <center>
        <form>
          <table>
            <tr>
              <th colspan="3">
                <h2>Login</h2>
              </th>
            </tr>
            <tr>
              <th>
                <br />
              </th>
            </tr>
            <tr>
              <th class="t1">
                <input type="text" class="userid" placeholder="UserId" />
              </th>
            </tr>
            <tr>
              <th>
                <br />
              </th>
            </tr>
            <tr>
              <th class="t1">
                <input type="text" placeholder="Password" class="password" />
              </th>
            </tr>
            <tr>
              <th>
                <br />
              </th>
            </tr>
            <tr class="b1">
              <th class="button1">
                <button class="button">Login</button>
              </th>
            </tr>
            <tr>
              <th>
                <br />
              </th>
            </tr>
            <tr>
              <th>
                <Link to="/Forgot" class="pass">
                  Forgot Password
                </Link>
              </th>
            </tr>
            <tr>
              <th>
                <br />
              </th>
            </tr>
            <tr>
              <th class="forgot1">
                Not a member?
                <Link to="/Registration" class="create">
                  Create an account
                </Link>
              </th>
            </tr>
          </table>
        </form>
      </center>
      <Routes>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default Login;

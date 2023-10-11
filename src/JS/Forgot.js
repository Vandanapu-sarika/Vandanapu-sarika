import React from "react";
import "./Forgot.css";
function Forgot() {
  return (
    <div>
      <form class=" forgotpad">
        <table>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>
              <h2>Reset Password</h2>
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>
              <input type="text" placeholder="UserId" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>
              <input type="text" placeholder="Password" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>
              <input type="text" placeholder="Confirm Password" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>
              <button value="Reset">
                <a href="forgot_su.html">Reset</a>
              </button>
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Forgot;

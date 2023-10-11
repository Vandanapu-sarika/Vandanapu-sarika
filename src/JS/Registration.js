import React from "react";
import "./Registration.css";
function Registration() {
  return (
    <div>
      <form>
        <table>
          <tr>
            <td colspan="3" class="create">
              <h2>Registeration Form</h2>
            </td>
          </tr>
          <tr>
            <th class="name">
              <label> Name</label>
            </th>
            <th class="name">Middle Name</th>
            <th class="name">Last Name</th>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <br />
            </th>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>Enter Roll Number:</th>
            <th>
              <h4>Birth Date:</h4>
            </th>
            <th>Branch</th>
          </tr>
          <tr>
            <th>
              <input type="text" placeholder="21A81A6101" />
            </th>
            <th>
              <input type="date" />
            </th>
            <th>
              <select>
                <option value="Branches">Branches</option>
                <option value="AIM">AIM</option>
                <option value="CAI">CAI</option>
                <option value="CSE">CSE</option>
              </select>
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>Gender</th>
            <td>
              <input type="radio" />
              Male
            </td>
            <td>
              <input type="radio" />
              Female
            </td>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>

          <tr>
            <th colspan="1">Phone</th>
            <th>Email</th>
          </tr>
          <tr>
            <td colspan="1">
              <input type="text" placeholder="91+" />
            </td>
            <th>
              <input type="email" placeholder="21a81a6101@org.in" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>City Name:</th>
            <th>Pin Code:</th>
          </tr>
          <tr>
            <th>
              <select>
                <option value="city name">City Names</option>
                <option value="Lakkavaram">Lakkavaram</option>
                <option value="Tadepalligudem">Tadepalligudem</option>
                <option value="Rajamendry">Rajamendry</option>
              </select>
            </th>
            <th>
              <input type="text" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>Address</th>
            <th>
              <textarea rows="3" cols="50"></textarea>
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>Range of your English skill</th>
            <th>
              <input type="range" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <th>Upload the file:</th>
            <th>
              <input type="file" />
            </th>
          </tr>
          <tr>
            <th>
              <br />
            </th>
          </tr>
          <tr>
            <br></br>
            <br></br>
          </tr>
          <tr>
            <th colspan="5">
              <button value="Submit">Submit</button>
            </th>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Registration;

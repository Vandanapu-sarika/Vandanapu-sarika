import "./App.css";
import Header from "./JS/Header";
import Forgot from "./JS/Forgot";
import HeaderBar from "./JS/HeaderBar";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./JS/Registration";
function App() {
  return (
    <div>
      <HeaderBar />
      <Header />
      <Routes>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Forgot" element={<Forgot />} />
      </Routes>
      <nav>
        <li>
          <Link to="/Registration">Home</Link>
        </li>
        <li>
          <Link to="/Forgot">Forgot</Link>
        </li>
      </nav>
    </div>
  );
}

export default App;

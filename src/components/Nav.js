import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
export default function Nav() {
  return (<nav className="nav">
    <ul>
      <li>
        <Link to="/" className="brand">
          <img src={logo} alt="CMSN NETWORK Logo" />
          <h3>CMSN NETWORK</h3>
        </Link>
      </li>
    </ul>
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  </nav>);
}
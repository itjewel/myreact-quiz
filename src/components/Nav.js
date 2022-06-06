import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import { useAuth } from '../contexts/AuthContext';
import Account from "./Account";
export default function Nav() {
  const { currentUser, logout } = useAuth();
  // console.log(currentUser)
  return (<nav className="nav">
    <ul>
      <li>
        <Link to="/" className="brand">
          <img src={logo} alt="CMSN NETWORK Logo" />
          <h3>CMSN NETWORK</h3>
        </Link>
      </li>
    </ul>
    <Account />
  </nav>);
}
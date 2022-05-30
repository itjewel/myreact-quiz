import { Link } from "react-router-dom";
import LoginImage from '../../assets/images/signup.svg';
export default function Signup() {
  return (<><h1>Create an account</h1>
    <div className="column">
      <div className="illustration">
        <img src={LoginImage} alt="Signup" />
      </div>
      <form className="signup form" action="#">
        <div className="textInput">
          <input type="text" placeholder="Enter name" />
          <span className="material-icons-outlined"> person </span>
        </div>

        <div className="textInput">
          <input type="text" placeholder="Enter email" />
          <span className="material-icons-outlined"> alternate_email </span>
        </div>

        <div className="textInput">
          <input type="password" placeholder="Enter password" />
          <span className="material-icons-outlined"> lock </span>
        </div>

        <div className="textInput">
          <input type="password" placeholder="Confirm password" />
          <span className="material-icons-outlined"> lock_clock </span>
        </div>

        <label>
          <input type="checkbox" />
          <span>I agree to the Terms & Conditions</span>
        </label>

        <div className="button">
          <span>Submit now</span>
        </div>

        <div className="info">
          Already have an account?
          <Link to="/login">Login</Link> instead.
        </div>
      </form>
    </div></>);
}
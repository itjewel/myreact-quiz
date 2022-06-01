import { Link } from "react-router-dom";
import LoginImage from '../../assets/images/signup.svg';
import classes from '../../styles/Signup.module.css';
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import TextInput from "../TextInput";
export default function Signup() {
  return (<><h1>Create an account</h1>
    <div className="column">
      <div className="illustration">
        <img src={LoginImage} alt="Signup" />
      </div>
      <Form className={`${classes.signup} form`} action="#">
        <TextInput icon="person" type="text" placeholder="Enter name" />
        <TextInput icon="alternate_email" type="email" placeholder="Enter email" />
        <TextInput icon="lock" type="password" placeholder="Enter password" />
        <TextInput icon="lock_clock" type="password" placeholder="Confirm password" />
        <CheckBox text="I agree to the Terms & Conditions" type="checkbox" />
        <Button>
          <span>Submit now</span>
        </Button>

        <div className="info">
          Already have an account?
          <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div></>);
}
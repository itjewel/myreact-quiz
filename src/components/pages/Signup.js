
import LoginImage from '../../assets/images/signup.svg';
import SignUpForm from '../SignUpForm';


export default function Signup() {
  return (<><h1>Create an account</h1>
    <div className="column">
      <div className="illustration">
        <img src={LoginImage} alt="Signup" />
      </div>
      <SignUpForm />
    </div></>);
}
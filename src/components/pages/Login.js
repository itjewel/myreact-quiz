
import LoginImage from '../../assets/images/login.svg';
import LoginForm from '../LoginForm';
export default function Login() {
    return (<><h1>Login to your account</h1>
        <div className="column">
            <div className="illustration">
                <img src={LoginImage} alt="Login" />
            </div>
            <LoginForm />
        </div></>);
}
import { Link } from 'react-router-dom';
import LoginImage from '../../assets/images/login.svg';
import Button from '../Button';
import Form from '../Form';
import TextInput from '../TextInput';
export default function Login() {
    return (<><h1>Login to your account</h1>
        <div className="column">
            <div className="illustration">
                <img src={LoginImage} alt="Login" />
            </div>
            <Form className="login form" action="#">
                <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                <TextInput icon="lock" type="password" placeholder="Enter password" />
                <Button>
                    <span>Submit now</span>
                </Button>

                <div className="info">Don't have an account?
                    <Link to="/signup">Signup</Link> instead.</div>
            </Form>
        </div></>);
}
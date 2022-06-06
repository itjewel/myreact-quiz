import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const { login } = useAuth()

    const loginSubmit = async (e) => {
        e.preventDefault();
        // console.log(e)
        try {
            setLoading(true)
            setError('')
            await login(email, password);
            history.push('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError("Faild to login")
        }
    }

    return (<Form className="login form" action="#" onSubmit={loginSubmit}>
        <TextInput icon="alternate_email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <TextInput icon="lock" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        {error && <p className='error'>{error}</p>}
        <Button>
            <span>Submit now</span>
        </Button>

        <div className="info">Don't have an account?
            <Link to="/signup">Signup</Link> instead.</div>
    </Form>);
}
export default LoginForm;
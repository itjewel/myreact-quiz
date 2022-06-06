import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/Signup.module.css';
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignUpForm() {
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        // do validation
        if (password !== confirmPassword) {
            return setError("Passwords don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }


    return (<Form className={`${classes.signup} form`} onSubmit={handleSubmit} action="#">
        <TextInput required icon="person" type="text" placeholder="Enter name" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextInput required icon="alternate_email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput required icon="lock" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <TextInput required icon="lock_clock" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <CheckBox text="I agree to the Terms & Conditions" type="checkbox" value={agree} onChange={(e) => setAgree(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <Button disabled={loading} type="submit">
            <span>Submit now</span>
        </Button>

        <div className="info">
            Already have an account?
            <Link to="/login">Login</Link> instead.
        </div>
    </Form>);
}
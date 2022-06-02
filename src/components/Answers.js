import classes from '../styles/Answers.module.css';
import CheckBox from './CheckBox';
export default function Answers() {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="A New Hope 1" type="checkbox" id="option1"/>
            <CheckBox className={classes.answer} text="A New Hope 2" type="checkbox" id="option2"/>
        </div>
    );
}
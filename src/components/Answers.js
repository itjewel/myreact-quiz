import classes from '../styles/Answers.module.css';
export default function Answers() {
    return (
        <div className={classes.answers}>
            <label className={classes.answer} htmlFor="option1">
                <input type="checkbox" id="option1" />
                A New Hope 1
            </label>

        </div>
    );
}
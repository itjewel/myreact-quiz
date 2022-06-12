import classes from '../styles/Answers.module.css';
import CheckBox from './CheckBox';
export default function Answers({ options = [], handleChanged }) {
    return (
        <div className={classes.answers}>
            {/* {console.log(options)} */}
            {options.map((value, index) => (
                <CheckBox key={index} className={classes.answer} text={value.title} value={index} checked={value.checked}
                    type="checkbox" onChange={(e) => handleChanged(e, index)} />
            ))}

        </div>
    );
}
import { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import CheckBox from './CheckBox';
export default function Answers({ options = [], handleChanged, input }) {
    return (
        <div className={classes.answers}>
            {/* {console.log(options)} */}
            {options.map((value, index) => (
                <Fragment key={index}>
                    {input ? (
                        <CheckBox key={index} className={classes.answer} text={value.title} value={index} checked={value.checked}
                            type="checkbox" onChange={(e) => handleChanged(e, index)} />
                    ) : (
                        <CheckBox key={index} className={`${classes.answer} ${value.correct ? classes.correct : value.checked ? classes.wrong : null} `} text={value.title}
                            defaultChecked={value.checked} type="checkbox" disabled />
                    )}
                </Fragment>
            ))}

        </div>
    );
}
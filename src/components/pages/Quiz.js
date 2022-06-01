import classes from '../../styles/Quiz.module.css';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';
export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <div className="answers">
                <label className={classes.answer} htmlFor="option1">
                    <input type="checkbox" id="option1" />
                    A New Hope 1
                </label>

            </div>
            <ProgressBar />

            <MiniPlayer />
        </>
    );
}
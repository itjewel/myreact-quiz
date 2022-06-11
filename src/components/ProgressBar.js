import classes from "../styles/Prograssbar.module.css";

export default function ProgressBar({ next, prev, progress, submit }) {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{progress}% Cimplete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            <button className="button next" onClick={progress === 100 ? submit : next}>
                <span>{progress === 100 ? "Submit Question" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        </div>
    )
}
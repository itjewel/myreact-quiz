import { useRef, useState } from "react";
import classes from "../styles/Prograssbar.module.css";

export default function ProgressBar({ next, prev, progress, submit }) {
    const toolTipButton = useRef();
    const [status, setStatus] = useState(false);
    const toggleTooltip = () => {
        if (status) {
            setStatus(false);
            toolTipButton.current.style.display = 'none';
        } else {
            setStatus(true);
            toolTipButton.current.style.display = 'block';
            toolTipButton.current.style.left = `calc(${progress}% - 65px)`;
        }
    }
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={toolTipButton}>{progress}% Complete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${progress}%` }} onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}></div>
                </div>
            </div>
            <button className="button next" onClick={progress === 100 ? submit : next}>
                <span>{progress === 100 ? "Submit Question" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        </div>
    )
}
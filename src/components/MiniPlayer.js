import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../styles/MiniPlayer.module.css';
export default function MiniPlayer({ videId, title }) {
    const videoUrl = `https://www.youtube.com/watch?v=${videId}`;
    const miniPlayerButton = useRef();
    const [status, setStatus] = useState(false);
    const toggleMiniPlayer = () => {
        if (status) {
            miniPlayerButton.current.classList.add(classes.floatingBtn);
            setStatus(false);
        } else {
            miniPlayerButton.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        }
    }
    return (
        <>
            <div className={`${classes.miniPlayer}  ${classes.floatingBtn}`} ref={miniPlayerButton} onClick={toggleMiniPlayer}>
                <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
                <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}> close </span>

                <ReactPlayer
                    className={classes.player}
                    url={videoUrl}
                    width="300px"
                    height="168px"
                    playing={status}
                    controls
                />

                <p>{title}</p>
            </div>
        </>
    );
}
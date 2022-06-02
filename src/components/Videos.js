import Video from '../components/Video';
import classes from '../styles/videos.module.css';

export default function Videos() {
    return (
        <div className={classes.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}
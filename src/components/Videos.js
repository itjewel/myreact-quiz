import { Link } from "react-router-dom";
import Video from '../components/Video';
import useVideoList from "../hooks/useVideoList";
import classes from '../styles/videos.module.css';

export default function Videos() {
    const { videos, loading, error } = useVideoList();
    // console.log(videos)
    return (
        <div className={classes.videos}>

            <Link to="/quiz">
                <Video />
            </Link>

        </div>
    );
}
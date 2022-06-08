import { Link } from "react-router-dom";
import Video from '../components/Video';
import useVideoList from "../hooks/useVideoList";
import classes from '../styles/videos.module.css';

export default function Videos() {
    const { videosList, loading, error } = useVideoList();
    return (
        <div className={classes.videos}>
             {videosList.length > 0 && (
           videosList.map((value,index)=> value.noq > 0 ? (
                <Link key={index} to="/quiz">
                    <Video title={value.title} id={value.youtubeID} noq={value.noq} />
                </Link>
                ) : (
                    <Video  title={value.title} id={value.youtubeID} noq={value.noq}  key={index}/>
                )
                )
            )}
        </div>
    );
}
import classes from '../styles/video.module.css';
export default function Video({ title, id, noq }) {
    return (
        <div className={classes.video}>
            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
            <p>{title}</p>
            <div className="qmeta">
                <p>{noq} Questions</p>
                <p>Total Score : {noq * 5}</p>
            </div>
        </div>
    );
}
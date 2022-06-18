import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import Video from '../components/Video';
import useVideoList from "../hooks/useVideoList";

export default function Videos() {
    const [page, setPage] = useState(1);
    const { videosList, loading, error, hasMore } = useVideoList(page);
    return (
        <div>
            {/* {console.log(videosList)} */}
            {videosList.length > 0 && (
                <InfiniteScroll dataLength={videosList.length} hasMore={hasMore} next={() => setPage(page + 8)} loader={<h4 style={{ textAlign: 'center !important' }}>Loading...</h4>}>
                    {
                        videosList.map((value, index) => value.noq > 0 ? (
                            <Link key={value.youtubeID} to={{ pathname: `/quiz/${value.youtubeID}`, state: { videoTitle: value.title }, }}>
                                <Video title={value.title} id={value.youtubeID} noq={value.noq} />
                            </Link>
                        ) : (
                            <Video title={value.title} id={value.youtubeID} noq={value.noq} key={value.youtubeID} />
                        ))
                    }

                </InfiniteScroll>
            )}
            {!loading && videosList.length === 0 && <div>No data found!</div>}
            {error && <div>There was and error!</div>}
            {loading && <div>loading...</div>}
        </div>
    );
}
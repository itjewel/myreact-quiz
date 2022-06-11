import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";


export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [videosList, setVideosList] = useState("");
    useEffect(() => {
        let isCanceled = false;
        const fetchVideos = async () => {
            // database related works
            const db = getDatabase();

            const videRef = ref(db, "videos");
            const videoQuery = query(videRef, orderByKey(), startAt("" + page), limitToFirst(8));
            try {
                setLoading(true);
                setLoading(false);
                // request firebase database

                const snapshot = await get(videoQuery);
                // console.log(snapshot.val())
                setLoading(false);
                if (snapshot.exists()) {
                    if (!isCanceled) {
                        setVideosList((prevVideos) => {
                            return [...prevVideos, ...Object.values(snapshot.val())]

                        });
                    }
                } else {
                    setHasMore(false);
                }

            } catch (error) {
                console.log(error)
                setLoading(false)
                setLoading(true);
            }
        }
        setTimeout(() => {
            fetchVideos();
        }, 2000)
        return () => {
            isCanceled = true;
        }

    }, [page]);

    return {
        loading,
        error,
        videosList,
        hasMore,
    };

}
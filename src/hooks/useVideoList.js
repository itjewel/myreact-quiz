import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            // database related works
            const db = getDatabase()
            const videRef = ref(db, "videos");
            const videoQuery = query(videRef, orderByKey());
            try {
                setLoading(true);
                setLoading(false);
                // request firebase database
                const snapshot = await get(videoQuery);
                console.log(snapshot);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((previous) => {
                        return [...previous, ...Object.values(snapshot.val())];
                    })

                } else {

                }

            } catch (error) {
                console.log(error)
                setLoading(false)
                setLoading(true);
            }
        }
        fetchVideos();

    }, []);

    return (
        videos,
        loading,
        error
    );
}
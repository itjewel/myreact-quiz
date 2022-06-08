import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videosList, setVideosList] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            // database related works
            const db = getDatabase();
           
            const videRef = ref(db, "videos");
            const videoQuery = query(videRef, orderByKey());
            try {
                setLoading(true);
                setLoading(false);
                // request firebase database
                
                const snapshot = await get(videoQuery);
                // console.log(snapshot.val())
                setLoading(false);
                if (snapshot.exists()) {
                    setVideosList((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())];
                      });
                } else {
                //   setHasMore(false);
                }

            } catch (error) {
                console.log(error)
                setLoading(false)
                setLoading(true);
            }
        }
        fetchVideos();
        // console.log(videosList)

    }, []);

    return {
        loading,
        error,
        videosList
      };

}
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function useAnswers(videoId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answersList, setAnswersList] = useState([]);
    useEffect(() => {
        let isCanceled = false;
        const fetchAnswers = async () => {
            // database related works
            const db = getDatabase();

            const answersRef = ref(db, "answers/" + videoId + "/questions");
            const answersQuery = query(answersRef, orderByKey());
            try {
                setLoading(true);
                setError(false);
                // request firebase database

                const snapshot = await get(answersQuery);
                // console.log(snapshot.val())
                setLoading(false);
                if (snapshot.exists()) {
                    if (!isCanceled) {
                        setAnswersList((prevAnswers) => {
                            return [...prevAnswers, ...Object.values(snapshot.val())]

                        });
                    }
                }

            } catch (error) {
                // console.log(error)
                setLoading(false)
                setError(true);
            }
        }
        setTimeout(() => {
            fetchAnswers();
        }, 2000)
        return () => {
            isCanceled = true;
        }

    }, [videoId]);

    return {
        loading,
        error,
        answersList
    };

}
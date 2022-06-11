import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function useQuestions(videoId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    useEffect(() => {
        let isCanceled = false;
        const fetchQuestions = async () => {
            // database related works
            const db = getDatabase();

            const questionsRef = ref(db, "quiz/" + videoId + "/questions");
            const questionsQuery = query(questionsRef, orderByKey());
            try {
                setLoading(true);
                setError(false);
                // request firebase database

                const snapshot = await get(questionsQuery);
                // console.log(snapshot.val())
                setLoading(false);
                if (snapshot.exists()) {
                    if (!isCanceled) {
                        setQuestionList((prevQuestons) => {
                            return [...prevQuestons, ...Object.values(snapshot.val())]

                        });
                    }
                }

            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true);
            }
        }
        setTimeout(() => {
            fetchQuestions();
        }, 2000)
        return () => {
            isCanceled = true;
        }

    }, [videoId]);

    return {
        loading,
        error,
        questionList
    };

}
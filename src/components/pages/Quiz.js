
import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import useQuestions from '../../hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';


const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            if (action.value) {
                action.value.forEach((questions) => {
                    questions.options.forEach((options) => {
                        options.checked = false;
                    })
                });
            }
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            // console.log(questions)
            questions[action.questionID].options[action.optionIndex].checked = action.value
            return questions;
        default:
            return state;
    }

}
export default function Quiz() {
    const history = useHistory();
    const { location } = history;
    const { state } = location;
    const { videoTitle } = state;
    // console.log(location)
    const { id } = useParams();
    const [currentQueston, setCurrentQueston] = useState(0);
    const { loading, error, questionList } = useQuestions(id);
    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth();
    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questionList
        });
    }, [questionList])

    const handleChanged = (e, index) => {
        dispatch({
            type: 'answer',
            questionID: currentQueston,
            optionIndex: index,
            value: e.target.checked,

        })
    }

    // handle when user click the next buttons to get the next question
    const nextQuestion = () => {
        if (currentQueston + 1 < questionList.length) {
            setCurrentQueston((prev) => prev + 1)
        }

    }
    // when user clicks the previous button to get back to the previous question
    const prevQueston = () => {
        if (currentQueston >= 1 && currentQueston <= questionList.length) {
            setCurrentQueston((prev) => prev - 1)
        }
    }
    // claculate percentage of progress
    const percentage = questionList.length > 0 ? ((currentQueston + 1) / questionList.length) * 100 : 0;
    const handleSubmit = async () => {
        const { uid } = currentUser;
        // console.log(uid);
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna
        })
        history.push({
            pathname: `/result/${id}`,
            state: {
                qna,
            }

        })
    }
    return (
        <>
            {loading && <p>Loading........</p>}
            {error && <p>There was an error!</p>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQueston].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers input options={qna[currentQueston].options} handleChanged={handleChanged} />
                    <ProgressBar next={nextQuestion} prev={prevQueston} progress={percentage} submit={handleSubmit} />
                    <MiniPlayer videId={id} title={videoTitle} />
                </>
            )}
        </>
    );
}
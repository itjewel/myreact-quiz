import _ from 'lodash';
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
    const { id } = useParams()
    const { loading, error, answersList } = useAnswers(id);
    const { location } = useHistory()
    const { state } = location;
    const { qna } = state;
    function claculate() {
        let score = 0;
        answersList.forEach((questions, index1) => {
            // console.log(questions)
            let correctIndexes = [],
                checkedIndexes = [];
            questions.options.forEach((option, index2) => {
                // console.log(qna[index].options, 'jwel')

                if (option.correct) correctIndexes.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            })
            // console.log('correct', correctIndexes)
            // console.log('checked', checkedIndexes)
            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
            }
        })
        return score;
    }
    const userScore = claculate();
    // console.log(userScore)
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {answersList && answersList.length > 0 && (
                <>
                    <Summary score={userScore} noq={answersList.length} />
                    <Analysis answers={answersList} />
                </>
            )}
        </>
    );
}
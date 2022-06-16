import Answers from "./Answers";

export default function Questions({ answers = [] }) {

    return answers.map((answer, index) => (
        <div className="question" key={index}>
            <div className="qtitle">
                <span className="material-icons-outlined"> help_outline </span>
                {answer.title}
            </div>
            <Answers input={false} options={answer.options} />
        </div>
    ))
}
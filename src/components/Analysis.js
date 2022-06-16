import Questions from "./Questions";

export default function Analysis({ answers }) {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <Questions answers={answers} />

    </div>
  );
}
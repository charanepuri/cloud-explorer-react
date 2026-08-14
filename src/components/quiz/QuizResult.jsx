import {
  HiOutlineTrophy,
  HiOutlineArrowPath,
} from "react-icons/hi2";

import Button from "../common/Button";

import "./QuizResult.css";

function QuizResult({
  score,
  totalQuestions,
  onRestart,
}) {
  const percentage =
    Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) {
      return "Perfect score! You're a cloud expert!";
    }

    if (percentage >= 80) {
      return "Excellent work! You have a strong understanding of cloud computing.";
    }

    if (percentage >= 60) {
      return "Good job! Keep learning to strengthen your cloud knowledge.";
    }

    return "Keep learning! Review the service models and try again.";
  };

  return (
    <div className="quiz-result">

      <div className="result-icon">
        <HiOutlineTrophy />
      </div>

      <span className="result-label">
        Quiz Complete
      </span>

      <h2>Your Score</h2>

      <div className="result-score">
        {score}
        <span> / {totalQuestions}</span>
      </div>

      <div className="result-percentage">
        {percentage}%
      </div>

      <p>{getMessage()}</p>

      <Button onClick={onRestart}>
        <HiOutlineArrowPath />
        Try Again
      </Button>

    </div>
  );
}

export default QuizResult;
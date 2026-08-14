import "./QuizProgress.css";

function QuizProgress({
  currentQuestion,
  totalQuestions,
  score,
}) {
  const progress =
    (currentQuestion / totalQuestions) * 100;

  return (
    <div className="quiz-progress">

      <div className="quiz-progress-info">
        <span>
          Question {currentQuestion} of {totalQuestions}
        </span>

        <span>
          Score: {score}
        </span>
      </div>

      <div className="quiz-progress-track">
        <div
          className="quiz-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
}

export default QuizProgress;
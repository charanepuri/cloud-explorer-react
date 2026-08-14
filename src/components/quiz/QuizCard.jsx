import { useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

import Button from "../common/Button";

import "./QuizCard.css";

function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswer = (option) => {
    if (isSubmitted) {
      return;
    }

    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      return;
    }

    setIsSubmitted(true);

    onAnswer(selectedAnswer === question.answer);
  };

  const handleNext = () => {
    setSelectedAnswer("");
    setIsSubmitted(false);

    onNext();
  };

  const getOptionClass = (option) => {
    if (!isSubmitted) {
      return selectedAnswer === option
        ? "selected"
        : "";
    }

    if (option === question.answer) {
      return "correct";
    }

    if (
      option === selectedAnswer &&
      option !== question.answer
    ) {
      return "incorrect";
    }

    return "";
  };

  return (
    <div className="quiz-card">

      <div className="quiz-question-number">
        Question {questionNumber} / {totalQuestions}
      </div>

      <h2>{question.question}</h2>

      <div className="quiz-options">

        {question.options.map((option) => (
          <button
            key={option}
            type="button"
            className={`quiz-option ${getOptionClass(option)}`}
            onClick={() => handleAnswer(option)}
            disabled={isSubmitted}
          >
            <span className="option-radio">
              {isSubmitted &&
              option === question.answer ? (
                <HiOutlineCheckCircle />
              ) : isSubmitted &&
                option === selectedAnswer &&
                option !== question.answer ? (
                <HiOutlineXCircle />
              ) : null}
            </span>

            <span>{option}</span>
          </button>
        ))}

      </div>

      {isSubmitted && (
        <div
          className={`quiz-feedback ${
            selectedAnswer === question.answer
              ? "success"
              : "error"
          }`}
        >
          <strong>
            {selectedAnswer === question.answer
              ? "Correct!"
              : "Not quite!"}
          </strong>

          <p>{question.explanation}</p>
        </div>
      )}

      <div className="quiz-actions">

        {!isSubmitted ? (
          <Button
            onClick={handleSubmit}
          >
            Check Answer
          </Button>
        ) : (
          <Button
            onClick={handleNext}
          >
            {questionNumber === totalQuestions
              ? "View Results"
              : "Next Question"}

            <HiOutlineArrowRight />
          </Button>
        )}

      </div>

    </div>
  );
}

export default QuizCard;
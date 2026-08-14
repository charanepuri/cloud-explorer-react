import { useState } from "react";

import QuizHero from "../components/quiz/QuizHero";
import QuizProgress from "../components/quiz/QuizProgress";
import QuizCard from "../components/quiz/QuizCard";
import QuizResult from "../components/quiz/QuizResult";

import { quizQuestions } from "../data/cloudData";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] = useState(0);

  const [isFinished, setIsFinished] =
    useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (
      currentQuestion ===
      quizQuestions.length - 1
    ) {
      setIsFinished(true);
      return;
    }

    setCurrentQuestion(
      (previousQuestion) =>
        previousQuestion + 1
    );
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <main>
      <QuizHero />

      <section className="quiz-section">
        <div className="container">

          {!isFinished ? (
            <>
              <QuizProgress
                currentQuestion={currentQuestion + 1}
                totalQuestions={quizQuestions.length}
                score={score}
              />

              <QuizCard
                question={
                  quizQuestions[currentQuestion]
                }
                questionNumber={
                  currentQuestion + 1
                }
                totalQuestions={
                  quizQuestions.length
                }
                onAnswer={handleAnswer}
                onNext={handleNext}
              />
            </>
          ) : (
            <QuizResult
              score={score}
              totalQuestions={
                quizQuestions.length
              }
              onRestart={handleRestart}
            />
          )}

        </div>
      </section>
    </main>
  );
}

export default Quiz;
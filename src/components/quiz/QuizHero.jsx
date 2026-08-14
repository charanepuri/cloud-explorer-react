import { HiOutlineTrophy } from "react-icons/hi2";

import "./QuizHero.css";

function QuizHero() {
  return (
    <section className="quiz-hero">
      <div className="container quiz-hero-container">

        <div className="quiz-hero-content">

          <span className="quiz-label">
            Test Your Knowledge
          </span>

          <h1>
            How Well Do You
            <span> Know Cloud Computing?</span>
          </h1>

          <p>
            Test your understanding of IaaS, PaaS, and SaaS
            with this quick interactive quiz.
          </p>

        </div>

        <div className="quiz-hero-icon">
          <HiOutlineTrophy />
        </div>

      </div>
    </section>
  );
}

export default QuizHero;
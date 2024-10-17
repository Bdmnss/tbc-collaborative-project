import React from "react";

interface ResultProps {
  correctAnswers: number;
  totalQuestions: number;
  score: number;
}

const Result: React.FC<ResultProps> = ({
  correctAnswers,
  totalQuestions,
  score,
}) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>
        You answered {correctAnswers} out of {totalQuestions} questions
        correctly.
      </p>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Result;

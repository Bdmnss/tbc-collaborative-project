import { useState } from "react";
import { quiz } from "./data.ts";
import "./App.css";
import Question from "./components/Question.tsx";
import Result from "./components/Result.tsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const { name, questions } = quiz;
  const currentQuestionData = questions.find((q) => q.id === currentQuestion);

  const handleAnswer = (variantId: number, isCorrect: boolean) => {
    setSelectedAnswer(variantId);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      if (currentQuestionData?.score) {
        setScore(score + currentQuestionData.score);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  };

  const progressPercentage = (currentQuestion / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1>{name}</h1>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div>
        {currentQuestionData ? (
          <div>
            <h2 className="question">{currentQuestionData.name}</h2>
            <Question
              currentQuestionData={currentQuestionData}
              selectedAnswer={selectedAnswer}
              handleAnswer={handleAnswer}
            />
            <button onClick={handleNextQuestion}>Continue</button>
          </div>
        ) : (
          <Result
            correctAnswers={correctAnswers}
            totalQuestions={questions.length}
            score={score}
          />
        )}
      </div>
    </div>
  );
}

export default App;

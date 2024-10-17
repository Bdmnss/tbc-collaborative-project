import React from "react";

interface QuestionProps {
  currentQuestionData: {
    id: number;
    name: string;
    variants: { id: number; name: string; isCorrect: boolean }[];
  };
  selectedAnswer: number | null;
  handleAnswer: (variantId: number, isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({
  currentQuestionData,
  selectedAnswer,
  handleAnswer,
}) => {
  return (
    <div>
      {currentQuestionData.variants.map((variant) => (
        <div
          className={`variant ${
            selectedAnswer === null
              ? ""
              : variant.id === selectedAnswer
              ? variant.isCorrect
                ? "correct"
                : "incorrect"
              : "selected"
          }`}
          onClick={() =>
            selectedAnswer === null &&
            handleAnswer(variant.id, variant.isCorrect)
          }
          key={variant.id}
        >
          {variant.name}
        </div>
      ))}
    </div>
  );
};

export default Question;

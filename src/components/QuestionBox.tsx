import React from "react";
import { Answer, Question } from "../Questions";
import { AnswerButton } from "./AnswerButton";

interface Props {
  question: Question;
  lifesCount: number;
}

export const shuffleAnswers = (answers: Answer[]): Answer[] => {
  const a = answers;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const QuestionBox: React.FC<Props> = ({ question, lifesCount }) => {
  const renderAnswers = () => {
    return shuffleAnswers(question.answers).map((answer) => (
      <AnswerButton
        text={answer.answerText}
        isCorrect={answer.isCorrect}
        key={"a_" + answer.answerId}
      />
    ));
  };

  const renderLifes = () => {
    return "❤ ".repeat(lifesCount);
  };

  return (
    <div className="question-box">
      <div className="question-top">
        <p>Question #51</p>
        <p className="question-hp">{renderLifes()}</p>
      </div>
      <div className="question-inside-box">
        <h2 className="question-title">{question.questionText}</h2>
        <div className="answers-box">{renderAnswers()}</div>
      </div>
    </div>
  );
};

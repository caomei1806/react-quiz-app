import React from "react";
import { useDispatch } from "react-redux";
import { addGoodAnswer, addWrongAnswer } from "../store/QuizStore";

interface Props {
  text: string;
  isCorrect: boolean;
}

export const AnswerButton: React.FC<Props> = ({ text, isCorrect }) => {
  const dispatch = useDispatch();

  const chooseAnswer = () => {
    if (isCorrect) dispatch(addGoodAnswer());
    else dispatch(addWrongAnswer());
  };

  return (
    <div className="answer-button" onClick={chooseAnswer}>
      {text}
    </div>
  );
};

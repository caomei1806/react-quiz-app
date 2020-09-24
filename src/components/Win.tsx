import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Win: React.FC = () => {
  const goodAnswersCount = useSelector<RootState, number>(
    (state) => state.quiz.goodAnswersCount
  );

  return (
    <div className="game-win">
      <h1>YOU WON!!!</h1>
      <p>Good answers: {goodAnswersCount}</p>
    </div>
  );
};

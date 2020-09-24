import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const GameOver: React.FC = () => {
  const goodAnswersCount = useSelector<RootState, number>(
    (state) => state.quiz.goodAnswersCount
  );

  return (
    <div className="game-over">
      <h1>GAME OVER</h1>
      <p>Good answers: {goodAnswersCount}</p>
    </div>
  );
};

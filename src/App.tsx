import React from "react";
import { useSelector } from "react-redux";
import { GameOver } from "./components/GameOver";
import { QuestionBox } from "./components/QuestionBox";
import { Win } from "./components/Win";

import { initialQuestions as questions } from "./Questions";
import { RootState } from "./store";
import { QuizState } from "./store/QuizStore";

function App() {
  const quizState = useSelector<RootState, QuizState>((state) => state.quiz);

  const renderQuizBox = () => {
    if (quizState.questionIndex > questions.questions.length - 1) {
      return <Win />;
    } else {
      if (quizState.lifes > 0) {
        return (
          <QuestionBox
            question={questions.questions[quizState.questionIndex]}
            lifesCount={quizState.lifes}
          />
        );
      } else {
        return <GameOver />;
      }
    }
  };

  return <div className="app">{renderQuizBox()}</div>;
}

export default App;

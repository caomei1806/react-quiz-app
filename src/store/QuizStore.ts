// state type
export interface QuizState {
  questionIndex: number;
  lifes: number;
  goodAnswersCount: number;
  wrongAnswersCount: number;
}

// actions types
type AddGoodAnswerActionType = {
  type: "ADD_GOOD_ANSWER";
};

type AddWrongAnswerActionType = {
  type: "ADD_WRONG_ANSWER";
};

type QuizStoreActionsType = AddGoodAnswerActionType | AddWrongAnswerActionType;

// actions
export const addGoodAnswer = (): QuizStoreActionsType => ({
  type: "ADD_GOOD_ANSWER",
});
export const addWrongAnswer = (): QuizStoreActionsType => ({
  type: "ADD_WRONG_ANSWER",
});

// reducter
const initState: QuizState = {
  goodAnswersCount: 0,
  wrongAnswersCount: 0,
  lifes: 3,
  questionIndex: 0,
};

export const quizReducer = (
  state: QuizState = initState,
  action: QuizStoreActionsType
): QuizState => {
  switch (action.type) {
    case "ADD_GOOD_ANSWER":
      return {
        goodAnswersCount: state.goodAnswersCount + 1,
        wrongAnswersCount: state.wrongAnswersCount,
        lifes: state.lifes,
        questionIndex: state.questionIndex + 1,
      };
    case "ADD_WRONG_ANSWER":
      return {
        goodAnswersCount: state.goodAnswersCount,
        wrongAnswersCount: state.wrongAnswersCount + 1,
        lifes: state.lifes - 1,
        questionIndex: state.questionIndex + 1,
      };
    default:
      return state;
  }
};

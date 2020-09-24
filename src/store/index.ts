import { combineReducers } from "redux";
import { quizReducer } from "./QuizStore";

const reducers = {
  quiz: quizReducer,
};

export const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;

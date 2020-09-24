export interface Answer {
  answerId: number;
  answerText: string;
  isCorrect: boolean;
}

export interface Question {
  questionId: number;
  questionText: string;
  answers: Answer[];
}

export interface Questions {
  questions: Question[];
}

export const initialQuestions: Questions = {
  questions: [
    {
      questionId: 1,
      questionText: "Which country produces the most coffee in the world?",
      answers: [
        {
          answerId: 1,
          answerText: "Brazil",
          isCorrect: true,
        },
        {
          answerId: 2,
          answerText: "China",
          isCorrect: false,
        },
        {
          answerId: 3,
          answerText: "Poland",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 2,
      questionText: "What is the hottest continent on Earth",
      answers: [
        {
          answerId: 1,
          answerText: "Africa",
          isCorrect: true,
        },
        {
          answerId: 2,
          answerText: "Antarctica",
          isCorrect: false,
        },
        {
          answerId: 3,
          answerText: "Poland",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 3,
      questionText: "What is the national dish of Spain?",
      answers: [
        {
          answerId: 1,
          answerText: "Paella",
          isCorrect: true,
        },
        {
          answerId: 2,
          answerText: "Polish Pierogi",
          isCorrect: false,
        },
        {
          answerId: 3,
          answerText: "Spaghetti",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 4,
      questionText: "Which kind of alcohol is Russia is notoriously known for?",
      answers: [
        {
          answerId: 1,
          answerText: "Whisky",
          isCorrect: false,
        },
        {
          answerId: 2,
          answerText: "Vodka",
          isCorrect: true,
        },
        {
          answerId: 3,
          answerText: "Polish Beer",
          isCorrect: false,
        },
      ],
    },
    {
      questionId: 5,
      questionText: "Which animal can be seen on the Porsche logo?",
      answers: [
        {
          answerId: 1,
          answerText: "Horse",
          isCorrect: true,
        },
        {
          answerId: 2,
          answerText: "Polish Bear",
          isCorrect: false,
        },
        {
          answerId: 3,
          answerText: "Goose",
          isCorrect: false,
        },
      ],
    },
  ],
};

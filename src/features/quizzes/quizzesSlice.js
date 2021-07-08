import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const addQuizzes = (quiz) => {
  return (dispatch) => {
    const { id, topicId } = quiz;
    dispatch(addQuiz(quiz));
    dispatch(
      addQuizIdForTopic({
        quizId: id,
        topicId: topicId
      })
    );
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

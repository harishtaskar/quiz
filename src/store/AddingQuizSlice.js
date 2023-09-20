import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizName: undefined,
  quizQuestions: [],
};

const AddingQuizSlice = createSlice({
  name: "addingquiz",
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quizName = action.payload.quizName;
      state.quizQuestions.push(action.payload.quizQuestions);
    },
    resetQuiz(state) {
      state.quizName = undefined;
      state.quizQuestions = [];
    },
  },
});

export const addingQuizActions = AddingQuizSlice.actions;
export default AddingQuizSlice;

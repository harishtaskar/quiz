import { configureStore } from "@reduxjs/toolkit";
import AddingQuizSlice from "./AddingQuizSlice";

const store = configureStore({
  reducer: AddingQuizSlice,
});

export default store;

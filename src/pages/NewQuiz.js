import React from "react";
import AddQuiz from "../components/AddQuiz";
import QuizList from "../components/QuizList";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import DummyData from "../DummyData.json";
import "../index.css";

const NewQuiz = () => {
  const quizData = useSelector((state) => state.reducer);
  const data = { quizName: "Javascript Quiz", quizQuestions: DummyData };
  const addDataToFirestore = async () => {
    try {
      // Reference a Firestore collection and add the data
      await db.collection("Quizzes").add(data);
      console.log("Data added to Firestore");
    } catch (error) {
      console.error("Error adding data to Firestore: ", error);
    }
  };

  const submitQuizHandler = () => {
    console.log(quizData);
    addDataToFirestore();
  };
  return (
    <>
      <AddQuiz submitQuiz={submitQuizHandler} />
      <QuizList />
    </>
  );
};

export default NewQuiz;

import React, { useState } from "react";
import classes from "./Quizzes.module.css";
import Question from "../components/Question";
import { useLoaderData } from "react-router-dom";
import { db } from "../firebase";

const Quizzes = () => {
  const data = useLoaderData();
  console.log(data);
  const [score, setScore] = useState(0);
  const addScoreHandler = (data) => {
    setScore((prev) => prev + data);
  };
  return (
    <>
      <div className={classes.quiztitle}>{data.quizName}</div>
      <div className={classes.score}>
        Your Score: {score} / {data.quizQuestions.length}
      </div>
      <div className={classes.listcontainer}>
        <ul className={classes.list}>
          {data.quizQuestions.map((item, index) => {
            return (
              <li key={index}>
                <Question
                  index={index}
                  question={item.question}
                  options={item.options}
                  answer={item.answer}
                  addScore={addScoreHandler}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Quizzes;

export async function loader({ request, params }) {
  const param = params.quizId;
  console.log(param);
  let data = undefined;
  try {
    const collectionRef = db.collection("Quizzes");
    const snapshot = await collectionRef.get();
    if (snapshot.empty) {
      console.log("No documents found in the collection.");
      return;
    }
    snapshot.forEach((doc) => {
      if (doc.id === param) {
        data = doc.data();
      }
    });
  } catch (error) {
    console.error("Error fetching data from Firestore: ", error);
  }
  return data;
}

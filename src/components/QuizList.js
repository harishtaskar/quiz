import React from "react";
import classes from "./QuizList.module.css";
import Container from "../UI/Container";
import { useSelector } from "react-redux";

const QuizList = () => {
  const quizData = useSelector((state) => state.reducer);
  const Data = quizData.quizQuestions;
  return (
    <div className={classes.listcontainer}>
      <ul className={classes.list}>
        {Data?.map((item, index) => {
          return (
            <li key={index}>
              <Container>
                <h4 className={classes.h4}>{`${index + 1}) ${
                  item.question
                }`}</h4>
                <div className={classes.footer}>
                  <ul className={classes.options}>
                    {item.options.map((item, index) => {
                      return (
                        <li key={index} className={classes.listItem}>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div>Answer: {item.answer}</div>
                </div>
              </Container>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizList;

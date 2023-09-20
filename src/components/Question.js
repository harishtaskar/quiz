import React, { useState } from "react";
import classes from "./Question.module.css";
import Container from "../UI/Container";
import Options from "./Options";

const Question = (props) => {
  const [result, setResult] = useState(undefined);
  const [answer, setAnswer] = useState();

  const checkResult = (data) => {
    if (data === props.answer) {
      setResult(true);
      setAnswer(data);
      props.addScore(1);
    } else {
      setResult(false);
      setAnswer(`wrong`);
    }
  };

  return (
    <Container result={result}>
      <span>Question: {props.index + 1}</span>
      <h4>{props.question}</h4>
      <div className={classes.footer}>
        <Options
          options={props.options}
          clickedOption={checkResult}
          afterAnswer={answer}
          result={result}
        />
        {result !== undefined ? (
          <div className={classes.result}>
            {result ? `Correct Answer` : `Wrong Answer`}
            {!result && <span>right answer is: {props.answer}</span>}
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Question;

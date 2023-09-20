import React, { useState } from "react";
import classes from "./Options.module.css";

const Options = (props) => {
  const [styleA, setStyleA] = useState(undefined);
  const [styleB, setStyleB] = useState(undefined);
  const [styleC, setStyleC] = useState(undefined);
  const [styleD, setStyleD] = useState(undefined);

  const onclickHandlerA = (e) => {
    e.preventDefault();
    props.clickedOption(props.options[0]);
    setStyleA(`wrong`);
  };
  const onclickHandlerB = (e) => {
    e.preventDefault();
    props.clickedOption(props.options[1]);
    setStyleB(`wrong`);
  };
  const onclickHandlerC = (e) => {
    e.preventDefault();
    props.clickedOption(props.options[2]);
    setStyleC(`wrong`);
  };
  const onclickHandlerD = (e) => {
    e.preventDefault();
    props.clickedOption(props.options[3]);
    setStyleD(`wrong`);
  };
  return (
    <>
      <ul className={classes.options}>
        <li>
          <button
            disabled={props.result !== undefined}
            className={classes[styleA]}
            onClick={onclickHandlerA}
            style={
              props.afterAnswer !== undefined
                ? props.afterAnswer === props.options[0]
                  ? { backgroundColor: `rgba(154, 255, 167, 0.8)` }
                  : undefined
                : undefined
            }
          >
            A. {props.options[0]}
          </button>
        </li>
        <li>
          <button
            disabled={props.result !== undefined}
            className={classes[styleB]}
            onClick={onclickHandlerB}
            style={
              props.afterAnswer !== undefined
                ? props.afterAnswer === props.options[1]
                  ? { backgroundColor: `rgba(154, 255, 167, 0.8)` }
                  : undefined
                : undefined
            }
          >
            B. {props.options[1]}
          </button>
        </li>
        <li>
          <button
            disabled={props.result !== undefined}
            className={classes[styleC]}
            onClick={onclickHandlerC}
            style={
              props.afterAnswer !== undefined
                ? props.afterAnswer === props.options[2]
                  ? { backgroundColor: `rgba(154, 255, 167, 0.8)` }
                  : undefined
                : undefined
            }
          >
            C. {props.options[2]}
          </button>
        </li>
        <li>
          <button
            disabled={props.result !== undefined}
            className={classes[styleD]}
            onClick={onclickHandlerD}
            style={
              props.afterAnswer !== undefined
                ? props.afterAnswer === props.options[3]
                  ? { backgroundColor: `rgba(154, 255, 167, 0.8)` }
                  : undefined
                : undefined
            }
          >
            D. {props.options[3]}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Options;

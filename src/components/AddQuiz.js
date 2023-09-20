import React, { useState } from "react";
import classes from "./AddQuiz.module.css";
import { useDispatch } from "react-redux";
import { addingQuizActions } from "../store/AddingQuizSlice";

const AddQuiz = (props) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const dispatch = useDispatch();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    setCorrectAnswer(newOptions.length > 1 ? newOptions[0] : newOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    dispatch(
      addingQuizActions.addQuiz({
        quizName: quizTitle,
        quizQuestions: {
          question: question,
          options: options,
          answer: correctAnswer,
        },
      })
    );
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  const submitQuizHandler = (e) => {
    props.submitQuiz();
    setQuizTitle("");
    dispatch(addingQuizActions.resetQuiz());
  };

  return (
    <form onSubmit={handleSubmit} className={classes[`quiz-form`]}>
      <h1>New Quiz</h1>
      <input
        required
        placeholder="Quiz title"
        type="text"
        id="quizTitle"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <label htmlFor="question">Question</label>
      <textarea
        required
        type="text"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <label htmlFor="question">Options</label>
      <div className={classes.options}>
        {options.map((option, index) => (
          <input
            required={true}
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        ))}
      </div>
      <label htmlFor="correctAnswer">Correct Answer</label>
      <select
        id="correctAnswer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={classes.buttons}>
        <button className={classes.button} type="submit">
          Add Question
        </button>
        <button className={classes.button} onClick={submitQuizHandler}>
          Submit Quiz
        </button>
      </div>
    </form>
  );
};

export default AddQuiz;

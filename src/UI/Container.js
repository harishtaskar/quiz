import classes from "./Container.module.css";

const Container = (props) => {
  const styleTrue = {
    backgroundColor: `rgba(154, 255, 167, 0.4)`,
  };
  const stylefalse = {
    backgroundColor: `rgba(255, 109, 109, 0.40)`,
  };
  return (
    <div
      className={classes.container}
      style={
        props.result !== undefined
          ? props.result
            ? styleTrue
            : stylefalse
          : undefined
      }
    >
      {props.children}
    </div>
  );
};

export default Container;

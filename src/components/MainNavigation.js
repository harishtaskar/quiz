import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              end
            >
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="creatingquiz">
        <button>Create Quiz</button>
      </Link>
    </header>
  );
};

export default MainNavigation;

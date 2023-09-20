import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  return (
    <div className="page">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;

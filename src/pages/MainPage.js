import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <BasicLayout>
      <div className="text-3xl">
        MainPage<Link to={"/about"}>About</Link>
      </div>
    </BasicLayout>
  );
};

export default MainPage;

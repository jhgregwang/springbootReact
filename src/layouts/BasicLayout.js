import "../index.css";
import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({ children }) => {
  //리액트에서는  return문에  하나의 태그로 감싸야 한다
  //Component는 대문자로 시작해야 한다
  // div를 태그를 추가하면 불필요한 것이 들어가는거다
  //Fragment를 제공한다   <></>
  return (
    <>
      {/* 기존헤더대신BasicMenu*/}
      <BasicMenu />
      {/* 상단여백my-5 제거*/}
      <div className="bg-white w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {/* 상단여백py-40 변경flex 제거*/}
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-5">
          {children}
        </main>
        {/* 상단여백py-40 변경flex 제거*/}
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 flex py-5">
          <h1 className="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
      </div>
    </>
  );
};

export default BasicLayout;

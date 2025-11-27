import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.css";
import { ThemeContext } from "./context/ThemeContext";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from "react-toastify";
import EditTodo from "./components/EditTodo";

const App = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } w-full px-6 md:px-8 lg:px-12 xl:px-20 bg-[var(--bg-primary)] text-[var(--text-primary)]`}
    >
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TodoForm />} />
        <Route path="/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default App;

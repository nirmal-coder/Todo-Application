import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

const AddTodoIcon = () => {
  return (
    <Link
      to="/add"
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 bg-blue-600 hover:bg-blue-700 text-white rounded-[50%] transition-all duration-75 p-5 cursor-pointer hover:scale-110 active:scale-90"
    >
      <FaPlus />
    </Link>
  );
};

export default AddTodoIcon;

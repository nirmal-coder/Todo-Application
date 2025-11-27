import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";

const EmptySearch = ({ searchTerm }) => {
  const { setSearch } = useContext(TodoContext);
  return (
    <div
      className="flex flex-col mt-20 max-w-[400px] mx-auto items-center justify-center h-full text-center p-6 rounded-xl shadow-lg
      bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div
        className="text-6xl mb-4
        text-purple-400 dark:text-purple-300 animate-pulse"
      >
        <FaSearch />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-100">
        No results found
      </h2>

      <p className="text-gray-500 dark:text-gray-300 mb-4">
        We couldn’t find any todos matching{" "}
        <span className="font-semibold text-purple-500 dark:text-purple-400">
          "{searchTerm}"
        </span>
        .
      </p>

      <button
        onClick={() => setSearch("")}
        className="bg-purple-500 dark:bg-purple-600 text-white px-6 py-2 rounded-full
          hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors shadow-md"
      >
        Clear Search
      </button>

      <div className="mt-6 text-purple-300 dark:text-purple-400 animate-bounce">
        ✨
      </div>
    </div>
  );
};

export default EmptySearch;

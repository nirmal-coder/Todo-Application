import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

const EmptyTodoState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      {/* Illustration / Emoji */}
      <div className="text-6xl mb-4 animate-bounce">📝</div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Your list is empty
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
        You're all caught up! Add your first task and take one step toward a
        productive day.
      </p>

      {/* CTA Button */}
      <Link
        to="/add"
        className="mt-6 flex items-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-full shadow-md hover:bg-blue-700 active:scale-95 transition-all"
      >
        <FaPlus />
        Add Your First Todo
      </Link>
    </div>
  );
};

export default EmptyTodoState;

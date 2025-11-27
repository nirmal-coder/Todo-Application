import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router";

const EmptyCategory = ({ category }) => {
  return (
    <div
      className="flex flex-col mt-20 max-w-[400px] mx-auto items-center justify-center text-center p-6 rounded-xl shadow-md
      bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 h-full animate-fadeIn"
    >
      <div className="text-6xl mb-4 text-yellow-500 dark:text-yellow-300 animate-bounce">
        <FaFolderOpen />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-2">
        No tasks in this category
      </h2>

      <p className="text-gray-500 dark:text-gray-300 max-w-md mb-4">
        You don’t have any todos under{" "}
        <span className="font-semibold text-yellow-600 dark:text-yellow-400">
          "{category}"
        </span>
        . Add one to get started!
      </p>

      <Link
        to="/add"
        className="px-5 py-2 rounded-full bg-yellow-500 text-white dark:bg-yellow-600
          hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-all shadow-md"
      >
        Add New Task
      </Link>

      <div className="mt-6 text-yellow-300 dark:text-yellow-400 animate-pulse">
        📁
      </div>
    </div>
  );
};

export default EmptyCategory;

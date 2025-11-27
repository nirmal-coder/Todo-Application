import { FaClipboardCheck } from "react-icons/fa";

const EmptyCompleted = () => {
  return (
    <div
      className="flex flex-col mt-20 max-w-[400px] mx-auto items-center justify-center text-center p-6 rounded-xl shadow-md
      bg-gradient-to-br from-green-100 to-teal-100 dark:from-gray-800 dark:to-gray-900 h-full animate-fadeIn"
    >
      <div className="text-6xl mb-4 text-green-500 dark:text-green-300 animate-pulse">
        <FaClipboardCheck />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-2">
        No completed tasks yet
      </h2>

      <p className="text-gray-500 dark:text-gray-300 max-w-md">
        Finish a task to see it appear here. Keep going — you’re getting closer!
      </p>

      <div className="mt-6 text-green-300 dark:text-green-400 animate-bounce">
        🌱
      </div>
    </div>
  );
};

export default EmptyCompleted;

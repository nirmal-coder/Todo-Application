import { FaRegSmileBeam } from "react-icons/fa";

const EmptyActive = () => {
  return (
    <div
      className="flex flex-col mt-20 max-w-[400px] mx-auto items-center justify-center text-center p-6 rounded-xl shadow-md
      bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 h-full animate-fadeIn"
    >
      <div className="text-6xl mb-4 text-blue-500 dark:text-blue-300 animate-bounce">
        <FaRegSmileBeam />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-2">
        All tasks are completed 🎉
      </h2>

      <p className="text-gray-500 dark:text-gray-300 max-w-md">
        You don’t have any active tasks left. Great job staying productive!
      </p>

      <div className="mt-6 text-blue-300 dark:text-blue-400 animate-pulse">
        ✨
      </div>
    </div>
  );
};

export default EmptyActive;

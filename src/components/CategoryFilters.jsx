import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { todoCategories } from "../utils/uiConfig";

const CategoryFilters = () => {
  const { category, setCategory, todoList } = useContext(TodoContext);

  const handleClick = (id) => {
    setCategory(id);
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4 flex-wrap">
        {todoCategories.map((each) => (
          <div
            className={`font-semibold py-1 px-4 cursor-pointer flex justify-center items-center transition-all duration-150 rounded-full
                ${
                  each.id === category
                    ? "bg-blue-500 text-white border border-blue-900"
                    : "bg-gray-100 dark:bg-gray-600 text-[var(--text-secondary)]"
                }
              `}
            onClick={() => handleClick(each.id)}
            key={each.id}
          >
            <p className="text-sm">{each.label}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setCategory("")} className="text-blue-500">
          Clear filter
        </button>
      </div>
    </div>
  );
};

export default CategoryFilters;

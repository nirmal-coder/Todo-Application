import React, { useContext } from "react";
import EmptyTodoState from "./EmptyTodoState ";
import { TodoContext } from "../context/TodoContext";
import useTodo from "../hooks/useTodo";
import EmptySearch from "./EmptySearch";
import EmptyCompleted from "./EmptyCompleted";
import EmptyActive from "./EmptyActive";
import EmptyCategory from "./EmptyCategory";
import formatDueDate from "../utils/dateFormat";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { todoCategories } from "../utils/uiConfig";
import { Link } from "react-router";

const TodoItem = () => {
  const { filteredList, todoList, tabs, search, category } =
    useContext(TodoContext);
  const { ToggleIsCompleted, deleteTodo } = useTodo();

  if (todoList.length === 0 && tabs === "all") {
    return <EmptyTodoState />;
  }
  if (filteredList.length === 0 && category !== "" && search === "") {
    return <EmptyCategory category={category} />;
  }
  if (filteredList.length === 0 && search !== "") {
    return <EmptySearch />;
  }
  if (filteredList.length === 0 && tabs === "completed") {
    return <EmptyCompleted />;
  }
  if (filteredList.length === 0 && tabs === "active") {
    return <EmptyActive />;
  }

  return (
    <div className="">
      {filteredList.map((each) => {
        const {
          id,
          title,

          category,
          isCompleted,
          dueDate,
          createdAt,
        } = each;
        console.log("createdAt", createdAt);
        return (
          <div
            key={id}
            className={`p-4 pl-8 my-6 rounded-sm sm:rounded-[999px] flex items-center gap-6
                transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                  isCompleted
                    ? "bg-[var(--bg-tertiary)]"
                    : "bg-[var(--bg-secondary)]"
                }`}
          >
            <div>
              <input
                className={`w-4 h-4 ${isCompleted && "accent-blue-200"}`}
                type="checkbox"
                checked={isCompleted}
                name=""
                id={id}
                onChange={() => {
                  ToggleIsCompleted(id);
                }}
              />
            </div>
            <div>
              <h3
                className={`font-semibold capitalize ${
                  isCompleted
                    ? "text-gray-400 line-through"
                    : "text-[var(--text-primary)] decoration-0"
                }`}
              >
                {title}
              </h3>

              <div
                className={`flex flex-col text-left md:flex-row items-start md:items-center gap-x-4 gap-y-3 mt-2 text-sm my-2 ${
                  isCompleted ? "text-[var(--text-tertiary)]" : ""
                }`}
              >
                <p
                  className={`${
                    isCompleted ? "bg-gray-100 text-gray-500" : ""
                  } py-0.5 px-2 flex text-xs rounded-[99px]  border`}
                  style={
                    !isCompleted
                      ? {
                          color: category.color,
                          backgroundColor: category.bgColor,
                        }
                      : {}
                  }
                >
                  {category.label}
                </p>
                <p>Due : {formatDueDate(dueDate, "dueDate")}</p>
              </div>

              <p className="text-[var(--text-tertiary)] text-sm">
                createdAt : {formatDueDate(createdAt, "createdAt")}
              </p>
            </div>
            <div className="flex gap-x-4 items-center ml-auto mr-6 md:hidden">
              <Link
                to={"/edit"}
                state={each}
                className={`${
                  isCompleted ? "text-gray-300" : "text-gray-500"
                } text-xl`}
                title="Edit"
              >
                <FiEdit />
              </Link>
              <button
                className={`text-xl ${
                  isCompleted ? "text-red-300" : "text-red-500"
                }`}
                title="Delete"
                onClick={() => deleteTodo(each.id)}
              >
                <MdDelete />
              </button>
            </div>
            <div className="hidden gap-x-4 items-center ml-auto mr-6 md:flex">
              <Link
                state={each}
                to="/edit"
                className={`flex items-center gap-x-2  transition-all duration-75 text-sm py-1 px-4 rounded ${
                  isCompleted
                    ? "bg-gray-300 text-white hover:bg-gray-200"
                    : "bg-gray-400 text-white hover:bg-gray-500"
                }`}
                title="Edit"
              >
                <FiEdit /> Edit
              </Link>
              <button
                className={`flex items-center gap-x-2 transition-all duration-75 text-sm py-1 px-4 rounded ${
                  isCompleted
                    ? "bg-red-400 text-white hover:bg-red-400 "
                    : "bg-red-600 text-white hover:bg-red-700 "
                }`}
                title="Delete"
                onClick={() => deleteTodo(each.id)}
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;

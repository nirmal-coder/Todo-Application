import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { todoCategories } from "../utils/uiConfig";

const useTodo = () => {
  // add to list
  // update the list
  // delete the list
  // filtering
  const { todoList, setTodoList } = useContext(TodoContext);
  const navigate = useNavigate();

  const addToTodos = (data) => {
    console.log(data);
    const getCate = todoCategories.find((each) => each.id === data.category);
    const obj = {
      ...data,
      createdAt: new Date(),
      isCompleted: false,
      id: uuidv4(),
      category: getCate,
    };
    setTodoList((prev) => [...prev, obj]);
    toast.success("Added to Todo's");
    navigate("/");
  };

  const ToggleIsCompleted = (id) => {
    setTodoList((prev) =>
      prev.map((each) => {
        if (each.id === id) {
          return { ...each, isCompleted: !each.isCompleted };
        }
        return each;
      })
    );
  };

  const editTodo = (id, obj) => {
    const getCate = todoCategories.find((each) => each.id === obj.category);

    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...obj,
            category: getCate,
          };
        }
        return todo;
      })
    );

    toast.success("Saved Changes!");
    navigate("/");
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((each) => each.id !== id));
    toast.error("Todo Deleted!");
  };

  return { addToTodos, ToggleIsCompleted, deleteTodo, editTodo };
};

export default useTodo;

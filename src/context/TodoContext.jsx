import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      return [];
    }
  });

  const [filteredList, setFilteredList] = useState([]);
  console.log(filteredList);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [tabs, setTabs] = useState("all");

  const handleFilter = () => {
    // Start with the full todo list
    let todos = [...todoList];

    // Apply search filter
    if (search.trim() !== "") {
      todos = todos.filter((each) =>
        each.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category !== "") {
      todos = todos.filter((each) => each.category.id === category);
    }

    // Apply status filter
    if (tabs !== "") {
      if (tabs === "active") {
        todos = todos.filter((each) => !each.isCompleted);
      } else if (tabs === "completed") {
        todos = todos.filter((each) => each.isCompleted);
      }
    }

    // Update the filtered list
    setFilteredList(todos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    handleFilter();
  }, [todoList, search, tabs, category]);

  const values = {
    todoList,
    setTodoList,
    filteredList,
    setFilteredList,
    search,
    setSearch,
    category,
    setCategory,
    tabs,
    setTabs,
  };
  return (
    <TodoContext.Provider value={{ ...values }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

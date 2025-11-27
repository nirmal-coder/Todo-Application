import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "./ThemeContext";

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
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { setIsDark } = useContext(ThemeContext);

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

  const focusSearch = () => {
    searchRef.current?.focus();
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "n") {
        e.preventDefault();
        e.stopPropagation();
        navigate("/add");
      }

      if (e.ctrlKey && e.key === "d") {
        e.preventDefault();
        e.stopPropagation();
        setIsDark((prev) => !prev);
      }

      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        focusSearch();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

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
    searchRef,
  };
  return (
    <TodoContext.Provider value={{ ...values }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

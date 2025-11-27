import React from "react";
import Searchbar from "../components/Searchbar";
import Tabs from "../components/Tabs";
import CategoryFilters from "../components/CategoryFilters";
import TodoItem from "../components/TodoItem";
import AddTodoIcon from "../components/AddTodoIcon";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="max-w-[1100px] min-h-screen mx-auto">
      <Header />
      <Searchbar style={"md:hidden my-4 max-w-[500px]"} />

      <Tabs />
      <CategoryFilters />
      <TodoItem />
      <AddTodoIcon />
    </div>
  );
};

export default Home;

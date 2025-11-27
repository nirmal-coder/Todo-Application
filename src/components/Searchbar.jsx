import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Searchbar = ({ style }) => {
  const { setSearch, search, searchRef } = useContext(TodoContext);
  return (
    <div
      className={`w-full h-10 bg-gray-100 dark:bg-gray-800 rounded-sm text-black dark:text-gray-300 ${style}`}
    >
      <input
        type="search"
        name=""
        value={search}
        id=""
        ref={searchRef}
        className="w-full h-full pl-2 border-none outline-none"
        placeholder="Search todo's..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;

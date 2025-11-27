import React, { useContext } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import Searchbar from "./Searchbar";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div
      className={`w-full max-w-[1100px] mx-auto py-4 md:py-6 text-center flex justify-between items-center bg-[var(--background-primary)] border-b border-gray-300`}
    >
      <h1 className="flex items-center gap-x-3 font-bold text-lg md:text-2xl">
        <MdOutlineTaskAlt className="text-blue-500" />
        Clarity Todo's
      </h1>

      <div className="flex justify-end items-center gap-x-4 w-5/12">
        <Searchbar style={"hidden md:block"} />
        <button
          className="text-2xl md:3xl cursor-pointer -mb-1"
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Header;

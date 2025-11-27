import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Tabs = () => {
  const { tabs, setTabs } = useContext(TodoContext);
  const uiConfig = ["all", "active", "completed"];
  return (
    <div className="flex items-center gap-x-4 my-4 md:my-6 border-b-[2px] border-gray-100 text-[var(--text-secondary)]">
      {uiConfig.map((each) => (
        <div
          onClick={() => setTabs(each)}
          key={each}
          className="cursor-pointer transition-all duration-150"
        >
          <p
            className={`mb-2 capitalize ${
              tabs === each ? "font-semibold" : "mb-3"
            }`}
          >
            {each}
          </p>
          {tabs === each && (
            <hr className="bg-blue-500 h-1 rounded-2xl border-0 relative top-0.5" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

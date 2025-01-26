import React, { useState } from "react";
import { Tab } from "../utils/types";
import ToolMenu from "./ToolMenu";

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 1,
      label: "Query 1",
    },
  ]);

  const [activeTab, setActiveTab] = useState<number | null>(
    tabs[0]?.id || null
  );

  const closeTab = (id: number): void => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    if (activeTab === id && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0]?.id || null);
    } else if (updatedTabs.length === 0) {
      setActiveTab(null);
    }
  };

  const addNewTab = () => {
    const newTabId = tabs.length > 0 ? tabs[tabs.length - 1].id + 1 : 1;
    const newTab = {
      id: newTabId,
      label: `Query ${newTabId}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
  };

  return (
    <>
      {/* Tabs Header */}
      <div className="flex flex-start bg-gray-100">
        <div className="flex items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center gap-5 px-2 py-1 cursor-pointer border-r border-rl-2 border-rl-white ${
                activeTab === tab.id
                  ? "text-white bg-indigo-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-1">
                <span>{tab.label}</span>
              </div>
              {activeTab === tab.id && (
                <button
                  className="text-gray-100 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering tab switch
                    closeTab(tab.id);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="bg-gray-400 text-white cursor-pointer"
          onClick={() => addNewTab()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* Tab Content */}
      <ToolMenu />
      {/* {tabs.length > 0 && activeTab !== null ? (
        <div className="bg-white">
          <h1 className="text-2xl font-bold text-gray-800">
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </h1>
        </div>
      ) : (
        <p className="text-gray-500">No tabs available.</p>
      )} */}
    </>
  );
};

export default Tabs;

import React, { useState } from "react";
import Drawer from "./Drawer";
import { DatabaseConnection } from "../utils/types";

interface Tab {
  id: number;
  label: string;
  description: string;
}

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 1,
      label: "Connection 1 - (DB Name)",
      description: "Details for Connection 1",
    },
    {
      id: 2,
      label: "Connection 2 - (DB Name)",
      description: "Details for Connection 2",
    },
  ]);

  const [activeTab, setActiveTab] = useState<number | null>(
    tabs[0]?.id || null
  );

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const closeTab = (id: number): void => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    if (activeTab === id && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0]?.id || null);
    } else if (updatedTabs.length === 0) {
      setActiveTab(null);
    }
  };

  const addNewTab = (obj: DatabaseConnection) => {
    setDrawerOpen(false);
    if (obj && obj.dbName) {
      const newTabId = tabs.length > 0 ? tabs[tabs.length - 1].id + 1 : 1;
      setTabs([
        ...tabs,
        {
          id: newTabId,
          label: `Connection ${newTabId} - (${obj.dbName})`,
          description: `Details for Connection ${newTabId}`,
        },
      ]);
      setActiveTab(newTabId);
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={(value) => addNewTab(value)}
      ></Drawer>

      {/* Tabs Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-gray-100 gap-1 flex-grow">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center gap-5 bg-gray-200 px-4 py-2 cursor-pointer border-rl-1 border-b border-gray-100 ${
                activeTab === tab.id
                  ? "text-yellow-600 border-b border-white bg-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <span>{tab.label}</span>
              </div>
              <button
                className="text-gray-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering tab switch
                  closeTab(tab.id);
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-yellow-500 text-white px-4 py-2 cursor-pointer flex items-center gap-1"
          onClick={() => setDrawerOpen(true)}
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
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Add New Connection
        </button>
      </div>

      {/* Tab Content */}
      {tabs.length > 0 && activeTab !== null ? (
        <div className="bg-white">
          <h1 className="text-2xl font-bold text-gray-800">
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </h1>
          <p className="text-gray-500">
            {tabs.find((tab) => tab.id === activeTab)?.description}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No tabs available.</p>
      )}
    </>
  );
};

export default Tabs;

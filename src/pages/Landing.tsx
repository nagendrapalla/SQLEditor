"use client";
import Tabs from "../components/Tabs";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { DatabaseConnection } from "../utils/types";
import Drawer from "../components/Drawer";
import { useState } from "react";
import ToolMenu from "../components/ToolMenu";
import AceSqlEditor from "../components/AceSqlEditor";
import { format } from "sql-formatter";
import { FileDownIcon } from "lucide-react";
import CondensedTable from "../components/CondensedTable";

const teams = [
  { id: 1, name: "Heroicons", href: "#", current: true },
  { id: 2, name: "Tailwind Labs", href: "#", current: false },
  { id: 3, name: "Workcation", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Landing() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [sqlQueries, setSqlQueries] = useState<{ [key: number]: string }>({});

  const addNewConnection = (obj: DatabaseConnection) => {
    setDrawerOpen(false);
    if (obj && obj.dbName) {
      teams.push({
        id: 3,
        name: obj.dbName,
        href: "#",
        current: false,
      });
    }
  };

  const handleOnSQLChange = (newQuery: string) => {
    setSqlQueries((prevQueries) => ({
      ...prevQueries,
      [activeTab]: newQuery,
    }));
  };

  const handleCloseTab = (id: number) => {
    const newQueries = { ...sqlQueries };
    delete newQueries[id];
    setSqlQueries(newQueries);
  };

  const handleRun = () => {};

  const handleSave = () => {
    const blob = new Blob([sqlQueries[activeTab]], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `query_${activeTab}.sql`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const formatQuery = () => {
    const formattedQuery = format(sqlQueries[activeTab] || "");
    setSqlQueries((prevQueries) => ({
      ...prevQueries,
      [activeTab]: formattedQuery,
    }));
  };

  const onTabChange = (tabId: number) => {
    setSqlQueries((prevQueries) => ({
      ...prevQueries,
      [tabId]: prevQueries[tabId] || "",
    }));
    setActiveTab(tabId);
  };

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={(value) => addNewConnection(value)}
      ></Drawer>

      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col border-r border-gray-200 bg-white-900">
            {/* <div className="flex p-2 px-5 shrink-0 items-center flex-col">
              <img alt="Your Company" src={logo} className="w-auto" />
            </div> */}
            <nav className="flex flex-1 flex-col ">
              <ul role="list" className="flex flex-1 flex-col mt-2">
                <li>
                  <div className="text-xs px-2 font-semibold text-gray-400 flex justify-between">
                    <span>Database Connections</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => setDrawerOpen(true)}
                    >
                      <PlusCircleIcon className="size-5 text-gray-700 stroke-2" />
                    </span>
                  </div>
                  <ul role="list" className="mt-2 space-y-1">
                    {teams.map((team) => (
                      <li
                        key={team.name}
                        className={classNames(
                          team.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-500",
                          "group p-1 text-sm/6 font-semibold flex justify-between items-center"
                        )}
                      >
                        <a href={team.href} className="flex gap-x-3">
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
                          <span className="truncate">{team.name}</span>
                        </a>
                        <div className="flex gap-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200"
                  >
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Nagendra Palla</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="lg:pl-72">
          <Tabs
            key="query-tabs"
            onCloseTab={handleCloseTab}
            onTabChange={onTabChange}
          />
          <ToolMenu
            key="tools_menu"
            onFormat={formatQuery}
            onRun={handleRun}
            onSave={handleSave}
            onClear={() => handleOnSQLChange("")}
          />

          <AceSqlEditor
            query={sqlQueries[activeTab]}
            onQueryChange={handleOnSQLChange}
          />

          <div className="p-1 bg-gray-100 flex justify-between items-center gap-x-2">
            <p className="text-xs text-green-700">
              Query executed in 0.0001 seconds
            </p>
            <div className="flex gap-2">
              <FileDownIcon className="w-6 h-6 text-green-600 cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          <CondensedTable />
        </main>
      </div>
    </>
  );
}

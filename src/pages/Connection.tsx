import React, { useState } from "react";
import { DialogPanel, DialogTitle } from "@headlessui/react";
import { DatabaseConnection } from "../utils/types";

interface ConnectionProps {
  onSubmit: (value: DatabaseConnection) => void;
  onClose: () => void;
}

const DBConnectionForm: React.FC<ConnectionProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<DatabaseConnection>({
    dbName: "",
    host: "",
    port: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (): void => {
    onSubmit({ ...formData });
    resetForm();
  };

  const resetForm = (): void => {
    setFormData({
      dbName: "",
      host: "",
      port: "",
      username: "",
      password: "",
    });
  };

  const handleCancel = (): void => {
    resetForm();
    onClose();
  };

  return (
    <DialogPanel
      transition
      className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
    >
      <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
        <div className="h-0 flex-1 overflow-y-auto">
          <div className="bg-yellow-500 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-base font-semibold text-white">
                Add New Database Connection
              </DialogTitle>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="relative text-white hover:text-white cursor-pointer"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span> X
                </button>
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-white">
                Effortlessly Integrate Your New Database Connection
                {/* Seamlessly Connect, Manage, and Scale Across Multiple
                        Databases */}
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between p-5">
            <form>
              <div className="space-y-6 pb-5">
                {/* Database Name */}
                <div>
                  <label
                    htmlFor="dbName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Database Name
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="dbName"
                      name="dbName"
                      type="text"
                      placeholder="Database Name"
                      value={formData.dbName}
                      onChange={handleInputChange}
                      className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    />
                  </div>
                </div>

                {/* Host */}
                <div>
                  <label
                    htmlFor="host"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Host
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="host"
                      name="host"
                      type="text"
                      placeholder="Host"
                      value={formData.host}
                      onChange={handleInputChange}
                      className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    />
                  </div>
                </div>

                {/* Port */}
                <div>
                  <label
                    htmlFor="port"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Port
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="port"
                      name="port"
                      type="text"
                      placeholder="Port"
                      value={formData.port}
                      onChange={handleInputChange}
                      className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    />
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 justify-end px-4 py-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </DialogPanel>
  );
};

export default DBConnectionForm;

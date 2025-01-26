import React from "react";
import { Dialog } from "@headlessui/react";
import { DatabaseConnection } from "../utils/types";
import Connection from "../pages/Connection";

interface DrawerProps {
  isOpen: boolean;
  onClose: (value: DatabaseConnection) => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const handleCancel = (): void => {
    onClose({} as DatabaseConnection);
  };

  const handleSubmit = (value: DatabaseConnection): void => {
    onClose(value);
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Connection onSubmit={handleSubmit} onClose={handleCancel} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Drawer;

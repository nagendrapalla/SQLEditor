import React from "react";
import { Play, Save, LetterTextIcon, EraserIcon } from "lucide-react";

interface ToolMenuProps {
  onRun: () => void;
  onSave: () => void;
  onFormat: () => void;
  onClear: () => void;
}

const ToolMenu: React.FC<ToolMenuProps> = ({
  onFormat,
  onRun,
  onSave,
  onClear,
}) => {
  const handleAction = (value: string) => {
    if (value === "run") {
      onRun();
    } else if (value === "save") {
      onSave();
    } else if (value === "format") {
      onFormat();
    } else if (value === "clear") {
      onClear();
    }
  };

  return (
    <div className="flex items-center justify-start gap-5 p-2 pr-4 bg-gray-50">
      <Play
        className="w-6 h-6 text-green-600 cursor-pointer hover:text-gray-400"
        onClick={() => handleAction("run")}
      />
      <Save
        className="w-6 h-6 text-blue-600 cursor-pointer hover:text-gray-400"
        onClick={() => handleAction("save")}
      />
      <LetterTextIcon
        className="w-6 h-6 text-yellow-600 cursor-pointer hover:text-gray-400"
        onClick={() => handleAction("format")}
      />
      <EraserIcon
        className="w-6 h-6 text-red-500 cursor-pointer hover:text-gray-400"
        onClick={() => handleAction("clear")}
      />
    </div>
  );
};

export default ToolMenu;

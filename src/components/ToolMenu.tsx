import React from "react";
import { Play, Save, Paintbrush } from "lucide-react";

const ToolMenu: React.FC = () => {
  const handleRun = () => {
    alert("Run action triggered!");
  };

  const handleSave = () => {
    alert("Save action triggered!");
  };

  const handleFormat = () => {
    alert("Format action triggered!");
  };

  return (
    <div className="flex items-center justify-start gap-5 p-1 bg-indigo-600">
      <Play className="w-5 h-5 text-white" />
      <Save className="w-5 h-5 text-white" />
      <Paintbrush className="w-5 h-5 text-white" />
    </div>
  );
};

export default ToolMenu;

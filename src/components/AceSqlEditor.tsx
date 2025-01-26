import React from "react";
import AceEditor from "react-ace";

// Import Ace and necessary modules
import * as ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-error_marker";
import "ace-builds/src-noconflict/ext-statusbar";
ace.config.set("basePath", "ace-builds/src-noconflict");

interface AceSqlEditorProps {
  onQueryChange: (query: string) => void;
  query: string | null;
}

const AceSqlEditor: React.FC<AceSqlEditorProps> = ({
  onQueryChange,
  query,
}) => {
  return (
    <AceEditor
      mode="sql"
      theme="xcode"
      value={query || ""}
      onChange={onQueryChange}
      name="sql-editor"
      editorProps={{ $blockScrolling: true, $highlightPending: true }}
      width="100%"
      height="300px"
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        behavioursEnabled: true,
        animatedScroll: true,
        firstLineNumber: 1,
        cursorStyle: "slim",
      }}
    />
  );
};

export default AceSqlEditor;

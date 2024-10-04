import React, { useState } from "react";
import FileExplorer from "./components/FileExpoler";
import FileList from "./components/FileList";
import { FileNode } from "./types";
import { initialFiles } from "./utils";




const App: React.FC = () => {
  const [files, setFiles] = useState<FileNode[]>(initialFiles);
  const [currentFolderId, setCurrentFolderId] = useState<number | null>(null);

  const handleSelectFolder = (folderId: number) => {
    setCurrentFolderId(folderId);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <FileExplorer files={files} onSelectFolder={handleSelectFolder} />
      </div>
      <div style={{ width: "70%" }}>
        <FileList files={getCurrentFolderFiles({ currentFolderId, files })} />
      </div>
    </div>
  );
};

export default App;

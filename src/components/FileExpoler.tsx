import React from "react";
import { FileExplorerProps, FileNode } from "../types";



const FileExplorer: React.FC<FileExplorerProps> = ({
  files,
  onSelectFolder,
}) => {
  const renderFiles = (files: FileNode[]) => {
    return files.map((file) => (
      <div key={file.id}>
        {file.type === "folder" ? (
          <div
            onClick={() => onSelectFolder(file.id)}
            style={{ cursor: "pointer" }}
          >
            📁 {file.name}
          </div>
        ) : (
          <div>📄 {file.name}</div>
        )}
        {file.children && (
          <div style={{ marginLeft: "15px" }}>{renderFiles(file.children)}</div>
        )}
      </div>
    ));
  };

  return <div>{renderFiles(files)}</div>;
};

export default FileExplorer;

import React from "react";
import { FileListProps } from "../types";



const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div>
      {files.map((file) => (
        <div key={file.id}>
          {file.type === "folder" ? "📁" : "📄"} {file.name}
        </div>
      ))}
    </div>
  );
};

export default FileList;

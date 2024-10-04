import React from "react";
import { FileItemProps } from "../types";



const FileItem: React.FC<FileItemProps> = ({ file }) => {
  return (
    <div>
      {file.type === "folder" ? "📁" : "📄"} {file.name}
    </div>
  );
};

export default FileItem;

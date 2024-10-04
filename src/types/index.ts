export type FileNode = {
    id: number;
    name: string;
    type: "file" | "folder";
    children?: FileNode[];
};


export type FileExplorerProps = {
    files: FileNode[];
    onSelectFolder: (folderId: number) => void;
};


export type FileItemProps = {
    file: FileNode;
};


export type FileListProps = {
    files: FileNode[];
};


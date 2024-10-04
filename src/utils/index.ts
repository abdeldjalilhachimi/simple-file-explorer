import { FileNode } from "../types";

const getCurrentFolderFiles = ({ currentFolderId, files }) => {
    const findFolderById = (
        folderId: number,
        files: FileNode[]
    ): FileNode | null => {
        for (const file of files) {
            if (file.id === folderId && file.type === "folder") {
                return file;
            }
            if (file.children) {
                const found = findFolderById(folderId, file.children);
                if (found) return found;
            }
        }
        return null;
    };

    const selectedFolder = currentFolderId
        ? findFolderById(currentFolderId, files)
        : null;
    return selectedFolder?.children || files;
};


export const initialFiles: FileNode[] = [
    {
        id: 1,
        name: "Documents",
        type: "folder",
        children: [
            { id: 2, name: "file1.txt", type: "file" },
            { id: 3, name: "file2.pdf", type: "file" },
            {
                id: 4,
                name: "Pictures",
                type: "folder",
                children: [
                    { id: 5, name: "photo1.png", type: "file" },
                    { id: 6, name: "photo2.jpg", type: "file" },
                ],
            },
        ],
    },
    { id: 7, name: "file3.docx", type: "file" },
];
import { IFile } from "./IFile";
import { INote } from "./INote";

export interface ITopic {
    id: number;
    title: string;
    notes: INote[];
    files: IFile[];
}
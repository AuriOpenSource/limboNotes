import { writable } from "svelte-local-storage-store";

type NoteType = 'note' | 'array' | 'todo';

type ContentType = string | string[] | TodoType[];

interface TodoType {
    done: boolean;
    text: string;
}

export interface BaseDef {
    name: string;
    content: ContentType;
    date: string;
    type: NoteType;
    id: string;
}

let todos = writable<BaseDef[]>('notes',[]);

export { todos };
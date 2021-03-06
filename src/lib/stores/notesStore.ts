import { writable } from 'svelte-local-storage-store';

type ContentType = string | string[] | TodoType[];

interface TodoType {
	done: boolean;
	text: string;
}

export interface BaseDef {
	name: string;
	content: ContentType;
	date: string;
	id: string;
}

let todos = writable<BaseDef[]>('notes', []);

export { todos };

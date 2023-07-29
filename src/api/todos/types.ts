export type TodosResponse = {
    todos: Todo[];
}

export type Todo = {
    id: number;
    description: string;
    complete: boolean;
}
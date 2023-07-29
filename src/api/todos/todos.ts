import { Todo, TodosResponse } from "./types";
import { get } from "../shared/methods";

export async function getTodos(): Promise<TodosResponse> {
  const { data } = await get<TodosResponse>("/todo/list");
  return data;
}

export async function getTodo(id: string): Promise<Todo> {
  const { data } = await get<Todo>(`/todo/${id}`);
  return data;
}

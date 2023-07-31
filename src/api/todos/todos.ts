import { TodoResponse, TodosResponse } from "./types";
import { deleteRequest, get, post } from "../shared/methods";

export async function getTodos(): Promise<TodosResponse> {
  const { data } = await get<TodosResponse>("todo/list");
  console.log(data);
  return data;
}

export async function getTodo(id: string): Promise<TodoResponse> {
  const { data } = await get<TodoResponse>(`todo/${id}`);
  return data;
}

// export async function postTodo(todo: TodoResponse): Promise<TodoResponse> {
//   const { data } = await post<TodoResponse, TodoResponse>("todo", todo);
//   return data;
// }

export const postTodo = async (todo: TodoResponse): Promise<TodoResponse> => {
  const { data } = await post<TodoResponse>("todo", todo);
  return data;
};

export async function deleteTodo(id: string): Promise<TodoResponse> {
  const { data } = await deleteRequest<TodoResponse>(`todo/${id}`);
  return data;
}

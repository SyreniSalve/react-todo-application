export type TodosResponse = {
  map(
    arg0: (todo: any, index: any) => import("react/jsx-runtime").JSX.Element
  ): JSX.Element;
  todos: TodoResponse[];
};

export type TodoResponse = {
  id?: string;
  description: string;
  complete?: boolean;
  onDeleteClick?: () => void;
};

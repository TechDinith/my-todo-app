export interface interfaceTodos {
  todo?: {
    id: number;
    content: string;
  }[];
}

export interface interfaceTodosFunctions {
  deleteHandler?: (id: number) => void;
  addTodoHandler?: (content: { content: string }) => void;
}

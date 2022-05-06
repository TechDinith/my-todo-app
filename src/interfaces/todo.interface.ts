export interface iTodoState {
  todo: {
    id: number;
    content: string;
  }[];
}

export interface iTodosFunctions {
  deleteHandler?: (id: number) => void;
  addTodoHandler?: (content: { content: string }) => void;
}

export interface iContent {
  content: string;
}

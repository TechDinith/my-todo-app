import React, { useState } from "react";
import TodosPage from "./components/pages/TodoPage/TodosPage.page";
// import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import AddTodoPage from "./components/pages/AddTodoPage/addTodo.page";
import { interfaceTodos } from "./interfaces/todo.interface";

function App() {
  // M.AutoInit();
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "buy some milk",
    },
    {
      id: 2,
      content: "play a game",
    },
  ]);

  const addTodoHandler = (content: { content: string }) => {
    const newTodo = { id: Math.random(), content: content.content };

    setTodos([...todos, newTodo]);
  };

  const deleteHandler = (id: number) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <AddTodoPage addTodoHandler={addTodoHandler} />
      <TodosPage todo={todos} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;

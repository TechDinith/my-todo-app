import React, { useState } from "react";
import TodosPage from "./components/pages/TodoPage/TodosPage.page";
import "materialize-css/dist/css/materialize.min.css";
import AddTodoPage from "./components/pages/AddTodoPage/addTodo.page";
import { iContent, iTodoState } from "./interfaces/todo.interface";
import { useReduxHooks } from "./_redux/_reduxHooks";
import { addTodoRed } from "./_redux/todoSlice";

function App() {
  const reduxHooks = useReduxHooks();

  const initialState = reduxHooks.useAppSelector(
    (state: iTodoState) => state.todo
  );

  const [todos, setTodos] = useState(initialState);

  const addTodoHandler = (content: iContent) => {
    const newTodo = { id: Math.random(), content: content.content };

    setTodos([...todos, newTodo]);
    reduxHooks.useAppDispatch(addTodoRed(todos));
  };

  const deleteHandler = (id: number) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const todosPage = {
    todo: todos,
    deleteHandler,
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <AddTodoPage addTodoHandler={addTodoHandler} />
      <TodosPage {...todosPage} />
    </div>
  );
}

export default App;

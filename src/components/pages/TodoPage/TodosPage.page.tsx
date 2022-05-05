import {
  interfaceTodos,
  interfaceTodosFunctions,
} from "../../../interfaces/todo.interface";

const TodosPage = ({
  todo,
  deleteHandler,
}: interfaceTodos & interfaceTodosFunctions) => {
  const todoList = todo!.length ? (
    todo!.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteHandler!(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yayi</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default TodosPage;

import { ChangeEvent, FormEvent, useState } from "react";
import { iTodosFunctions } from "../../../interfaces/todo.interface";

const AddTodoPage = ({ addTodoHandler }: iTodosFunctions) => {
  const [content, setContent] = useState({
    content: " ",
  });

  const handleChange = (e: ChangeEvent) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setContent({ content: inputValue });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodoHandler!(content);
    setContent({ content: " " });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo: </label>
        <input type="text" onChange={handleChange} value={content.content} />
      </form>
    </div>
  );
};

export default AddTodoPage;

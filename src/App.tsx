import React, { useState } from "react";

function App() {
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
  return (
    <div className="App">
      <h1>Just a app</h1>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const TodoForm = ({ addTodo, item, handleChanges }) => {
  const [form, setForm] = useState();

  const submitItem = e => {
    e.preventDefault();
    addTodo(item);
  };

  return (
    <div>
      <form onSubmit={submitItem}>
        <input
          type="text"
          placeholder="list here"
          value={item}
          name="item"
          onChange={handleChanges}
        />
        <button type="submit">Add ToDo!</button>
      </form>
    </div>
  );
};

export default TodoForm;

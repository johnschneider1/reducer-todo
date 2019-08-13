import React from "react";

const Todo = ({ id, item, toggleTodo, completed }) => {
  return (
    <div>
      <p
        onClick={() => toggleTodo(id)}
        className={"untoggled" + (completed ? " toggled" : "")}
      >
        {item}
      </p>
    </div>
  );
};

export default Todo;

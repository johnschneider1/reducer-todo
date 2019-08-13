import React from "react";
import Todo from "./Todo";

const TodoList = ({ list, toggleTodo, clearTodo }) => {
  return (
    <div className="todo-list">
      {list.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          clearTodo={clearTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

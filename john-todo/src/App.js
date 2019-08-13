import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";
import "./components/Todo.css";
import { todoReducer, initialState } from "./reducers/todoReducer";
import { clear } from "sisteransi";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleTodo = id => dispatch({ type: "TOGGLE_TODO", payload: id });

  const clearTodo = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODO" });
  };

  const handleChanges = e =>
    dispatch({ type: "UPDATE_CHG", payload: e.target.value });

  return (
    <div className="App">
      <h2>Reduce my ToDo list!!</h2>
      <TodoForm
        handleChanges={handleChanges}
        addTodo={addTodo}
        item={state.item}
      />
      <TodoList
        toggleTodo={toggleTodo}
        list={state.todoArray}
        clearTodo={clearTodo}
      />
      <button>Clear List!</button>
    </div>
  );
}

export default App;

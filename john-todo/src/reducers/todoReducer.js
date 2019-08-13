export const initialState = {
  item: "",
  todoArray: [
    { item: "Learn about reducers", completed: false, id: 3892987589 }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoArray: state.todoArray.concat({
          item: action.payload,
          completed: false,
          id: Date.now()
        }),
        item: ""
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todoArray: state.todoArray.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case "UPDATE_CHG":
      return { ...state, item: action.payload };
    case "CLEAR_TODO":
      return {
        ...state,
        todoArray: state.todoArray.filter(({ completed }) => !completed)
      };
    default:
      return state;
  }
};

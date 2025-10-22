import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const Todoitem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li>
      <span
        onClick={() => dispatch({ type: "Toggle", payload: todo.id })}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.6 : 1,
          cursor:"pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: "Delete", payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

import React from "react";
import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  function HandleAdd(){
        if(text.trim()){
            const newTodo = {
                id: Date.now(),
                text,
                completed:false
            }
            dispatch({ type:"Add", payload: newTodo})
            setText('')
        }
    }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Todo"
      />
      <button onClick={HandleAdd}>Add</button>
    </div>
  );
};

import { useState } from "react";

function TodoList (){
    const [Todos, SetTodos] = useState([]);
    const [InputValue ,SetInputValue] = useState("");

    const handleAddTodo = ()=>{

        if(SetInputValue.trim !== ""){
            const NewTodo = {
            id:Date.now(),
            text:InputValue,
            completed:"false"
        }
        SetTodos([...Todos,NewTodo])
        SetInputValue("");
        }
    }

    const btnRemove = (id)=>{
        const TodoDelete = Todos.filter(items => items.id != id);
        SetTodos(TodoDelete);
        console.log("Deleted Id:",TodoDelete);
    }
    const btnUpdate = (id)=>{
        console.log("heloo world up")
    }

    return (
        <div>
            <h1>To-DO list</h1>
            <input
              type="text" 
              placeholder="Enter the new a To-Do"
              onChange={(e)=> SetInputValue(e.target.value)}
              value={InputValue}
            />
            <button onClick={handleAddTodo}>Enter</button>

            <ul>
               {
                   Todos.map(todo =>(   
                    <li>{todo.text}
                    <br/>
                    <button onClick={()=> btnRemove(todo.id)}>Remove</button>
                    <button onClick={()=> btnUpdate(todo.id)}>Update</button>
                    </li>
                    
                   ))
                }
            </ul>
        </div>
    )
}

export default TodoList;
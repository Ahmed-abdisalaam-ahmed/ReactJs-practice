import {useReducer,useState} from 'react';

const initialState = [
]

const Reducer = (state , action) =>{
    switch (action.type){
        case 'add':
            return [...state , action.payload]
        case 'toggle':
            return state.map((todo) => todo.id === action.payload ? {...todo , completed: !todo.completed} : todo)
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload)
        default:
            return state
    }
}

const TodoApp = ()=>{
    const [state , dispatch] = useReducer(Reducer,initialState)
    const [text , setText] = useState('')
    function HandleAdd(){
        if(text.trim()){
            const newTodo = {
                id: Date.now(),
                text,
                completed:false
            }
            dispatch({ type:"add", payload: newTodo})
            setText('')
        }
    }
  return(
    <div>
        <h1>Todo App</h1>
        <input
            type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Add New Todo"
        />
        <button onClick={HandleAdd}>Add</button>
        <ul>
            {
                state.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{textDecoration: todo.completed ? 'none' : 'line-through'}}
                            onClick={()=> dispatch({type:"toggle", payload:todo.id})}
                        >{todo.text}</span>
                        <button onClick={()=> dispatch({type:"delete" , payload:todo.id})}>Delete</button>
                    </li> 
                ))
            }
        </ul>
    </div>
  )  
}
export default TodoApp;
import React,{ useReducer } from 'react'

import TodoContext from './TodoContext'
import {initialState, reducer} from './Reducer'
import {TodoList} from './TodoList'
import {TodoForm} from './TodoForm'

export const TodoApp = () => {
const [state, dispatch] = useReducer(reducer ,initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch}}>
        <div>
            <h2>Todo App with Context and Reducer</h2>
            <TodoForm />
            <TodoList/>
        </div>
    </TodoContext.Provider>
  )
}

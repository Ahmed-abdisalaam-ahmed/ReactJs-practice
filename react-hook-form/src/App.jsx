import React from 'react'
import {useForm} from "react-hook-form"

const App = () => {

  const {register , handleSubmit, formState : {errors}}  = useForm();
  console.log(errors.username)
  console.log(errors.email)
  const onSubmit = (data) =>{
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username', {required : 'Username is Required'
        })}/>{errors.username && <p style={{color : 'red'}}>{errors.username.message}</p>}
        <input type="email" {...register('email', {required : 'Email is Required'})} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
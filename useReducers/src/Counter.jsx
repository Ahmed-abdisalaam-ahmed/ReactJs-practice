import { useState ,useReducer} from "react";

// initial state -> data-da aan rabro in aaan manage gareyno
// reducer function -> ninka manage gareyn laha data-da

// state -> maxa hada gacanta ku haynaa
// action -> maxan qaban rabnaaaa -> waxa soo racinaysaa waxa laqabanayo (type)

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "descreamnt":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state , dispatch] = useReducer (reducer , initialState)

  return (
    <div>
    <h2>the Count : {state.count}</h2>
      <button onClick={()=> dispatch({type : 'increment'})}>increment </button>
      <button onClick={()=> dispatch({type : 'descreamnt'})}>decrement</button>
    </div>
  );
};
export default Counter;

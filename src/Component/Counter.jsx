import React from 'react'
import { AppContext } from '../Context/AppContext'

const Counter = ({}) => {
    const {state, dispatch} = React.useContext(AppContext);

    const handleAdd =() =>{
        dispatch({type: 'increment'})
    }
    const handleMinus =() =>{
        const action ={
            type: 'decrement'
        }

        dispatch(action)
    }

    // console.log(s)
  return (
    <div>
        <h1>Counter</h1>
        <h3>{state.counter}</h3>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default Counter
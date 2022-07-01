import React from 'react';


export const AppContext = React.createContext();


const initState ={
    counter:0
}

const reducer = (state, {type, payload})=>
{
    switch(type)
    {
        case 'increment':{
            return {
                ...state,
                counter: state.counter + 1,
            }
        }
        case 'decrement':{
            return {
                ...state,
                counter: state.counter - 1,
            }
        }
        default:{
            return state
        }
    }
}
export const AppContextProvider = ({children}) => {
   const [state, dispatch] = React.useReducer(reducer, initState);
  
   const value = {state, dispatch}
   console.log(value)
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

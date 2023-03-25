import React, { createContext, useContext, useState } from 'react'


const StateContext = createContext()




export default function ContextProvider({children}) {

    const [selectedRestaurant, setSelectedRestaurant] = useState('')
    


  return (
    
    <StateContext.Provider value={{
        selectedRestaurant,
        setSelectedRestaurant
    }}>

        {children}

    </StateContext.Provider>

  )
}


export const useStateContext = () =>  useContext(StateContext)
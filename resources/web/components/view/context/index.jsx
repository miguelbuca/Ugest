import React, { createContext, useContext, useState, useEffect } from 'react'

const UgestContext = createContext()

export const UgestProvider = ({ children }) => {

  const [ data, setData ] = useState({})

  return (
    <UgestContext.Provider value={{
      data,
      setData
    }}>
      { children }
    </UgestContext.Provider>
  )
}

export const useUgest = () =>{
    const context = useContext(UgestContext)

    if(!context) throw new Error("useUgest munst be used within UgestProvider.")

    const { data, setData } = context

    return { data, setData }

}

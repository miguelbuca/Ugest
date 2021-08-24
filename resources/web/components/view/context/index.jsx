import React, { createContext, useContext, useState, useEffect } from 'react'

import Api from '../../../api'

const UgestContext = createContext()

export const UgestProvider = ({ children }) => {

  const [ data, setData ] = useState({
    navigation: {
        menu: 'Faturar'
    },
    preference:{
      ...JSON.parse(localStorage.getItem('UserPreference')) || {}
    },
    action:{
      toSave: {},
      toEdit: {}
    },
    shopping: {
      artigo: {}
    },
    multUso: {},
    loader: {
      state: false,
      label: null
    }
  })

  useEffect(() => {
    localStorage.setItem('UserPreference', JSON.stringify(data.preference))
  }, [data])

  useEffect(async() => {
          const res = await Api.get( `/estado`);
          setData({
            ...data,
            multUso: {
              estado: res.data
            }
          })
  }, [])


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

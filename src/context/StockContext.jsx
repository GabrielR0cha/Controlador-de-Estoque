import { createContext } from "react";
import PropTypes from "prop-types"
import { useState } from "react";


export const StockContext = createContext({})

StockContextProvider.prototype = {
  children: PropTypes.node
}

export function StockContextProvider ({children}) {
  const [items, setItems] = useState(()=> {
    const storedItems = localStorage.getItem('key-games-stock')
    if (!storedItems) return []
    
    const items =JSON.parse(storedItems)
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt)
      item.updateAt = new Date(item.updateAt)
    })
    return items
  })

    const addItem = (item) => {
      setItems(currentState => {
        const updateItems = [item, ...currentState]
        localStorage.setItem('key-games-stock',JSON.stringify(updateItems))
        return updateItems
      })
    }


    const deleteItem = (itemId) => {
      setItems(currentState => {
        const updateItems = currentState.filter(item => item.id !== itemId) 
        localStorage.setItem('key-games-stock',JSON.stringify(updateItems))
        return updateItems
      })
    }

    const getItem = (itemId) => {
      return items.find(item =>item.id === +itemId)
    }

    const uodateItem = (itemId,newAttributes) =>{
      setItems(currentState => {
          const itemIndex = currentState.findIndex(item => item.id === +item.id)
          const updateItems = [...currentState]
          Object.assign(updateItems[itemIndex],newAttributes)
          localStorage.setItem('key-games-stock',JSON.stringify(updateItems))
          return updateItems
        })
    }

const stock = {items,addItem,deleteItem,getItem,uodateItem}


  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}
import { createContext, useContext, useEffect, useState } from "react"
import axios from "../../api/axios"

const ItemDtContext = createContext(null)

export const useItemDtContext = () => useContext(ItemDtContext)

export function ItemDtProvider({ children }) {
    
    const [itemDetails , setItemDetails] = useState(null)

    // get item details
    useEffect(() => {
        let isMounted = true
        let controller = new AbortController()
        
        let fetchItems = async () => {
          try {
          let { data } = await axios.get("/space/api/itemDetails");
          isMounted && setItemDetails(data)
          } catch (error) {
            console.log(error);
          }
        }
        
        fetchItems()
        return () => {
            isMounted = false
            controller.abort()
        }
      } , [])

return (
  <>
    <ItemDtContext.Provider value={itemDetails}>
        { children }
    </ItemDtContext.Provider>
  </>
)
}
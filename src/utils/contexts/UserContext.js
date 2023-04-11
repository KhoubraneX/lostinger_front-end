import { useEffect , createContext , useContext , useState } from "react";
import { decodeToken } from "react-jwt";

const UserContext = createContext(null)

export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {
    const [user , setUser] = useState(null);

    useEffect(() => {
    try {
        let jwt = localStorage.getItem("jwt")
        let decode = decodeToken(jwt)

        let currentUser = {...user}
        currentUser = decode
        setUser(currentUser);

    } catch (error) {
        console.log(error);
    }
  } , [])


  return (
    <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>
  )
}
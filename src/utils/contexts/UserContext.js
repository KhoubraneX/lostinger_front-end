import { useEffect , createContext , useContext , useState } from "react";
import { decodeToken } from "react-jwt";
import { checkToken } from "../authServices";
const UserContext = createContext(null)

export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {
    const [user , setUser] = useState(null);

    useEffect(() => {
        let isMounted = true
        let controller = new AbortController()

        if (localStorage.getItem("jwt")) {
            let jwt = localStorage.getItem("jwt")
            //
            checkToken(jwt)
            //
            let decode = decodeToken(jwt)
            let currentUser = {...user}
            currentUser = decode
            isMounted && setUser(currentUser);
        }
        return () => {
            isMounted = false
            controller.abort()
        }
    } , [])


return (
    <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>
)
}
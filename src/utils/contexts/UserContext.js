import { createContext , useContext , useState, useLayoutEffect } from "react";
import { decodeToken } from "react-jwt";
import { checkToken } from "../authServices";
import { PreLoaderMain } from "../../components/preLoaderPage";
import axios from "../../api/axios";
import { getUserIpAddr } from "../getUserIp";


const UserContext = createContext(null)

export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {

    const [user , setUser] = useState(null);

    useLayoutEffect(() => {
        let isMounted = true
        let controller = new AbortController()

        const fetchUser = async () => {
        if (localStorage.getItem("jwt")) {
            let jwt = localStorage.getItem("jwt")
            //
            if (checkToken(jwt) !== true) {
                setUser(false)
            }
            //
            let decode = decodeToken(jwt)
            let currentUser = {...user}
            currentUser = decode
            currentUser.ipAddress = await getUserIpAddr();
            isMounted && setUser(currentUser);
        } else {
            setUser(false)
        }
    }
    fetchUser()
        return () => {
            isMounted = false
            controller.abort()
        }
    } , [])

return (
    <>
    {user === null && <PreLoaderMain/>}
    {user !== null && <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>}
    </>
)
}
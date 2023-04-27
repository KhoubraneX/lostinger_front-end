import { createContext , useContext , useState, useLayoutEffect } from "react";
import { getUserIpAddr } from "../getUserIp";


const UserIpContext = createContext(null)

const useUserIpContext = () => useContext(UserIpContext)

export default function UserIpProvider({ children }) {

    const [userIp , setUserIp] = useState(null);

    useLayoutEffect(() => {
        let isMounted = true
        let controller = new AbortController()

        const fetchUser = async () => {
            let ipAddress = await getUserIpAddr();
            isMounted && setUserIp(ipAddress); 
        }
    fetchUser()
        return () => {
            isMounted = false
            controller.abort()
        }
    } , [])

return (
    <>
    {userIp && <UserIpContext.Provider value={userIp}>
        { children }
    </UserIpContext.Provider>}
    </>
)
}

export {
    useUserIpContext
}
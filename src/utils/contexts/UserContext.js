import { createContext, useContext, useState, useLayoutEffect } from "react";
import { decodeToken } from "react-jwt";
import { checkToken } from "../authServices";
import { PreLoaderMain } from "../../components/preLoaderPage";
import { ChatLogin } from "../authChat";

import { CometChat } from "@cometchat-pro/chat";
const UserContext = createContext(null)

export const useUserContext = () => useContext(UserContext)

export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    useLayoutEffect(() => {
        let isMounted = true;
        let controller = new AbortController();
    
        const initializeCometChat = async () => {
          try {
            const appID = process.env.REACT_APP_COMETCHAT_APP_ID;
            const region = process.env.REACT_APP_COMETCHAT_APP_REGION;
            const appSetting = new CometChat.AppSettingsBuilder()
              .subscribePresenceForAllUsers()
              .setRegion(region)
              .build();
            await CometChat.init(appID, appSetting);
          } catch (error) {
            console.log("CometChat initialization failed with error:", error);
          }
        };
    
        const fetchUser = async () => {
          if (localStorage.getItem("jwt")) {
            let jwt = localStorage.getItem("jwt");
            if (checkToken(jwt) !== true) {
              setUser(false);
            }
            let decode = decodeToken(jwt);
            let currentUser = { ...user };
            currentUser = decode;
            if (isMounted) {
              setUser(currentUser);
              ChatLogin(currentUser.sub);
              initializeCometChat();
            }
          } else {
            setUser(false);
          }
        };
    
        fetchUser();
    
        return () => {
          isMounted = false;
          controller.abort();
        };
      }, []);

    return (
        <>
            {user === null && <PreLoaderMain />}
            {user !== null && <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>}
        </>
    )
}
import React, {useState} from "react";
import { useEffect } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {

  const [userData, setUserData] = useState(null)
  useEffect(() => {
    sessionStorage.getItem('token') ? setUserData({
      nombre: sessionStorage.getItem('name')
    }    ) : setUserData(null);

 }, [])

  const [user, setUser] = useState(userData);

  return (<UserContext.Provider value={{user , setUser}}>{children}</UserContext.Provider>);
};

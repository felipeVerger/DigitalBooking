import React, {useState} from "react";
import { useEffect } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {


  const [user, setUser] = useState(null);
  useEffect(() => {
    sessionStorage.getItem('token')!= null ? setUser({
      nombre: sessionStorage.getItem('name')
    }    ) : setUser(null);

 }, [])




  return (<UserContext.Provider value={{user , setUser}}>{children}</UserContext.Provider>);
};

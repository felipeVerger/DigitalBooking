import React, {useState} from "react";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {


  const [user, setUser] = useState(null);
  useEffect(() => {
    sessionStorage.getItem('token')!= null ? setUser({
      id: sessionStorage.getItem('id'),
      nombre: sessionStorage.getItem('name'),
      email: sessionStorage.getItem('email'),
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role')
    }    ) : setUser(null);

 }, [])




  return (<UserContext.Provider value={{user , setUser}}>{children}</UserContext.Provider>);
};

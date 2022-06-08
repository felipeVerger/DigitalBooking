import React, {useState} from "react";

export const MenuContext = React.createContext();

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

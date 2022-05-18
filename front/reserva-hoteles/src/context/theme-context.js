import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, theme}) => {

  return (<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>);
};

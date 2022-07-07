import React, { useState } from 'react'

export const BookingContext = React.createContext();

export const BookingProvider = ({ children }) => {
  const [ isRegistered, setIsRegistered ] = useState(true);

  return (
    <BookingContext.Provider value={{isRegistered, setIsRegistered}}>
        {children}
    </BookingContext.Provider>
  )
}

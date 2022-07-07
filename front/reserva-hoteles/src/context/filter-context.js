import React, { useState } from 'react'

export const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
  const [filter, setFilter] = useState({
    city: [],
    category: [],
    date: [{startDate: '', endDate: ''}],
  });

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
        {children}
    </FilterContext.Provider>
  )
}

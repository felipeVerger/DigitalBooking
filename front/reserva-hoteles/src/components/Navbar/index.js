import React, { useState, useContext } from "react";
import {
  NavbarBody,
  NavbarBlock,
  Title,
  Form,
  Button,
} from "./IndexStyle";

import { FilterContext } from "../../context/filter-context";
import SearchCity from "./SearchCity";
import SearchCalendar from "./SearchCalendar";

const Navbar = () => {
  const {setFilter, filter} = useContext(FilterContext);
  const [destination, setDestination] = useState('¿A donde vamos?');
  const [data, setData] = useState({
    date: { startDate: null, endDate: null },
  });
  

  // change start date format to year-month-day
  let formatStartDate = () => {
    if (data.date.startDate !== null) {
    let startDate = data.date.startDate;
    let startDateFormatted = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1 < 10 ? 0 : ""
    }${startDate.getMonth() + 1}-${
      startDate.getDate() < 10 ? 0 : ""
    }${startDate.getDate()}`;
    return startDateFormatted;
    }
  }
  // change end date format to year-month-day
  let formatEndDate = () => {
    if (data.date.endDate !== null) {
      let endDate = data.date.endDate;
      let endDateFormatted = `${endDate.getFullYear()}-${endDate.getMonth() + 1 < 10 ? 0 : ""}${( endDate.getMonth() + 1 )}-${endDate.getDate() < 10 ? 0 : ""}${endDate.getDate()}`;
      return endDateFormatted;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination !== '¿A dónde vamos?') {
      setFilter({...filter, city: [destination, 'city'], date: [{startDate: formatStartDate(), endDate: formatEndDate()}, 'date']});
    }
  };

  return (
    <NavbarBody>
      <NavbarBlock>
        <Title>Busca ofertas en hoteles, casas y mucho más</Title>
        <Form onSubmit={handleSubmit}>
          <SearchCity 
            destination={destination} 
            setDestination={setDestination}
          />
          <SearchCalendar 
            data={data} 
            setData={setData}
            
          />
          <Button type="submit">Buscar</Button>
        </Form>
      </NavbarBlock>
    </NavbarBody>
  );
};

export default Navbar;

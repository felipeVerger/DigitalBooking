import React, { useState, useContext } from "react";
import {
  NavbarBody,
  NavbarBlock,
  Title,
  Form,
  Button,
} from "./IndexStyle";

import { FilterContext } from "../../context/filter-context";
import {useNavigate} from 'react-router-dom'
import SearchCity from "./SearchCity";
import SearchCalendar from "./SearchCalendar";

const Navbar = () => {
  const {setFilter} = useContext(FilterContext);
  const [destination, setDestination] = useState('¿A donde vamos?');
  const [data, setData] = useState({
    date: { startDate: null, endDate: null },
  });
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination !== '¿A dónde vamos?') {
      setFilter([destination, 'city']);
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

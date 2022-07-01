import React, {useState, useEffect, useContext} from "react";
import {Dropdown} from './CityStyle';
import {useLocation} from 'react-router-dom';
import { FilterContext } from "../../context/filter-context";
import useFetch from "../../hooks/useFetch";

const URL_API = `${process.env.REACT_APP_URL_REMOTE}/cities/findAll`;

const SearchCity = ({destination, setDestination}) => {
  const locationPath = useLocation().pathname;
  const { filter } = useContext(FilterContext);

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

  const { data: cities } = useFetch(URL_API, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  });

  const handleCityChange = (city) => {
    setDestination(city.value);
  }

  // If citiesList is false nothing will be displayed, else the select will show
  return (
    <Dropdown
      options={cities.map((item) => ({
        value: item.name,
        label: item.name + ', ' + item.country,
      }))}
      placeholder={locationPath === '/' ? destination : filter[1] === 'city' && locationPath === '/productsList' ? filter[0] : destination}
      onChange={handleCityChange}
    />
  )
  ;
};

export default SearchCity;

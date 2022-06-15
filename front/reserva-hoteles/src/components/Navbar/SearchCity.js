import React, {useState, useEffect, useContext} from "react";
import {Dropdown} from './CityStyle';
// import useFetch from '../../hooks/useFetch';
import {useLocation} from 'react-router-dom';
import { FilterContext } from "../../context/filter-context";

const URL_API = 'http://localhost:8080/cities/findAll'

const SearchCity = ({destination, setDestination}) => {
  const locationPath = useLocation().pathname;
  const {filter} = useContext(FilterContext);
  const  [citiesList, setCitiesList] = useState([]);

  const myHeaders = new Headers();
  // TO DO g10Booking
    myHeaders.append("Authorization", "Basic dXNlcjpnMTBCb29raW5n");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch(URL_API, requestOptions)
      .then((response) => response.json())
      .then((data) => setCitiesList(data))
      .catch(error => console.log('error', error));
  }, [])



  const handleCityChange = (city) => {
    setDestination(city.value);
  }

  // If citiesList is false nothing will be displayed, else the select will show
  return (
    <Dropdown
      options={citiesList.map((item) => ({
        value: item.name + ", " + item.country,
        label: item.name + ", " + item.country,
      }))}
      placeholder={locationPath === '/' ? destination : filter && locationPath === '/productsList' ? filter[0] : destination}
      onChange={handleCityChange}
    />
  )
  ;
};

export default SearchCity;

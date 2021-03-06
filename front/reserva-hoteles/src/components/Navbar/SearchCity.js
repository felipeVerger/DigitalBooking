import React, {useState, useEffect} from "react";
import {Dropdown} from './CityStyle'

const URL_API = 'http://localhost:8080/cities/findAll'

const SearchCity = ({destination, setDestination}) => {
  const  [citiesList, setCitiesList] = useState([]);

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjo1ZGQ5N2E1Ny1hNmI2LTQ4ZTItOGJjOS03M2YzOTc1ZWVmZGQ=");

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
      placeholder={destination}
      onChange={handleCityChange}
    />
  )
  ;
};

export default SearchCity;

import React, {useState, useEffect} from "react";
import {Dropdown} from './CityStyle'
import citiesJson from '../../staticData/cities.json'

const SearchCity = ({destination, setDestination}) => {
  const  [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    setCitiesList(citiesJson);
  }, [])  

  const handleCityChange = (city) => {
    setDestination(city.value);
  }

  // If citiesList is false nothing will be displayed, else the select will show
  return citiesList ? (
    <Dropdown
      options={citiesList.map((item) => ({
        value: item.city + ", " + item.country,
        label: item.city + ", " + item.country,
      }))}
      placeholder={destination}
      onChange={handleCityChange}
    />
  ) : null
  ;
};

export default SearchCity;

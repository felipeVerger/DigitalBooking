import React, {useState, useEffect} from "react";
import {Dropdown} from './CityStyle'
import {useFetch} from "../../hooks/useFetch";

const URL_API = 'http://localhost:8080/cities/findAll'

const SearchCity = ({destination, setDestination}) => {
  const myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dXNlcjo2NDE3OTJiNC00ZjY1LTQ4NmEtYjg3Zi04Y2ZmODMwOWM3OTg=");
myHeaders.append("Cookie", "JSESSIONID=DCEC261BC6EEE5EBE29C774E130417E4");

const requestOptions = {
  method: 'GET',
  mode: 'no-cors',
  headers: myHeaders,
  redirect: 'follow'
};
  // const {data} = useFetch(URL_API, requestOptions);
  const  [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    fetch(URL_API, requestOptions)
      .then((response) => response.json())
      .then((data) => setCitiesList(data))
  }, [])


  const handleCityChange = (city) => {
    setDestination(city.value);
  }

  // If citiesList is false nothing will be displayed, else the select will show
  return (
    <Dropdown
      options={citiesList.map((item) => ({
        value: item.city + ", " + item.country,
        label: item.city + ", " + item.country,
      }))}
      placeholder={destination}
      onChange={handleCityChange}
    />
  )
  ;
};

export default SearchCity;

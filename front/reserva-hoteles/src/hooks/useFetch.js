import React, {useEffect, useState} from 'react'

const useFetch = (URL, options) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL, options)
        .then(response => response.json())
        .then(data => setData(data))
  }, [])

  return { data }
}

export default useFetch
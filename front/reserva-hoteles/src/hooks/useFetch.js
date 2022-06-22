import {useEffect, useState} from 'react'

const useFetch = (URL, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL, options)
      .then(response => response.json())
      .then(data => setData(data))
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return { data, loading, error }
}

export default useFetch;
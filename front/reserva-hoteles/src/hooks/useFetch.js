import {useState, useEffect} from 'react'

export const useFetch = (URL, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true);
      fetch(URL, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
  }, [])

  return {data, loading, error};
}

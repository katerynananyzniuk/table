import {useState, useEffect} from 'react'

function useFetch(url:string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
        fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(error => {
          setError(error.message)
          setLoading(false)
        })
    }, 500)
  }, [url])

  useEffect(() => {
    setTimeout(() => {
        fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(error => {
          setError(error.message)
          setLoading(false)
        })
    }, 500)
  }, [data])

  return {data, loading, error}
}

export default useFetch
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(res => {
    
        setData(res)
        setLoading(false)
      })
      .catch(err=> {
        setError(true)
        setLoading(false)
      })
    }, [url])
    

  return {
    loading,data,error
  
  }
    
}

export default useFetch
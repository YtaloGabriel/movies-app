import axios from 'axios'
import React from 'react'

export const useGetApiData = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState([])

  const getApiData = async () => {
    setLoading(true)
    try {
      const apiUrl =
        'https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=7971b7a7e2d80d4e5cbe598eb1b9db01&page=1'
      const response = await axios.get(apiUrl)
      setData(response.data.results)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getApiData()
  }, [])

  return {
    loading,
    data
  }
}

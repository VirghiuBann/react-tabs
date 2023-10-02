import { useEffect, useState } from 'react'
import Loading from './components/Loading'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getJobs = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)

      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }

      const result = await resp.json()
      setJobs([...result])
    } catch (error) {
      setIsError(true)
      console.error(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getJobs()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <h2>Tabs Starter</h2>
}
export default App

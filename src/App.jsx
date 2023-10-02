import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import JobInfo from './components/JobInfo'

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

  if (isError) {
    return (
      <div>
        <h5>There was an error ...</h5>
      </div>
    )
  }

  return <main>{!!jobs && <JobInfo {...jobs[0]} />}</main>
}
export default App

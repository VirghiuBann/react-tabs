import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)

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
    return (
      <div className='jobs-center'>
        <Loading />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='jobs-center'>
        <h5>There was an error ...</h5>
      </div>
    )
  }

  return (
    <main>
      <section className='jobs-center'>
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        {!!jobs && <JobInfo {...jobs[currentItem]} />}
      </section>
    </main>
  )
}
export default App

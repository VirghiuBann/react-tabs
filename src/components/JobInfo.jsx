import Duties from './Duties'

const JobInfo = ({ company, dates, title, duties }) => {
  return (
    <div className='job-info'>
      <h3>{title}</h3>
      <h5 className='job-company'>{company}</h5>
      <h4 className='job-date'>{dates}</h4>

      <Duties duties={duties} />
    </div>
  )
}

export default JobInfo

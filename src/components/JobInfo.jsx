import Duties from './Duties'

const JobInfo = ({ company, dates, title, duties }) => {
  return (
    <section>
      <h3>{title}</h3>
      <h3>{company}</h3>
      <h4>{dates}</h4>
      <div>
        <Duties duties={duties} />
      </div>
    </section>
  )
}

export default JobInfo

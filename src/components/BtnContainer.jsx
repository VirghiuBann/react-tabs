const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {!!jobs &&
        jobs.map((job) => {
          return (
            <button className='job-btn' key={job.id}>
              {job.company}
            </button>
          )
        })}
    </div>
  )
}

export default BtnContainer

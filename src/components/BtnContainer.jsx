const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {!!jobs &&
        jobs.map((job, index) => {
          const isActive = index === currentItem
          return (
            <button
              className={isActive ? 'job-btn active-btn' : 'job-btn'}
              key={job.id}
              onClick={() => setCurrentItem(index)}
            >
              {job.company}
            </button>
          )
        })}
    </div>
  )
}

export default BtnContainer

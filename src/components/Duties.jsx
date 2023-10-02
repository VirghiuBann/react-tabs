import Icon from './IconAngle'
const Duties = ({ duties }) => {
  return (
    <article>
      {duties &&
        duties.map((item, index) => {
          return (
            <div key={index}>
              <Icon />
              <p>{item}</p>
            </div>
          )
        })}
    </article>
  )
}

export default Duties

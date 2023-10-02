import { v4 as uuidv4 } from 'uuid'

import Icon from './IconAngle'
const Duties = ({ duties }) => {
  return (
    <article>
      {!!duties &&
        duties.map((item) => {
          const uuid = uuidv4()
          return (
            <div key={uuid} className='job-desc'>
              <Icon />
              <p>{item}</p>
            </div>
          )
        })}
    </article>
  )
}

export default Duties

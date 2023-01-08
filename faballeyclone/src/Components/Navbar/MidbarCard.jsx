import React from 'react'
import { Link } from 'react-router-dom'

const MidbarCard = ({list=[], list2=[], img, h1, h2}) => {
  return (
    <div className='midBarCard'>
       <div>
        <div>
            <h1>{h1}</h1>
            {list.map((elem)=>{
                return <li><Link to={'/products'}>{elem}</Link></li>
            })}
        </div>
        <div>
            <h1>{h2}</h1>
            {list2.map((elem)=>{
                return <li>{elem}</li>
            })}
        </div>
        <div>
            <img src={img} alt="" />
        </div>
       </div>
    </div>
  )
}

export default MidbarCard
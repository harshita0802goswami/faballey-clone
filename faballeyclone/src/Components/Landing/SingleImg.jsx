import React from 'react'

const SingleImg = ({url, title}) => {
  return (
    <div className='imgCont'>
        <h1 className='title'>
            {title}
        </h1>
        <img src={url} alt="" />
    </div>
  )
}

export default SingleImg
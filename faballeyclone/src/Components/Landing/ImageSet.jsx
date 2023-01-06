import React from 'react'

const ImageSet = ({children = null, images = [], classname, title, para, }) => {
  return (
    <div>
        <h1 className='title'>{title}</h1>
        {/* <p className='titlePara'>{para}</p> */}
        {children}
        <div className={classname} c>
        {
            images.map((elem, ind)=>{
                return <img src={elem} alt="" key={ind} />
            })
        }
        </div>
    </div>
  )
}

export default ImageSet
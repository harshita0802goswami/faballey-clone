import React from 'react'

const InstaShopCard = ({url, title, price, id}) => {
  return (
    <div className='instaCardRel'>
        <img src={url} alt="avatar" />
        <div className='instaCardAbs'>
            <h4>{title}</h4>
            <p>{price}</p>
            <b>{id}</b> <br />
            <button>GET THE LOOK</button>
        </div>
    </div>
  )
}

export default InstaShopCard
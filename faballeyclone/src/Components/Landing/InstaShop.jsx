import React from 'react'
import InstaShopCard from './InstaShopCard'

const InstaShop = () => {
  return (
    <div className='instaShop'>
        <h1 className='title2'>INSTASHOP: Shop our Instagram! Tag us @FabAlley and use #AlleyGals to get featured</h1>
        <div>
            <div>
                <img src="https://img.faballey.com/images/banner/0f1d3cfe-bece-4225-87f4-8b79f57baaea.jpg" alt="" />
            </div>
            <div className='instaShopCard'>
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/f0739b90-fb30-40a0-af52-3054b0a80dec.jpg'
                    title = 'Hot Pink Pleated One Shoulder Dress With Belt'
                    price = '₹ 1500 40% OFF'
                    id='@mahimakhanchandan'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/6ed5ec95-981b-4ab5-ae1d-174208036516.jpg'
                    title = 'Navy Lace Halter Back Cut Out Dress'
                    price = '₹ 900 60% OFF'
                    id='@luckii_mee'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/5177d81b-1b96-4304-a71f-c41c9efafb7b.jpg'
                    title = 'Bottle Green Halter Neck Embellished Pink Dress '
                    price = '₹ 1080 60% OFF'
                    id='@sunayanaf'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/348e8ab7-cb80-490d-8f3b-de142081b0cc.jpg'
                    title = 'Off White Pearl Embellished Drop Shoulder Sweater'
                    price = '₹ 840 60% OFF'
                    id='@aaasthaa'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/fef05441-eadd-47c6-ad21-63df6465bef6.jpg'
                    title = 'Brown One Shoulder Asymmetric Bodycon Dress'
                    price = '₹ 1500 40% OFF'
                    id='@___niishi'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/52726f18-cac9-4cfe-a03c-e3b888e0f256.jpg'
                    title = 'Black Blazer Dress With Embellished Belt'
                    price = '₹ 2040 40% OFF'
                    id='@hello_aadhya'
                />
                <InstaShopCard 
                    url='https://img.faballey.com/images/banner/cd390984-0a2d-466c-a00d-384cb715a852.jpg'
                    title = 'Navy Floral Strappy Mini Dress '
                    price = '₹ 720 60% OFF'
                    id='@roving_roshogolla'
                />
                <div style={{backgroundColor:'#ffe9e5', alignItems:'center', display:'flex', justifyContent:'center', cursor:'pointer'}}>
                    <h2 style={{fontWeight:'600'}}>EXPLORE MORE</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstaShop
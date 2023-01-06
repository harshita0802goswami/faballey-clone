import React from 'react'
import './Landing.css'

const CalltoAction = () => {
  return (
    <div className='callToAction' >
        <div >
            <video height="" width="" poster="https://img.faballey.com/images/banner/c152513d-5a12-44cc-8db5-d1710f295741.jpg" src='https://youtu.be/S7Zrvt9IJ28'></video>
        </div>
        <div >
            <h1 style={{color:'#323232', fontSize:'40px', fontWeight:'600', lineHeight: '50px'}}>RIMZIM DADU X FABALLEY</h1>
            <hr style={{maxWidth:"40%",  border:'2px solid black', margin: ' 15px 0'}}/>
            <p style={{fontSize:'16px', lineHeight:'30px', fontWeight:'600'}}>
            This season, Faballey joins forces with designer Rimzim Dadu to present a bold, one-of-a-kind, collaborative party line. In an ultra glam synthesis of clean cuts, sharp silhouettes, and gleaming surfaces, the collection brings forth the designer’s stellar textures and techniques that fire up a host of classics to present a reimagined line-up of party favourites.
            </p>
            <button style={{padding:'13px 30px', backgroundColor:'black', margin : '20px 0',  borderRadius:'25px', color:'white', fontWeight:'600'}}>SHOP THE COLLECTION</button>
        </div>
    </div>
  )
}

export default CalltoAction
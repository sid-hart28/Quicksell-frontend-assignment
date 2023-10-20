import React from 'react'
import './ProfilePhoto.css'

const ProfilePhoto = (props) => {

  const { userAvailable, imgSrc } = props;

  return (
    <div className='ticket-navbar-display-picture'>
      <img loading='lazy' style={{ width: '20px', height: '20px', borderRadius: "50%" }} src={imgSrc} alt="title" />
      <div style={{
        backgroundColor: userAvailable ? "#25c128" : "#d7d7d7"
      }} className='display-picture' />
    </div>
  )
}

export default ProfilePhoto
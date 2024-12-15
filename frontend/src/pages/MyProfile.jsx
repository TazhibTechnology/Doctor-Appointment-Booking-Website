import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Bilal Ahmad',
    image:assets.profile_pic,
    email: 'eng.bilalahmad@gmail.com',
    phone: '+93 799 1534 19',
    address:{
      line1:'Afghanistan, Herat',
      line2: 'Afghanistan, Kabul'
    },
    gender: 'Male',
    dob: '2005-12-16'
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit? <input type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>:<p>{userData.name}</p>
      }

    </div>
  )
}

export default MyProfile
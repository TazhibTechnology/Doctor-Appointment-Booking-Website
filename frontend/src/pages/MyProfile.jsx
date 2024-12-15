import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Bilal Ahmad",
    image: assets.profile_pic,
    email: "eng.bilalahmad@gmail.com",
    phone: "+93 799 1534 19",
    address: {
      line1: "Afghanistan, Herat",
      line2: "Afghanistan, Kabul",
    },
    gender: "Male",
    dob: "2005-12-16",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt='' />
      {isEdit ? (
        <input
          type='text'
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type='text'
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                type='text'
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                type='text'
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday</p>
          {isEdit ? (
            <input
              type='text'
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? <button  onClick={()=>setIsEdit(false)}>Save information</button> : <button onClick={()=>setIsEdit(true)}>Edit</button>}
      </div>
    </div>
  );
};

export default MyProfile;

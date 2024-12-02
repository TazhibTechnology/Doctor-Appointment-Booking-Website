import React from 'react';
import { doctors } from '../assets/assets_frontend/assets';

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <div>
                <p></p>
                <p>Available</p>
              </div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button>more</button>
    </div>
  );
};

export default TopDoctors;

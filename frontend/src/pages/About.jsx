import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className=" w-full md:max-w-[360px]" src={assets.about_image} alt='' />
        <div className="flex flex-col justify-center gap-6 md:2/4 text-sm text-gray-600">
          <p>
            Welcome To Presgrigtg, Your Trusted Partner In Managing Your
            Haalthcare Needs Conveniently And Efficiently, At Prescriato, We
            Understand The Challenges Indlividuals Face When It Comes To
            Scheduling Doctor Appeintments And Monaging Their Health Records
          </p>
          <p>
            Prescripte Is Committed To Excellence In Healtheare Technology. We
            Continuously Strive To Enhence Our Plotform, Integrating The Latest
            Advancements To Imprave User Experience And Deliver Superior Service
            Whether You`re Boolung Your First Appointment Or Managing Ongoing
            Care, Prgssrigto Is Here To Support You Every Step Of The Way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision At Presgripto Is To Create A Seamless Heaithcare
            Experience For Every User. We Aim To Bridge The Gap Between Patients
            And Healthcare Praviders, Making It Easier For You To Access The
            Care You Need, When You Need It,
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default About;

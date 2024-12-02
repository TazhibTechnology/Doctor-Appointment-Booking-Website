import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            dolorem eius libero beatae minima alias laudantium magnam,
            perspiciatis iure nulla eum reiciendis corporis quod totam enim
            laboriosam fuga deleniti consequuntur!
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div >
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+93796651878</li>
            <li>TazhibTechnology@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copy Right Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">&copy; 2024 Prescripto. All rights reserved to TazhibTechnology.</p>
      </div>
    </div>
  );
};

export default Footer;

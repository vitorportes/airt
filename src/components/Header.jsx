import { Link } from "react-router-dom";
import { robot } from "../assets";
import React from "react";

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4] '>
      <Link to='/' className='flex justify-center items-center text-xl'>
        <img src={robot} alt='logo' className='w-10 object-contain' />
        <h1 className='font-extrabold mt-2 text-3xl ml-2'>AIrt</h1>
      </Link>

      <Link
        to='create-post'
        className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
      >
        Create
      </Link>
    </header>
  );
};

export default Header;

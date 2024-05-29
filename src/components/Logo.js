import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/' className='font-poetsen text-black text-3xl font-bold '>
      Transilvania<span className='text-yellow-300 '>Cars</span>
    </Link>
  );
};

export default Logo;

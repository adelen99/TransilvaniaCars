import React from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const ContactHero = () => {
  return (
    <div className='flex p-2 bg-yellow-200 items-center'>
      <div className='flex items-center mr-4 hover:text-white transition delay-100 cursor-pointer'>
        <CiPhone className='text-2xl' />
        <span className='ml-2'>+40 755 555 555</span>
      </div>

      <div className='flex items-center hover:text-white transition delay-100 cursor-pointer'>
        <MdOutlineEmail className='text-2xl' />
        <span className='ml-2'>contact@transilvaniacars.ro</span>
      </div>
    </div>
  );
};

export default ContactHero;

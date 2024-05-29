import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactHero = () => {
  return (
    <div className='flex p-2 bg-yellow-200 items-center'>
      <div className='flex items-center mr-4  transition delay-100 cursor-pointer'>
        <FaPhoneAlt className='text-sm mt-1' />
        <span className=''>+40 755 555 555</span>
      </div>

      <div className='flex items-center transition delay-100 cursor-pointer'>
        <MdEmail className='text-md mt-1' />
        <span className=''>contact@transilvaniacars.ro</span>
      </div>
    </div>
  );
};

export default ContactHero;

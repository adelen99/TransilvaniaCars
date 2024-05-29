import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";

const ContactSection = () => {
  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 items-center p-8 bg-gray-200 w-full justify-center overflow-x-hidden'>
      <div className='contact-info ml-4'>
        <div className='bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center'>
          <FaPhoneAlt className='text-xl' />
        </div>
        <div className='ml-4'>
          <h2 className='text-start text-lg font-semibold'>Telefon</h2>
          <p className='text-start'>0755 555 555</p>
        </div>
      </div>

      <div className='contact-info ml-4'>
        <div className='bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center'>
          <MdEmail className='text-xl' />
        </div>
        <div className='ml-4'>
          <h2 className='text-start text-lg font-semibold'>Email</h2>
          <p className='text-start'>contact@transilvaniacars.ro</p>
        </div>
      </div>

      <div className='contact-info ml-4'>
        <div className='bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center'>
          <FaLocationDot className='text-xl' />
        </div>
        <div className='ml-4'>
          <h2 className='text-start text-lg font-semibold'>Locație</h2>
          <p className='text-start'>Cluj-Napoca</p>
        </div>
      </div>

      <div className='contact-info ml-4'>
        <div className='bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center'>
          <RiCalendarScheduleFill className='text-xl' />
        </div>
        <div className='ml-4'>
          <h2 className='text-start text-lg font-semibold'>Program</h2>
          <p className='text-start'>8:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

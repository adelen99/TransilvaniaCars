import React from "react";
import { ContactSection, ContactForm, Footer } from "../components";
const Contact = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl font-bold border-b-2 border-rounded border-yellow-200'>
          Contact
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <ContactSection />
      </div>
      <div className='w-full  h-full my-10'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-semibold text-gray-600 mb-4'>
            Locația Noastră
          </h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093736!2d144.95373531590444!3d-37.81627974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8ba32b4c087!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1620307786734!5m2!1sen!2sau'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            title='Google Maps Location'></iframe>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-8 p-6 h-screen'>
        <div className='w-full lg:w-1/2 h-full'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Vrei să iei legătura cu noi?
            </h2>
            <h2 className='text-2xl font-semibold text-gray-600 mb-2'>
              Nu ezita să ne trimiți un mesaj
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

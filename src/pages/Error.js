import React from "react";
import { Footer } from "../components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1 className='text-6xl font-bold mb-4'>Error 404.</h1>
        <p className='text-2xl mb-8'>Pagina nu a fost găsită...</p>
        <Link to='/' className='btn btn-primary bg-yellow-200 border-none'>
          Înapoi la pagina principală
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;

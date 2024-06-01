import React from "react";
import { Link } from "react-router-dom";

const Description2 = () => {
  return (
    <div className='text-start p-2'>
      <h1 className='font-bold text-center text-2xl  py-2'>
        Închiriază modele economice, confortabile și eficiente.
      </h1>
      <p className='text-md  px-2  md:px-0 lg:px-32'>
        Transilvania Cars îți oferă soluția ideală pentru a închiria rapid o
        mașină premium, în condiții flexibile și fără costuri suplimentare.
      </p>
      <p className='text-md px-2  md:px-0 lg:px-32'>
        Flota noastră cuprinde o gamă variată de autoturisme de închiriat în
        Cluj, de la modele economice la modele luxoase. Ne asigurăm că mașinile
        noastre sunt întreținute la cele mai înalte standarde pentru a-ți oferi
        o experiență sigură și plăcută în timpul călătoriei tale.
      </p>
      <div className='flex justify-center mb-4'>
        <Link
          to='/despre-noi'
          className='mr-2 btn font-semibold 
    '>
          Despre noi
        </Link>
        <Link to='/mașini' className='ml-2 btn font-semibold'>
          Descoperă mașinile noastre
        </Link>
      </div>
    </div>
  );
};

export default Description2;

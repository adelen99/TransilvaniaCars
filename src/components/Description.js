import React from "react";
import img1 from "../images/img1.png";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='p-4'>
        <h3 className='text-gray-300 font-semibold text-center py-2'>
          BINE ATI VENIT!
        </h3>
        <h1 className='font-bold text-3xl text-center py-2'>
          Închirieri Auto Cluj-Napoca - Găsește cele mai bune oferte doar la noi
          !
        </h1>
        <p className='text-md  p-2'>
          Puterea de a alege serviciile de Închirieri Auto Cluj-Napoca oferite
          de Transilvania Cars este la îndemâna ta, la un simplu mesaj sau apel
          telefonic.
        </p>
        <p className='text-md  p-2'>
          Oferim cele mai bune oferte, consiliere pe tot parcursul închirierii
          autoturismului, siguranță și confort. Alege calitatea în serviciile de
          Rent a Car. Închirierea unei mașini premium în Cluj este alegerea
          perfectă pentru a-ți transforma călătoria într-o aventură de neuitat.{" "}
        </p>
        <h1 className='font-bold text-3xl text-center py-2'>
          Închiriază modele economice, confortabile și eficiente.
        </h1>
        <p className='text-md  p-2'>
          Transilvania Cars îți oferă soluția ideală pentru a închiria rapid o
          mașină premium, în condiții flexibile și fără costuri suplimentare.
        </p>
        <p className='text-md  p-2'>
          Flota noastră cuprinde o gamă variată de autoturisme de închiriat în
          Cluj, de la modele economice la modele luxoase. Ne asigurăm că
          mașinile noastre sunt întreținute la cele mai înalte standarde pentru
          a-ți oferi o experiență sigură și plăcută în timpul călătoriei tale.
        </p>
        <div className='flex justify-center'>
          <Link
            to='/about'
            className='mr-2 btn font-semibold 
          '>
            Despre noi
          </Link>
          <Link to='/products' className='ml-2 btn font-semibold'>
            Descopera masinile noastre
          </Link>
        </div>
      </div>
      <div class='h-[500px]  ml-4 mt-10 carousel carousel-vertical rounded-box'>
        <div class='carousel-item h-full'>
          <img src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Description;

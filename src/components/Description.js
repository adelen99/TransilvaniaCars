import React from "react";
const Description = () => {
  return (
    <div className='grid grid-cols-1 mb-2 lg:grid-cols-2'>
      <div className='p-4'>
        <h1 className='text-gray-300 text-xl font-semibold text-center py-2'>
          BINE ATI VENIT!
        </h1>
        <h1 className='font-bold text-2xl  text-center mb-2'>
          Închirieri Auto Cluj-Napoca - Găsește cele mai bune oferte doar la noi
          !
        </h1>
        <p className='text-md mb-2'>
          Bine ai venit la Transilvania Cars! Suntem aici să îți oferim cele mai
          bune oferte în închirierea auto, alături de consiliere personalizată
          și siguranță pe tot parcursul călătoriei tale. Alege calitatea și
          confortul cu noi și transformă fiecare drum într-o experiență de
          neuitat.
        </p>
        <p className='text-md  mb-2'>
          Puterea de a alege serviciile de Închirieri Auto Cluj-Napoca oferite
          de Transilvania Cars este la îndemâna ta, la un simplu mesaj sau apel
          telefonic.
        </p>
        <p className='text-md  '>
          Oferim cele mai bune oferte, consiliere pe tot parcursul închirierii
          autoturismului, siguranță și confort. Alege calitatea în serviciile de
          Rent a Car. Închirierea unei mașini premium în Cluj este alegerea
          perfectă pentru a-ți transforma călătoria într-o aventură de neuitat.{" "}
        </p>
      </div>
      <div class=' w-full  mt-12 mb-2 carousel carousel-vertical rounded-box '>
        <div class='carousel-item h-full'>
          <img
            src='https://yetrkwbxweagaibutsoh.supabase.co/storage/v1/object/public/cars/HeroImg1.png?t=2024-05-29T08%3A46%3A19.555Z'
            alt='img1'
            className=' object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Description;

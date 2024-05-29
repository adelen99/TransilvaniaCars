import React from "react";

import { FaCar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const AboutHeader = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-10 '>
      <div className='container mx-auto px-4'>
        <header className='flex justify-center text-center'>
          <h1 className='text-4xl font-bold p-2 mb-10    border-b-2 border-yellow-200'>
            Despre noi
          </h1>
        </header>
        <section className='mt-10 text-lg text-gray-800 leading-relaxed  '>
          <p className='mb-6'>
            Bine ați venit la <strong>TransilvaniaCars</strong>! Suntem o
            companie de închirieri auto dedicată să oferim cele mai bune
            servicii în inima Transilvaniei. Cu o vastă experiență în domeniu,
            ne străduim să punem la dispoziția clienților noștri o flotă
            diversificată de mașini moderne și bine întreținute. Indiferent dacă
            planificați o escapadă de weekend în Munții Carpați, o vizită la
            castelele istorice sau aveți nevoie de un vehicul pentru o călătorie
            de afaceri, avem soluția perfectă pentru dumneavoastră. Mașinile
            noastre sunt echipate cu toate facilitățile necesare pentru a vă
            asigura o călătorie confortabilă și sigură.
          </p>
          <p className='mb-6'>
            La <strong>TransilvaniaCars</strong>, clientul este întotdeauna pe
            primul loc. Echipa noastră profesionistă și prietenoasă este aici
            pentru a vă ajuta să găsiți mașina perfectă pentru orice ocazie. De
            la mașini compacte economice, ideale pentru oraș, până la dube
            pentru transport și SUV-uri spațioase și confortabile, flota noastră
            diversificată acoperă toate cerințele dumneavoastră. Ne asigurăm că
            fiecare vehicul este verificat și întreținut regulat pentru a oferi
            performanțe optime. În plus, toate mașinile noastre sunt dotate cu
            cele mai recente tehnologii de siguranță și confort pentru a vă
            oferi o experiență de neuitat.
          </p>
          <div className='mb-6 container mx-auto grid grid-cols-3 justify-center items-center space-x-8 bg-yellow-200 rounded-xl py-12'>
            <div className='flex flex-col  items-center text-2xl px-4'>
              <FaCar className='text-4xl text-gray-900 ' />
              <p className='text-gray-900 text-center'>Mașini moderne</p>
            </div>

            <div className='flex flex-col items-center text-2xl px-4'>
              <FaClock className='text-4xl text-gray-900  ' />
              <p className='text-gray-900 text-center'>Asistență 24/7</p>
            </div>
            <div className='flex flex-col items-center text-2xl px-4'>
              <FaMapMarkerAlt className='text-4xl text-gray-900' />
              <p className='text-gray-900 text-center'>Locații multiple</p>
            </div>
          </div>

          <p className='mb-6'>
            Descoperiți frumusețea și istoria bogată a Transilvaniei cu
            încredere și confort, alegând <strong>TransilvaniaCars</strong>{" "}
            pentru toate nevoile dumneavoastră de închirieri auto. Cu noi, aveți
            libertatea de a explora locuri pitorești, orașe medievale și
            atracții turistice de renume mondial, fără grija transportului.
            Fiecare drum devine o aventură plăcută atunci când aveți alături un
            partener de încredere. Fie că este vorba de o vacanță de familie, o
            excursie romantică sau o călătorie de afaceri, vehiculele noastre
            sunt gata să vă ducă oriunde doriți.
          </p>
          <p className='mb-4'>
            Vă mulțumim că ați ales <strong>TransilvaniaCars</strong>! Suntem
            dedicați să facem fiecare călătorie specială și memorabilă. Pentru
            rezervări și informații suplimentare, nu ezitați să ne contactați.
            Echipa noastră este mereu gata să vă ajute cu orice informație sau
            suport de care aveți nevoie. Așteptăm cu nerăbdare să vă fim alături
            în aventurile viitoare și să vă oferim cele mai bune servicii de
            închirieri auto din Transilvania.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutHeader;

import React, { useEffect, useRef, useState } from "react";

const ConditionsForRent = () => {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.disconnect();
        }
      });
    }, options);

    const listObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsListVisible(true);
          listObserver.disconnect();
        }
      });
    }, options);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (listRef.current) {
      listObserver.observe(listRef.current);
    }

    return () => {
      headerObserver.disconnect();
      listObserver.disconnect();
    };
  }, []);

  return (
    <div className='flex flex-col text-center justify-center items-center bg-yellow-200 p-4'>
      <ol
        ref={listRef}
        className={`p-2  text-sm sm:text-lg md:text-xl ${
          isListVisible ? "slide-in-right" : ""
        }`}>
        <h2
          ref={headerRef}
          className={`text-lg mb-2 sm:text-xl md:text-2xl font-bold ${
            isHeaderVisible ? "slide-in-right" : ""
          }`}>
          Condiții de Închiriere Auto
        </h2>
        <li className='mb-2'>
          <strong>Vârstă Minimă:</strong> Trebuie să ai cel puțin 21 de ani
          pentru a închiria o mașină.
        </li>
        <li className='mb-2'>
          <strong>Permis de Conducere:</strong> Trebuie să deții un permis de
          conducere valid și în vigoare.
        </li>
        <li className='mb-2'>
          <strong>Asigurare Auto:</strong> Trebuie să ai o asigurare auto
          valabilă, care poate fi verificată la momentul închirierii.
        </li>
        <li className='mb-2'>
          <strong>Metodă de Plată:</strong> Plata se va face cu o carte de
          credit sau debit.
        </li>
        <li>
          <strong>Condiții de Eligibilitate:</strong> Condiții suplimentare pot
          include un istoric de conducere fără incidente majore și o limită
          maximă de kilometri.
        </li>
      </ol>
    </div>
  );
};

export default ConditionsForRent;

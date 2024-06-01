import React from "react";

const ConditionsForRent = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center bg-yellow-200 p-4'>
      <ol className='p-2 text-md '>
        <h2 className='text-xl mb-2 sm:text-xl md:text-2xl font-bold'>
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

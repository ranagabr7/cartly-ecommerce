import React from 'react';
import { FaSpinner } from 'react-icons/fa';
const SpinnerMini = () => {
  return (
    <div className='flex items-center justify-center'>
      <FaSpinner className='animate-spin text-white' />
    </div>
  );
};

export default SpinnerMini;

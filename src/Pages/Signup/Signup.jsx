import React from 'react';
import SignupForm from '../../Feathures/authentication/SignupForm/SignupForm';
import useMoveBack from '../../hooks/useMoveBack';
import ButtonType from '../../ui/ButtonType/ButtonType';

const Signup = () => {
  const moveBack = useMoveBack();
  return (
    <main className="mx-0 my-2 w-full px-5 md:mx-auto md:max-w-[80%] lg:max-w-[50%] ">
      <div >
        <div className='flex items-center justify-between'>
          <h1 className="mb-4 text-2xl font-semibold text-gray-600 uppercase">
            Signup
          </h1>
          <div className="flex justify-end">
            <ButtonType type="back" onClick={moveBack}>
              &larr; Back
            </ButtonType>
          </div>
        </div>
        <SignupForm />
      </div>
    </main>
  );
};
export default Signup;

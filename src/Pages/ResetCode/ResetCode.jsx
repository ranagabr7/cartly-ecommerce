import React from 'react';
import RecetCodeForm from '../../Feathures/authentication/RecetCodeForm/RecetCodeForm';
import useMoveBack from '../../hooks/useMoveBack';
import ButtonType from '../../ui/ButtonType/ButtonType';

export default function ResetCode() {
   const moveBack = useMoveBack();
  return (
    <main className="mx-0 my-5 w-full px-5 md:mx-auto md:max-w-[80%] lg:max-w-[50%] ">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-semibold text-gray-600 uppercase">
            verify code
          </h1>
          <div className="flex justify-end">
            <ButtonType type="back" onClick={moveBack}>
              &larr; Back
            </ButtonType>
          </div>
        </div>
        <RecetCodeForm />
      </div>
    </main>
  );
}

import React from 'react';
import ForgetPasswordPasswordEmail from '../../Feathures/authentication/ForgetPasswordPasswordEmail/ForgetPasswordPasswordEmail';
import useMoveBack from '../../hooks/useMoveBack';
import ButtonType from '../../ui/ButtonType/ButtonType';

export default function ForgetPassword() {
  const moveBack = useMoveBack();
  return (
    <main className="mx-0 my-5 w-full px-5 md:mx-auto md:max-w-[80%] lg:max-w-[50%]">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-semibold text-gray-600 uppercase">
            Enter Your Email
          </h1>
          <div className="flex justify-end">
            <ButtonType type="back" onClick={moveBack}>
              &larr; Back
            </ButtonType>
          </div>
        </div>
        <ForgetPasswordPasswordEmail />
      </div>
    </main>
  );
}

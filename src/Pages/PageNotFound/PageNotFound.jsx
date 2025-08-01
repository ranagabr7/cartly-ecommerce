import React from 'react';
import ButtonType from '../../ui/ButtonType/ButtonType';
import useMoveBack from '../../hooks/useMoveBack';

const PageNotFound = () => {
  const moveBack = useMoveBack();
  return (
    <section className="mx-auto flex max-w-5xl items-center flex-col lg:max-w-5xl mt-40">
      <div className="rounded-xl bg-white px-28 py-10 text-center shadow-xl">
        <div className="flex justify-end pb-9">
          <ButtonType type="back" onClick={moveBack}>
            &larr; Back
          </ButtonType>
        </div>
        <h1 className="text-2xl font-bold text-gray-700">
          The page you are looking for could not be found 😢
        </h1>
      </div>
    </section>
  );
};

export default PageNotFound;

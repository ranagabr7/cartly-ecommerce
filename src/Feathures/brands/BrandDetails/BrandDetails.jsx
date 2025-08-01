import React from 'react';
import useBrand from '../useBrand';
import Spinner from '../../../ui/Spinner/Spinner';
import useMoveBack from '../../../hooks/useMoveBack';
import ButtonType from '../../../ui/ButtonType/ButtonType';

const BrandDetails = () => {
  const { brand, isPending } = useBrand();
  const moveBack = useMoveBack();

  if (isPending) return <Spinner />;
  const { _id: brandId, image, name, createdAt } = brand.data;

  return (
    <section className="flex flex-col space-y-5 overflow-hidden mx-8  mb-10 text-center md:text-left">
      <div className='flex justify-end'>
        <ButtonType type="back" onClick={moveBack}>
          &larr; Back
        </ButtonType>
      </div>

      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow-lg duration-700 hover:bg-gray-100 hover:transition-colors md:flex-row">
        <img
          className="w-full rounded-t-lg object-cover md:rounded-none md:rounded-s-lg"
          src={image}
          alt={name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-700">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            It is one of the largest companies, established in the year
            {createdAt}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandDetails;

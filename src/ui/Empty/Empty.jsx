import React from 'react';
import useMoveBack from '../../hooks/useMoveBack';
import ButtonType from '../../ui/ButtonType/ButtonType';
import { useNavigate } from 'react-router';
function Empty({ children }) {
  const navigate = useNavigate();
  return (
    <section className="mx-auto my-10 flex max-w-5xl flex-col items-center lg:max-w-5xl">
      <div className="rounded-xl bg-white px-28 py-10 text-center shadow-xl">
        <div className="flex justify-end pb-9">
          <ButtonType type="primary" onClick={() => navigate('/products')}>
            &larr; Back to shop
          </ButtonType>
        </div>
        <h1 className="text-2xl font-bold text-gray-700 capitalize">
          {children} <span>🧐</span>
        </h1>
      </div>
    </section>
  );
}

export default Empty;

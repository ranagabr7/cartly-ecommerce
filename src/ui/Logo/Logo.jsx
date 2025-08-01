import React from 'react';
import { FaOpencart } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
const Logo = () => {
  const navogate = useNavigate();
  function handleNavigate() {
    navogate('/');
  }
  return (
    <div
      className="flex cursor-pointer items-center justify-center"
      onClick={handleNavigate}
    >
      <span className="text-4xl text-[var(--main-color)]">
        <FaOpencart />
      </span>
      <h1 className="text-2xl tracking-widest uppercase">cartly</h1>
    </div>
  );
};

export default Logo;

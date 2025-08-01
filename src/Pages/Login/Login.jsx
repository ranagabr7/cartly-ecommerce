import React from 'react';
import Logo from '../../ui/Logo/Logo';
import LoginForm from '../../Feathures/authentication/LoginForm/LoginForm';

const Login = () => {
  return (
    <main className="mx-0 my-5 w-full px-5 md:mx-auto md:max-w-[80%] lg:max-w-[50%]">
      <div className="">
        <h1 className="mb-4 text-2xl font-semibold text-gray-600 uppercase">
          Login
        </h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;


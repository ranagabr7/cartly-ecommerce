import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../../Context/AuthContextProvider';
import Logout from '../../Feathures/authentication/Logout/Logout';

const AuthIcon = () => {
  const navigate = useNavigate();
  const { token } = useContext(authContext);
  if (localStorage.getItem('token') !== null || token) return <Logout />;
  return (
    <div>
      <button
        onClick={() => navigate('/login')}
        type="button"
        className="cursor-pointer rounded-md border border-gray-500 px-3 py-1 text-center text-sm font-medium text-gray-700"
      >
        Login
      </button>
    </div>
  );
};

export default AuthIcon;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../../../Context/AuthContextProvider';

function Logout() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(authContext);
  function handleLogout() {
    setToken(localStorage.removeItem('token'));
    setToken(null);
    navigate('/login');
  }
  return (
    <div>
      <button
        onClick={handleLogout}
        type="button"
        className="cursor-pointer rounded-md border border-gray-500 px-3 py-1 text-center text-sm font-medium text-gray-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

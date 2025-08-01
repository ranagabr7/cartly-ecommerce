import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthContextProvider';
import Login from '../../Pages/Login/Login';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(authContext);
  if (localStorage.getItem('token') === null || !token) return <Login />;
  return <div>{children}</div>;
};

export default ProtectedRoute;

import React, { createContext, useEffect, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  useEffect(
    function () {
      if (localStorage.getItem('token') !== null) {
        setToken(localStorage.getItem('token'));
      }
    },
    [token],
  );
  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;

import React from 'react';
import Logo from '../Logo/Logo';
import MainNav from '../MainNav/MainNav';
import AuthIcon from '../AuthIcon/AuthIcon';

const Header = () => {
  return (
    <div className="flex items-center justify-between py-3">
      {/* <Logo /> */}
      <MainNav />
      {/* <AuthIcon /> */}
    </div>
  );
};

export default Header;

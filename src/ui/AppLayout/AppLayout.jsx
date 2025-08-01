import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {/* our content */}
      <div className="bg-gray-50">
        {/* <main className="mx-auto max-w-4xl pt-12 lg:max-w-5xl"> */}
        <main className="pt-12">
          <Outlet />
        </main>
      </div>
      {/* footer */}
      <div className="mx-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

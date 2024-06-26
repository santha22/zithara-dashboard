import React from 'react';
import Sidebar from './Sidebar';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import NotFound from '../NotFound';

const Layout = () => {
  const redirectToNotFound = () => <Navigate to="/404" />;

  return (
    <div className='flex flex-col md:flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;

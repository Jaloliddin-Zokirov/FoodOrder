import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/Sidebar'

const Home = () => {
  return (
    <>
    <SideBar />
    <main>
      <Outlet />
    </main>
    </>
  );
}

export default Home;

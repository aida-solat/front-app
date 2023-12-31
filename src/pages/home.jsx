import React from 'react';
import ProductList from '../components/productList';
import SidebarMenu from '../components/sidebarMenu';
import NavbarComponent from '../components/navbarComponent';

function Home() {
  return (
    <>
      <NavbarComponent />
      <div className='flex'>
        <SidebarMenu />
        <ProductList />
      </div>
    </>
  );
}

export default Home;

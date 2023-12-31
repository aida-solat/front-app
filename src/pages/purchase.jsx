import React from 'react';
import SidebarMenu from '../components/sidebarMenu';
import NavbarComponent from '../components/navbarComponent';
import PurchaseList from '../components/purchaseList';

function Purchase() {
  return (
    <>
      <NavbarComponent />
      <div className='flex'>
        <SidebarMenu />
        <PurchaseList />
      </div>
    </>
  );
}

export default Purchase;

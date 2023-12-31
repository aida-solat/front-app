import { Sidebar, FloatingLabel } from 'flowbite-react';
import { BiLogoProductHunt, BiSolidPurchaseTag } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

function SidebarMenu() {
  const location = useLocation();
  return (
    <Sidebar className='h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <FloatingLabel
            variant='outlined'
            label='Placeholder'
            className='mb-4'
          />

          <Sidebar.Item
            active={location.pathname === '/home'}
            href='/home'
            icon={BiLogoProductHunt}
          >
            Products
          </Sidebar.Item>
          <Sidebar.Item
            active={location.pathname === '/purchase'}
            href='/purchase'
            icon={BiSolidPurchaseTag}
          >
            Purchases
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarMenu;

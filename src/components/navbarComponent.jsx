import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { BiMenu } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { IoExit } from 'react-icons/io5';

function NavbarComponent() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <BiMenu className='w-6 h-6 mr-4' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Welcome to happyturtle.com
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2 gap-4 place-items-center'>
        <IoIosNotifications className='w-6 h-6' />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@domain.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        <IoExit className='w-6 h-6 mr-4' />
      </div>
    </Navbar>
  );
}

export default NavbarComponent;

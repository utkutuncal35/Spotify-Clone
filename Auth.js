import React from 'react'
import { Menu } from '@headlessui/react'
import { FaSortDown,   } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


function Auth() {
  const user = {
    name: 'Utku Tunçal',
    avatar: "https://i.scdn.co/image/ab67757000003b825ab0f8443957c50f5f97a0ea"
  }
  return (
    <Menu as={"nav"} className={"relative"}>
      {({open}) => (
        <>
    <Menu.Button className={`flex items-center pr-2 h-8 hover:bg-active rounded-3xl ${open ? 'bg-active' : 'bg-black'}`}>
      <img src={user.avatar} alt='user' className='w-8 h-8 rounded-full p-px mr-2'/>
      <span className='text-sm font-semibold mr-2'>{user.name}</span>
       <span className={open === true && 'rotate-180'}>
         <FaSortDown size={16} className='mb-1.5'/>
        </span> 
    </Menu.Button>
    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
          >
            Account
            <FaArrowUpRightFromSquare size={16}/>
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
          >
            Profile
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-20'}`}
          >
            Log out
          </Link>
        )}
      </Menu.Item>
    </Menu.Items>
        </>
      )}  
  </Menu>
  )
}

export default Auth
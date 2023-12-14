import React from 'react'
import logo from '../img/logo.png/Spotify_Logo_RGB_White.png'
import Menu from './Sidebar/Menu'
import { FaSquarePlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import PlayList from './Sidebar/PlayList';
import DownloadApp from './Sidebar/DownloadApp';



function Sidebar() {
  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <a className='mb-7 px-6'>
        <img src={logo} className='h-10' alt=''/>
      </a>
      <Menu/>
      <nav className='mt-6'>
        <ul>
          <li>
            <a href='' className='px-6 py-2 flex text-sm items-center text-link font-semibold hover:text-white'>
              <span className="w-6 h-6 flex items-center justify-center mr-4">
              <FaSquarePlus size={24}/>
              </span>
              Create a playlist
            </a>
          </li>
          <li>
            <a href='' className='px-6 py-2 flex text-sm items-center text-link font-semibold hover:text-white'>
              <span className="w-6 h-6 flex items-center  justify-center mr-4 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-sm">
              <FaHeart size={15}/>
              </span>
              Favorite songs
            </a>
          </li>
        </ul>
      </nav>
      <PlayList/>
      <DownloadApp/>
    </aside>
  )
}

export default Sidebar
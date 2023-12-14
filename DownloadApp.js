import React from 'react'
import { MdOutlineDownloadForOffline } from "react-icons/md";


function DownloadApp() {
  return (
    <a className='h-10 px-6 text-sm font-semibold gap-x-4 text-link cursor-pointer hover:text-white flex flex-shrink-0 items-center'>
        <MdOutlineDownloadForOffline size={20} />
        Download The App
    </a>
  )
}

export default DownloadApp
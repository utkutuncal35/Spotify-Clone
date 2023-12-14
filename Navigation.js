import React from 'react'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import { useHistory } from "react-router-dom"

function Navigation() {
    const history = useHistory() 

  return (
    <div className='flex items-center gap-x-4 '>
        <button onClick={() => history.goBack()} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
          <FaChevronLeft/>
        </button>
        <button onClick={() => history.goForward()} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
          <FaChevronRight/>
        </button>
    </div>
  )
}

export default Navigation
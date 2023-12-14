import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlay } from "react-icons/fa6";

function Section({title, more, items}) {
  const imageStyle = item => {
    if(item.type === 'artist'){
      return 'rounded-full'
    } else if (item.type === 'podcast'){
      return 'rounded-xl'
    } else {
      return 'rounded'
    }
  }
  return (
    <section>
      <header className='flex items-center justify-between mb-4'>
       <h3 className='text-2xl cursor-pointer text-white font-semibold hover:underline tracking-tight'>{title}</h3>
       {more && (
         <NavLink className="text-xs hover:underline tracking-wider font-semibold uppercase text-link" to={more}>
            SEE ALL
         </NavLink>
       )}
      </header>
      <div className='grid grid-cols-5 gap-x-4'>
  {items.map((item) => (
    <NavLink className='bg-footer rounded w-[250px] p-4 hover:bg-active group' to='/' key={item.id}>
      <div className='relative mb-4'>
        <img
          src={item.image}
          className={`'absolute inset-0 w-[250px] h-[200px] ${imageStyle(item)} object-cover'`}
          alt=''
        />
        <button className='w-10 h-10 rounded-full items-center group-hover:flex justify-center hidden bg-primary absolute bottom-2 right-2 '>
          <FaPlay size={16}/>
        </button>
      </div>
      <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>
        {item.title}
      </h6>
      <p className='text-link text-sm mt-1'>
        {item.describtion}
      </p>
    </NavLink>
  ))}
</div>

    </section>
  )
}

export default Section
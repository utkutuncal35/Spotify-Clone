import React from 'react'

function PlayList() {
  return (
    <nav className='mx-6 mt-2 py-1 scrollbar-hide flex-auto overflow-auto border-white border-t border-opacity-10'>
        {new Array(20).fill(<div>
                <a href='#' className='text-s text-link hover:text-white flex flex-row h-8 items-center list-none'>
                    playlist utku tuncal
                </a>
            </div>
        )}

    </nav>
  )
}

export default PlayList
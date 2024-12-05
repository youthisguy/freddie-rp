import React from 'react'

const Header = () => {
  return (
    <div className='container mx-0 max-w-full flex justify-between items-center flex-wrap gap-4'>
    <img src='./FDV-logo.png' alt='FDV' className='w-auto h-12 sm:h-16 ml-2'/>
    <img src='./Coins-header.png' alt='Coins' className='w-auto h-16 sm:h-32 -mr-0'/>
  </div>
  )
}

export default Header
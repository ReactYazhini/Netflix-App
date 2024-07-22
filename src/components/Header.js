import React from 'react';
import Mainlogo from "../img/Netflix_Logo.png"

const Header = () => {
  return (
    <div>
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10'>
            <img src={Mainlogo} alt="Main Logo" className='w-40'/>
        </div>
    </div>
  )
}

export default Header
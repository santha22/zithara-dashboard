import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import profile from '../../assets/profile.jpg';
import { MdAccountBalanceWallet } from "react-icons/md";


const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
      <div>
        <span className='text-xl font-semibold'>Customers</span>
      </div>
      <div className='flex items-center gap-2'>
        <div className='bg-red-200 w-24 rounded h-8 flex items-center justify-center'>
          <MdAccountBalanceWallet size={25} color='red'/>
          <span className='text-xs'>Rs 38.50</span>
        </div>
        <IoIosNotifications size={25}/>
        <div className='h-10 w-10 rounded-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${profile})` }} />
      </div>
    </div>
  )
}

export default Header;

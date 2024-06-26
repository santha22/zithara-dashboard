import React from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS} from '../libs/consts/index'
// import {
// 	HiOutlineViewGrid,
// 	HiOutlineCube,
// 	HiOutlineShoppingCart,
// 	HiOutlineUsers,
// 	HiOutlineDocumentText,
// 	HiOutlineAnnotation
// } from 'react-icons/hi'





const linkClass = 'flex items-center text-black gap-2 font-light px-3 py-2 hover:bg-green-600 hover:text-white hover:no-underline active:bg-green-300 rounded-sm text-base';

const Sidebar = () => {

  // const DASHBOARD_SIDEBAR_LINKS = [
  //   {
  //     key: 'customers',
  //     label: 'Customers',
  //     path: '/',
  //     icon: <HiOutlineViewGrid />
  //   },
  //   {
  //     key: 'customer analytics',
  //     label: 'Customer analytics',
  //     path: '/products',
  //     icon: <HiOutlineCube />
  //   },
  //   {
  //     key: 'campaigns',
  //     label: 'Campaigns',
  //     path: '/orders',
  //     icon: <HiOutlineShoppingCart />
  //   },
  //   {
  //     key: 'orders',
  //     label: 'Orders',
  //     path: '/customers',
  //     icon: <HiOutlineUsers />
  //   },
  //   {
  //     key: 'lead management',
  //     label: 'Lead management',
  //     path: '/transactions',
  //     icon: <HiOutlineDocumentText />
  //   },
  //   {
  //     key: 'cart',
  //     label: 'Cart',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   },
  //   {
  //     key: 'communications',
  //     label: 'Communications',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   },
  //   {
  //     key: 'transactions',
  //     label: 'Transactions',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   },
  //   {
  //     key: 'redeem voucher',
  //     label: 'Redeem Voucher',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   },
  //   {
  //     key: 'feedback',
  //     label: 'Feedback',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   },
  //   {
  //     key: 'communication prices',
  //     label: 'Communication prices',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  //   }
  // ]

  return (
    <div className='bg-white w-60 p-3 flex flex-col text-black fixed md:relative h-full md:h-auto border-gray-200 border-r'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <span className='font-bold text-3xl ml-2 mb-2'>Zithara</span>
      </div>
      <div className='mb-4'><p className='text-gray-500 ml-3 font-bold'>MENU OPTIONS</p></div>
      <div className='flex-1 py-4 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <Link key={item.key} to={item.path} className={linkClass}>
            <item.icon />
          
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;

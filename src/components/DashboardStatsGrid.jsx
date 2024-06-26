import React from 'react'
import { IoMdContacts } from "react-icons/io";

const DashboardStatsGrid = () => {
    return (
        <div className='flex gap-4 w-full'>
            <div className="bg-white rounded-sm p-4 flex-1 flex-col border border-gray-200 flex">
                <div className='flex justify-between pb-5'>
                    <p className='text'>Total customers</p>
                    <IoMdContacts />
                </div>
                <strong className='text-2xl mb-2'>9013</strong>
                <p><span className='text-green-600'>&#8593; 13.54%</span> as compared to last month</p>
            </div>
            <div className="bg-white rounded-sm p-4 flex-1 flex-col border border-gray-200 flex">
                <div className='flex justify-between pb-5'>
                    <p className='text'>Total Leads</p>
                    <IoMdContacts />
                </div>
                <strong className='text-2xl mb-2'>3850</strong>
                <p><span className='text-red-600'>&#8595; 13.54%</span> as compared to last month</p>
            </div>
            <div className="bg-white rounded-sm p-4 flex-1 flex-col border border-gray-200 flex">
                <div className='flex justify-between pb-5'>
                    <p className='text'>Total Orders</p>
                    <IoMdContacts />
                </div>
                <strong className='text-2xl mb-2'>63821</strong>
                <p><span className='text-green-600'>&#8593; 13.54%</span> as compared to last month</p>
            </div>
        </div>
    )
}

export default DashboardStatsGrid

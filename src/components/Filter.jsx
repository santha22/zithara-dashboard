import React from 'react'

const Fileter = () => {
    return (
        <div className='w-full flex flex-col gap-1 h-full bg-white'>
            <div className='flex justify-between border-gray-300 border-b p-2'>
                
                    <div className="w-full max-w-md h-full relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="border-r h-fit py-5 px-8 w-full focus-visible:outline-none border-gray-300" placeholder="Search customer by name, email ID, phone number" required />
                    </div>
                    {/* block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
                <div>
                 <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Export</button>
                </div>
            </div>

            <div className='flex justify-between p-2'>
                <div className='flex space-x-3 mt-2'>
                    <p>Filters</p>
                    <p className='bg-[#F1F5F9] px-5 flex items-center rounded-sm'>All dates</p>
                    <p className='bg-[#F1F5F9] px-5 flex items-center rounded-sm'>All countries</p>
                    <p className='bg-[#F1F5F9] p-1 rounded-sm'>All state</p> 
                    <p className='bg-[#F1F5F9] p-1 rounded-sm'>All city</p> 
                    <p className='bg-[#F1F5F9] p-1 rounded-sm'>All timezones</p> 
                    <p className='bg-[#DBEAFE] px-2 flex items-center rounded-sm'>All</p>
                </div>

                <div>
                    <button className='bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Refresh</button>
                </div>
            </div>
            

            

        </div>
    )
}

export default Fileter;

import React, { useEffect, useState, useRef } from 'react'

const LeadMangement = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [radioInputValue, setRadioInputValue] = useState('');
    const dropdownRef = useRef(null);

    const [filters, setFilters] = useState([]);

    const options = [
        'Spouce phone',
        'adsfasdfasdfsd',
        'Last Visited Store',
        'College Name',
        'Question 2 for feedback'
    ];

    const radioOptions = [
        'contains',
        'not contains',
        'starts with',
        'ends with',
        'equals to',
        'not equals to',
        'exists',
        "doesn't exist"
    ];

    const addFilter = (filter) => {
        setFilters([...filters, filter]);
    };

    const removeFilter = (index) => {
        setFilters(filters.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setInputValue('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);



    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setFilteredOptions(
            options.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            )
        );
        setIsDropdownOpen(true);
    };

    const handleInputFocus = () => {
        setFilteredOptions(options);
        setIsDropdownOpen(true);
    }

    const handleOptionclick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setInputValue(option);
        setSelectedRadio('');
        setIsPopupOpen(true);
        setIsDropdownOpen(false);
    }

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    const handleRadioInputChange = (event) => {
        setRadioInputValue(event.target.value);
    };

    const clearSelection = () => {
        setSelectedOption(null);
        setSelectedRadio('');
        setInputValue('');
    };

    const applyFilter = () => {
        // Handle the filter application logic here
        setIsPopupOpen(false);
        addFilter(`${selectedOption} - ${selectedRadio}: ${radioInputValue}`);
    };

    return (
        <div className='flex flex-col'>
            <div>
                <h1 className='text-lg font-semibold mb-2'>Advance Filters</h1>
                <div className='h-[1px] bg-gray-300 w-full my-5'></div>
                <div className='flex justify-between'>
                    <div ref={dropdownRef} className='relative w-64 h-screen'>
                        <input
                            type='text'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />

                        {isDropdownOpen && (
                            <div className='absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
                                {filteredOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className='px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white'
                                        onClick={() => handleOptionclick(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'
                            onClick={clearSelection}
                        >
                            Clear all
                        </button>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className='flex justify-between pb-3.5'>
                                                <div>
                                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Choose Filters</h3>
                                                </div>
                                                <button onClick={() => setIsPopupOpen(false)}>✖</button>
                                            </div>
                                            <div className='min-w-80 pb-4'>
                                                <ul className='space-y-2'>
                                                    {radioOptions.map((option) => (
                                                        <li key={option} className='flex flex-col'>
                                                            <div className='flex items-center space-y-2'>
                                                                <input
                                                                    type='radio'
                                                                    id={option}
                                                                    name='filter'
                                                                    className='mr-2 cursor-pointer'
                                                                    value={option}
                                                                    checked={selectedRadio === option}
                                                                    onChange={handleRadioChange}
                                                                />
                                                                <label className='cursor-pointer' htmlFor={option}>{option}</label>
                                                            </div>
                                                            {selectedRadio === option && (
                                                                <div className='ml-8'>
                                                                    <input className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full' />
                                                                </div>
                                                            )}

                                                            {/* {selectedRadio === option && (
                                                                <div className='w-36'>
                                                                    <input
                                                                        type='text'
                                                                        className='mt-2 w-full px-2 py-1 border border-gray-300 rounded-lg'
                                                                        value={radioInputValue}
                                                                        onChange={handleRadioInputChange}

                                                                    />
                                                                </div>
                                                            )} */}
                                                        </li>
                                                        
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3">
                                    <button type="button" class="w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 hover:opacity-90">Apply Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* {isPopupOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-4 rounded-lg w-60'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-lg font-semibold mb-2'>Choose filters</h3>
                            <button className='text-red-500' onClick={() => setIsPopupOpen(false)}>✖</button>
                        </div>
                        
                        <div> 
                            <ul className='space-y-2'>
                                {radioOptions.map((option) => (
                                    <li key={option} className='flex flex-col items-center'>
                                        <div className='flex items-center'>
                                            <input 
                                            type='radio' 
                                            id={option} 
                                            name='filter' 
                                            className='mr-2' 
                                            value={option}
                                            checked={selectedRadio === option}
                                            onChange={handleRadioChange}
                                            />
                                            <label htmlFor={option}>{option}</label>
                                        </div>

                                        {selectedRadio === option && (
                                            <div className='w-36'>
                                            <input 
                                                type='text'
                                                className='mt-2 w-full px-2 py-1 border border-gray-300 rounded-lg'
                                                value={radioInputValue}
                                                onChange={handleRadioInputChange}
                                            
                                            />
                                            </div>
                                        )}
                                    </li> 
                                ))}
                            </ul>
                        </div>

                        <button onClick={applyFilter} className='mt-4 bg-blue-600 text-white px-4 py-2 rounded'>
                            Apply Filter
                        </button>

                        
                    </div>
                </div>
            )} */}






        </div>
    )
}

export default LeadMangement;

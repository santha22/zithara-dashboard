import React, { useEffect, useState, useRef } from 'react';

const Sample = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [radioInputValue, setRadioInputValue] = useState('');
    const [showInputField, setShowInputField] = useState(false);
    const [radioOptions, setRadioOptions] = useState([]);
    const [dropdownValues, setDropdownValues] = useState([]);
    const dropdownRef = useRef(null);
    const initial = useState(true);

    const [filters, setFilters] = useState([]);

    const options = [
        'Spouse phone',
        'adsfasdfasdfsd',
        'Last Visited Store',
        'College Name',
        'Question 2 for feedback',
        'Question 3 for feedback',
        'Shipping street',
        'Name',
        'Created At',
        'WhatsApp ID',
        'Gender',
        'Shipping state',
        'test property',
        'School Name',
        'Shipping country',
        'Shipping State',
        'test is unique',
        'Shipping city',
        'Question 1 for feedback',
        'WhatsApp Number',
        'country',
        'total spent',
        'Is NRI'
    ];

    const optionsObj = {
        'Spouse phone': 'string',
        'adsfasdfasdfsd': 'number',
        'Last Visited Store': 'string',
        'College Name': 'string',
        'Question 2 for feedback': 'number',
        'Question 3 for feedback': 'number',
        'Shipping street': 'string',
        'Name': 'string',
        'Created At': 'date',
        'WhatsApp ID': 'string',
        'Gender': 'number',
        'Shipping state': 'string',
        'test property': 'number',
        'School Name': 'string',
        'Shipping country': 'string',
        'Shipping State': 'string',
        'test is unique': 'string',
        'Shipping city': 'string',
        'Question 1 for feedback': 'number',
        'WhatsApp Number': 'string',
        'country': 'string',
        'total spent': 'operator',
        'Is NRI': 'boolean'
    };



    const radioObj = {
        'string': ['contains', 'not contains', 'starts with', 'ends with', 'equals to', 'not equals to', 'exists', "doesn't exist"],
        'number': ['equals to', 'not equals to'],
        'boolean': ['Yes', 'No', 'exists', "doesn't exist"],
        'date': ['is', 'is before', 'is after', 'is on or after', 'range', 'relative to today', 'exists', "doesn't exist"],
        'operator': ['between', 'less than or equal to', 'greater than or equal to', 'less than', 'greater than', 'equal to', 'not equal to']
    };

    const dropdownValuesObject = {
        'adsfasdfasdfsd': ['dfasdfsasdfsd', 'asdfasdfsasdfss'],
        'Question 2 for feedback': ['option1', 'option2', 'option3', 'option4'],
        'Question 3 for feedback': ['option1', 'option2', 'option3', 'option4'],
        'Gender': ['male', 'female'],
        'test property': ['option1', 'option2'],
        'Question 1 for feedback': ['option1', 'option2', 'option3']
    };

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
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setInputValue(option);
        setSelectedRadio('');
        setRadioOptions(radioObj[optionsObj[option]]);
        setDropdownValues(dropdownValuesObject[option] || []);
        setIsPopupOpen(true);
    };

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
        setRadioInputValue('');  // Reset input value when radio button changes
    };

    const handleRadioInputChange = (event) => {
        setRadioInputValue(event.target.value);
    };

    const clearSelection = () => {
        setSelectedOption(null);
        setSelectedRadio('');
        setInputValue('');
        setShowInputField(false);
    };

    const applyFilter = () => {
        addFilter({
            selectOption: selectedOption,
            selectRadio: selectedRadio,
            radioInputValue: radioInputValue
        });
        setIsPopupOpen(false);
        clearSelection();
    };

    const clearAllFilters = () => {
        setFilters([]);
    };

    return (
        <div className='container mx-auto'>
            <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
                <h3 className='font-bold'>Advacne Filters</h3>
                <div className='h-[1px] bg-gray-300 w-full my-5'></div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-10 items-center w-full'>
                        {filters.length > 0 && (
                            <div className='flex items-center ml-4'>
                                <div className='mt-4 flex-wrap'>
                                    <ul className='flex gap-10 flex-wrap'>
                                        {filters.map((filter, index) => (
                                            <div className='bg-gray-200 w-52 p-2 space-y-10' key={index}>
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <li className='flex flex-col mb-2'>
                                                            <p className='mr-2'>{filter.selectOption}</p>
                                                            <p className='mr-2 font-bold'>{filter.selectRadio} {filter.radioInputValue}</p>
                                                        </li>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className='text-black'
                                                            onClick={() => removeFilter(index)}
                                                        >
                                                            ✖
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className='relative w-full'>
                            {!showInputField && (
                                <div className='flex justify-between'>

                                    <div>
                                        <button
                                            className='bg-blue-200 text-blue-500 py-2 mr-16 px-4 h-10'
                                            onClick={() => setShowInputField(true)}
                                        >
                                            New Filter
                                        </button>
                                    </div>
                                    {filters.length === 0 && (
                                        <div>
                                        <button
                                            className='bg-transparent hover:bg-gray-100 text-gray-500 h-10 hover:text-black py-2 px-4 border border-gray-200 rounded-md'
                                            onClick={clearAllFilters}
                                        >
                                            Clear all
                                        </button>
                                        
                                    </div>
                                    )}
                                    
                                </div>
                            )}
                            {showInputField && (
                                <div ref={dropdownRef} className='w-64'>
                                    <div className='flex'>
                                        <input
                                            type='text'
                                            className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                        />
                                    </div>
                                    {isDropdownOpen && (
                                        <div className='absolute mt-1 h-52 overflow-scroll overflow-x-hidden bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full'>
                                            {filteredOptions.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className='px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white'
                                                    onClick={() => handleOptionClick(option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        {filters.length > 0 && (
                            <button
                                className='bg-transparent hover:bg-gray-100 text-gray-500 h-10 hover:text-black py-2 px-4 border border-gray-200 rounded-md'
                                onClick={clearAllFilters}
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className='flex justify-between pb-3.5'>
                                                <div>
                                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Choose Filters</h3>
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
                                                            {selectedRadio === option && optionsObj[selectedOption] === 'date' && (
                                                                <div className='ml-8'>
                                                                    <input
                                                                        type='date'
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full'
                                                                        value={radioInputValue}
                                                                        onChange={handleRadioInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                            {selectedRadio === option && optionsObj[selectedOption] === 'operator' && option === 'between' && (
                                                                <div className='ml-8 space-x-2'>
                                                                    <label>From:</label>
                                                                    <input
                                                                        type='number'
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-20'
                                                                        placeholder='0'
                                                                        onChange={(e) => setRadioInputValue({ ...radioInputValue, from: e.target.value })}
                                                                    />
                                                                    <label>To:</label>
                                                                    <input
                                                                        type='number'
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-20'
                                                                        placeholder='0'
                                                                        onChange={(e) => setRadioInputValue({ ...radioInputValue, to: e.target.value })}
                                                                    />
                                                                </div>
                                                            )}
                                                            {selectedRadio === option && optionsObj[selectedOption] === 'operator' && option !== 'between' && (
                                                                <div className='ml-8'>
                                                                    <input
                                                                        type='number'
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full'
                                                                        placeholder='0'
                                                                        value={radioInputValue}
                                                                        onChange={handleRadioInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                            {selectedRadio === option && (optionsObj[selectedOption] === 'string') && (
                                                                <div className='ml-8'>
                                                                    <input
                                                                        type='text'
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full'
                                                                        value={radioInputValue}
                                                                        onChange={handleRadioInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                            {selectedRadio === option && dropdownValues.length > 0 && (
                                                                <div className='ml-8'>

                                                                    <select
                                                                        className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full'
                                                                        value={radioInputValue}
                                                                        onChange={handleRadioInputChange}
                                                                    >
                                                                        <option value='' disabled>Select an option</option>
                                                                        {dropdownValues.map((value, idx) => (
                                                                            <option key={idx} value={value}>{value}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3">
                                    <button
                                        type="button"
                                        className="w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 hover:opacity-90"
                                        onClick={applyFilter}
                                    >
                                        Apply Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sample;

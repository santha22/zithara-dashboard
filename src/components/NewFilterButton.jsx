// import React, { useState } from 'react';

// const NewFilterButton = ({ onClick }) => {
//     const [inputValue, setInputValue] = useState('');
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const options = [
//         'Spouse phone',
//         'adsfasdfasdfsd',
//         'Last Visited Store',
//         'College Name',
//         'Question 2 for feedback'
//     ];

//     const [filteredOptions, setFilteredOptions] = useState(options);

//     const handleInputChange = (event) => {
//         const value = event.target.value;
//         setInputValue(value);
//         setFilteredOptions(
//             options.filter((option) =>
//                 option.toLowerCase().includes(value.toLowerCase())
//             )
//         );
//         setIsDropdownOpen(true);
//     };

//     const handleOptionClick = (option) => {
//         setInputValue(option);
//         setIsDropdownOpen(false);
//         onClick(option); // Pass selected option to parent component
//     };

//     return (
//         <div className='relative'>
//             <input
//                 type='text'
//                 className='bg-blue-200 text-blue-500 py-2 px-4 ml-4 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 placeholder='New Filter'
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 onFocus={handleInputChange}
//             />
//             {isDropdownOpen && (
//                 <div className=' w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
//                     {filteredOptions.map((option, index) => (
//                         <div
//                             key={index}
//                             className='px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white'
//                             onClick={() => handleOptionClick(option)}
//                         >
//                             {option}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default NewFilterButton;


import React, { useState } from 'react';

const NewFilterButton = ({ onClick }) => {
    const [inputValue, setInputValue] = useState('');
    const [clicked, setClicked] = useState(false);
    const [showInputField, setShowInputField] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        'test is unique',
        'Shipping city',
        'Question 1 for feedback city',
        'WhatsApp Number',


    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setIsDropdownOpen(true);
    };

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setInputValue(selectedValue);
        setIsDropdownOpen(false);
        onClick(selectedValue); // Pass selected option to parent component
    };

    const handleInputFocus = () => {
        setClicked(true);
    }
    return (
        <div className='relative'>
            {!clicked ? (
                <div>
                    <button
                        className='bg-blue-200 text-blue-500 py-2 px-4 ml-4'
                        onClick={() => setShowInputField(true)}
                    >
                        New Filte
                    </button>

                    <input
                        type='text'
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={inputValue}
                        onFocus={handleInputFocus}
                    />
                    
                </div>
            ) : (
                <select
                    className='bg-blue-200 text-blue-500 py-2 px-4 ml-4 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={inputValue}
                    onChange={handleOptionChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            )}

        </div>
    );
};

export default NewFilterButton;









// import React, { useEffect, useState, useRef } from 'react';

// const Sample = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [filteredOptions, setFilteredOptions] = useState([]);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [selectedRadio, setSelectedRadio] = useState('');
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [radioInputValue, setRadioInputValue] = useState('');
//     const [showInputField, setShowInputField] = useState(false);
//     const dropdownRef = useRef(null);

//     const [filters, setFilters] = useState([]);

//     const options = [
//         'Spouse phone',
//         'adsfasdfasdfsd',
//         'Last Visited Store',
//         'College Name',
//         'Question 2 for feedback',
//         'Question 3 for feedback',
//         'Shipping street',
//         'Name',
//         'Created At',
//         'WhatsApp ID',
//         'Gender',
//         'Shipping state',
//         'test property',
//         'School Name',
//         'Shipping country',
//         'test is unique',
//         'Shipping city',
//         'Question 1 for feedback city',
//         'WhatsApp Number',

//     ];

//     const radioOptions = [
//         'contains',
//         'not contains',
//         'starts with',
//         'ends with',
//         'equals to',
//         'not equals to',
//         'exists',
//         "doesn't exist"
//     ];

//     const addFilter = (filter) => {
//         setFilters([...filters, filter]);
//     };

//     const removeFilter = (index) => {
//         setFilters(filters.filter((_, i) => i !== index));
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//                 setInputValue('');
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const handleInputChange = (event) => {
//         const value = event.target.value;
//         setInputValue(value);
//         setFilteredOptions(
//             options.filter((option) =>
//                 option.toLowerCase().includes(value.toLowerCase())
//             )
//         );
//         setIsDropdownOpen(true);
//     };

//     const handleInputFocus = () => {
//         setFilteredOptions(options);
//         setIsDropdownOpen(true);
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsDropdownOpen(false);
//         setInputValue(option);
//         setSelectedRadio('');
//         setIsPopupOpen(true);
//     };

//     const handleRadioChange = (event) => {
//         setSelectedRadio(event.target.value);
//     };

//     const handleRadioInputChange = (event) => {
//         setRadioInputValue(event.target.value);
//     };

//     const clearSelection = () => {
//         setSelectedOption(null);
//         setSelectedRadio('');
//         setInputValue('');
//         setShowInputField(false);
//     };

//     const applyFilter = () => {
//         addFilter({
//             selectOption: selectedOption,
//             selectRadio: selectedRadio,
//             radioInputValue: radioInputValue
//         });
//         setIsPopupOpen(false);
//         clearSelection();
//     };

//     const clearAllFilters = () => {
//         setFilters([]);
//         clearSelection();
//     };

//     return (
//         <div className='flex flex-col h-auto'>
//             <div>
//                 <h1 className='text-lg font-semibold mb-2'>Advance Filters</h1>
//                 <div className='h-[1px] bg-gray-300 w-full my-5'></div>
//                 <div className='flex justify-between items-center w-full'>
//                     {showInputField && (
//                         <div ref={dropdownRef} className='relative w-full'>
//                             <div className='flex justify-between'>
//                                 <input
//                                     type='text'
//                                     className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                                     value={inputValue}
//                                     onChange={handleInputChange}
//                                     onFocus={handleInputFocus}
//                                 />
//                                 <button
//                                     className='bg-transparent hover:bg-gray-100 text-gray-500 hover:text-black py-2 px-4 border border-gray-200  rounded-md'
//                                     onClick={clearAllFilters}
//                                 >
//                                     Clear all
//                                 </button>
//                             </div>
//                             {isDropdownOpen && (
//                                 <div className='absolute  mt-1 h-52 overflow-scroll overflow-x-hidden  bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
//                                     {filteredOptions.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className='px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white'
//                                             onClick={() => handleOptionClick(option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                     {selectedOption && !showInputField && (
//                         <div className='flex items-center ml-4'>
//                             <div className='mr-2'>
//                                 <p>{selectedOption}</p>
//                                 {selectedRadio && <p>{selectedRadio} {radioInputValue}</p>}
//                             </div>
//                             <button
//                                 className='text-red-500'
//                                 onClick={clearSelection}
//                             >
//                                 ✖
//                             </button>
//                         </div>
//                     )}
//                     {!showInputField && (
//                         <div className='flex justify-between w-full'>
//                             <button
//                                 className='bg-blue-200 text-blue-500 py-2 px-4 ml-4'
//                                 onClick={() => setShowInputField(true)}
//                             >
//                                 New Filter
//                             </button>
//                             <button
//                                 className='bg-transparent hover:bg-gray-100 text-gray-500 hover:text-black py-2 px-4 border border-gray-200  rounded-md'
//                                 onClick={clearAllFilters}
//                             >
//                                 Clear all
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {isPopupOpen && (
//                 <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
//                     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                             <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                                 <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                                     <div className="sm:flex sm:items-start">
//                                         <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
//                                             <div className='flex justify-between pb-3.5'>
//                                                 <div>
//                                                     <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Choose Filters</h3>
//                                                 </div>
//                                                 <button onClick={() => setIsPopupOpen(false)}>✖</button>
//                                             </div>
//                                             <div className='min-w-80 pb-4'>
//                                                 <ul className='space-y-2'>
//                                                     {radioOptions.map((option) => (
//                                                         <li key={option} className='flex flex-col'>
//                                                             <div className='flex items-center space-y-2'>
//                                                                 <input
//                                                                     type='radio'
//                                                                     id={option}
//                                                                     name='filter'
//                                                                     className='mr-2 cursor-pointer'
//                                                                     value={option}
//                                                                     checked={selectedRadio === option}
//                                                                     onChange={handleRadioChange}
//                                                                 />
//                                                                 <label className='cursor-pointer' htmlFor={option}>{option}</label>
//                                                             </div>
//                                                             {selectedRadio === option && (
//                                                                 <div className='ml-8'>
//                                                                     <input
//                                                                         type='text'
//                                                                         className='h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background font-medium focus-visible:outline-none w-full'
//                                                                         value={radioInputValue}
//                                                                         onChange={handleRadioInputChange}
//                                                                     />
//                                                                 </div>
//                                                             )}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gray-50 px-4 py-3">
//                                     <button
//                                         type="button"
//                                         className="w-full justify-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 hover:opacity-90"
//                                         onClick={applyFilter}
//                                     >
//                                         Apply Filter
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {filters.length > 0 && (
//                 <div className='mt-4'>
//                     <ul className='flex gap-10'>
//                         {filters.map((filter, index) => (
//                             <div className='bg-gray-200 w-52 p-2 space-y-10' key={index}>
//                                 <div className='flex justify-between'>
//                                     <div>
//                                         <li className='flex flex-col mb-2'>
//                                             <p className='mr-2'>{filter.selectOption}</p>
//                                             <p className='mr-2 font-bold'>{filter.selectRadio} {filter.radioInputValue}</p>

//                                         </li>
//                                     </div>
//                                     <div>
//                                         <button
//                                             className='text-black'
//                                             onClick={() => removeFilter(index)}
//                                         >
//                                             ✖
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Sample;

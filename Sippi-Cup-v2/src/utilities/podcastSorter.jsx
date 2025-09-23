import { useState } from "react";

/**
 * Sorter Component
 * Provides date-based sorting for podcasts
 * @component
 */
const Sorter = ({ onSortChange }) => {
    const [sortOrder, setSortOrder] = useState('desc');

    // Sort options configuration
    const sortOptions = [
        { value: 'desc', label: 'Newest: Recently updated' },
        { value: 'asc', label: 'Oldest: GrandPa & GrandMa' }
    ];

    // Handle sort order change
    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        onSortChange(order);
    };

    return (
        <div className="flex items-center justify-start gap-3 mb-6 mt-6">
            <h4 className="font-medium text-[#fff] text-[15px]">Sort by:</h4>
            <div className="flex items-center relative">
                <select 
                    id="updated-filter"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="w-full px-2 py-2 font-plus-jakarta-sans border text-[13px] font-medium border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 text-[#000112] [&>option:checked]:text-black"
                >
                    {sortOptions.map(option => (
                        <option 
                            key={option.value} 
                            value={option.value}
                            className="bg-white text-[13px] font-medium text-gray-400 hover:bg-gray-900"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Sorter;
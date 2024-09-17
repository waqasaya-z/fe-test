'use client'
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";


const FilterBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleFilterBox = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Filters</h2>
        <button onClick={toggleFilterBox}  className="text-gray-400 hover:text-gray-600"> {isOpen ? "✕" : "+"}</button>
      </div>

      {isOpen && (
      <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Operating in
        </label>
        <div className="relative mt-1">
          <CiLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="" >
              Select a country
            </option>
            <option value="">Greece</option>
            <option value="">Italy</option>
          </select>
        </div>
      </div>
        <hr />
      <div className="mb-4 mt-2">
        <label className="block text-sm font-medium text-gray-700">Ferry types</label>
        <div className="mt-2">
          <div className="flex items-center">
            <input
              id="normalFerries"
              name="normal"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="normalFerries" className="ml-2 block text-sm text-gray-700">
              Normal ferries
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              id="highSpeedFerries"
              name="highSpeed"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="highSpeedFerries" className="ml-2 block text-sm text-gray-700">
              High-speed ferries
            </label>
          </div>
        </div>
      </div>
      </div>
      )}
    </div>
  );
};

export default FilterBox;

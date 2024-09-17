import React from "react";
import { VscSettings } from "react-icons/vsc";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { PiSortAscending } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";

const FilterButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 justify-between items-center p-4 text-sm md:text-lg">
      <div className="flex gap-2">
        <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 hover:shadow-md">
          <VscSettings className="text-blue-500" />
          <span className="text-sm font-medium">Filters</span>
        </button>

        <button className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 hover:shadow-md">
        <PiSortAscending />
          <span className="text-sm font-medium">
            Sort by: Reviews
          </span>
          <IoIosArrowDown />
        </button>

        <button className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 hover:shadow-md">
          <FiSearch />
          <span className="text-sm font-medium">Search</span>
        </button>
      </div>
      <div className="hidden md:block mr-4">
        <button className="flex items-center space-x-2 border border-gray-300 text-blue-500 rounded-md px-4 py-2 hover:shadow-md">
          <CiGlobe className="text-blue-500" />
          <span className="text-sm font-medium">Live Map View</span>
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;

import React from 'react';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="w-full md:basis-[45%]">
      <h3 className="mb-2 flex items-center gap-0.5 text-sm font-semibold text-gray-500">
        <span className="">
          <HiMiniMagnifyingGlass className="text-xl" />
        </span>
        Explore our product
      </h3>
      <div className="">
        <label
          htmlFor="productSearch"
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="productSearch"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-white p-3 ps-10 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search for your product..."
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from 'react';
import styles from './Sortby.module.css';
import { BsSortDown } from 'react-icons/bs';
import { HiMiniXMark } from 'react-icons/hi2';
import { useSearchParams } from 'react-router';
export default function Sortby() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortPrice = searchParams.get('sortByPrice') || '';
  // console.log(selectedPrice);

  function handleChange(e) {
    const selected = e.target.value;
    searchParams.set('sortByPrice', selected);
    setSearchParams(searchParams);
  }
  function clearPrice() {
    searchParams.delete('sortByPrice');
    setSearchParams(searchParams);
  }
  return (
    <div className="w-full md:basis-[45%]">
      <h3 className="mb-2 flex items-center gap-0.5 text-sm font-semibold text-gray-500">
        <span className="">
          <BsSortDown className="text-xl" />
        </span>
        Sort By
      </h3>
      <div className={`relative inline-block w-full ${styles.optgroup}`}>
        <select
          onChange={handleChange}
          value={sortPrice}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Price</option>
          <option value="price-lowest">Lowest price</option>
          <option value="price-highest">Highest Price</option>
        </select>
        {sortPrice && (
          <button
            onClick={clearPrice}
            className="absolute end-9 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="clear price"
          >
            <HiMiniXMark />
          </button>
        )}
      </div>
    </div>
  );
}

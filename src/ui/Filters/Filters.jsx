import React from 'react';
import styles from './Filters.module.css';
import { HiMiniXMark, HiOutlineFunnel } from 'react-icons/hi2';
import { useBrands } from '../../Feathures/brands/useBrands';
import { useSearchParams } from 'react-router';

export default function Filters() {
  const { isPending, brands } = useBrands();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  if (isPending) return;
  const { data } = brands;
  const selectedBrand = searchParams.get('brand') || '';
  // console.log(selectedBrand);

  function handleChange(e) {
    const selected = e.target.value;
    // console.log(selected);

    if (selected) {
      setSearchParams({ brand: selected });
    } else {
      setSearchParams({});
    }
  }
  function clearBrand() {
    searchParams.delete('brand');
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full md:basis-[45%]">
      <h3 className="mb-2 flex items-center gap-0.5 text-sm font-semibold text-gray-500">
        <span className="">
          <HiOutlineFunnel className="text-xl" />
        </span>
        Filter By
      </h3>
      <div className={`relative inline-block w-full ${styles.optgroup}`}>
        <select
          value={selectedBrand}
          onChange={handleChange}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="All Brands">All Brands</option>
          {data?.map((brandItem) => (
            <option value={brandItem.name} key={brandItem._id}>
              {brandItem.name}
            </option>
          ))}
        </select>
        {selectedBrand && (
          <button
            onClick={clearBrand}
            className="absolute end-9 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label="Clear brand"
          >
            <HiMiniXMark />
          </button>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
export const PAGE_SIZE = 10;
function Pagination({ metaData }) {
  // console.log(metaData);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = metaData?.currentPage ?? 1;
  const pageCount = metaData?.numberOfPages ?? 1;
  // specific page
  function handlePageChange(page) {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }
  // prev page
  function hanldePrevPage() {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }
  // next page
  function hanldeNextPage() {
    if (currentPage < pageCount) {
      handlePageChange(currentPage + 1);
    }
  }
  if (pageCount <= 1) return null;
  return (
    <div aria-label="Page navigation example ">
      <ul className="flex h-10 items-center -space-x-px text-base">
        <li onClick={hanldePrevPage}>
          <button
            disabled={currentPage === 1}
            className="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-600 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed aria-disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <HiChevronLeft className="text-gray-600" />
          </button>
        </li>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              {page}
            </button>
          </li>
        ))}
        <li onClick={hanldeNextPage}>
          <button
            disabled={currentPage === pageCount}
            className="flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed aria-disabled:cursor-not-allowed"
          >
            <span className="sr-only font-bold">Next</span>
            <HiChevronRight className="font-bold" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;

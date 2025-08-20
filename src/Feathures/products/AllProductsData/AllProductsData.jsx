import React, { useContext, useState } from 'react';
import Search from '../../../ui/Search/Search';
import Pagination from '../../../ui/Pagination/Pagination';
import { useAllProducts } from '../useAllProducts';
import Spinner from '../../../ui/Spinner/Spinner';
import { cartContext } from '../../../Context/CartContextProvider';
import toast from 'react-hot-toast';
import Sortby from '../../../ui/Sortby/Sortby';
import Filters from '../../../ui/Filters/Filters';
import ProductGrid from '../ProductGrid/ProductGrid';
import { useSearchParams } from 'react-router';

export default function AllProductsData() {
  const [isAdding, setisAdding] = useState(null);
  const { addToCart } = useContext(cartContext);
  const { isPending, products } = useAllProducts();
  const data = products?.data || [];
  const [searchParams] = useSearchParams();
  //1- search
  const [searchTerm, setsearchTerm] = useState('');
  const filterBySearch = searchTerm
    ? data.filter((item) =>
        item.title
          .split(' ')
          .slice(0, 2)
          .join(' ')
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase()),
      )
    : data;
  // 2- filter brand
  const selectedBrand = searchParams.get('brand') || '';
  const filteredProducts = selectedBrand
    ? filterBySearch.filter((item) => item.brand.name === selectedBrand)
    : filterBySearch;
  //3- sort price
  const sortPrice = searchParams.get('sortByPrice') || '';
  let sortedByPrice = filteredProducts;
  if (sortPrice) {
    const [field, direction] = sortPrice.split('-');
    const modifier = direction === 'lowest' ? 1 : -1;
    sortedByPrice = [...filteredProducts].sort(
      (a, b) => (a[field] - b[field]) * modifier,
    );
  }
  // 4- pagination
  const metaData = products?.metadata ?? { currentPage: 1, numberOfPages: 1 };
  // handle add to cart
  async function handleAddProduct(id) {
    setisAdding(id);
    const data = await addToCart(id);
    // console.log('add', data);
    if (data) {
      toast.success(data.message);
      setisAdding(null);
    } else {
      setisAdding(null);
      toast.error('Faild add to cart');
    }
  }

  if (isPending) return <Spinner />;

  return (
    <div className="my-8">
      {/* search and filters */}
      <div className="my-5 flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <Filters />
        <Search searchTerm={searchTerm} onSearch={setsearchTerm} />
        <Sortby />
      </div>
      <div className="flex flex-col">
        <ProductGrid
          products={sortedByPrice}
          onAddToCart={handleAddProduct}
          isAdding={isAdding}
        />
        {/* pagination */}
        {metaData.numberOfPages > 1 && (
          <div className="mt-4 self-center">
            <Pagination metaData={metaData} />
          </div>
        )}
      </div>
    </div>
  );
}

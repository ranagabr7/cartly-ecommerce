import React from 'react';
import { useBrands } from '../useBrands';
import Spinner from '../../../ui/Spinner/Spinner';
import styles from './MainBrands.module.css';
import { Link, useNavigate } from 'react-router';
const MainBrands = () => {
  const { isPending, brands } = useBrands();

  if (isPending) return <Spinner />;
  // const { _id: brandId } = brands;
  // console.log(brands.data);

  return (
    <section className={`${styles.cards} mx-3 `}>
      {brands.data.map((brand) => (
        <Link  to={`/brand/${brand._id}`} key={brand._id}>
          <div
            className={`${styles.card} relative rounded-sm bg-white shadow-md`}
          >
            <img src={brand.image} alt={brand.name} />
            <h3 className="my-1 text-2xl font-bold tracking-tight text-gray-400 capitalize">
              {brand.slug}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MainBrands;

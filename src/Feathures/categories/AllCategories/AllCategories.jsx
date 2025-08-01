import React from 'react';
import styles from './AllCategories.module.css';
import { useAllCategories } from '../useAllCategories';
import Spinner from '../../../ui/Spinner/Spinner';
export default function AllCategories() {
  const { isPending, categories } = useAllCategories();
  if (isPending) return <Spinner />;
  const { data } = categories;
  // console.log('cat', data);

  return (
    <section className={`${styles.cards} mx-3`}>
      {data.map((category) => (
        <div
          className={`${styles.card} relative rounded-sm bg-white shadow-md`}
          key={category._id}
        >
          <img
            src={category.image}
            alt={category.name}
            className="h-[250px] w-full"
          />
          <h3 className="my-1 text-2xl font-bold tracking-tight text-gray-400 capitalize">
            {category.slug}
          </h3>
        </div>
      ))}
    </section>
  );
}

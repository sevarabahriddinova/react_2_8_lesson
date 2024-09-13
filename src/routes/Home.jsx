import React from 'react';
import { useGetProductsQuery } from '../redux/api';
 

const Home = () => {

  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
   <div className='w-[1200px]  m-auto bg-gray-300 p-[30px] rounded-md'>
     <div className="w-full flex flex-col gap-4 m-auto">
      <h1 className="text-center text-blue-800 font-bold text-[28px] p-6"> You are welcome</h1>
      <ul className="w-full flex flex-wrap gap-6 ">
        {products.map((product) => (
          <li key={product.id} className="w-[200px] bg-red-200 shadow-2xl rounded-lg flex flex-col gap-6 justify-center  items-center">
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <img src={product.images} alt={product.name} className="product-image" />
          </li>
        ))}
      </ul>
    </div>
   </div>
  );
};

export default Home
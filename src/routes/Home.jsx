import React from 'react';
import { useGetProductsQuery } from '../redux/api';
import Login from './Login';
import Link from 'antd/es/typography/Link';
 

const Home = () => {

  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p className='text-center mt-[300px] font-bold text-blue-800 text-[26px]'>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (

    
   <div className='w-[1200px]  m-auto bg-gray-300 p-[30px] rounded-md'>
     <div className="w-full flex flex-col gap-4 m-auto">
      <div className='flex gap-4 items-center justify-center '>
        <Link to={"/login"} className=' border rounded-md p-2 bg-white px-4 text-center text-blue-800 font-bold text-[28px] '>Login</Link>
      <h1 className="border rounded-md p-2.5 bg-white px-4 text-center text-blue-800 font-bold text-[28px] "> You are welcome</h1>
      </div>
      <ul className="w-full flex flex-wrap gap-6 ">
        {products.map((product) => (
          <li key={product.id} className="w-[200px] bg-red-200 shadow-2xl rounded-lg flex flex-col p-6 gap-6 justify-center  items-center">
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
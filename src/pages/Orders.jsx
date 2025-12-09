import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  // Filter products that are in the cart
  const cartData = Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0);

  // Get the current date for each order
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {cartData.map((itemId, index) => {
          const productData = products.find((product) => product._id === itemId);

          if (!productData) {
            return null; // If product data is not found, skip rendering
          }

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className='sm:text-base font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray'>
                    <p>{currency}{productData.price}</p>
                    {productData.size && <p>Size: {productData.size}</p>}
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{getCurrentDate()}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-green-500'></span>
                  <p className='text-sm md:text-base'>Ready to Ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;

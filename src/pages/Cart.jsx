import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const Cart = () => {
  const { products, currency, cartItems, removeFromCart, navigate, user } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0);
    setCartData(tempData);
  }, [cartItems]);

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to proceed to checkout');
      navigate('/login');
    } else {
      navigate('/place-oder');
    }
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((itemId, index) => {
          const productData = products.find((product) => product._id === itemId);

          if (!productData) {
            return null; 
          }

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr] sm:grid-cols-[4fr_1fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <p className="mt-2">{currency}{productData.price}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  className="w-4 sm:w-5 cursor-pointer hover:opacity-60"
                  src={assets.bin_icon}
                  alt="Remove Item"
                  onClick={() => removeFromCart(itemId)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
             <button onClick={handleCheckout} className='bg-black hover:bg-gray-700 text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

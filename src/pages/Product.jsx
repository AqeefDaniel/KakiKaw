import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import YouMayLike from '../components/YouMayLike';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const renderStars = (condition) => {
    const [filledStars, totalStars] = condition.split('/').map(Number);
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <img
          key={`filled-${i}`}
          src={assets.star_icon}
          alt="Filled Star"
          className="w-4 h-4 mx-1"
        />
      );
    }
    for (let i = filledStars; i < totalStars; i++) {
      stars.push(
        <img
          key={`empty-${i}`}
          src={assets.star_dull_icon}
          alt="Empty Star"
          className="w-4 h-4 mx-1"
        />
      );
    }
    return stars;
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2">
            <p className="text-gray-600">
              {productData.subCategory} {productData.category}
            </p>
          </div>
          <p className="flex items-center mt-6 text-gray-600">
            Size: {productData.size}
          </p>
          <p className="mt-8 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <div className="flex items-center mt-10">
            <p className="text-gray-600 flex items-center">
              Condition:
              <span className="flex items-center ml-2">
                {renderStars(productData.condition)}
              </span>
            </p>
            <p className="text-gray-500 items-center ml-2">
              {productData.condition}
            </p>
          </div>
          <button
            onClick={() => addToCart(productData._id)}
            className="mt-10 bg-black hover:bg-gray-700 text-white px-12 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            {productData.description ||
              'An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.'}
          </p>
        </div>
      </div>

      {/* Display You May Also Like */}
      <YouMayLike
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

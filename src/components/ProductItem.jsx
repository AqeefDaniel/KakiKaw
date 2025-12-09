import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, size, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer no-underline hover:no-underline"
      to={`/product/${id}`}
    >
      <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm text-gray-500">{size}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  )
}

export default ProductItem

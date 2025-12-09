import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const NewArrival = () => {
  const { products } = useContext(ShopContext);
  const [NewArrival, setNewArrival] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setNewArrival(products.slice(0, 12));
    }
  }, [products]);

  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="text-center py-8 text-3xl font-bold">
        <Title text1="NEW" text2="ARRIVAL" />
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {NewArrival.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            size={item.size}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default NewArrival

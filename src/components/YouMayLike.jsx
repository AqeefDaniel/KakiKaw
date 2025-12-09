import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const YouMayLike = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [mayLike, setMayLike] = useState([]);

    useEffect(()=>{

        if(products.length > 0) {

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=> category === item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

            setMayLike(productsCopy.slice(0,5));

        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"You"} text2={"MAY LIKE"} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols4 lg:grid-cols-5 gap-4 gap-y-6'>
            {mayLike.map((item,index)=>(
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

export default YouMayLike

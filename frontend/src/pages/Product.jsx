import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

useEffect(() => {
  if (!productId || products.length === 0) return;

  const found = products.find((item) => item._id === productId);

  if (found) {
    setProductData(found);
    setImage(found.image[0]);
    setSize('');
  } else {
    setProductData(null); // fallback if not found
  }
}, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4'>
      {/* Product data */}
      <div className='flex-1 flex flex-col sm:flex-row gap-3'>
        {/* Thumbnails */}
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {productData.image.map((item, index) => (
            <img
              src={item}
              key={index}
              className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              alt=""
              onClick={() => setImage(item)}
            />
          ))}
        </div>

        {/* Main Image and Product Info side by side */}
          {/* Main Image */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w=4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Orginal Product</p>
              <p>Cash on Delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        {/* Description and Review Section */}
         <div className='mt-20'>
            <div className='flex  mb-3'>
             <p className='border px-5 py-3 text-sm'>Description</p>
             <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
            </div>
           <div className='flex flex-col border px-6 py-6 text-sm text-gray-500'>
            <p className='mb-3'>Welcome to Forever, your trusted online destination for discovering stylish, affordable, and high-quality products. Whether you're shopping for the latest fashion trends, daily essentials, or unique finds, Forever brings you a seamless and enjoyable shopping experience—all from the comfort of your home. At Forever, we believe that shopping should be simple, secure, and satisfying. That's why we handpick every item to ensure quality, update our collections frequently to stay on trend, and deliver products that you'll love and trust.</p>
            <p>We are committed to creating an online space that’s customer-first, where your shopping experience is smooth, your voice is heard, and your satisfaction is our top priority. Whether you're buying your first product or your fiftieth, we promise the same care, quality, and support every time.</p>
           </div>
         </div>
         {/* Display related products */}

         <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;

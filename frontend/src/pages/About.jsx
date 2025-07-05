import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p >
           Welcome to Forever, your one-stop destination for everything you love. From the latest trends to timeless essentials, Forever brings you a carefully curated selection of products that fit your style, budget, and lifestyle. We believe shopping should be effortless, enjoyable, and trustworthy. That’s why at Forever, we focus on delivering not just products, but a complete experience — one that makes you feel confident, inspired, and valued.
          </p>
          <p>
            Whether you're shopping for yourself or someone special, our mission is simple: To make every moment of your shopping journey feel personal, reliable, and unforgettable. Discover what makes Forever more than just a store — it’s your new favorite place to shop.
          </p>
          <b className='text-gray-800 mb-[-10px]'>Our Mission</b>
          <p>Our mission is to make shopping easy, enjoyable, and trustworthy. We bring you quality products with care and convenience. At Forever, every order is delivered with love and reliability.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/> 
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we are committed to delivering high-quality products and exceptional customer experiences. Our Quality Assurance process ensures that every item listed on our platform meets strict standards for durability, functionality, and authenticity.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>convenience is at the heart of everything we do. From a seamless browsing experience to a quick and secure checkout process, we make shopping easy and stress-free. With features like saved preferences, smart recommendations, fast delivery options, and hassle-free returns, we ensure that your entire shopping journey is smooth and simple.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>we are committed to providing exceptional customer service that goes beyond expectations. Our dedicated support team is available 24/7 to assist with any questions or concerns, ensuring a smooth and stress-free shopping experience. </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
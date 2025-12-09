import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-20 py-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img className="w-full max-w-[450px] md:max-w-none" src={assets.about_img} alt="About Us" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            At Kaki Kaw Bundle Shoe, we specialize in providing affordable, pre-loved branded shoes for everyone. Our collection is carefully selected, cleaned, and inspected to ensure the perfect balance of style, comfort, and quality. From trendy sneakers to durable everyday footwear, we’ve got something for every occasion.
          </p>
          <p>
            We’re committed to making great shoes accessible while promoting sustainability. By giving footwear a second life, we help reduce waste and encourage eco-friendly shopping. At Kaki Kaw, you’ll find stylish, budget-friendly options that let you step confidently while supporting a greener future.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to make stylish, affordable footwear accessible to all while promoting sustainability by giving shoes a second life.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-10 px-4 md:px-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Support:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />
    </div>
  )
}

export default About

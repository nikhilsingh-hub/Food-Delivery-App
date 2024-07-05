import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll';
import Banner from '../components/elements/Banner'
import About from '../components/elements/About'
import ProductPreview from '../components/elements/ProductPreview'

function Home() {
  return (
    <>
      <div className='w-full bg-[#ffffff]  flex items-center flex-col'>
        <Banner />
        <ProductPreview />
      </div>
      <Element name="about">
        <About /> 
      </Element>
    </>
  )
}

export default Home

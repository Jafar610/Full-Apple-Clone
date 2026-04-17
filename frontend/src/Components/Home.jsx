import React from 'react'
import Iphone from '../Pages/Iphone'
import Macbook from '../Pages/Macbook'
import Ipad from '../Pages/Ipad'
import Product1 from '../Pages/Product1'
import Product2 from '../Pages/Product2'
import Cards from '../Pages/Cards'
import Entertainment from '../Pages/Entertainment'

function Home() {
  return (
    <>
       <Iphone/>
       <Macbook/>
       <Ipad/>
       <Product1/>
       <Product2/>
       <Cards/>
       <Entertainment/>
    </>
  )
}

export default Home
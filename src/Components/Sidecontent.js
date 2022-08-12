import React from 'react'
import Trending from './Trending'
import Carousel from './Carousel'
import "./sidecontent.css"

const Sidecontent = () => {
  return (
    <div className='side-content-section mt-[5px]'>
        {/* <Trending/> */}
        <Carousel/>
    </div>
  )
}

export default Sidecontent
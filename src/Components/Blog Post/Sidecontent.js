import React from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Social from './Social'
import "./styles/sidecontent.css"

const Sidecontent = () => {
  return (
    <div className='side-content-section mt-[5px]'>
        <Carousel/> {/******** need to work on scrolling error *************/}
        <Category/>
        <Social/>
    </div>
  )
}

export default Sidecontent
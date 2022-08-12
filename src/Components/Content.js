import React from 'react'
import "./content.css"
import {FaAngleDoubleRight} from "react-icons/fa"

const Content = () => {
  return (
    <div className="content-section bg-white h-[1000px] w-[57%] mt-[25px] flex flex-col items-center text-[12px]">
      <div className="content-header bg-[#f5f5f5] flex mt-12 py-2 px-3 rounded-[15px] mx-2 text-center">
       <a href="#">Blog</a>
         <div className='mt-[4px] mx-1'>
          <FaAngleDoubleRight/>
        </div>
        <a href="#">AdSense</a>
        <div className='mt-[4px] mx-1'>
          <FaAngleDoubleRight/>
        </div>
        <p>What is CTR in Google slj aslkj aslkdj aslkdkj alskdj laksjd</p>
      </div>
    </div>
  )
}

export default Content
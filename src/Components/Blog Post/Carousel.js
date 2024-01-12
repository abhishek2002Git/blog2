import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/carousel.css'

const Carousel = () => {
  let navigate = useNavigate()
  return (
    <div className="slider trending-section bg-white  mb-5 mt-[25px] pt-[1px] pb-[30px] flex items-center flex-col">
      <h2 className="text-black text-[25px] text-center font-[600] mt-6">
        Trending Posts
      </h2>
      <div className="slides">
        <div id="slide-1">
          <ul className="flex items-center flex-col mt-5 w-[100%] cursor-pointer">
            <li
              onClick={() => {
                navigate('/blog/earn-money-from-blog')
                window.scrollTo(0, 0)
              }}
              className="w-[80%] border-black border-b-2"
            >
              <h2 className="text-[15px] font-[600] my-3">
                How To Make Money Blogging (The Practical Guide for 2022)
              </h2>
            </li>
            <li
              onClick={() => {
                navigate('/blog/testing2')
                window.scrollTo(0, 0)
              }}
              className="w-[80%] border-black border-b-2"
            >
              <h2 className="text-[15px] font-[600] my-3">
                this is testing 2 lorem, ipsum dolor
              </h2>
            </li>
            <li
              onClick={() => {
                navigate('/blog/animated-sparkes-in-react')
                window.scrollTo(0, 0)
              }}
              className="w-[80%] border-black border-b-2"
            >
              <h2 className="text-[15px] font-[600] my-3">
                Animated Sparkles in React{' '}
              </h2>
            </li>
            <li
              onClick={() => {
                navigate('/blog/embracing-modern-image-formats')
                window.scrollTo(0, 0)
              }}
              className="w-[80%] border-black border-b-2"
            >
              <h2 className="text-[15px] font-[600] my-3">
                Embracing modern image formats{' '}
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Carousel

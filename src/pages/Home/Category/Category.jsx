import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Category.css'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import crickImg from '../../../assets/category/marotig.jpg'
import crickImg2 from '../../../assets/category/bat.jpg'
import crickImg3 from '../../../assets/category/cricket-ball.jpg'
import footballImg1 from '../../../assets/category/football.jpg'
import footballImg2 from '../../../assets/category/footballs.png'
import footballImg3 from '../../../assets/category/unnamed.png'
import badminton1 from '../../../assets/category/badminton-1428046_1280.jpg'
import badminton2 from '../../../assets/category/badminton-1428047_640.jpg'
import badminton3 from '../../../assets/category/img_185351_badminton_india_bg.jpg'

const Category = () => {
  const [catName, setCatName] = useState('cricket')
  const updateToggle = (name) => {
    setCatName(name)
  }


  return (
    <div className='px-14 bg-current' data-aos="fade-up" data-aos-offset="1500" data-aos-duration="3000">
      <h1 className='text-3xl font-bold text-center text-white uppercase py-8'>Shop by category</h1>
      <div className='teb text-white py-8'>
        <ul className='flex gap-2 my-1'>
          <li className='bg-indigo-500 hover:bg-indigo-600 py-2 px-5 cursor-pointer' onClick={() => updateToggle('cricket')}>Cricket</li>
          <li className='bg-indigo-500 hover:bg-indigo-600 py-2 px-5 cursor-pointer' onClick={() => updateToggle('football')}>Football</li>
          <li className='bg-indigo-500 hover:bg-indigo-600 py-2 px-5 cursor-pointer' onClick={() => updateToggle('badminton')}>Badminton</li>
        </ul>
        <hr />
        <div className={catName === 'cricket' ? 'show-content mt-5' : 'content mt-5'}>
          <div className='grid grid-cols-3 gap-8'>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={crickImg} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $50</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.8</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={crickImg2} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Tendulkar Bat</h2>
                <h2 className='text-4xl text-error'>Price : $3500</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.5</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={crickImg3} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $150</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.6</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
          </div>
        </div>
        {/**football */}
        <div className={catName === 'football' ? 'show-content mt-5' : 'content mt-5'}>
          <div className='grid grid-cols-3 gap-8'>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={footballImg1} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $50</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.8</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={footballImg2} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Tendulkar Bat</h2>
                <h2 className='text-4xl text-error'>Price : $3500</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.5</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={footballImg3} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $150</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.6</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
          </div>
        </div>
        {/**badminton */}
        <div className={catName === 'badminton' ? 'show-content mt-5' : 'content mt-5'}>
          <div className='grid grid-cols-3 gap-8'>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={badminton1} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $50</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.8</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={badminton2} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Tendulkar Bat</h2>
                <h2 className='text-4xl text-error'>Price : $3500</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.5</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
            <div className='item border border-gray-600 rounded p-5 cursor-pointer'>
              <img src={badminton3} className='w-full'></img>
              <div className='space-y-5 mt-5'>
                <h2 className='text-2xl'>Maroti Cricket Ball</h2>
                <h2 className='text-4xl text-error'>Price : $150</h2>
                <p className='flex gap-1 items-center'>Ratings : <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> 4.6</p>
                <button className='btn btn-secondary'>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
import React from 'react'
import slider1 from '../../../assets/slider/cricket.jpg'
import slider2 from '../../../assets/slider/football.jpg'
import slider3 from '../../../assets/slider/voli.jpg'
const Banner = () => {
    return (
        <div data-aos="zoom-in-up">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-bl from-[#000] to-[rgba(21,15,15,0)]">
                        <div className='space-y-7 p-3  w-6/12 mx-auto text-center'>
                            <h1 className='text-4xl font-bold'>20% DISCOUNT ON ALL CRICKET PRODUCTS</h1>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-info text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" />
                    <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-bl from-[#000] to-[rgba(21,15,15,0)]">
                        <div className='space-y-7 p-3  w-6/12 mx-auto text-center'>
                            <h1 className='text-4xl font-bold'>20% DISCOUNT ON ALL FOOTBALL PRODUCTS</h1>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-info text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-bl from-[#000] to-[rgba(21,15,15,0)]">
                        <div className='space-y-7 p-3  w-6/12 mx-auto text-center'>
                            <h1 className='text-4xl font-bold'>20% DISCOUNT ON ALL PRODUCTS</h1>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-info text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
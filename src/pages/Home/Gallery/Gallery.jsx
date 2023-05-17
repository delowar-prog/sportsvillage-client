import React from 'react'
import img1 from '../../../assets/gallery/cricket-2.jpg'
import img2 from '../../../assets/gallery/football-2.jpg'
import img3 from '../../../assets/gallery/fether.jpg'
import img4 from '../../../assets/gallery/football.jpg'
import img5 from '../../../assets/gallery/valiball.jpg'
import img6 from '../../../assets/gallery/bat.jpg'
import img7 from '../../../assets/gallery/cricket.jpg'
import './Gallery.css'
const Gallery = () => {
    return (
        <div className='p-5 lg:p-14'>
            <div className='flex flex-col md:flex-row justify-center'>
                <div className='md:w-[32%]'>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img1} className='imgstyle'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Our Amazing <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img5} className='imgstyle'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>

                </div>
                <div className='md:w-[35%]'>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img3} className='imgstyle w-full'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img6} className='imgstyle w-full'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img2} className='w-full'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%]'>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img4} className='w-full'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                    <div className='gallery-item relative overflow-hidden'>
                        <img src={img7} className='w-full'></img>
                        <div className='overlay absolute w-full h-full opacity-90 bg-gray-800 p-5 md:p-5 space-y-7'>
                            <h1 className='text-white text-3xl font-bold uppercase'>Special <span className='text-sky-500'>Offer</span></h1>
                            <h2 className='uppercase text-xl text-white'><span className='text-5xl text-red-500 font-bold'>30%</span><br></br>Discount</h2>
                            <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
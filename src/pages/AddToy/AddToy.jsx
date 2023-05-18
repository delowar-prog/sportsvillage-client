import React from 'react'
import addImg from '../../assets/add_image.png'
import './AddToy.css'
const AddToy = () => {
    return (
        <div className=''>
            <div className="">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="text-center lg:text-left w-[40%]">
                        <img src={addImg} className='w-full'></img>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-slate-100 to-slate-300 p-14">
                        <h1 className='my-5 pageHeading text-cyan-500 text-3xl text-center'>Add A Toys</h1>
                        <p className='mb-14 mx-5'>This new toy is a marvel of creativity, designed with meticulous attention to detail. Its colors burst forth, captivating your eyes and igniting a sense of wonder within you.</p>
                        <form className='uppercase text-gray-500'>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Name of Toy</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="toy_name" placeholder='Toy Name'></input>
                                </div>
                                <div className='w-full'>
                                    <label className='hidden'>...</label><br />
                                    <select className="border border-gray-300 w-[90%] p-2">
                                        <option disabled selected>Select Category</option>
                                        <option>Cricket</option>
                                        <option>Football</option>
                                        <option>Badminton</option>
                                        <option>Hawkeyes</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Seller Name</label><br />
                                    <input type="text" name="saller_name" className='w-full border border-gray-300 p-2'></input>
                                </div>
                                <div className='w-full'>
                                    <label>Seller Email</label><br />
                                    <input type="text" name="saller_email" className='w-[90%] border border-gray-300 p-2'></input>
                                </div>
                            </div>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Price</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="price" placeholder='Price'></input>
                                </div>
                                <div className='w-full'>
                                    <label>Rating</label><br />
                                    <input type="text" name="saller_email" className='w-[90%] border border-gray-300 p-2' placeholder='Ratings'></input>
                                </div>
                            </div>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Available Quantity</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="toy_name" placeholder='Qty'></input>
                                </div>
                                <div className='w-full'>
                                    <label>Toy Image</label><br />
                                    <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='m-5 w-[100%]'>
                                <label>Details</label><br />
                                <textarea placeholder="Toy Details" className="border border-gray-300 w-[95%] p-2" ></textarea>
                            </div>
                            <div className='m-5 w-[95%]'>
                            <button className="btn btn-primary btn-block">Add Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToy
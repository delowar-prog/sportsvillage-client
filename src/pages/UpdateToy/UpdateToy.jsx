import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import useTitle from '../../hooks/useTitle'
import {toast } from 'react-toastify';
import addImg from '../../assets/add_image.png'
import { useLoaderData } from 'react-router-dom';
const UpdateToy = () => {
    const {user}=useContext(AuthContext)
    useTitle('updateToy')
    const updatedToy=useLoaderData()
    const {toyName,toyImg,toy}=updatedToy
  return (
    <div className=''>
    <div className="bg-indigo-400">
        <div className="flex flex-col justify-center py-10 lg:flex-row items-center">
            <div className="w-[70%] bg-gradient-to-tr from-slate-100 to-slate-300 p-14">
                <h1 className='my-5 pageHeading text-cyan-500 text-3xl text-center'>Add A Toys</h1>
                <p className='mb-14 mx-5'>This new toy is a marvel of creativity, designed with meticulous attention to detail. Its colors burst forth, captivating your eyes and igniting a sense of wonder within you.</p>
                <form onSubmit="" className='uppercase text-gray-500'>
                    <div className='m-5 flex w-[100%] gap-5'>
                        <div className='w-full'>
                            <label>Name of Toy</label><br />
                            <input className='w-full border border-gray-300 p-2' type="text" name="toyName" placeholder='Toy Name' required></input>
                        </div>
                        <div className='w-full'>
                            <label className='hidden'>...</label><br />
                            <select name="category" className="border border-gray-300 w-[90%] p-2" required>
                                <option disabled selected>Select Category</option>
                                <option value="cricket">Cricket</option>
                                <option value="football">Football</option>
                                <option value="badminton">Badminton</option>
                                <option value="hawkeyes">Hawkeyes</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex m-5 flex w-[100%] gap-5'>
                        <div className='w-full'>
                            <label>Seller Name</label><br />
                            <input type="text" disabled defaultValue={user.displayName} className='w-full border border-gray-300 p-2'></input>
                        </div>
                        <div className='w-full'>
                            <label>Seller Email</label><br />
                            <input type="text" disabled defaultValue={user.email} className='w-[90%] border border-gray-300 p-2'></input>
                        </div>
                    </div>
                    <div className='m-5 flex w-[100%] gap-5'>
                        <div className='w-full'>
                            <label>Price</label><br />
                            <input className='w-full border border-gray-300 p-2' type="text" name="price" placeholder='Price' required></input>
                        </div>
                        <div className='w-full'>
                            <label>Rating</label><br />
                            <input type="text" name="rating" className='w-[90%] border border-gray-300 p-2' placeholder='Ratings' required></input>
                        </div>
                    </div>
                    <div className='m-5 flex w-[100%] gap-5'>
                        <div className='w-full'>
                            <label>Available Quantity</label><br />
                            <input className='w-full border border-gray-300 p-2' type="text" name="qty" placeholder='Qty' required></input>
                        </div>
                        <div className='w-full'>
                            <label>Toy Image</label><br />
                            <input type="file" name='toyImg' required className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='m-5 w-[100%]'>
                        <label>Details</label><br />
                        <textarea placeholder="Toy Details" name="details" className="border border-gray-300 w-[95%] p-2" required></textarea>
                    </div>
                    <div className='m-5 w-[95%]'>
                    <button type="submit" className="btn btn-primary btn-block">Add Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateToy
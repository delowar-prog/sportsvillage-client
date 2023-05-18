import React, { useContext } from 'react'
import addImg from '../../assets/add_image.png'
import './AddToy.css'
import { AuthContext } from '../../providers/AuthProviders'
import useTitle from '../../hooks/useTitle'
import {toast } from 'react-toastify';
const AddToy = () => {
    useTitle('addtoy')
    const {user}=useContext(AuthContext)

    const handleAddToy=(event)=>{
        event.preventDefault()
        const form=event.target
        const toyName=form.toyName.value
        const category=form.category.value
        const sellerName=user.displayName
        const sellerEmail=user.email
        const price=form.price.value
        const rating=form.rating.value
        const qty=form.qty.value
        const toyImg=form.toyImg.value
        const details=form.details.value
        const toyData={toyName,category,sellerName,sellerEmail,price,rating,qty,toyImg,details}
        console.log(toyData)
        fetch('http://localhost:5000/toys',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(toyData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success("Toy added successfully !")
                form.reset()
            }
        })
    }

    return (
        <div className='' data-aos="fade-up" data-aos-offset="300" data-aos-duration="2000">
            <div className="">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="text-center lg:text-left w-[40%]">
                        <img src={addImg} className='w-full'></img>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-slate-100 to-slate-300 p-14">
                        <h1 className='my-5 pageHeading text-cyan-500 text-3xl text-center'>Add A Toys</h1>
                        <p className='mb-14 mx-5'>This new toy is a marvel of creativity, designed with meticulous attention to detail. Its colors burst forth, captivating your eyes and igniting a sense of wonder within you.</p>
                        <form onSubmit={handleAddToy} className='uppercase text-gray-500'>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Name of Toy</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="toyName" placeholder='Toy Name'></input>
                                </div>
                                <div className='w-full'>
                                    <label className='hidden'>...</label><br />
                                    <select name="category" className="border border-gray-300 w-[90%] p-2">
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
                                    <input className='w-full border border-gray-300 p-2' type="text" name="price" placeholder='Price'></input>
                                </div>
                                <div className='w-full'>
                                    <label>Rating</label><br />
                                    <input type="text" name="rating" className='w-[90%] border border-gray-300 p-2' placeholder='Ratings'></input>
                                </div>
                            </div>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Available Quantity</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="qty" placeholder='Qty'></input>
                                </div>
                                <div className='w-full'>
                                    <label>Toy Image</label><br />
                                    <input type="file" name='toyImg' className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='m-5 w-[100%]'>
                                <label>Details</label><br />
                                <textarea placeholder="Toy Details" name="details" className="border border-gray-300 w-[95%] p-2" ></textarea>
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

export default AddToy
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import useTitle from '../../hooks/useTitle'
import {toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import ShowForm from './ShowForm';
const UpdateToy = () => {
    const [categories, setCategories]=useState([])
    useTitle('updateToy')
    const { user } = useContext(AuthContext)
    const updatedToy=useLoaderData()
    const { _id, toyName, toyImg, category, price, details, rating, qty } = updatedToy
    
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    const handleUpdate=(event)=>{
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
        // fetch(`http://localhost:5000/toys/${_id}`,{
        //     method:"PUT",
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(toyData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     if(data.modifiedCount>0){
        //         toast.success("Toy Updated successfully !")
        //     }
        // })
        // .catch(error=>console.log(error.message))
    }
  return (
    <div className=''>
    <div className="bg-indigo-400">
        <div className="flex flex-col justify-center py-10 lg:flex-row items-center">
            <div className="w-[70%] bg-gradient-to-tr from-slate-100 to-slate-300 p-14">
                <h1 className='my-5 pageHeading text-cyan-500 text-3xl text-center'>Update Toy</h1>
                <p className='mb-14 mx-5 text-center'>You can update a toy without username & email</p>
                {
                    <ShowForm updatedToy={updatedToy} categories={categories} handleUpdate={handleUpdate}></ShowForm>
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateToy
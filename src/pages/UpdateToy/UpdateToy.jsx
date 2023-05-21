import { useContext} from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import useTitle from '../../hooks/useTitle'
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    useTitle('updateToy')
    const { user } = useContext(AuthContext)
    const updatedToy = useLoaderData()
    const { _id, toyName, toyImg, category, price, details, rating, qty } = updatedToy

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const toyName = form.toyName.value
        const category = form.category.value
        const sellerName = user.displayName
        const sellerEmail = user.email
        const price = form.price.value
        const rating = form.rating.value
        const qty = form.qty.value
        const toyImg = form.toyImg.value
        const details = form.details.value
        const toyData = { toyName, category, sellerName, sellerEmail, price, rating, qty, toyImg, details }
        
        fetch(`http://localhost:5000/toys/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toyData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success("Toy Updated successfully !")
            }
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className=''>
            <div className="bg-indigo-400">
                <div className="flex flex-col justify-center py-10 lg:flex-row items-center">
                    <div className="w-[70%] bg-gradient-to-tr from-slate-100 to-slate-300 p-14">
                        <h1 className='my-5 pageHeading text-cyan-500 text-3xl text-center'>Update Toy</h1>
                        <p className='mb-14 mx-5 text-center'>You can update a toy without username & email</p>
                        <form onSubmit={handleUpdate} className='uppercase text-gray-500'>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Name of Toy</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="toyName" defaultValue={toyName} placeholder='Toy Name' required></input>
                                </div>
                                <div className='w-full'>
                                    <label className='hidden'>...</label><br />
                                    <select name="category" defaultValue={category} className="border border-gray-300 w-[90%] p-2">
                                        <option value="cricket">Cricket</option>
                                        <option value="football">Football</option>
                                        <option value="badminton">Badminton</option>
                                        <option value="hawkeyes">Hawkeyes</option>
                                    </select>
                                </div>
                            </div>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Price</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="price" defaultValue={price} placeholder='Price' ></input>
                                </div>
                                <div className='w-full'>
                                    <label>Rating</label><br />
                                    <input type="text" name="rating" className='w-[90%] border border-gray-300 p-2' defaultValue={rating} placeholder='Ratings' ></input>
                                </div>
                            </div>
                            <div className='m-5 flex w-[100%] gap-5'>
                                <div className='w-full'>
                                    <label>Available Quantity</label><br />
                                    <input className='w-full border border-gray-300 p-2' type="text" name="qty" defaultValue={qty} placeholder='Qty' ></input>
                                </div>
                                <div className='w-full'>
                                    <label>Toy Image</label><br />
                                    <input type="file" name='toyImg' className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                                    <img src={toyImg} className='w-20 mt-2'></img>
                                </div>
                            </div>
                            <div className='m-5 w-[100%]'>
                                <label>Details</label><br />
                                <textarea name="details" className="border border-gray-300 w-[95%] p-2" defaultValue={details}></textarea>
                            </div>
                            <div className='m-5 w-[95%]'>
                                <button type="submit" className="btn btn-primary btn-block">Update Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateToy
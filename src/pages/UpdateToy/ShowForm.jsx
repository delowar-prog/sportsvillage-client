import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const ShowForm = ({ updatedToy, handleUpdate }) => {
    const { user } = useContext(AuthContext)
    const { _id, toyName, toyImg, category, price, details, rating, qty } = updatedToy
    
   
    return (
        <form onSubmit={()=>handleUpdate(_id)} className='uppercase text-gray-500'>
            <div className='m-5 flex w-[100%] gap-5'>
                <div className='w-full'>
                    <label>Name of Toy</label><br />
                    <input className='w-full border border-gray-300 p-2' type="text" name="toyName" defaultValue={toyName} placeholder='Toy Name' required></input>
                </div>
                <div className='w-full'>
                    <label className='hidden'>...</label><br />
                    <select name="category" defaultValue={category} className="border border-gray-300 w-[90%] p-2" required>
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
                    <input type="text" disabled defaultValue={user?.displayName} className='w-full border border-gray-300 p-2'></input>
                </div>
                <div className='w-full'>
                    <label>Seller Email</label><br />
                    <input type="text" disabled defaultValue={user?.email} className='w-[90%] border border-gray-300 p-2'></input>
                </div>
            </div>
            <div className='m-5 flex w-[100%] gap-5'>
                <div className='w-full'>
                    <label>Price</label><br />
                    <input className='w-full border border-gray-300 p-2' type="text" name="price" defaultValue={price} placeholder='Price' required></input>
                </div>
                <div className='w-full'>
                    <label>Rating</label><br />
                    <input type="text" name="rating" className='w-[90%] border border-gray-300 p-2' defaultValue={rating} placeholder='Ratings' required></input>
                </div>
            </div>
            <div className='m-5 flex w-[100%] gap-5'>
                <div className='w-full'>
                    <label>Available Quantity</label><br />
                    <input className='w-full border border-gray-300 p-2' type="text" name="qty" defaultValue={qty} placeholder='Qty' required></input>
                </div>
                <div className='w-full'>
                    <label>Toy Image</label><br />
                    <input type="file" name='toyImg' required className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    <img src={toyImg} className='w-20 mt-2'></img>
                </div>
            </div>
            <div className='m-5 w-[100%]'>
                <label>Details</label><br />
                <textarea name="details" className="border border-gray-300 w-[95%] p-2" required defaultValue={details}></textarea>
            </div>
            <div className='m-5 w-[95%]'>
                <button type="submit" className="btn btn-primary btn-block">Update Confirm</button>
            </div>
        </form>
    )
}

export default ShowForm
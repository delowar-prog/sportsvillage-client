import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { useNavigate } from 'react-router-dom'
import { BsPencil, BsTrash } from "react-icons/bs";
const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [toys, setToys] = useState([])
    const navigate=useNavigate()
  
    const url=`http://localhost:5000/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setToys(data)
                }else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    return (
        <div className="bg-gradient-to-tr from-slate-100 to-slate-400 p-14">
            <div className="">
                <h1 className='pageHeading text-cyan-500 text-xl text-center'>My Toys</h1>
                <div className="overflow-x-auto mt-14">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          
                                toys.map((toy,i) => {
                                    i++
                                    return <tr key={toy._id}>
                                        <th>{i}</th>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.toyName}</td>
                                        <td>{toy.category}</td>
                                        <td>${toy.price}</td>
                                        <td>{toy.qty}</td>
                                        <td className='flex gap-2'>
                                        <button className="btn btn-active btn-primary text-lg"><BsPencil/></button>
                                        <button className="btn btn-active btn-error text-lg"><BsTrash/></button>
                                        </td>
                                    </tr>
                                })

                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Sl</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Qty</th>
                                <th>View Details</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyToys
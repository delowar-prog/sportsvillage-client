import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { Link, useNavigate } from 'react-router-dom'
import { BsPencil, BsTrash,BsArrowDown,BsArrowUp } from "react-icons/bs";
import Swal from 'sweetalert2'
import './MyToys.css'

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const navigate = useNavigate()
    const url = `http://localhost:5000/toys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                } else {
                    navigate('/')
                }
            })
    }, [url, navigate])


//delete toy
    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    }).catch(error => console.log(error.message))
            }
        })
    }



    return (
        <div className="bg-gradient-to-tr from-slate-100 to-slate-400 p-14">
            <div className="">
                <h1 className='pageHeading text-cyan-500 text-xl text-center'>My Toys</h1>
                <div className="overflow-x-auto mt-14">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Toy Img</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th><div className="flex gap-1"><span className="flex"><BsArrowDown className="cursor-pointer" /><BsArrowUp className="cursor-pointer"/></span>Price</div></th>
                                <th>Rating</th>
                                <th>Qty</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                toys.map((toy, i) => {
                                    return <tr key={toy._id}>
                                        <td>{i+1}</td>
                                        <td><img src={toy.toyImg} className="w-11"></img></td>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.toyName}</td>
                                        <td>{toy.category}</td>
                                        <td>${toy.price}</td>
                                        <td>{toy.rating}</td>
                                        <td>{toy.qty}</td>
                                        <td>{toy.details.slice(0, 25)}..</td>
                                        <td className='flex gap-2'>
                                        <Link to={`/updateToy/${toy._id}`}><button className="btn btn-active btn-primary text-lg"><BsPencil /></button></Link>
                                            <button onClick={() => handleDeleteToy(toy._id)} className="btn btn-active btn-error text-lg"><BsTrash /></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyToys
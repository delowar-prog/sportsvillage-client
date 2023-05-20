import { useEffect, useState } from "react"
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText]=useState('')
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch=()=>{
        fetch(`http://localhost:5000/toySearch/${searchText}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }
    return (
        <div className="bg-gradient-to-tr from-slate-100 to-slate-400 p-14">
            <div className="">
                <h1 className='pageHeading text-cyan-500 text-xl text-center'>All Toy List</h1>
                <div className="overflow-x-auto mt-14">
                    <div className="float-right mb-2">
                        <input type="text" className="p-3 rounded" placeholder="Search toy" onChange={(e)=>setSearchText(e.target.value)} name="search"></input>
                        <button className="btn" onClick={handleSearch}>Search</button>
                    </div>
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Qty</th>
                                <th>View Details</th>
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
                                        <td><Link to={`/details/${toy._id}`}><button className="btn btn-active btn-info text-md"><GrView/></button></Link></td>
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

export default AllToys
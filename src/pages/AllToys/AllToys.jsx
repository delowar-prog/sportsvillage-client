
const AllToys = () => {
    return (
        <div className="bg-gradient-to-tr from-slate-100 to-slate-400 p-14">
            <div className="">
                <h1 className='pageHeading text-cyan-500 text-xl text-center'>All Toy List</h1>
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
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                            </tr>
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
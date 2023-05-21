import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {
  const detailsData = useLoaderData()
  console.log(detailsData)
  const {sellerName, sellerEmail, toyName, toyImg, category, price, details, rating, qty } = detailsData
 
  return (
    <div>
      <div className='flex p-8 gap-14'>
        <div className='w-[50%]'>
          <img src={toyImg} className='border p-3'></img>
        </div>
        <div className='w-full space-y-4'>
          <h2 className='text-xl font-bold'>Toy Name : <span className='text-indigo-600'>{toyName}</span> </h2>
          <h3 className='text-lg'><strong>Category :</strong> <span className='text-gray-600'>{category}</span> </h3>
          <p><strong>Seller Name : </strong>{sellerName}</p>
          <p><strong>Seller Email : </strong>{sellerEmail}</p>
          <p><strong>Details:</strong> {details}</p>
          <h3 className='text-lg'><strong>Price :</strong><span className='text-gray-600'>${price}</span> </h3>
          <h3 className='text-lg'><strong>In Stock :</strong><span className='text-gray-600'> {qty}</span> </h3>
          <h3 className='text-lg flex gap-1 items-center '><strong>Rating :</strong><span className='text-gray-600 flex gap-1 items-center'> <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> {rating}</span> </h3>
          <button className="btn btn-info btn-outline rounded-none px-8 text-white">SHOP NOW</button>
        </div>
        <div className='right-sidebar text-white'>
          <ul className="menu bg-emerald-600 w-56 p-2">
            <li className="menu-title">
              <span className='text-xl'>Category</span>
            </li>
            <li><a>Cricket</a></li>
            <li><a>Football</a></li>
            <li><a>Badminton</a></li>
            <li><a>Hokyes</a></li>
            <li><a>Volyball</a></li>
            <li><a>Handball</a></li>
          </ul>
        </div>
      </div>

      {/**related toys */}
      <div className='p-8'>
          <h1 className='text-xl font-bold text-indigo-700 border-b border-indigo-700'>Related Toys</h1>
          <div className='related-toys-container grid grid-cols-5 p-8 gap-5'>
              <div className='item border p-5'>
                  <img src={toyImg} className='w-40'></img>
                  <h3 className='text-lg text-center'>{toyName}</h3>
              </div>
              <div className='item border p-5'>
                  <img src={toyImg} className='w-40'></img>
                  <h3 className='text-lg text-center'>{toyName}</h3>
              </div>
              <div className='item border p-5'>
                  
                  <h3 className='text-lg text-center'>Under Constructions</h3>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ViewDetails
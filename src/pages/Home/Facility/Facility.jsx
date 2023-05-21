import imgMoney from '../../../assets/facility-icon/money.png'
import imgProtection from '../../../assets/facility-icon/protection.jpg'
import imgShipping from '../../../assets/facility-icon/firstshipping.png'
import imgOnline from '../../../assets/facility-icon/online.png'
const Facility = () => {
  return (
    <div>
        <div className='container grid md:grid-cols-4 px-20 py-24 gap-5 text-center'>
            <div className='flex flex-col items-center bg-gray-200 space-y-2 px-3 py-8 rounded'>
                <img src={imgMoney} className='w-24 h-28'></img>
                <h1 className='text-xl'>Save Money</h1>
                <p>Est parturient egestas eget quisque ac sem ornare vestibulum.</p>
            </div>
            <div className='flex flex-col items-center bg-gray-200 space-y-2 px-3 py-8 rounded'>
                <img src={imgProtection} className='w-24 h-28'></img>
                <h1 className='text-xl'>Buyer Protection</h1>
                <p>Ullamcorper ridiculus ac sagittis quam euismod dictum maecenas.</p>
            </div>
            <div className='flex flex-col items-center bg-gray-200 space-y-2 px-3 py-8 rounded'>
                <img src={imgShipping} className='w-24 h-28'></img>
                <h1 className='text-xl'>Fast Shipping</h1>
                <p>Est parturient egestas eget quisque ac sem ornare vestibulum.</p>
            </div>
            <div className='flex flex-col items-center bg-gray-200 space-y-2 px-3 py-8 rounded'>
                <img src={imgOnline} className='w-24 h-28'></img>
                <h1 className='text-xl'>Shop On-The-Goy</h1>
                <p>Ante adipiscing iaculis duis eros cum nulla velit adipiscing litora.</p>
            </div>
        </div>
    </div>
  )
}

export default Facility
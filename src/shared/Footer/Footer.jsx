import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className=''>
      <footer className="footer p-14 bg-indigo-700 text-base-content flex flex-col sm:flex-row justify-between">
        <div>
          <img src={Logo} className='w-48'></img>
          <h3 className='uppercase text-xl tracking-widest text-white font-bold'>Sports <span className='text-yellow-400'>Village</span></h3>
        </div>
        <div className='text-white'>
          <span className="footer-title">Contact</span>
          <p className='text-md'>15/A Gausepak Bhaban <br /> Motijheel, Dhaka-1000</p>
          <p className='text-md'>Phone : +288 9653, +288 9652 <br /> Email : sportsvillage@hotmail.com </p>
        </div>
        <div className='text-white'>
          <span className="footer-title">Social Links</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Youtube</a>
        </div>
        <div className='text-white'>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label ">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className='copyright bg-indigo-600'>
          <p className='text-center text-white py-4 text-sm'>Copyright by Delowar&copy;2023</p>
      </div>
    </div>
  )
}

export default Footer
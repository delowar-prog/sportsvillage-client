import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className="navbar flex flex-col sm:flex-row bg-indigo-800  px-5 lg:px-14">
        <div>
          <div className="flex flex-col">
            <img src={Logo} className='w-36'></img>
            <h3 className='uppercase text-md tracking-widest text-white font-bold'>Sports <span className='text-yellow-400'>Village</span></h3>
          </div>
          {/*mobile response toggle menu*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
        {/*end mobile response toggle menu */}
        <div className="md:flex flex-1 hidden text-white">
          <ul className="menu menu-horizontal px-1 uppercase font-semibold text-sm">
            <li><Link to="/">Home</Link></li>
            <li><a>All Toys</a></li>
            <li><a>My Toys</a></li>
            <li><a>Add Toys</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input" />
          </div>
          <div>
            <Link to='/login' className='text-white'>login</Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
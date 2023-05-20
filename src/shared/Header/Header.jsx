import { useContext } from 'react'
import Logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import Profile from '../../assets/profile.jpg'
const Header = () => {
  const {user, userLogout}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    userLogout().then(()=>{
      navigate('/')
    }).catch(err=>console.log(err))
  }
  return (
    <div className='sticky top-0 z-50'>
      <div className="navbar flex justify-between flex-col sm:flex-row bg-indigo-800  px-5 lg:px-14">
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
        <div className="md:flex ml-20 hidden text-white">
          <ul className="menu menu-horizontal px-1 uppercase font-semibold text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/alltoys">All Toys</Link></li>
            {
              user && <li><Link to="/mytoys">My Toys</Link></li>
              
            }
            <li><Link to="/addtoy">Add Toys</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
          </ul>
          <div className="flex-none text-gray-700 gap-2">
          {
            user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={Profile} title={user.displayName}/>
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
              <li><button type='submit' onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>:
          <div>
          <Link to='/login' className='text-white uppercase'>login</Link>
        </div>
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
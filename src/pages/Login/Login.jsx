import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import { FcGoogle } from "react-icons/fc";


    return (
        <div className='flex flex-col'>
            <div className="bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className='text-3xl font-bold mt-5'>Sign In</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="py-2 w-[100%] mx-auto text-white uppercase bg-cyan-500">Sign In</button>
                                </div>
                                <p>Create an Account? <Link to="/register" className="link link-info">Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline border-gray-400 hover:bg-gray-300 hover:text-gray-800 gap-2">
                        <FcGoogle className='text-xl'></FcGoogle>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
import { Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col'>
            <div className="bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className='text-3xl font-bold mt-5'>Sign In</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form>
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
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                                <p>Create an Account? <Link to="/register" className="link link-info">Sign up</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline hover:bg-gray-300 hover:text-black gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
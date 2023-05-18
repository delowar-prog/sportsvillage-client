import { Link } from 'react-router-dom'
const Register = () => {


    return (
        <div className='flex flex-col '>
            <div className="bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className='text-3xl font-bold mt-5'>Sign Up</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                </div>
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
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                                <p>Allready have an account? <Link to="/login" className="link link-info">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
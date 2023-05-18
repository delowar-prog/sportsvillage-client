import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'
import useTitle from '../../hooks/useTitle'
const Register = () => {
    useTitle('Register')
    const { signUpEmailPass, updateProfileInfo, userLogout } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        //validation
        var regex = /^(?=.*[0-9])/;
        if (password.length < 6) {
            setError('Password must be at least 6 Charecters')
        } else if (!regex.test(password)) {
            setError('Password must be at least one digit')
        }
        else {
            setError('')
        }

        signUpEmailPass(email, password)
            .then(result => {
                setError('')
                setSuccess('Registration completed successfully..')
                updateProfileInfo(name, photo)
                    .then(() => {
                        const loggedUser = result.user
                        console.log(loggedUser)
                        userLogout().then(() => {
                            navigate('/login')
                        })
                    })
                    .catch(error => setError(error.message))
            }).catch(error => console.log(error))
    }

    return (
        <div className='flex flex-col' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
            <div className="bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className='text-3xl font-bold mt-5'>Sign Up</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-white shadow-xl">
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                {
                                    success && <h3 className='text-md text-center bg-gray-300 text-green-500 font-bold p-1'>{success}</h3>
                                }
                                {
                                    error && <h3 className='text-md text-center bg-gray-300 text-red-500 font-bold p-1'>{error}</h3>
                                }
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="file" name="photo" required className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                                </div>
                                <div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="py-2 w-[100%] mx-auto text-white uppercase bg-cyan-500">Sign Up</button>
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
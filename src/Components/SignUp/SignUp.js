import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/signup.gif'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-center">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center py-5">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                        <div className='flex justify-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                            <Link to='/login' className="underline text-blue-700 font-bold"> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    useTitle('Login')
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        //user signin
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                //get jwt token
                setAuthToken(user)
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="hero min-h-screen bg-base-200 px-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center py-5">Login</h1>
                    <form
                        onSubmit={handleLogin}
                        className="card-body">
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
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                        <div className='flex justify-center'>
                            <SocialLogin></SocialLogin>    
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                            <Link to='/signup' className="underline text-blue-700 font-bold"> Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
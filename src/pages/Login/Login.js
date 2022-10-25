import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {  toast } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const navigate=useNavigate();
    const [error, setError] = useState('');
    const {signInWithEmail,providerLogin}=useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);
        signInWithEmail(email,password)
        .then(res=>{
            const user=res.user;
           // console.log(user);
           form.reset();
           navigate('/');
           toast.success('Login successfully');
        })
        .catch(error=>{
            console.error('error:',error);
            setError(error.message);
        })
    }
    const googleProvider= new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(res=>{
            const user=res.user;
            //console.log(user);
           // form.reset();
           navigate('/');
           toast.success('Login successfully');
        })
        .catch(error=>{
            console.error('error: ',error);
            setError(error.message);
        })
    }



    const gitHubProvider=new GithubAuthProvider()
    const handleGithubSignIn=()=>{
        providerLogin(gitHubProvider)
        .then(res=>{
            const user=res.user;
            //console.log(user);
           // form.reset();
           navigate('/');
           toast.success('Login successfully');
        })
        .catch(error=>{
            console.error('error: ',error);
            setError(error.message);
        })
    }


    return (

        <div className=" flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter email" className="input input-bordered" name='email' required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="enter password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </div>
                        {
                        error&&<p className='text-red-500'>{error}</p>
                    }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="flex justify-evenly mt-6">
                        <button onClick={handleGoogleSignIn} className=""><FaGoogle className=' text-2xl hover:text-primary '></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className=""><FaGithub className=' text-2xl hover:text-primary'></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
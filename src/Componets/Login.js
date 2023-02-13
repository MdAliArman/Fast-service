import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
const {login}=useContext(AuthContext)

    const handlesignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        }).catch(err=>console.log(err))
     
        
    }
    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="" className='w-3/4' alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handlesignUp}>
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className='py-3 text-center'>You have no account go to  <Link to='/signup' className='font-semibold'>Please Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
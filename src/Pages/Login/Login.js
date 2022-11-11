import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {login} = useContext(AuthContext)

    const handleLogin =event=>{
        event.preventDefault()
        const form =event.target
        const email =form.email.value 
        const password = form.password.value 

        login(email,password)
        .then(result =>{
            const user =result.user
            console.log(user)
        })
        .then(error=> console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 w-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                           
                        </div>
                    </form>
                    <p className='text-sm p-3'>Are You New Here?<Link to={'/signup'} className='text-rose-900 font-bold ml-2'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
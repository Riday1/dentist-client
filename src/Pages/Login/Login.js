import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <section className='my-20 flex justify-center items-center h-screen'>
            <div className='w-96 p-8 rounded-2xl border-2  border-opacity-50'>
                <h1 className='text-2xl font-semibold text-center'>Login </h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='form-control mb-4'>
                        <label htmlFor="email">
                            <span className='font-semibold'>Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email address is required"
                            }
                            )}
                            className='input input-bordered mt-2' id="" />
                        {errors?.email && <p className='text-red-500'>{errors.email?.message}</p>}

                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">
                            <span className='font-semibold'>Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "password required",
                            minLength: { value: 6, message: "Password must be 6 characters" }

                        })} className='input input-bordered mt-2' id="" />
                        {errors?.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <p className='text-sm'>Forget Password?</p>
                    </div>
                    <input type="submit" className='w-full btn btn-accent mt-4' id="" />
                    <p className='text-center mt-2'><small>New to Doctor's Portal? <Link to='/register' className='text-secondary'>Create new account</Link></small></p>
                </form>
                <div className="divider">OR</div>
                <div className='social-login'>
                    <button className="btn btn-outline-primary w-full font-semibold">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
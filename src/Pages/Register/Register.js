import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleRegister = (data) => {
        console.log(data)
    }
    return (
        <section className='my-20 flex justify-center items-center h-screen'>
            <div className='w-96 p-8 rounded-2xl border-2  border-opacity-50'>
                <h1 className='text-2xl font-semibold text-center'>Sign Up </h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className='form-control mb-4'>
                        <label htmlFor="email">
                            <span className='font-semibold'>Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "User name is required" })} className='input input-bordered mt-2' id="" />
                        {errors?.name && <p className='text-red-500'>{errors.name?.message}</p>}

                    </div>
                    <div className='form-control mb-4'>
                        <label htmlFor="email">
                            <span className='font-semibold'>Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email address required" })} className='input input-bordered mt-2' id="" />
                        {errors?.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">
                            <span className='font-semibold'>Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password length must be 6 characters more" })} className='input input-bordered mt-2' id="" />
                        {errors?.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className='w-full btn btn-accent mt-4' name="email" id="" />
                    <p className='text-center mt-2'><small>Already have an account ? <Link to='/login' className='text-secondary'>Please Login</Link></small></p>
                </form>
                <div className="divider">OR</div>
                <div className='social-login'>
                    <button className="btn btn-outline-primary w-full font-semibold">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
    );
};

export default Register;
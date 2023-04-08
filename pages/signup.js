import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '@/components/meta';
import { backend } from '@/constant';


const Login = () => {
    const router = useRouter();
    const [showPassword, handleShowPassWord] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const onSubmit = (data) => {
        const people = {
            name: data.name,
            phone: data.phone,
            password: data.password
        }
        fetch(`${backend}/public`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(people)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    alert('User create successfully. Please Login.');
                    router.push('/login')
                }
                else setErrorMassage(data.massage);
            })
    };
    return (
        <>
            <Meta title='Furniture - Signup' />
            <div className='flex justify-center h-screen items-center'>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl my-4'>Signup</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    autoComplete='off'
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Must be 3 characters or longer.'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    autoComplete='off'
                                    placeholder="01234567890"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is required'
                                        },
                                        pattern: {
                                            value: /(^(01){1}[3456789]{1}(\d){8})$/,
                                            message: 'Please add valid Phone Number. Ex: (01234567890)'
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: 'Please add valid 11 digit Phone Number.'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    {errors.phone?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block ml-5 w-5 h-5" onClick={() => handleShowPassWord(!showPassword)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block ml-5 w-5 h-5" onClick={() => handleShowPassWord(!showPassword)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                    }
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer.'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("cPassword", {
                                        required: {
                                            value: true,
                                            message: 'Confirm your password'
                                        },
                                        validate: (value) => value === getValues("password")
                                    })}
                                ></input>
                                <label className="label">
                                    {errors.cPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cPassword.message}</span>}
                                    {errors.cPassword?.type === 'validate' && <span className="label-text-alt text-red-500">{'Please make sure your passwords match'}</span>}
                                </label>
                            </div>
                            <div className={`form-control ${!errorMassage && 'mt-6'}`}>
                                <p className="text-red-500 mb-2">{errorMassage}</p>
                                <button className="btn btn-primary text-white font-bold">Login</button>
                            </div>

                        </form>
                        <small>Already have an account? <Link className='text-slate-400' href='/login'>Please Login</Link></small>
                        <div className="divider">or</div>
                        <Link
                            href='/'
                            className="btn btn-outline"
                        >VISIT AS GUEST</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
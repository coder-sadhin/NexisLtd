import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import hero from '../../assets/image/hero.png'
import useSetTitle from '../../Hooks/useSetTitle';

const Login = () => {
    useSetTitle('Login')
    const [token, setToken] = useState('')
    const navigate = useNavigate()
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });

    if(token) {
        navigate('/home')
    }

    const handleUserLogin = data => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        fetch('https://test.nexisltd.com/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token){
                localStorage.setItem('NexisltdToken', data.access_token)
                setToken(data.access_token)
            }
        })
        
    }
    return (
        <section className='container mx-auto px-4 md:px-0 lg:h-screen flex items-center mb-10 lg:mb-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 items-center'>
                <div data-aos="fade-right" data-aos-duration='2000'>
                    <img src={ logo } alt="Logo" />
                    <img src={ hero } alt="" className='w-full object-cover' />
                </div>
                <div className='shadow-shadow px-10 lg:px-20 pt-28 pb-16 rounded' data-aos="fade-left" data-aos-duration='2000'>
                    <h2 className='text-center text-xl leading-6 font-semibold text-theme-text mb-10 md:mb-20 lg:mb-[100px]'>Login Form</h2>
                    <form onSubmit={handleSubmit(handleUserLogin)} className='mb-10 md:mb-20 lg:mb-[100px]'>
                        <div className="mb-10">
                            <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Write Email Address" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />{errors.email && errors.email.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                        </div>
                        <div className="mb-10">
                            <input type="password" {...register("password", { 
                                required: true,  
                                minLength: { value: 8, message: 'Password must be 8 character or longer!' },
                            })} placeholder="Write Password" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                            {errors.password && <p className='text-red-600 text-xs text-left' role="alert">{errors.password?.message}</p>}
                        </div>
                        <div className="text-center mb-10">
                            <button disabled={ !isValid } type='submit' className={`${!isValid ? 'bg-gray-500' : 'bg-theme-primary'} shadow-shadow-tow py-4 px-8 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Login</button>
                        </div> 
                    </form>
                    <p className='text-center text-[#7E7E7E] text-sm'>Don’t have an account? <Link to='/' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>SignUp Here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;
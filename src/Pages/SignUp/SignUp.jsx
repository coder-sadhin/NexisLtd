import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import hero from '../../assets/image/hero.png'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { useState } from 'react';
import useSetTitle from '../../Hooks/useSetTitle';


const SignUp = () => {
    useSetTitle('Sign Up')
    const navigate = useNavigate()
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });
    const [formStep, setFormStep] = useState(0)

    const completeFormStep = () => {
        setFormStep(current => current + 1)
    }

    const backPreviousStep = () => {
        setFormStep(current => current - 1)
    }

    const handleUserRegister = data => {
        const userData = {
            first_name: data.firstName,
            last_name: data.lastName,
            phone_number: data.phone,
            email: data.email,
            password: data.password,
        }
        fetch('https://test.nexisltd.com/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            navigate('/login')
            console.log(data);
        })
        
    }


    return (
        <section className='container mx-auto px-4 md:px-0 lg:h-screen flex items-center mb-10 lg:mb-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 items-center'>
                <div data-aos="fade-right" data-aos-duration='2000'>
                    <img src={ logo } alt="Logo" />
                    <img src={ hero } alt="" className='w-full object-cover' />
                </div>
                <div className='shadow-shadow px-10 lg:px-20 pt-28 pb-16' data-aos="fade-left" data-aos-duration='2000'>
                    <h2 className='text-center text-xl leading-6 font-semibold text-theme-text mb-10 md:mb-20 lg:mb-[100px]'>SignUp Form</h2>
                    <form onSubmit={handleSubmit(handleUserRegister)}>
                        {
                            formStep === 0 &&
                            <>
                                <div className="mb-10">
                                    <input type="text" {...register("firstName", { required: true })} placeholder="Write a First name" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    {errors.firstName && errors.firstName.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                                </div> 
                                <div className="mb-10">
                                    <input type="text" {...register("lastName", { required: true })} placeholder="Write a First name" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    {errors.lastName && errors.lastName.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="text-center mb-10 md:mb-20 lg:mb-[100px] flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                                    }
                                    <button onClick={completeFormStep} disabled={ !isValid } type='button' className={`${!isValid ? 'bg-gray-500' : 'bg-theme-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Next Step <HiArrowNarrowRight /></button>
                                </div>
                                {
                                    formStep === 0 &&
                                    <p className='text-center text-[#7E7E7E] text-sm'>Already have an account?  <Link to='/login' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                                }
                            </>
                        }
                        {
                            formStep === 1 &&
                            <>
                                <div className="mb-10">
                                    <input type="text" {...register("phone", { required: true })} placeholder="+800 1xxxxxxxxx" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    {errors.phone && errors.phone.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                                </div>  
                                <div className="mb-10">
                                    <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Write Email Address" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />{errors.email && errors.email.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                                </div>
                                <div className="text-center mb-10 md:mb-20 lg:mb-[100px] flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                                    }
                                    <button onClick={completeFormStep} disabled={ !isValid } type='button' className={`${!isValid ? 'bg-gray-500' : 'bg-theme-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Next Step <HiArrowNarrowRight /></button>
                                </div>
                                {
                                    formStep === 0 &&
                                    <p className='text-center text-[#7E7E7E] text-sm'>Already have an account?  <Link to='/login' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                                } 
                            </>
                        } 
                        {
                            formStep >= 2 &&
                            <>
                                <div className="mb-10">
                                    <input type="password" {...register("password", { 
                                        required: true,  
                                        minLength: { value: 8, message: 'Password must be 8 character or longer!' },
                                    })} placeholder="Write Password" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                                    {errors.password && <p className='text-red-600 text-xs text-left' role="alert">{errors.password?.message}</p>}
                                </div>
                                <div className="text-center mb-10 flex gap-4">
                                    {
                                        formStep > 0 &&
                                        <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                                    }
                                    <button onClick={completeFormStep} disabled={ !isValid } type='submit' className={`${!isValid ? 'bg-gray-500' : 'bg-theme-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Sign Up</button>
                                </div> 
                            </>
                            
                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
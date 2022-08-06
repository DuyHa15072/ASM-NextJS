import React from 'react'
import Login from '../components/layout/login'
import {useForm , SubmitHandler} from 'react-hook-form'
import {signup} from '../api/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

type FormSignUp = {
  name: string,
  phonenumber: number,
  address: string,
  email: string,
  password: string 
}

const Signup = () => {
    const router = useRouter();
    const {register, handleSubmit, formState} = useForm<FormSignUp>();
    const onSubmit: SubmitHandler<FormSignUp> = data => {
      try {
        signup(data);
        alert ('Đăng ký thành công')
        router.push(`/signin`)
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="w-full flex flex-wrap">
    <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <a href="#" className=" text-white font-bold text-xl p-4"></a>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-4xl text-[#1E90FF]">Sign Up.</p>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" {...register('name', {required: true})}   placeholder="NGUYEN VAN A" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="number" {...register('phonenumber', {required: true})}  placeholder="09...." autoComplete="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" {...register('address', {required: true})}  placeholder="Street, County, City" autoComplete="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label  className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" {...register('email', {required: true})} autoComplete="email" placeholder="abc@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label  className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" {...register('password', {required: true})} placeholder="****"  autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1E90FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
          </div>
        </div>
      </form>
            <div className="text-center pt-12 pb-12">
                <p>Already have an account? <Link href="/signin"><a className="underline font-semibold text-[#1E90FF]">Đăng Nhập</a></Link></p>
            </div>
        </div>
    </div>
    <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/ef874a51-5b1d-4c89-89a4-ee9b5b679eb6/image.jpg  " alt="Background" />
    </div>
     </div>
  )
}
Signup.Layout = Login;
export default Signup
import React from 'react'
import Login from '../components/layout/login'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signin } from '../api/auth'
import { useRouter } from 'next/router';

type FromSignIn = {
  email: '',
  password: ''
}

const SignIn = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FromSignIn>();
  const onSubmit: SubmitHandler<FromSignIn> = async data => {
    try {
      const user = await signin(data);
      localStorage.setItem('user', JSON.stringify(user));
      alert ('Đăng Nhập thành công ');
      router.push(`/`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex flex-wrap">
      {/* Login Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="#" className=" text-white font-bold text-xl p-4"></a>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-4xl text-[#1E90FF]">Sign in.</p>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='mb-[10px]'>
                <label className="sr-only">Email address</label>
                <input type="email" {...register('email', { required: true })} id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input type="password" {...register('password', { required: true })} id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1E90FF] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>Don`t have an account? <a href="/signup" className="underline font-semibold text-[#1E90FF]">Register here.</a></p>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/ef874a51-5b1d-4c89-89a4-ee9b5b679eb6/image.jpg" />
      </div>
    </div>
  )

}
SignIn.Layout = Login;
export default SignIn
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SubmitHandler, useForm,  } from "react-hook-form"


import { useDispatch } from 'react-redux'

import { useRouter } from 'next/router'
import LayoutAdmin from '../../../../components/layout/admin'
import { readUser } from '../../../../api/auth'
import Users from '../../../../hooks/user-users';
import { SignupType } from '../../../../types/signUp'


const EditUser = () => {
  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors}, reset} = useForm<any>();    
  const { updateUser } = Users();
  const { id } = router.query;  
        useEffect(() => {

            const getUser= async () => {
                (async () => {
                    const {user} = await readUser(id)
                    reset(user)
                })()
            }
            getUser();
    
        }, [id]);

  const onSubmit: SubmitHandler<SignupType> = async (data: SignupType) => {
   await updateUser(data)
    alert ( "update thành công !!" )
    router.push(`/admin/users`)
}
  return (
    <div>
    <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Edit Users</h3>
    </div>
    < form  action = ""  onSubmit={handleSubmit(onSubmit) } >
    <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" {...register('name', {required: true})}   placeholder="NGUYEN VAN A" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.name && <span>Không để trống</span> }   
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
                <div className="mt-4 flex items-center justify-between">
                <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
            </div>

            </form>
</div>
  )
}
EditUser.Layout = LayoutAdmin;
export default EditUser
import React from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm,  } from "react-hook-form"
import { CategoryType } from '../../../types/category'

import { useDispatch } from 'react-redux'
import {creactCategory} from "../../../features/category/category.slice"

import { useRouter } from 'next/router'
import LayoutAdmin from '../../../components/layout/admin'
const AddCategory = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors} } = useForm<CategoryType>();

  const onSubmit: SubmitHandler<CategoryType> = data => {
    dispatch(creactCategory(data))
    alert ( "Thêm thành công !!" )
    router.push(`/admin/category`)
}
  return (
    <div>
    <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Add Category</h3>
    </div>
    < form  action = ""  onSubmit = { handleSubmit ( onSubmit ) } >
                <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Product Name</label>
                    <input type="text" {...register('name', { required: true , minLength: 5})} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.name && <span>Không để trống, nhập lớn hơn 5</span> }
                </div>
                <div className="mt-4 flex items-center justify-between">
                <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
            </div>

            </form>
</div>
  )
}
AddCategory.Layout = LayoutAdmin;
export default AddCategory
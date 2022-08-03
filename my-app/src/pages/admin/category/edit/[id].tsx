import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SubmitHandler, useForm,  } from "react-hook-form"
import { CategoryType } from '../../../../types/category'

import { useDispatch } from 'react-redux'
import {updateCategory,} from "../../../../features/category/category.slice"

import { useRouter } from 'next/router'
import LayoutAdmin from '../../../../components/layout/admin'
import { readCategory } from '../../../../api/category'
import userCategory from '../../../../hooks/user-category'


const EditCategory = () => {
  const router = useRouter()
  
  const { register, handleSubmit, formState: {errors}, reset} = useForm<any>();    
  const { updateCate } = userCategory();
  const { id } = router.query;

        console.log(id)

        useEffect(() => {

            const getCategory = async () => {
                (async () => {
                    const {category} = await readCategory(id)
                    reset(category)

                    console.log(category)
                })()
    
    
            }
            getCategory();
    
        }, [id]);

  const onSubmit: SubmitHandler<CategoryType> = async (data: CategoryType) => {
   await updateCate(data)
    alert ( "update thành công !!" )
    router.push(`/admin/category`)
}
  return (
    <div>
    <div className='flex justify-between mb-[20px]'>
        <h3 className='text-[30px]'>Edit Category</h3>
    </div>
    < form  action = ""  onSubmit={handleSubmit(onSubmit) } >
                <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Category Name</label>
                    <input type="text" {...register('name', { required: true , minLength: 5})} placeholder="name category..." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.name && <span>Không để trống, nhập lớn hơn 5</span> }
                </div>
                <div className="mt-4 flex items-center justify-between">
                <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
            </div>

            </form>
</div>
  )
}
EditCategory.Layout = LayoutAdmin;
export default EditCategory
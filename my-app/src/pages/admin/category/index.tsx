import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import LayoutAdmin from '../../../components/layout/admin'
import { getCategory,removeCategory } from '../../../features/category/category.slice';
import userProducts from '../../../hooks/user-category';
import { CategoryType } from '../../../types/category';
import {remove} from '../../../api/category'
import userCategory from '../../../hooks/user-category';

const listCategory = () => {
  const dispatch = useAppDispatch();
  const categorys = useAppSelector((state) => state.category.value)

  console.log(categorys)
  useEffect(() => {
    dispatch(getCategory());
} ,  [ ] )


    const removeCate = async (id: any) => {
      const confirm = window.confirm('Bạn có muốn xóa không ?')
      if(confirm){
        await dispatch(removeCategory(id));     
      }
       
    }
    return (
        <div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className='flex justify-between mb-[20px]'>
                    <h3 className='text-[30px]'>List Category</h3>
                    <Link href="category/add" className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Category</button>
                    </Link>
                </div>
                <div className="w-full overflow-x-auhref">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 ">
                                <th className="px-4 py-3">STT</th>
                                <th className="px-4 py-3">Name</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {categorys?.map((item : CategoryType, index) => {
                                return (
                                    <tr key={index} className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.name}
                                        </td>
                                        <td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={`/admin/category/edit/${item._id}`} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline">Update</Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => {removeCate(item._id)}} className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">remove</button>
                                            </td>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
listCategory.Layout = LayoutAdmin;
export default listCategory
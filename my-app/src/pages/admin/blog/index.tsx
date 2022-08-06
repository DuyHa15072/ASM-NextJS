import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import LayoutAdmin from '../../../components/layout/admin'
import { getBlog,removeBlog } from '../../../features/blog/blog.slice'


const listBlogs= () => {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(state => state.blog.value);
    
    useEffect(() => {
        dispatch(getBlog());
    } ,  [ ] )


    const removeItem = async (id: any) => {
      const confirm = window.confirm('bạn có muốn xóa không ?');
      if(confirm){
        await dispatch(removeBlog(id));
      }
   }
   console.log(blogs);
   
    return (
        <div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className='flex justify-between mb-[20px]'>
                    <h3 className='text-[30px]'>Blogs</h3>
                    <Link href="blog/add" className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Blog</button>
                    </Link>
                </div>
                <form className='mb-4 flex'>
               
            </form>
                <div className="w-full overflow-x-auhref">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 ">
                                <th className="px-4 py-3">STT</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Content</th>
                                <th className="px-4 py-3">Desc</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {blogs?.map((item: any, index: any) => {
                                return (
                                    <tr key={index} className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.title}
                                        </td>
                                        <td>
                                            <img className="h-10 w-10 rounded-full" src={item.img} alt="" />
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.content}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.desc}
                                        </td>
                                        
                                        <td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={`/admin/blog/edit/${item._id}`} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline">Update</Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => {removeItem(item._id)}} className="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">remove</button>
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
listBlogs.Layout = LayoutAdmin;
export default listBlogs
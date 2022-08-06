
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { detail } from '../../../../api/blog';
import LayoutAdmin from '../../../../components/layout/admin'
import userBlogs from '../../../../hooks/user-blog';
import { useRouter } from 'next/router';
import { BlogType } from '../../../../types/blog';


const Edit = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();
    const { edit } = userBlogs();

    const { id } = router.query;

    useEffect(() => {
        console.log();
        const getBlog = async () => {
            (async () => {
                const data = await detail(id)
                reset(data.blog);
            })()


        }
        getBlog();

    }, []);


    const onSubmit: SubmitHandler<BlogType> = (data: BlogType) => {
        edit((data))
        alert("Edit thành công")
        router.push(`/admin/blog`)
    }
    return (
        <div>
            {/* <p>id: {id}</p> */}
            <div className=''>
                <div className='flex justify-between mb-[20px]'>
                    <h1 className='text-[30px]'>Update</h1>
                </div>
                <form className="justify-center w-full mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div className="mt-4">
                           
                            <div className="w-full mb-[10px]">
                                <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Blog Name</label>
                                <input type="text" {...register('title', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.title && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                            </div>
                            
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                                <input  {...register('img', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                <img src='' alt="" />
                            </div>
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">COntent</label>
                                <textarea rows={20} {...register('content', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.content && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                            </div>
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Description</label>
                                <textarea rows={20} {...register('desc', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.desc && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
Edit.Layout = LayoutAdmin;
export default Edit
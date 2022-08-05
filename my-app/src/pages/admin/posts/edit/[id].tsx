import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';
import LayoutAdmin from '../../../../components/layout/admin';
import userPosts from '../../../../hooks/user-posts'
import { PostsType } from '../../../../types/posts';
type Props = {}

const Edit = (props: Props) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();
    const { create, read, updates } = userPosts();
    //   const { data } = userCategory();
    const { id } = router.query;

    const { data, error } = useSWR(id ? `posts/${id}` : null);

    useEffect(() => {
        console.log();
        const getPosts = async () => {
            // console.log();
            reset(data);

        }
        getPosts();

    }, []);

    const onSubmit: SubmitHandler<PostsType> = (data: PostsType) => {
        updates((data))
        alert("Thêm thành công")
        router.push(`/admin/posts`)
    }
    return (
        <div>
            <div className=''>
                <div className='flex justify-between mb-[20px]'>
                    <h1 className='text-[30px]'>Add</h1>
                </div>
                <form className="justify-center w-full mx-auto" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <div className="mt-4">
                            <div className="w-full mb-[10px]">
                                <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Title</label>
                                <input type="text" {...register('title', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.name && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                            </div>
                         
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                                <input  {...register('photo', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Description</label>
                                <textarea rows={20} {...register('desc', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.desc && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <button className="px-6 py-2 text-blue-200 bg-indigo-500 hover:bg-indigo-600">Created</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
Edit.Layout = LayoutAdmin
export default Edit
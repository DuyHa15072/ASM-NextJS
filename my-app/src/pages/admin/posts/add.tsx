import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import { useRouter } from 'next/router'
import LayoutAdmin from '../../../components/layout/admin'
import { PostsType } from '../../../types/posts';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { creactPost } from '../../../features/posts/post.slice';
// import { creactBlog } from '../../../features/blog/blog.slice';

const Add = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<any>();
    const [files, setFiles] = useState<any>([]);

    const router = useRouter()


    const CLOUDINARY_PRESET = "k9yoyn7r";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dev7lem1d/image/upload";

    const onSubmit: SubmitHandler<PostsType> = async (data) => {
        const formData = new FormData();

        if (files) {
            let imgLink = []
            for (let index = 0; index < files.length; index++) {
                formData.append("file", files[index]);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const image = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink.push(image.data.url)
            }
            dispatch(creactPost(({ ...data, img: imgLink[0] })))
            alert("Thêm thành công")
            console.log(data);
            router.push(`/admin/posts`)
        }


    }

    const previewImg = (ig: any) => {
        let imgs = [];
        for (let i = 0; i < ig.length; i++) {
            imgs.push(ig[i])
        }
        setFiles(imgs)
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
                                <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Blog Name</label>
                                <input type="text" {...register('title', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.title && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                            </div>
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                                <input multiple onChange={(e) => { previewImg(e.target.files) }} type="file" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                <label htmlFor="" className='flex pt-3'>
                                    {files && files.map((item: any, index: any) => {
                                        return <img key={index} className='ml-5' src={URL.createObjectURL(item)} alt="" width={150} height={200} />
                                    })}
                                </label>
                            </div>
                            {/* <div className="w-full  mb-[10px]">
                                <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Content</label>
                                <textarea rows={20} {...register('content', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.content && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

                            </div> */}
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Description" className="block mb-3 text-sm font-semibold text-gray-500">Description</label>
                                <textarea rows={20} {...register('desc', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
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
Add.Layout = LayoutAdmin;
export default Add
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import { useRouter } from 'next/router'
import { add } from '../../../api/products';
import LayoutAdmin from '../../../components/layout/admin'
import userProducts from '../../../hooks/user-products';

import { ProductType } from '../../../types/products';
import userCategory from '../../../hooks/user-category';
import axios from 'axios';

const Add = () => {
    const {register,handleSubmit, formState: {errors} } = useForm<any>();
    const [files, setFiles] = useState<any>([]);

    const router = useRouter()
  const { error, create } = userProducts();
  const { data } = userCategory();
    // console.log(data);

    const CLOUDINARY_PRESET = "k9yoyn7r";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dev7lem1d/image/upload";

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
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
        create(({ ...data, img: imgLink[0] }))
        alert("Thêm thành công")
        console.log(data);
        router.push(`/admin/products`)
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
            <div className=" mb-[10px]">
                            <label htmlFor="Category">Category</label>
                            <select {...register('category', { required: true })} >
                                <option className="py-1">Categorys</option>
                                {data && data.map((item: any, index: any) => {
                                    return <option key={index} className="py-1" value={item._id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Product Name</label>
                    <input type="text" {...register('name', { required: true , minLength: 5})} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.name && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div>
                {/* <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">img</label>
                    <input type="text" {...register('img', { required: true , minLength: 5})} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.img && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div> */}
        <div className="w-full  mb-[10px]">
                            <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                            <input multiple onChange={(e) => { previewImg(e.target.files) }} type="file" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <label htmlFor="" className='flex pt-3'>
                                {files && files.map((item : any, index: any) => {
                                    return <img key={index} className='ml-5' src={URL.createObjectURL(item)} alt="" width={150} height={200} />
                                })}
                            </label>
                        </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Price" className="block mb-3 text-sm font-semibold text-gray-500">Price</label>
                    <input type="number" {...register('price', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.price && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div>
                <div className="w-full  mb-[10px]">
                    <label htmlFor="Quantity" className="block mb-3 text-sm font-semibold text-gray-500">Quantity</label>
                    <input type="number" {...register('quantity', { required: true })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.quantity && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}

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
Add.Layout = LayoutAdmin;
export default Add
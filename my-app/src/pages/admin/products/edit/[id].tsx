import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm, FormState } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { add, update, readProduct } from '../../../../api/products';
import { readCategory } from '../../../../api/category';
import LayoutAdmin from '../../../../components/layout/admin'
import userCategory from '../../../../hooks/user-category';
import userProducts from '../../../../hooks/user-products';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { ProductType } from '../../../../types/products';
import { CategoryType } from '../../../../types/category';

const Edit = () => {
    const router = useRouter();



    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();
    const { create, read, updates } = userProducts();
      const { data } = userCategory();
    const { id } = router.query;

    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    //   const { data, error } = useSWR(id ? `products/${id}` : null);

    useEffect(() => {
        console.log();
        const getProduct = async () => {
            (async () => {
                const products = await readProduct(id)
                reset(products);
            })()


        }
        getProduct();

    }, []);

    useEffect(() => {
        const getCategorys = async () => {
          const { data } = await readCategory(id);
          setCategorys(data)
        }
        getCategorys();

      } ,  [ ] ) ;

      console.log(categorys)


    const onSubmit: SubmitHandler<ProductType> = (data: ProductType) => {
        updates((data))
        alert("Thêm thành công")
        router.push(`/admin/products`)
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
                            <div className=" mb-[10px]">
                            <label htmlFor="Category">Category</label>
                            <select {...register('category', { required: true })} >
                                <option className="py-1">Categorys</option>
                                {data && data.map((item : any, index : any) => {
                                    return <option key={index} className="py-1" value={item._id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                            <div className="w-full mb-[10px]">
                                <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">Product Name</label>
                                <input type="text" {...register('name', { required: true, minLength: 5 })} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {errors.name && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                            </div>
                            {/* <div className="w-full mb-[10px]">
                    <label htmlFor="Name" className="block mb-3 text-sm font-semibold text-gray-500">img</label>
                    <input type="text" {...register('img', { required: true , minLength: 5})} placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    {errors.img && <span className='text-red-500'>Không để trống và nhập lớn hơn 5</span>}
                </div> */}
                            <div className="w-full  mb-[10px]">
                                <label htmlFor="Image" className="block mb-3 text-sm font-semibold text-gray-500">Image</label>
                                <input  {...register('img', { required: true })} type="text" placeholder="...." className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                <img src=''  alt="" /> 
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
Edit.Layout = LayoutAdmin;
export default Edit
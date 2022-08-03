import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hook';
import { getPosts } from './post.slice';

type Props = {}

const Post = (props: Props) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.value);

    // const categorys = useAppSelector((state) => state.category.value)

    // const timeClearRef = useRef(null);
    useEffect(() => {
        dispatch(getPosts());
    }, []);



    return (
        <div>
            <div>
                <div className="mt-6 bg-gray-50">
                    <div className=" px-10 py-6 mx-auto">
                        <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">News</h2>
                        <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                            <div className="grid grid-cols-12 col-span-12 gap-7">
                            {posts?.map((item: any, index: any)=>{

                            return(
                               
                                    <div key={index} className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                        <a href={`/posts/${item._id}`} className="block transition duration-200 ease-out transform hover:scale-110">
                                            {/* <img className="object-cover w-full shadow-sm h-full" src={item.photo} /> */}
                                            <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" />
                                        </a>
                                        <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">

                                            <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">{item.title}</a></h2>
                                            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                
                                )
                                })}


                                {/* <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"/>
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                   
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Authenticating users with email verification in Django apps</a></h2>
                                     <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your web application by sending secure links to their email box.</p> 
                                </div>
                            </div>

                            <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"/>
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                   
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Creating user registration and authentication system in flask</a></h2>
                                    <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using flask and mysql db.</p> 
                                </div>
                            </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post
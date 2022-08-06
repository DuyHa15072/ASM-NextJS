import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

type Props = {}

const BlogDetail = (props: Props) => {
  const router = useRouter();
  const { id } = router.query

  const { data, error } = useSWR(id ? `/blog/${id}` : null)
  console.log(data);
  
  if (!data) return <div>Load...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      <nav className="flex lg:mt-[40px] mx-[30px] border-[1px] border-gray-300 px-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-[25px] font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              <a href="#" className="ml-1 text-[25px] font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Blog Detail</a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={data?.blog.img} alt="image" loading="lazy" width="" height="" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{data?.blog.title}</h2>
              <p className="mt-6 text-gray-600">{data?.blog.desc}</p>
              {/* <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
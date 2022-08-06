import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

type Props = {}

const NewsDetail = (props: Props) => {
  const router = useRouter();
  const { id } = router.query

  const { data, error } = useSWR(id ? `/posts/${id}` : null)
  if (!data) return <div>Load...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={data?.photo} alt="image" loading="lazy" width="" height="" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{data?.title}</h2>
              <p className="mt-6 text-gray-600">{data?.desc}</p>
              {/* <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
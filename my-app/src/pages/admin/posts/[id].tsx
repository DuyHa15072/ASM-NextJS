import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import LayoutAdmin from '../../../components/layout/admin'

type Props = {}

const InfoPost = (props: Props) => {
    const router = useRouter();
    const { id } = router.query

    const { data, error } = useSWR(id ? `/posts/${id}` : null)
    if (!data) return <div>Load...</div>
    if (error) return <div>Error</div>
    return (
        <div>
            <h3 className="text-2xl text-gray-900 font-bold md:text-4xl mb-10">{data?.post.title}</h3>
            <div className="md:5/12 lg:w-5/12"> 
              <img src={data?.post.img} alt="image" loading="lazy" width="" height="" />
            </div>
            <p className="mt-6 text-gray-600">{data?.post.desc}</p>
        </div>
    )
}
InfoPost.Layout = LayoutAdmin
export default InfoPost
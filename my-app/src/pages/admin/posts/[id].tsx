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
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{data?.title}</h2>
            <img src={data?.photo} alt="" />
            <p className="mt-6 text-gray-600">{data?.desc}</p>
            

        </div>
    )
}
InfoPost.Layout = LayoutAdmin
export default InfoPost
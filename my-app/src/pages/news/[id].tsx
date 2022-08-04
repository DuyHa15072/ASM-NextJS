import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

type Props = {}

const NewsDetail = (props: Props) => {
    const router = useRouter();
    const { id } = router.query

    const { data, error } = useSWR(id ? `/products/${id}` : null)
    if (!data) return <div>Load...</div>
    if (error) return <div>Error</div>
  return (
    <div>NewsDetail</div>
  )
}

export default NewsDetail
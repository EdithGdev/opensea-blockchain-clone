import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const Collection = () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionId)
  return (
      <Link href='/'>
    <div>[collectionid]</div>
    </Link>
  )
}

export default Collection

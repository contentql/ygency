'use client'

import { Blog, Tag } from '@payload-types'

import { trpc } from '@/trpc/client'

import Blogs from './Blogs'
import PageBanner from './PageBanner'

interface TagsDetails extends Tag {
  count: number
}

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery(undefined, {
    initialData: blogsData,
  })

  const { data: tagsDetails } = trpc.tag.getAllTags.useQuery()
  return (
    <div>
      <PageBanner />

      {/* Blog Page Area start */}
      <Blogs blogsData={blogs} />
      {/* Blog Page Area end */}
    </div>
  )
}

export default AllBlogs

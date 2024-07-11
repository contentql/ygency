'use client'

import { Blog, BlogsHeroType, Media, Tag } from '@payload-types'

import Blogs from '@/components/marketing/blog/Blogs'
import { trpc } from '@/trpc/client'

interface TagsDetails extends Tag {
  count: number
}

function BlogHero(blogData: BlogsHeroType) {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery()
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{
          backgroundImage: `url(${(blogData?.image as Media)?.url || 'assets/images/banner/banner-bg.jpg'})`,
        }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {blogData?.title}
            </h2>
            <p className='line-clamp-3'>{blogData?.description}</p>
          </div>
        </div>
      </section>
      <Blogs blogsData={blogs as Blog[]} />
    </>
  )
}

export default BlogHero

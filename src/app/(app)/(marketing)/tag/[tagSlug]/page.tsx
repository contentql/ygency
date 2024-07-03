import { Blog, Media } from '@payload-types'

import Blogs from '@/components/marketing/blog/Blogs'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    tagSlug: string
  }
}

const page = async ({ params }: PageProps) => {
  try {
    const blogs = await serverClient.tag.getBlogs({ tagSlug: params?.tagSlug })

    return (
      <div>
        {/* <TagDetails data={blogs?.tagData.at(0) as any} /> */}
        <section
          id='services'
          className='service-area-four pt-110 rpt-85 rpb-70'
          style={{
            backgroundImage: 'url(assets/images/hero/hero-two-bg.png)',
          }}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-7'>
                <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
                  <div className='tag-image'>
                    <img
                      src={
                        (blogs?.tagData?.at(0)?.tagImage as Media)?.url || ''
                      }
                      alt={
                        (blogs?.tagData?.at(0)?.tagImage as Media)?.alt || ''
                      }
                    />
                  </div>
                  <h2 className=' mb-15'>{blogs?.tagData?.at(0)?.title}</h2>
                  <span>{blogs?.tagData?.at(0)?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {blogs?.blogsData?.length !== 0 ? (
          <Blogs blogsData={blogs?.blogsData as Blog[]} />
        ) : (
          <p>Tag is not present</p>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default page

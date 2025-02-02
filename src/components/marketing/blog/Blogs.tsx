import { Blog, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/utils/dateFormatter'

const Blogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          {blogsData?.map((blog, index) => (
            <div key={index} className='col-xl-4 col-md-6'>
              <div className='blog-item wow fadeInUp delay-0-2s'>
                <div className='image'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src={(blog?.blog_image as Media)?.url || ''}
                    alt={(blog?.blog_image as Media)?.alt || ''}
                    height={300}
                    width={410}
                  />
                </div>
                <ul className='blog-meta'>
                  <li>
                    <i className='far fa-calendar-alt' />
                    <Link href='#'>{formatDate(blog?.createdAt)}</Link>
                  </li>
                  <li>
                    <i className='far fa-comments' />
                    <Link href='#'>Comment (5)</Link>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href={`/blog/${blog?.slug}`}>
                    {blog?.title}
                  </Link>
                </h4>
                <Link legacyBehavior href={`/blog/${blog?.slug}`}>
                  <span className='read-more'>
                    Read More <i className='far fa-arrow-right' />
                  </span>
                </Link>
              </div>
            </div>
          ))}
          {/* <div className='col-lg-12'>
            <ul className='pagination justify-content-center wow fadeInUp delay-0-2s mt-10 flex-wrap'>
              <li className='page-item disabled'>
                <span className='page-link'>
                  <i className='fas fa-angle-left' />
                </span>
              </li>
              <li className='page-item active'>
                <span className='page-link'>
                  01
                  <span className='sr-only'>(current)</span>
                </span>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  02
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  03
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  04
                </a>
              </li>
              <li className='page-item dot' />
              <li className='page-item dot' />
              <li className='page-item dot' />
              <li className='page-item'>
                <a className='page-link' href='#'>
                  <i className='fas fa-angle-right' />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Blogs

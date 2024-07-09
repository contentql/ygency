import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import { trpc } from '@/trpc/client'

const TagCard = () => {
  const { data } = trpc.tag.getAllTags.useQuery()
  return (
    <div className='row'>
      {data?.map((tag, index) => (
        <div key={index} className='col-xl-3 col-lg-4 col-sm-6'>
          <Link href={`/tag/${tag?.slug}`}>
            <div className='tag-item wow fadeInUp delay-0-2s'>
              <div className='content'>
                <div className='image'>
                  <Image
                    src={(tag?.tagImage as Media)?.url || ''}
                    alt={(tag?.tagImage as Media)?.alt || ''}
                    height={150}
                    width={150}
                  />
                </div>
                <div>
                  <h5>{tag?.title}</h5>
                  <h6>
                    {tag?.count} {tag?.count === 1 ? 'Blog' : 'Blogs'}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TagCard

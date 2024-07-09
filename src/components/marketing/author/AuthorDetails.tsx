import { User } from '@payload-types'
import Image from 'next/image'

const AuthorDetails = ({ author }: { author: User }) => {
  console.log('author........', author)
  return (
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={author?.imageUrl || ''}
                  alt='Author'
                  height={150}
                  width={150}
                />
              </div>
              <h2 className=' mb-15'>{author?.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorDetails

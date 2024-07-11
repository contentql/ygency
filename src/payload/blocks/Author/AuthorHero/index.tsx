import { AuthorHeroType, Media } from '@payload-types'

import AuthorCard from '@/components/marketing/author/AuthorCard'

const AuthorDescription = (data: AuthorHeroType) => {
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{ backgroundImage: `url(${(data?.image as Media)?.url!})` }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {data?.title}
            </h2>
            <p className='line-clamp-3'>{data?.description}</p>
          </div>
        </div>
      </section>
      <AuthorCard />
    </>
  )
}

export default AuthorDescription

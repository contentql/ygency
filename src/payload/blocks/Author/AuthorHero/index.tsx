import { AuthorHeroType } from '@payload-types'

import AuthorCard from '@/components/marketing/author/AuthorCard'

const AuthorDescription = (data: AuthorHeroType) => {
  return (
    <section
      id='services'
      className='service-area-four pt-110 rpt-85 pb-100 rpb-70'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-15'>{data?.description}</span>
              <h2>{data?.title}</h2>
              <span>{data?.description}</span>
            </div>
          </div>
        </div>
        <AuthorCard />
      </div>
    </section>
  )
}

export default AuthorDescription

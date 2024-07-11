import { TagsHeroType } from '@payload-types'

import TagCard from '@/components/marketing/tag/TagCard'

const TagsHero = (data: TagsHeroType) => {
  return (
    <section
      id='services'
      className='service-area-four pt-110 rpt-85 pb-100 rpb-70'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-15'>{data?.title}</span>
              <h2>{data?.description}</h2>
            </div>
          </div>
        </div>
        <TagCard />
      </div>
    </section>
  )
}

export default TagsHero

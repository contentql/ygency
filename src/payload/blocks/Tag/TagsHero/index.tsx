import { Media, TagsHeroType } from '@payload-types'

import TagCard from '@/components/marketing/tag/TagCard'

const TagsHero = (data: TagsHeroType) => {
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
      <TagCard />
    </>
  )
}

export default TagsHero

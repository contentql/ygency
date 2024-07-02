'use client'

import { HeroType, Media } from '@payload-types'
import Link from 'next/link'

// const Counter = dynamic(() => import('@/components/common/Counter'), {
//   ssr: false,
// })

const Hero = (data: HeroType) => {
  const [firstWord, ...restOfTheWords] = (data?.title as string)?.split(' '),
    restOfTheString = restOfTheWords.join(' ')

  return (
    <>
      <section
        className='hero-area-two pt-220 rpt-150 rpb-50 rel z-1 pb-80'
        style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
        <div className='container'>
          <h1 className='hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s'>
            {firstWord}
            <span className='arrow'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='wow fadeInLeft delay-0-6s'
                src='assets/images/hero/title-arrow.png'
                alt='Arrow'
              />
            </span>
            {restOfTheString}
          </h1>
          <div className='row align-items-center justify-content-between'>
            <div className='col-xl-3 col-lg-4'>
              <div className='hero-two-content mb-50 wow fadeInRight delay-0-2s'>
                <p>{data?.description}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <img
                  className='mt-20'
                  src='assets/images/hero/arrow.png'
                  alt='Arrow'
                />
                <div className='authors-text mt-45'>
                  {data?.clients?.map((ele, id) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={id}
                      src={(ele?.image as Media)?.url as string}
                      alt='Author'
                    />
                  ))}
                  <i className='fal fa-plus' />
                  <span className='text'>{data?.client_description}</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-two-image mb-50 wow zoomIn delay-0-2s'>
                <img
                  src={(data?.hero_image as Media)?.url as string}
                  alt='Hero'
                />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='hero-two-btn mb-50 wow fadeInLeft delay-0-2s'>
                <Link legacyBehavior href='/about'>
                  <a className='explore-more'>
                    <i className='fas fa-arrow-right' />{' '}
                    <span>{data?.badge_title}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero

import { Media, RecentWorkType } from '@payload-types'
import Link from 'next/link'

const RecentWork = (data: RecentWorkType) => {
  return (
    <section className='project-timeline-two-area pt-130 rpt-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-8'>
            <div className='section-title mb-70 rmb-30 wow fadeInUp delay-0-2s'>
              <span className='sub-title mb-15'>{data?.badge_title}</span>
              <h2>{data?.title}</h2>
            </div>
          </div>
          <div className='col-xl-6 col-lg-4 text-lg-end'>
            <Link legacyBehavior href='/projects'>
              <a className='explore-more rmb-50 wow fadeInRight delay-0-2s'>
                <i className='fas fa-arrow-right' /> <span>Explore more</span>
              </a>
            </Link>
          </div>
        </div>
        <div className='row gap-90'>
          {data?.recent_works?.map((recentWork, idx) => (
            <div key={idx} className='col-lg-6'>
              <div className='project-timeline-two wow fadeInUp delay-0-2s'>
                <span className='serial-number'>{idx + 1}</span>
                <h4>
                  <Link legacyBehavior href='/project-details'>
                    <a>{recentWork?.title}</a>
                  </Link>
                </h4>
                <div className='image'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}

                  <img
                    src={
                      ((recentWork?.image as Media)?.url as string) ||
                      'assets/images/projects/project-timeline-two1.jpg'
                    }
                    alt={recentWork?.title as string}
                  />
                </div>
                <div className='right-btn'>
                  <a href='#'>
                    <i className='fal fa-long-arrow-right' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentWork

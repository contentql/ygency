import { Media, ServiceType } from '@payload-types'
import Link from 'next/link'

const Service = (data: ServiceType) => {
  return (
    <section
      className='service-area-four pt-110 rpt-85 pb-100 rpb-70'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-15'>{data?.badge_title}</span>
              <h2>{data?.title}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='service-four-item wow fadeInUp delay-0-2s'>
              <div className='content'>
                <div className='icon-btn'>
                  <i className='flaticon-development' />
                  <Link legacyBehavior href='/service-details'>
                    <a className='more-btn'>
                      <i className='far fa-arrow-right' />
                    </a>
                  </Link>
                </div>
                <h5>
                  <Link legacyBehavior href='/service-details'>
                    <a>Web Development</a>
                  </Link>
                </h5>
              </div>
              <div className='image'>
                <img src='assets/images/services/service1.jpg' alt='Service' />
              </div>
            </div>
          </div>
          {data?.services?.map((service, idx) => (
            <div key={idx} className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='service-four-item wow fadeInDown delay-0-2s'>
                <div className='content'>
                  <div className='icon-btn'>
                    <i className={`${service?.service_icon}`} />
                    <Link legacyBehavior href='/service-details'>
                      <a className='more-btn'>
                        <i className='far fa-arrow-right' />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href='/service-details'>
                      <a>{service?.title}</a>
                    </Link>
                  </h5>
                </div>
                <div className='image'>
                  <img
                    src={(service?.image as Media)?.url as string}
                    alt='Service'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service

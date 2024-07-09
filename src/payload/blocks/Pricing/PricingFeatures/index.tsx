import { PricingFeaturesType } from '@payload-types'
import Link from 'next/link'

const PricingFeatures = (data: PricingFeaturesType) => {
  return (
    <section className='why-choose-area pt-130 rpt-100 pb-100 rpb-70'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-5'>
            <div className='row'>
              <div className='col-xl-11'>
                <div className='why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s'>
                  <div className='section-title mb-50'>
                    <span className='sub-title mb-15'>{data?.sub_title}</span>
                    <h2>{data?.title}</h2>
                  </div>
                  {data?.datails?.slice(0, 2)?.map((item, index) => (
                    <div key={index}>
                      <h5>{item?.heading}</h5>
                      <p>{item?.description}</p>
                      <br />
                    </div>
                  ))}

                  <Link legacyBehavior href={data?.button_path || '/'}>
                    <span className='theme-btn style-two mt-35'>
                      {data?.button_text} <i className='far fa-arrow-right' />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='row'>
              {data?.features?.slice(0, 4)?.map((feature, index) =>
                index % 2 === 0 ? (
                  <div key={index} className='col-md-6'>
                    <div className='service-item wow fadeInRight delay-0-2s'>
                      <div className='icon'>
                        <i className={`fal ${feature?.icons}`} />
                      </div>
                      <h5>
                        <Link legacyBehavior href='/service-details'>
                          <span className='line-clamp-2'>{feature?.title}</span>
                        </Link>
                      </h5>
                      <p className='line-clamp-3'>{feature?.description}</p>
                    </div>
                  </div>
                ) : (
                  <div key={index} className='col-md-6'>
                    <div
                      key={index}
                      className='service-item mt-30 wow fadeInRight delay-0-4s'>
                      <div className='icon'>
                        <i className={`fal ${feature?.icons}`} />
                      </div>
                      <h5>
                        <Link legacyBehavior href='/service-details'>
                          <span className='line-clamp-2'>{feature?.title}</span>
                        </Link>
                      </h5>
                      <p className='line-clamp-3'>{feature?.description}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingFeatures

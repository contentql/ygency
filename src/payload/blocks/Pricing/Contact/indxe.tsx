import { ContactType } from '@payload-types'
import Link from 'next/link'

const Contact = (data: ContactType) => {
  return (
    <section className='work-with-area pb-150 rpb-145 rel z-1'>
      <div className='container'>
        <div className='row justify-content-center pb-45 rpb-25'>
          <div className='col-xl-7 col-lg-9'>
            <div className='section-title wow fadeInUp delay-0-2s text-center'>
              <span className='sub-title mb-15'>{data?.sub_title}</span>
              <h2>{data?.title}</h2>
              <Link legacyBehavior href={data?.button_url || '/'}>
                <a className='explore-more mt-30 text-start'>
                  <i className='fas fa-arrow-right' />{' '}
                  <span>{data?.button_text}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className='big-text light-opacity'>{data?.background_text}</span>
    </section>
  )
}

export default Contact

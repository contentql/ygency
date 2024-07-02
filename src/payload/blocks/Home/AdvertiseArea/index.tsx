import { AdvertiseType, Media } from '@payload-types'

const Advertise = (data: AdvertiseType) => {
  return (
    <section className='advertise-banner-area rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-lg-7 wow fadeInUp delay-0-2s'>
            <div
              className='advertise-banner style-one bgc-primary'
              style={{
                backgroundImage: 'url(assets/images/banner/add-banner-bg.png)',
              }}>
              <div className='image'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    ((data?.banner_image as Media)?.url as string) ||
                    'assets/images/banner/add-banner.png'
                  }
                  alt='Banner'
                />
              </div>
              <div className='content mt-20'>
                <span className='number'>{data?.project_completion_count}</span>
                <h6>{data?.completion_status}</h6>
                <hr />
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 wow fadeInUp delay-0-4s'>
            <div
              className='advertise-banner style-two bg-white'
              style={{
                backgroundImage: 'url(assets/images/banner/star-vector.png)',
              }}>
              <h3>{data?.title}</h3>
              <hr className='mb-35' />
              <div className='authors-text'>
                {data?.clients?.map((client, idx) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={idx}
                    src={(client?.image as Media)?.url as string}
                    alt='Author'
                  />
                ))}

                <i className='fal fa-plus' />
                <span className='text'>{data?.client_description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advertise

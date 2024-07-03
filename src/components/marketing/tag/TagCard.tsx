import Link from 'next/link'

const TagCard = () => {
  return (
    <section
      id='services'
      className='service-area-four pt-110 rpt-85 pb-100 rpb-70'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-15'>Tags</span>
              <h2>Free Blogs Posting Page for startups</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <Link className='col-xl-3 col-lg-4 col-sm-6' href=''>
            {' '}
            <div className='tag-item wow fadeInUp delay-0-2s' style={{}}>
              <div className='content'>
                <div className='image'>
                  <img
                    src='assets/images/services/service1.jpg'
                    alt='Service'
                    style={{
                      height: '150px',
                      width: '150px',
                      borderRadius: '50%',
                    }}
                  />
                </div>

                <div>
                  <h5>Web Development</h5>
                  <h6>5 Blogs</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TagCard

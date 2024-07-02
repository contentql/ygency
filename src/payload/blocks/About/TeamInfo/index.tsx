import { TeamInfoType } from '@payload-types'

const listOfIcons = [
  'flaticon-creativity',
  'flaticon-mobile-banking',
  'flaticon-optimization-1',
]

const TeamInfo = (data: TeamInfoType) => {
  return (
    <section className='who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1'>
      <div className='container-1290 container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title mb-70 wow fadeInUp delay-0-2s text-center'>
              <span className='sub-title mb-15'>{data?.caption}</span>
              <h2>{data?.title}</h2>
            </div>
          </div>
        </div>
        <div className='row gap-90'>
          {data?.features?.map((feature, index) => (
            <div key={index} className='col-lg-4 col-md-6'>
              <div className='why-choose-item style-two wow fadeInUp delay-0-2s'>
                <div className='why-choose-header'>
                  <i className={listOfIcons[index]} />
                  <h5>{feature?.title}</h5>
                </div>
                <p>{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamInfo

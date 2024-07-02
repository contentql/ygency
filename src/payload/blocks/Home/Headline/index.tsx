import { HeadlineType } from '@payload-types'

const Headline = (data: HeadlineType) => {
  return (
    <div className='headline-area bgc-primary pb-65 pt-80'>
      <div className='container-fluid'>
        <div className='headline-wrap marquee'>
          <span>
            {data?.headlines?.map((headline, index) => (
              <span key={index} className='marquee-item'>
                <i className='fas fa-star-of-life' />
                <b>{headline?.title}</b>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Headline

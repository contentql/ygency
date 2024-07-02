import { StatisticsType } from '@payload-types'
import dynamic from 'next/dynamic'

const Counter = dynamic(() => import('@/components/common/Counter'), {
  ssr: false,
})
const Statistics = (data: StatisticsType) => {
  return (
    <div
      className='statistics-area pt-100 rpt-70 rel z-1'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-between'>
          {data?.statistics?.map((statistic, index) => (
            <div key={index} className='col-xl-2 col-lg-3 col-6'>
              <div className='counter-item counter-text-wrap wow fadeInRight delay-0-2s'>
                <i className='fal fa-check-circle' />
                <Counter end={statistic?.number} />
                <span className='counter-title'>{statistic?.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics

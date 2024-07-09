import { Media, OurClientsType } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const OurClients = (data: OurClientsType) => {
  return (
    <section className='client-logo-area pt-130 rpt-100 pb-100 rpb-70'>
      <div className='container'>
        <div className='section-title mb-60 text-center'>
          <h4>{data?.title}</h4>
        </div>
        <div className='client-logo-wrap'>
          {data?.clients?.map((client, index) => (
            <Link key={index} legacyBehavior href='/contact'>
              <span className='client-logo-item wow fadeInUp delay-0-2s'>
                <Image
                  src={(client?.client_logo as Media)?.url || ''}
                  alt={(client?.client_logo as Media)?.alt || ''}
                  height={50}
                  width={150}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClients

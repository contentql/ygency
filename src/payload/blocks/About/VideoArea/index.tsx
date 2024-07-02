import { Media, VideoAreaType } from '@payload-types'
import Link from 'next/link'

const VideoArea = (data: VideoAreaType) => {
  return (
    <div className='video-area-two rel z-1'>
      <div className='container-fluid'>
        <div className='video-part style-two wow fadeInUp delay-0-2s mb-40'>
          <img
            src={(data?.video_image as Media)?.url || ''}
            alt={(data?.video_image as Media)?.alt || ''}
          />
          <a href={data?.video_link!} className='mfp-iframe video-play'>
            <i className='fas fa-play' />
          </a>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 wow fadeInLeft delay-0-2s'>
            <div className='client-text text-lg-start pb-50 mt-40 text-center'>
              {data?.description}
            </div>
            <div className='row'>
              <div className='col-xl-10'>
                <div className='client-logo-wrap'>
                  <Link legacyBehavior href='/contact'>
                    <a className='client-logo-item'>
                      <img
                        src='assets/images/client-logos/client-logo-two1.png'
                        alt='Client Logo'
                      />
                    </a>
                  </Link>
                  <Link legacyBehavior href='/contact'>
                    <a className='client-logo-item'>
                      <img
                        src='assets/images/client-logos/client-logo-two2.png'
                        alt='Client Logo'
                      />
                    </a>
                  </Link>
                  <Link legacyBehavior href='/contact'>
                    <a className='client-logo-item'>
                      <img
                        src='assets/images/client-logos/client-logo-two3.png'
                        alt='Client Logo'
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 wow fadeInRight delay-0-2s'>
            <div className='video-year text-lg-end rel text-center'>
              1980
              <img
                className='leaf-shape'
                src='assets/images/video/leaf.png'
                alt='Leaf'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoArea

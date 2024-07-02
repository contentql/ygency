'use client'

import { Media, TestimonialType } from '@payload-types'
import {
  A11y,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import StarRating from '@/components/common/StarRating'

const Testimonial = (data: TestimonialType) => {
  return (
    <>
      <section className='testimonial-section pt-130 rpt-90'>
        <div className='container-1210 container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='image-border-shape rmb-20 wow fadeInRight delay-0-2s'>
                <img
                  src={(data?.image as Media)?.url as string}
                  alt='Testimonial Left Image'
                />
                <div className='bottom-border' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='testimonial-one-right-part'>
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    EffectCreative,
                  ]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={true}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}>
                  {data?.testimonials?.map((testimonial, idx) => (
                    <SwiperSlide key={idx} className='testimonial-item'>
                      <div className='author-speech'>
                        <p>
                          <span className='quote'>“</span> {testimonial?.review}
                          <span className='quote right-quote'>“</span>
                        </p>
                      </div>
                      <div className='testimonial-footer'>
                        <div className='testimonial-author'>
                          <div className='author-image'>
                            <img
                              src={
                                (testimonial?.reviewer_image as Media)
                                  ?.url as string
                              }
                              alt='Author Image'
                            />
                          </div>
                          <div className='author-info'>
                            <h4>{testimonial?.reviewer_name}</h4>
                            <span className='designation'>
                              {testimonial?.reviewer_role}
                            </span>
                          </div>
                        </div>
                        {StarRating({ rating: testimonial?.rating as number })}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Testimonial

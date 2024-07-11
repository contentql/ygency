import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import path from 'path'

import { sendMessageToClient } from '@/lib/clients'
import { seed } from '@/payload/seed'
import { homePageData } from '@/payload/seed/data/home'

const CLIENT_ID = '1'

const notifyClient = async (message: string) => {
  sendMessageToClient(CLIENT_ID, JSON.stringify({ message }))
}

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const homeHeroImage = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Hero Img',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/assets/images/hero/hero.jpg',
              ),
            },
          },
        ],
      },
    ],
  })

  const homeHeroImageResultId =
    homeHeroImage.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    homeHeroImage.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? homeHeroImage.collectionsSeedingResult.at(0)?.results.at(0).data.id
      : ''

  const homeHeroClient = [
    {
      data: { alt: 'client image-1' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/team/member1.jpg',
        ),
      },
    },
    {
      data: { alt: 'client image-2' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/team/member2.jpg',
        ),
      },
    },
  ]

  const homeHeroClientImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...homeHeroClient],
      },
    ],
    skipSeeding: false,
  })

  const advertiseBannerTopImage = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Banner Image',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                'public/assets/images/banner/add-banner.png',
              ),
            },
          },
        ],
      },
    ],
  })
  const homeAdvertiseBannerTopImageId =
    advertiseBannerTopImage.collectionsSeedingResult.at(0)?.status !==
      'skipped' &&
    advertiseBannerTopImage.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? advertiseBannerTopImage.collectionsSeedingResult.at(0)?.results.at(0)
          .data.id
      : ''

  const homeHeroSkillsImages = [
    {
      data: { alt: 'skill image' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/skills/skill1.png',
        ),
      },
    },
    {
      data: { alt: 'skill image' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/skills/skill2.png',
        ),
      },
    },
    {
      data: { alt: 'skill image' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/skills/skill3.png',
        ),
      },
    },
    {
      data: { alt: 'skill image' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/skills/skill4.png',
        ),
      },
    },
  ]

  const homeHeroSkillImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...homeHeroSkillsImages],
      },
    ],
    skipSeeding: false,
  })

  const homeAboutImage = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'About Img',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/assets/images/about/about-image-shape.png',
              ),
            },
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const homeAboutImageResultId =
    homeAboutImage.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    homeAboutImage.collectionsSeedingResult.at(0)?.results.at(0).status ===
      'fulfilled'
      ? homeAboutImage.collectionsSeedingResult.at(0)?.results.at(0).data.id
      : ''

  const homeServiceImages = [
    {
      data: { alt: 'service image-1' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/services/service1.jpg',
        ),
      },
    },
    {
      data: { alt: 'service image-2' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/services/service2.jpg',
        ),
      },
    },
    {
      data: { alt: 'service image-3' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/services/service3.jpg',
        ),
      },
    },
    {
      data: { alt: 'service image-4' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/services/service4.jpg',
        ),
      },
    },
    {
      data: { alt: 'service image-5' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/services/service5.jpg',
        ),
      },
    },
  ]

  const homeServiceImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...homeServiceImages],
      },
    ],
    skipSeeding: false,
  })

  const homeRecentWorkImages = [
    {
      data: { alt: 'recent work image-1' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/projects/project-timeline-two1.jpg',
        ),
      },
    },
    {
      data: { alt: 'recent work image-2' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/projects/project-timeline-two1.jpg',
        ),
      },
    },
    {
      data: { alt: 'recent work image-3' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/projects/project-timeline-two1.jpg',
        ),
      },
    },
    {
      data: { alt: 'recent work image-4' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/projects/project-timeline-two1.jpg',
        ),
      },
    },
  ]

  const homeRecentWorkImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...homeRecentWorkImages],
      },
    ],
    skipSeeding: false,
  })

  const homeTestimonialImages = [
    {
      data: { alt: 'testimonial image-1' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/testimonials/author1.png',
        ),
      },
    },
    {
      data: { alt: 'testimonial image-2' },
      options: {
        filePath: path.join(
          process.cwd(),
          '/public/assets/images/testimonials/testimonials-five.jpg',
        ),
      },
    },
  ]

  const homeTestimonialImage = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [
          {
            data: {
              alt: 'Testimonial Img',
            },
            options: {
              filePath: path.join(
                process.cwd(),
                '/public/assets/images/testimonials/testimonials-four.jpg',
              ),
            },
          },
        ],
      },
    ],
    skipSeeding: false,
  })

  const homeTestimonialResultId =
    homeTestimonialImage.collectionsSeedingResult.at(0)?.status !== 'skipped' &&
    homeTestimonialImage.collectionsSeedingResult.at(0)?.results.at(0)
      .status === 'fulfilled'
      ? homeTestimonialImage.collectionsSeedingResult.at(0)?.results.at(0).data
          .id
      : ''

  const homeTestimonialImagesSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'media',
        seed: [...homeTestimonialImages],
      },
    ],
    skipSeeding: false,
  })

  const formattedHomePageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
    ...homePageData,
    blocks: homePageData.blocks?.map(block => {
      if (block.blockType === 'Hero') {
        return {
          ...block,
          hero_image: homeHeroImageResultId,
          clients: block.clients?.map((client, index) => {
            const clientImageId =
              homeHeroClientImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeHeroClientImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeHeroClientImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...client,
              image: clientImageId,
            }
          }),
        }
      }

      if (block.blockType === 'Advertise') {
        return {
          ...block,
          banner_image: homeAdvertiseBannerTopImageId,
          clients: block.clients?.map((client, index) => {
            const clientImageId =
              homeHeroClientImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeHeroClientImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeHeroClientImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...client,
              image: clientImageId,
            }
          }),
        }
      }

      if (block.blockType === 'Skills') {
        return {
          ...block,
          skills: block.skills?.map((skill, index) => {
            const skillImageId =
              homeHeroSkillImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeHeroSkillImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeHeroSkillImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...skill,
              skill_image: skillImageId,
            }
          }),
        }
      }

      if (block.blockType === 'About') {
        return {
          ...block,
          about_image: homeAboutImageResultId,
        }
      }
      if (block.blockType === 'Service') {
        return {
          ...block,
          services: block.services?.map((service, index) => {
            const serviceImageId =
              homeServiceImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeServiceImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeServiceImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...service,
              image: serviceImageId,
            }
          }),
        }
      }

      if (block.blockType === 'RecentWork') {
        return {
          ...block,
          recent_works: block.recent_works?.map((recentWork, index) => {
            const recentWorkImageId =
              homeRecentWorkImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeRecentWorkImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeRecentWorkImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...recentWork,
              image: recentWorkImageId,
            }
          }),
        }
      }

      if (block.blockType === 'Testimonial') {
        return {
          ...block,
          image: homeTestimonialResultId,
          testimonials: block.testimonials?.map((testimonial, index) => {
            const recentWorkImageId =
              homeTestimonialImagesSeedResult.collectionsSeedingResult.at(0)
                ?.status !== 'skipped' &&
              homeTestimonialImagesSeedResult.collectionsSeedingResult
                .at(0)
                ?.results.at(index)?.status === 'fulfilled'
                ? homeTestimonialImagesSeedResult.collectionsSeedingResult
                    .at(0)
                    ?.results.at(index).data.id
                : ''

            return {
              ...testimonial,
              reviewer_image: recentWorkImageId,
            }
          }),
        }
      }

      return block
    }),
  }

  const homePageSeedResult = await seed({
    payload,
    collectionsToSeed: [
      {
        collectionSlug: 'pages',
        seed: [
          {
            data: { ...formattedHomePageData },
          },
        ],
      },
    ],
    skipSeeding: false,
  })
  if (
    homePageSeedResult.collectionsSeedingResult.at(0)?.status === 'fulfilled'
  ) {
    notifyClient('Home page loaded successfully.')
  } else {
    notifyClient('Error while loading home page.')
  }
}

export default seeding

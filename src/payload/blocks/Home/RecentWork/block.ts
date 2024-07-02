import { Block } from 'payload/types'

export const RecentWork_Block: Block = {
  slug: 'RecentWork',
  // imageURL: '',
  interfaceName: 'RecentWorkType',
  labels: {
    singular: 'RecentWork Block',
    plural: 'RecentWork Blocks',
  },
  fields: [
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },

    {
      name: 'recent_works',
      type: 'array',
      label: 'Recent Works',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
    {
      name: 'client-description',
      type: 'text',
      label: 'Client Description',
    },
    {
      name: 'hero_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
    },
  ],
}

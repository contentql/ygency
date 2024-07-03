import { Block } from 'payload/types'

export const ServiceBanner_Block: Block = {
  slug: 'ServiceBanner',
  // imageURL: '',
  interfaceName: 'ServiceBannerType',
  labels: {
    singular: 'ServiceBanner Block',
    plural: 'ServiceBanner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
  ],
}

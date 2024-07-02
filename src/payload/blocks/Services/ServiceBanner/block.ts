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
      name: 'first_title',
      type: 'text',
      label: 'First Title',
      required: true,
    },
    {
      name: 'last_title',
      type: 'text',
      label: 'Last Title',
      required: true,
    },
  ],
}

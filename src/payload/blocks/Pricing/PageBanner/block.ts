import { Block } from 'payload/types'

export const PageBanner_Block: Block = {
  slug: 'PageBanner',
  // imageURL: '',
  interfaceName: 'PageBannerType',
  labels: {
    singular: 'PageBanner Block',
    plural: 'PageBanner Blocks',
  },
  fields: [
    {
      name: 'page_name',
      type: 'text',
      label: 'Page Name',
      required: true,
    },
  ],
}

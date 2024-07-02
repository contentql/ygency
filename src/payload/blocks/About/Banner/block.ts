import { Block } from 'payload/types'

export const Banner_Block: Block = {
  slug: 'Banner',
  // imageURL: '',
  interfaceName: 'BannerType',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'banner_image1',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image One',
    },
    {
      name: 'banner_image2',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image Two',
    },
  ],
}

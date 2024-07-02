import { Block } from 'payload/types'

export const VideoArea_Block: Block = {
  slug: 'VideoArea',
  // imageURL: '',
  interfaceName: 'VideoAreaType',
  labels: {
    singular: 'VideoArea Block',
    plural: 'VideoArea Blocks',
  },
  fields: [
    {
      name: 'video_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Video Image',
    },
    {
      name: 'video_link',
      type: 'text',
      label: 'Video Link',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
  ],
}

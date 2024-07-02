import { Block } from 'payload/types'

export const Blog_Block: Block = {
  slug: 'Blog',
  // imageURL: '',
  interfaceName: 'BlogType',
  labels: {
    singular: 'Blog Block',
    plural: 'Blog Blocks',
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

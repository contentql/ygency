import { Block } from 'payload/types'

export const Blog_Hero_Block: Block = {
  slug: 'BlogHero',
  // imageURL: '',
  interfaceName: 'BlogsHeroType',
  labels: {
    singular: 'Blog Hero Block',
    plural: 'Blogs Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Please enter tag title in lowercase',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload tag image',
      },
    },
  ],
}

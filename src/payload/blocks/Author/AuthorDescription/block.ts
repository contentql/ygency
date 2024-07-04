import { Block } from 'payload/types'

export const AuthorDescription_Block: Block = {
  slug: 'AuthorDescription',
  // imageURL: '',
  interfaceName: 'AuthorDescriptionType',
  labels: {
    singular: 'AuthorDescription Block',
    plural: 'AuthorDescription Blocks',
  },
  fields: [
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
}

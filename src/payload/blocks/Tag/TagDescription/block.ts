import { Block } from 'payload/types'

export const TagDescription_Block: Block = {
  slug: 'TagDescription',
  // imageURL: '',
  interfaceName: 'TagDescriptionType',
  labels: {
    singular: 'TagDescription Block',
    plural: 'TagDescription Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
}

import { Block } from 'payload/types'

export const TeamInfo_Block: Block = {
  slug: 'TeamInfo',
  // imageURL: '',
  interfaceName: 'TeamInfoType',
  labels: {
    singular: 'TeamInfo Block',
    plural: 'TeamInfo Blocks',
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
      ],
    },
  ],
}

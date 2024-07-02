import { Block } from 'payload/types'

export const WorkProcess_Block: Block = {
  slug: 'WorkProcess',
  // imageURL: '',
  interfaceName: 'WorkProcessType',
  labels: {
    singular: 'WorkProcess Block',
    plural: 'WorkProcess Blocks',
  },
  fields: [
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
  ],
}

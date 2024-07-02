import { Block } from 'payload/types'

export const Statistics_Block: Block = {
  slug: 'Statistics',
  // imageURL: '',
  interfaceName: 'StatisticsType',
  labels: {
    singular: 'Statistics Block',
    plural: 'Statistics Blocks',
  },
  fields: [
    {
      name: 'statistics',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'number',
          label: 'Number',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
  ],
}

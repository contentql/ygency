import { Block } from 'payload/types'

export const OurClients_Block: Block = {
  slug: 'OurClients',
  // imageURL: '',
  interfaceName: 'OurClientsType',
  labels: {
    singular: 'OurClients Block',
    plural: 'OurClients Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'clients',
      type: 'array',
      fields: [
        {
          name: 'client_logo',
          type: 'upload',
          label: 'Client logo',
          relationTo: 'media',
        },
      ],
    },
  ],
}

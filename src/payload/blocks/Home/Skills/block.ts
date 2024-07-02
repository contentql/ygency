import { Block } from 'payload/types'

export const Skills_Block: Block = {
  slug: 'Skills',
  // imageURL: '',
  interfaceName: 'SkillsType',
  labels: {
    singular: 'Skills Block',
    plural: 'Skills Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },

    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      maxRows: 18,
      fields: [
        {
          name: 'skill_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Skill Image',
        },
        {
          name: 'skill_title',
          type: 'text',
          label: 'Skill Title',
        },
      ],
    },
  ],
}

import { Page } from 'payload-types'

export const homePageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Home Page',
  isHome: true,
  _status: 'published',
  blocks: [
    {
      title: 'Empowering Digital Transformation',
      description:
        'Harness the power of Analytica, your in-browser tool for streamlined development processes. Make the most of your coding time and bring your projects to life faster.',
      client_description: '',
      clients: [{ image: '' }, { image: '' }],
      hero_image: '',
      badge_title: 'Explore more',
      blockType: 'Hero',
    },
    {
      title: 'Innovative Web Development Solutions',
      description: 'Quis autem vel eum reprehe voluptate velit esse quam',
      client_description: 'We denounce indignatione dislike mende charms',
      completion_status: 'Project Complete',
      banner_image: '',
      clients: [{ image: '' }, { image: '' }],
      project_completion_count: '150+',
      blockType: 'Advertise',
    },
    {
      title: 'Here Are Numerous Topics That Will Enhance Your Skills',
      skills: [
        { skill_image: '', skill_title: 'Bootstrap' },
        { skill_image: '', skill_title: 'Html' },
        { skill_image: '', skill_title: 'Css' },
        { skill_image: '', skill_title: 'Javascript' },
      ],
      blockType: 'Skills',
    },
    {
      badge_title: 'About Company',
      title: 'We’re Award-Winning Web Development Agency',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptat emey accusantium doloremque laudantium totam aperiam eaque quabillo inventore veritatisey quasi architecto beatae dictasunt',
      percentages: [
        { title: 'Clients Satisfactions', percentage: 100 },
        { title: 'Success Rating', percentage: 93 },
        { title: 'Project Complete', percentage: 35 },
      ],
      about_image: '',
      blockType: 'About',
    },
    {
      badge_title: 'Popular Services',
      title: 'We Provide Amazing Web Design Solutions',
      services: [
        {
          image: '',
          service_icon: 'flaticon-development',
          title: 'Web Development',
        },
        {
          image: '',
          service_icon: 'flaticon-mobile-development',
          title: 'Mobile Application',
        },
        {
          image: '',
          service_icon: 'flaticon-optimization',
          title: 'Team Agumentation',
        },
        {
          image: '',
          service_icon: 'flaticon-ux',
          title: 'Design & Branding',
        },
        {
          image: '',
          service_icon: 'flaticon-goal',
          title: 'React Js Development',
        },
      ],

      blockType: 'Service',
    },
    {
      headlines: [
        { title: 'Web Development' },
        { title: 'SEO Optimization' },
        { title: 'Graphics' },
        { title: 'Product Design' },
      ],
      blockType: 'Headline',
    },
    {
      badge_title: 'Recent Works Gallery',
      title: 'Let’s Look Our Recent Project Gallery',
      recent_works: [
        { image: '', title: 'Business Task Management Dashboard Design' },
        { image: '', title: 'Mobile Application Design & Development' },
        { image: '', title: 'PSD, Figma & XD to HTML Design & Development' },
        { image: '', title: 'Business Development and Marketing Strategy' },
      ],
      blockType: 'RecentWork',
    },
    {
      headlines: [
        { title: 'Web Development' },
        { title: 'SEO Optimization' },
        { title: 'Graphics' },
        { title: 'Product Design' },
      ],
      blockType: 'Headline',
    },
    {
      image: '',
      testimonials: [
        {
          rating: 4,
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolor quae in rem, deleniti blanditiis similique nisi optio saepe facere vero sint. Ab consectetur perferendis officia quam ducimus! Pariatur!',
          reviewer_image: '',
          reviewer_name: 'James N.Jhonson',
          reviewer_role: 'CEO & Founder',
        },
        {
          rating: 4,
          review: 'Lorem ipsum dolor sit amet consec',
          reviewer_image: '',
          reviewer_name: 'James N.Jhonson',
          reviewer_role: 'CEO & Founder',
        },
      ],
      blockType: 'Testimonial',
    },
  ],
}

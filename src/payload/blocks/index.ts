// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import About from './Home/About'
import { About_Block } from './Home/About/block'
import Advertise from './Home/AdvertiseArea'
import { Advertise_Block } from './Home/AdvertiseArea/block'
import Headline from './Home/Headline'
import { Headline_Block } from './Home/Headline/block'
import Hero from './Home/Hero'
import { Hero_Block } from './Home/Hero/block'
import RecentWork from './Home/RecentWork'
import { RecentWork_Block } from './Home/RecentWork/block'
import Service from './Home/Service'
import { Service_Block } from './Home/Service/block'
import Skills from './Home/Skills'
import { Skills_Block } from './Home/Skills/block'
import Team from './Home/Team'
import { Team_Block } from './Home/Team/block'
import Testimonial from './Home/Testimonial'
import { Testimonial_Block } from './Home/Testimonial/block'

export const blocksJSX = {
  Advertise,
  Headline,
  About,
  Hero,
  RecentWork,
  Service,
  Skills,
  Team,
  Testimonial,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Advertise_Block,
  Headline_Block,
  About_Block,
  Hero_Block,
  RecentWork_Block,
  Service_Block,
  Skills_Block,
  Team_Block,
  Testimonial_Block,
]

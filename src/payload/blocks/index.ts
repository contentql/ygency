// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import Banner from './About/Banner'
import { Banner_Block } from './About/Banner/block'
import OurClients from './About/OurClients'
import { OurClients_Block } from './About/OurClients/block'
import Statistics from './About/Statistics'
import { Statistics_Block } from './About/Statistics/block'
import TeamInfo from './About/TeamInfo'
import { TeamInfo_Block } from './About/TeamInfo/block'
import VideoArea from './About/VideoArea'
import { VideoArea_Block } from './About/VideoArea/block'
import AuthorDescription from './Author/AuthorDescription'
import { AuthorDescription_Block } from './Author/AuthorDescription/block'
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
import ServiceBanner from './Services/ServiceBanner'
import { ServiceBanner_Block } from './Services/ServiceBanner/block'
import ServiceFeatures from './Services/ServiceFeatures'
import { ServiceFeatures_Block } from './Services/ServiceFeatures/block'
import WorkProcess from './Services/WorkProcess'
import { WorkProcess_Block } from './Services/WorkProcess/block'
import TagDescription from './Tag/TagDescription'
import { TagDescription_Block } from './Tag/TagDescription/block'

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
  Banner,
  OurClients,
  Statistics,
  TeamInfo,
  VideoArea,
  ServiceBanner,
  ServiceFeatures,
  WorkProcess,
  TagDescription,
  AuthorDescription,
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
  Banner_Block,
  OurClients_Block,
  Statistics_Block,
  TeamInfo_Block,
  VideoArea_Block,
  ServiceBanner_Block,
  ServiceFeatures_Block,
  WorkProcess_Block,
  TagDescription_Block,
  AuthorDescription_Block,
]

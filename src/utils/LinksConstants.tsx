import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'

interface INavLink {
  id: number
  url: string
  text: string
  subLinks?: INavLink[]
}

export const links: INavLink[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    subLinks: [
      // {
      //   text: 'empowering innovators',
      //   url: '/about/empower',
      // },
      // {
      //   text: 'sustainable solutions',
      //   url: '/about/sustainable',
      // },
      // {
      //   text: 'innovation hub',
      //   url: '/about/innovation',
      // },
    ],
  },
  {
    id: 4,
    url: '/team',
    text: 'team',
  },
  {
    id: 5,
    url: '/portfolio',
    text: 'portfolio',
  },

  {
    id: 7,
    url: '/get-in-touch',
    text: 'get in touch',
  },
]

export const themeColors = ['#85c6dc', '#63e1a9', '#ffc166']

interface ISocialLink {
  url: string
  icon: JSX.Element
}

export const socialLinks: ISocialLink[] = [
  {
    url: '/',
    icon: <FaFacebookF />,
  },
  {
    url: '/',
    icon: <FaTwitter />,
  },
  {
    url: '/',
    icon: <BiLogoLinkedin />,
  },
]

interface IFooterLink {
  text: string
  url: string
}

export const footerLinks: IFooterLink[] = [
  {
    text: 'home',
    url: '/',
  },
  {
    text: 'about',
    url: '/about',
  },
  {
    text: 'team',
    url: '/team',
  },
  {
    text: 'portfolio',
    url: '/portfolio',
  },
  {
    text: 'get in touch',
    url: '/get-in-touch',
  },
  {
    text: 'FAQ',
    url: '/faqs',
  },
]

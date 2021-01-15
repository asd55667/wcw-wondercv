import { cvRoutes } from './resume.js'

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/modules/home')

const HomeIndex = () =>
  import(/* webpackChunkName: "HomeIndex" */ '@/views/modules/home/homeIndex')

const CvTemplate = () =>
  import(
    /* webpackChunkName: "HomeCVTemplate" */ '@/views/modules/home/cvTemplate'
  )

const Service = () =>
  import(/* webpackChunkName: "HomeService" */ '@/views/modules/home/service')

const Jobs = () =>
  import(/* webpackChunkName: "HomeJobs" */ '@/views/modules/home/jobs')
const Blogs = () =>
  import(/* webpackChunkName: "HomeBlogs" */ '@/views/modules/home/blogs')

export const homeRoutes = {
  path: '/',
  component: Home,
  children: [
    {
      path: '/',
      component: HomeIndex,
    },
    {
      path: '/template',
      component: CvTemplate,
    },
    {
      path: '/service',
      component: Service,
    },
    {
      path: '/jobs',
      component: Jobs,
    },
    {
      path: '/blog',
      component: Blogs,
    },
    cvRoutes,
  ],
}

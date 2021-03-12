import { cvRoutes } from './resume.js'

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/home')

const HomeIndex = () =>
  import(/* webpackChunkName: "HomeIndex" */ '@/views/home/homeIndex')

const CvTemplate = () =>
  import(/* webpackChunkName: "HomeCVTemplate" */ '@/views/home/cvTemplate')

const Service = () =>
  import(/* webpackChunkName: "HomeService" */ '@/views/home/service')

const Jobs = () =>
  import(/* webpackChunkName: "HomeJobs" */ '@/views/home/jobs')
const Blogs = () =>
  import(/* webpackChunkName: "HomeBlogs" */ '@/views/home/blogs')

export const homeRoutes = {
  path: '/',
  component: Home,
  children: [
    {
      path: '/',
      component: HomeIndex,
      // redirect: '/cvs'
      redirect: '/cvs/wcw/editor',
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

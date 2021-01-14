import Vue from 'vue'
import VueRouter from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld')

const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')

const Index = () => import('@/views/index/Index')
const Temp = () => import('@/views/cvtemplate/CvTemple')
const Service = () => import('@/views/service/Service')
const Jobs = () => import('@/views/jobs/Jobs')
const Blogs = () => import('@/views/blogs/Blogs')

const CV = () => import('@/views/editor/cvs/CV')
const MyCV = () => import('@/views/editor/cvs/MyCV')
const Trash = () => import('@/views/editor/cvs/Trash')
const Favorite = () => import('@/views/editor/cvs/Favorite')
const HRInvite = () => import('@/views/editor/cvs/HRInvite')

const Editor = () => import('@/views/editor/Editor')
// const Check = () => import('@/views/editor/side-content/Check')
// const Experience = () => import('@/views/editor/side-content/Experience')
// const StyleSetting = () => import('@/views/editor/side-content/StyleSetting')
// const ModuleManage = () => import('@/views/editor/side-content/ModuleManage')

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    component: HelloWorld,
  },

  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/template',
        component: Temp,
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
      {
        path: '/cvs',
        component: CV,
        children: [
          {
            path: '/',
            component: MyCV,
          },
          {
            path: 'trash',
            component: Trash,
          },
          {
            path: 'favorite',
            component: Favorite,
          },
          {
            path: 'hrinvite',
            component: HRInvite,
          },
        ],
      },
    ],
  },

  {
    path: '/cvs/:usrid/editor',
    component: Editor,
  },
  {
    path: '/auth-signin',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const token = window.sessionStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
// })

export default router

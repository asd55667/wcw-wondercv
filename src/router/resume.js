const CV = () => import(/* webpackChunkName: "cvs" */ '@/views/modules/home/cvs')
const MyCV = () => import(/* webpackChunkName: "cvsMyCV" */ '@/views/modules/home/cvs/mycv')
const Trash = () => import(/* webpackChunkName: "cvsTrash" */ '@/views/modules/home/cvs/trash')
const Favorite = () =>
  import(/* webpackChunkName: "cvsFavorite" */ '@/views/modules/home/cvs/favorite')
const HRInvite = () =>
  import(/* webpackChunkName: "cvsHRInvite" */ '@/views/modules/home/cvs/hrInvite')

export const cvRoutes = {
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
}

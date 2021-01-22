const CV = () => import(/* webpackChunkName: "cvs" */ '@/views/home/cvs')
const MyCV = () =>
  import(/* webpackChunkName: "cvsMyCV" */ '@/views/home/cvs/mycv')
const Trash = () =>
  import(/* webpackChunkName: "cvsTrash" */ '@/views/home/cvs/trash')
const Favorite = () =>
  import(/* webpackChunkName: "cvsFavorite" */ '@/views/home/cvs/favorite')
const HRInvite = () =>
  import(/* webpackChunkName: "cvsHRInvite" */ '@/views/home/cvs/hrInvite')

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

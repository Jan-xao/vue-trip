import Vue from "vue";
import VueRouter from "vue-router";

const register = () => import('@/components/register')
const login = () => import('@/components/login')

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login'//路由的重定向
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/home.vue'),
    redirect: '/mainpage',
    children: [
      { 
        path: '/mainpage', 
        component: () => import('@/components/mainpage.vue')
      },
      { 
        path: '/trip', 
        component: () => import('@/components/trip.vue')
      },
      { 
        path: '/pay', 
        component: () => import('@/components/orderfrom.vue')
      },
      { 
        path: '/mine', 
        component: () => import('@/components/mine.vue')
      },
      { 
        path: '/myform', 
        component: () => import('@/components/myform.vue')
      },
      { 
        path: '/set', 
        component: () => import('@/components/set.vue')
      },
      { 
        path: '/commoninfo', 
        component: () => import('@/components/commoninfo.vue')
      },
      { 
        path: '/mycollection', 
        component: () => import('@/components/mycollection.vue')
      },
      { 
        path: '/mytravels', 
        component: () => import('@/components/mytravels.vue')
      },
      { 
        path: '/myfocus', 
        component: () => import('@/components/myfocus.vue')
      },
    ]
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next() 放行  next('/login') 强制跳转
  if (to.path === '/login'||to.path === '/register' ) return next()
  // 获取 token 
  const tokenStr = window.sessionStorage.getItem('token')
  if (tokenStr !== '123') return next('/login')
  next()
})

export default router;

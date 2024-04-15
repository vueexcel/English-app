const routes = [
  {
    path: '/home',
    name: 'courses',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/RegisterPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('pages/ForgotPassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset',
    component: () => import('pages/ResetPassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('pages/AllLessonPage.vue')
  },
  {
    path: '/course/:id/lesson',
    name: 'lesson',
    component: () => import('pages/LessonPage.vue')
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('pages/LevelPage.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('pages/SettingPage.vue')
  },
  {
    path: '/course/:id/rules',
    name: 'rules',
    component: () => import('pages/RulesPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

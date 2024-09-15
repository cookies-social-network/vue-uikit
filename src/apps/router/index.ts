import { createRouter, createWebHistory } from 'vue-router'

import { BaseLayout } from '#apps/layouts/BaseLayout'

import { ROUTE_NAMES } from '#shared/constants'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.BASE_LAYOUT,
      component: BaseLayout,
      children: [
        {
          path: '/',
          name: ROUTE_NAMES.MAIN,
          component: () => import('#pages/main'),
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router

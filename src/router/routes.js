
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/doc', component: () => import('pages/Doc.vue')},
      { path: '/reativo', component: () => import('pages/Reatividade.vue')},
      { path: '/progressivo', component: () => import('pages/Progressivo.vue')},
      { path: '/componente', component: () => import('pages/Componente.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

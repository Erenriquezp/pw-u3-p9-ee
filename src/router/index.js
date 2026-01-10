import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Hola-Mundo',
    component: () => import('../views/HolaMundo.vue')
  },
  {
    path: '/PokemonView',
    component: () => import('../views/PokemonView.vue')
  },
  {
    path: '/PreguntaView',
    component: () => import('../views/PreguntaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// Eager y lazy cargan componentes en las rutas de Vue Router de diferente manera.
// Eager carga todos los componentes al inicio, mientras que lazy carga los componentes solo cuando se navega a esa ruta específica.    
// Lazy carga los componentes bajo demanda, lo que puede mejorar el rendimiento inicial de la aplicación al reducir el tamaño del paquete cargado al inicio.
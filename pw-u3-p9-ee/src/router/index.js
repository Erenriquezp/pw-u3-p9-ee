import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HolaMundo from '../views/HolaMundo.vue'
import PokemonView from '../views/PokemonView.vue'
import PreguntaView from '../views/PreguntaView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/Hola-Mundo',
    component: HolaMundo
  },
  {
    path: '/PokemonView',
    component: PokemonView
  },
  {
    path: '/PreguntaView',
    component: PreguntaView
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
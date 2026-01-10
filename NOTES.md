### 🧠 Conceptos Clave (Memorizar)

* **SPA (Single Page Application):** Aplicación que no recarga el navegador al navegar; solo cambia el contenido dinámicamente.
* **`<router-view>`:** El "Marco". Etiqueta donde se **dibuja/renderiza** el componente que corresponde a la URL actual.
* **`<router-link>`:** El "Botón". Etiqueta que reemplaza a `<a>`. Cambia la URL **sin recargar** la página.
* **Rutas Dinámicas (`:`)**: Rutas que aceptan parámetros variables. Se definen con dos puntos (ej: `/user/:id`).

---

### 🆚 La Diferencia Vital ($)

* **`this.$route` (Sin R = INFORMACIÓN):**
* Es el **Estado**.
* Uso: Leer datos.
* Ejemplos: `this.$route.params.id`, `this.$route.path`.


* **`this.$router` (Con R = ACCIÓN):**
* Es el **Motor**.
* Uso: Moverse / Navegar.
* Ejemplos: `this.$router.push('/home')`, `this.$router.go(-1)`.



---

### ⚡ Carga Eager vs. Lazy (Optimización)

Esto define **cuándo** se descarga el código JavaScript de tus páginas.

#### 1. Carga Eager (Ansiosa / Estática)

* **Definición:** El componente se descarga **inmediatamente** cuando abres la aplicación, aunque no vayas a esa página.
* **Sintaxis:** `import Home from '../views/Home.vue'` (Arriba del archivo).
* **Uso:** Solo para la página de inicio (`Home`) o componentes críticos que se ven siempre.
* **Desventaja:** Hace que la aplicación tarde más en arrancar si tienes muchas páginas.

#### 2. Carga Lazy (Perezosa / Dinámica)

* **Definición:** El componente se descarga **únicamente cuando el usuario visita esa ruta**.
* **Sintaxis:** `component: () => import('../views/About.vue')` (Dentro del array de rutas).
* **Uso:** Para todas las demás páginas (`About`, `Contacto`, `Detalle`).
* **Ventaja:** Divide el código (Code Splitting) y la app carga mucho más rápido al inicio.

---

### 📝 Ejemplo de Código para Memorizar

Mira la diferencia en el archivo `router/index.js`:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

// 1. EAGER LOADING (Importación arriba)
// Se descarga SIEMPRE al iniciar la app.
import HomeView from '../views/HomeView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // Uso Eager
  },
  {
    path: '/about',
    name: 'about',
    // 2. LAZY LOADING (Importación flecha dentro)
    // Se descarga SOLO si entras a /about.
    component: () => import('../views/AboutView.vue') 
  }
]

```
---


En el mundo moderno de Vue, hay **dos formas** de crear un proyecto con Vite, y la diferencia es clave:

1. **`npm create vite@latest`**: Te da un proyecto **básico (pelado)**. No te pregunta nada, solo te da Vue y ya. Tienes que instalar el Router manualmente.
2. **`npm create vue@latest`**: Esta es la **herramienta oficial actual** (reemplazo de la vieja Vue CLI). Usa Vite por debajo, pero **te hace preguntas** (¿Quieres Router? ¿Pinia?) y **te crea los archivos automáticamente** igual que la antigua CLI.

---

### Opción A: La forma Automática (Recomendada)

*Equivalente a la antigua Vue CLI, pero ultra rápida.*

Esta es la forma estándar hoy en día. No usas el comando `vite`, usas el comando oficial de Vue.

1. **Ejecuta:**
```bash
npm create vue@latest

```


2. **El asistente te preguntará:**
* *Project name:* ...
* *Add Vue Router for Single Page Application Development?* -> **Select: Yes**


3. **Resultado:**
Automáticamente te crea la carpeta `src/router`, el archivo `index.js`, configura el `main.js` y pone el `<router-view>` en el `App.vue`. ¡Listo!

---

### Opción B: La forma Manual (Desde cero con Vite puro)

*Si usaste `npm create vite@latest` o tienes un proyecto existente y quieres agregar Router después.*

Supongamos que tienes un proyecto vacío. Sigue estos 4 pasos para conectar los cables manualmente:

#### 1. Instalación

En tu terminal:

```bash
npm install vue-router@4

```

#### 2. Crear la Configuración (`src/router/index.js`)

Crea la carpeta y el archivo manualmente. Pega esta estructura base:

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// Define tus componentes (puedes crearlos vacíos para probar)
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  // 'import.meta.env.BASE_URL' es una variable especial de Vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // Lazy loading (Mejor práctica en Vite)
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

```

#### 3. Conectar al Main (`src/main.js`)

Tienes que importar el router y decirle a la app que lo use **antes** de montarse.

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- 1. Importar

const app = createApp(App)

app.use(router) // <--- 2. Usar

app.mount('#app')

```

#### 4. Preparar el Marco (`src/App.vue`)

Borra el contenido por defecto de Vite y pon el escenario y los enlaces.

```html
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

```

---
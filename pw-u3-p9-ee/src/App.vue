<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">Acerca de</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

nav a:hover {
  color: #35495e;
}
</style>

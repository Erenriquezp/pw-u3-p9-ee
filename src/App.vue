<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">Acerca de</router-link>
    <router-link :to="`/Hola-Mundo/${idEdstudiante}`">Hola Mundo</router-link>
    <router-link to="/PreguntaView">Pregunta</router-link>
    <router-link to="/PokemonView">Pokemon</router-link>
  </nav>
  <input type="text" v-model="idEdstudiante">
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      idEdstudiante: null,
    };
  }
};
</script>

<style scoped>
nav {
  text-align: center;
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

<template>
    <div>
        <h1>Hola Mundo Page</h1>
        <h2>Consultando los datos del estudiante</h2>
        <h3> {{ idEstudiante }}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            idEstudiante: null,
        }
    },
    created() {
        console.log(this.$route);
        console.log(this.$route.params.id);
        this.idEstudiante = this.$route.params.id;
    },
}
</script>
<style>
    
</style>
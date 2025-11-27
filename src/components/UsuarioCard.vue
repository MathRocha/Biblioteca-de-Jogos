<script setup>
const { usuario } = defineProps(["usuario"]);
</script>

<template>
  <div>
    <h2>{{ usuario.nome }}</h2>

    <p>Quantidades de jogos na biblioteca: {{ usuario.jogos.length }}</p>
  </div>
</template>

<style scoped>
div {
    margin-left: .5em;
}
</style>

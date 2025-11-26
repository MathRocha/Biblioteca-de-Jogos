<script setup>
const { jogo } = defineProps(['jogo']);

</script>

<template>
  <div class="grid">
    <img :src="jogo.foto" :alt="jogo.nome" width="100%"></img>
  
    <div>
      <h2>{{ jogo.nome }}</h2>
      <p>{{ jogo.descricao }}</p>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}

.grid h2 {
    margin-top: 0;
}
</style>

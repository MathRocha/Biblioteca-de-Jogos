<script setup>
const { avaliacao } = defineProps(["avaliacao"]);
</script>

<template>
  <div>
    <h2>{{ avaliacao.nome }}</h2>

    <p><span class="nota">{{ avaliacao.nota }}/5</span> {{ avaliacao.observacao }}</p>
  </div>
</template>

<style scoped>
div {
    margin-left: .5em;
}

.nota {
    font-size: 2em;
}
</style>

<script setup>
defineProps(["ladoEsquerdoReto"]);
</script>

<template>
  <div class="card" :class="{ 'lado-esquerdo-reto': ladoEsquerdoReto }">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  margin: 2em 0;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 15px;
}

.card.lado-esquerdo-reto {
  border-radius: 0 15px 15px 0;
}

@media (max-width: 768px) {
  .card.lado-esquerdo-reto {
    border-radius: 0 0 15px 15px;
  }
}
</style>

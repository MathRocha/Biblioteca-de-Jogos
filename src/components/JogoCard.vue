<script setup>
const { jogo } = defineProps(['jogo']);

</script>

<template>
  <div class="flexbox">
    <img :src="jogo.foto" :alt="jogo.nome"></img>
  
    <div>
      <h2>{{ jogo.nome }}</h2>
      <p>{{ jogo.descricao }}</p>
    </div>
  </div>
</template>

<style scoped>
.flexbox {
  display: flex;
  gap: 10px;
}

.flexbox img {
  width: 40%;
}

.flexbox div {
  width: 60%;
}

.flexbox h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .flexbox {
    flex-direction: column;
  }
  
  .flexbox img {
    width: unset;
  }

  .flexbox div {
    width: unset;
  }
}
</style>

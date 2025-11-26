<script setup>
import Card from "@/components/Card.vue";
import JogoCard from "@/components/JogoCard.vue";
import { ref } from "vue";

let jogos = ref([]);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    jogos.value = data.jogos;
  });
</script>

<template>
  <div v-if="jogos.length > 0">
    <RouterLink
      v-for="(jogo, index) in jogos"
      :key="'jogo' + index"
      :to="'jogo/' + jogo.id"
    >
      <Card :ladoEsquerdoReto="true">
        <JogoCard :jogo="jogo" />
      </Card>
    </RouterLink>
  </div>
  <p v-else>Não há jogos cadastrados.</p>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>

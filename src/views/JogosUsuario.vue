<script setup>
import Card from "@/components/Card.vue";
import JogoCard from "@/components/JogoCard.vue";
import { ref } from "vue";

const { id } = defineProps(["id"]);
let usuario = ref(null);
let jogos = ref([]);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    usuario.value = data.usuarios.find((usuario) => usuario.id === +id);
    jogos.value = data.jogos.filter((jogo) =>
      usuario.value.jogos.includes(jogo.id)
    );
  });
</script>

<template>
  <div v-if="jogos.length > 0">
    <RouterLink
      v-for="(jogo, index) in jogos"
      :key="'jogo' + index"
      :to="{ name: 'detalheJogo', params: {id: jogo.id}}"
      class="card-link"
    >
      <Card :ladoEsquerdoReto="true">
        <JogoCard :jogo="jogo" />
      </Card>
    </RouterLink>
  </div>
  <p v-else>Usuário não possui jogos.</p>
</template>

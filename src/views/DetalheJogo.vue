<script setup>
import AvaliacaoCard from "@/components/AvaliacaoCard.vue";
import Card from "@/components/Card.vue";
import JogoCard from "@/components/JogoCard.vue";
import router from "@/router";
import { ref } from "vue";

const { id } = defineProps(["id"]);
let jogo = ref(null);
let avaliacoes = ref([]);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    jogo.value = data.jogos.find((jogo) => jogo.id === +id);
    avaliacoes.value = data.avaliacoes.filter(
      (avaliacao) => avaliacao.jogoId === +id
    );
    avaliacoes.value.forEach((avaliacao) => {
      avaliacao.nome = data.usuarios.find(
        (usuario) => usuario.id === avaliacao.usuarioId
      ).nome;
    });

    if (!jogo.value) {
      alert("Jogo não encontrado!");
      router.replace({ name: "listaJogos" });
    }
  });
</script>

<template>
  <Card :ladoEsquerdoReto="true">
    <JogoCard v-if="jogo" :jogo="jogo" />
  </Card>

  <h1>Avaliações</h1>

  <div v-if="avaliacoes.length > 0">
    <Card v-for="avaliacao in avaliacoes">
      <AvaliacaoCard :avaliacao="avaliacao" />
    </Card>
  </div>
  <p v-else>Não há avaliações para esse jogo.</p>
</template>

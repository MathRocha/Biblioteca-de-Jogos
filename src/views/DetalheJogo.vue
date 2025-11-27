<script setup>
import AvaliacaoCard from "@/components/AvaliacaoCard.vue";
import Card from "@/components/Card.vue";
import JogoCard from "@/components/JogoCard.vue";
import router from "@/router";
import { computed, ref } from "vue";

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
      )?.nome;
    });

    if (!jogo.value) {
      alert("Jogo não encontrado!");
      router.replace({ name: "listaJogos" });
    }
  });

const media = computed(() => {
  if (avaliacoes.value.length > 0) {
    const somaAvaliacoes = avaliacoes.value.reduce(
      (cur, acc) => cur + acc.nota,
      0
    );
    return somaAvaliacoes / avaliacoes.value.length;
  }

  return null;
});
</script>

<template>
  <Card :ladoEsquerdoReto="true">
    <JogoCard v-if="jogo" :jogo="jogo" />
  </Card>

  <h1>
    Avaliações <span v-if="media" class="media">{{ media }} / 5</span>
  </h1>

  <div v-if="avaliacoes.length > 0">
    <Card v-for="avaliacao in avaliacoes">
      <AvaliacaoCard :avaliacao="avaliacao" />
    </Card>
  </div>
  <p v-else>Não há avaliações para esse jogo.</p>
</template>

<style scoped>
.media {
  margin-left: .5em;
}
</style>
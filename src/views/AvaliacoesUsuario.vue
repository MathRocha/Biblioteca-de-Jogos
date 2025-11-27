<script setup>
import AvaliacaoCard from "@/components/AvaliacaoCard.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";

const { id } = defineProps(["id"]);
let usuario = ref(null);
let avaliacoes = ref([]);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    usuario.value = data.usuarios.find((usuario) => usuario.id === +id);
    avaliacoes.value = data.avaliacoes.filter(
      (avaliacao) => avaliacao.usuarioId === +id
    );
    avaliacoes.value.forEach((avaliacao) => {
      avaliacao.nome = data.jogos.find(
        (jogo) => jogo.id === avaliacao.jogoId
      )?.nome;
    });
  });
</script>

<template>
  <div v-if="avaliacoes.length > 0">
    <Card v-for="avaliacao in avaliacoes">
      <AvaliacaoCard :avaliacao="avaliacao" />
    </Card>
  </div>
  <p v-else>Usuário não deixou avaliações.</p>
</template>

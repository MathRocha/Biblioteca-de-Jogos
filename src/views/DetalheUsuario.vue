<script setup>
import { ref } from "vue";

const { id } = defineProps(["id"]);
let usuario = ref(null);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    usuario.value = data.usuarios.find((usuario) => usuario.id === +id);

    if (!usuario.value) {
      alert("Usuário não encontrado!");
      router.replace({ name: "listaUsuarios" });
    }
  });
</script>

<template>
  <h1>{{ usuario?.nome }}</h1>

  <nav>
    <RouterLink :to="{ name: 'jogosUsuario', params: {id}}">Jogos</RouterLink>
    <RouterLink :to="{ name: 'avaliacoesUsuario', params: {id}}">Avaliações</RouterLink>
  </nav>

  <RouterView />
</template>

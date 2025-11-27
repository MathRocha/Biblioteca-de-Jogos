<script setup>
import Card from "@/components/Card.vue";
import UsuarioCard from "@/components/UsuarioCard.vue";
import { ref } from "vue";

let usuarios = ref([]);

fetch("/dados.json")
  .then((resp) => resp.json())
  .then((data) => {
    usuarios.value = data.usuarios;
  });
</script>

<template>
  <div v-if="usuarios.length > 0">
    <RouterLink
      v-for="(usuario, index) in usuarios"
      :key="'usuario' + index"
      :to="'usuarios/' + usuario.id"
      class="card-link"
    >
      <Card>
        <UsuarioCard :usuario="usuario" />
      </Card>
    </RouterLink>
  </div>
  <p v-else>Não há usuários cadastrados.</p>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>

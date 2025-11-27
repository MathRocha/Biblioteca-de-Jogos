<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Jogos</RouterLink>
      <RouterLink to="/usuarios">Usuários</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

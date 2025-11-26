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

<style scoped>
nav {
  text-align: center;
  margin: 1.5em 0;
}

a {
  padding: 1em 1.5em;
  font-size: 1.25em;
}

a.router-link-active {
  background-color: #67329b;
  color: white;
  border-radius: 50%;
}
</style>

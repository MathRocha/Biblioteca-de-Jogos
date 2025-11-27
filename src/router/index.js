import ListaJogos from "@/views/ListaJogos.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/",
      name: "listaJogos",
      component: ListaJogos,
    },
    {
      path: "/jogo/:id(\\d+)",
      name: "detalheJogo",
      component: () => import("../views/DetalheJogo.vue"),
      props: true,
    },
    {
      path: "/usuarios",
      name: "listaUsuarios",
      component: () => import("../views/ListaUsuarios.vue"),
    },
    {
      path: "/usuarios/:id(\\d+)",
      name: "detalheUsuario",
      component: () => import("../views/DetalheUsuario.vue"),
      props: true,
      children: [
        {
          path: "",
          name: "jogosUsuario",
          component: () => import("../views/JogosUsuario.vue"),
          props: true,
        },
        {
          path: "avaliacoes",
          name: "avaliacoesUsuario",
          component: () => import("../views/AvaliacoesUsuario.vue"),
          props: true,
        },
      ],
    },
  ],
});

export default router;

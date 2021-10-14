import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/Inicio.vue"),
  },
  {
    path: "/Pvencidos",
    name: "Vencidos",
    component: () => import("../views/productos_vencidos.vue"),
  },
  
  {
    path: "/Peditar",
    name: "Editar",
    component: () => import("../components/Editar.vue"),
  },
  {
    path: "/Pregistro",
    name: "Registro",
    component: () => import("../components/Registro.vue"),
  },
  {
    path: "/Plista",
    name: "Lista",
    component: () => import("../components/Lista.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

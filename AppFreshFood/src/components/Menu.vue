<template>
  <div>
    <!-- Barra de navegacion-->
    <v-toolbar app color="blue" height="70">
      <v-app-bar-nav-icon @click="mostrar = !mostrar" dark></v-app-bar-nav-icon>
      <h1 class="titu">FreshFood</h1>
    </v-toolbar>
    <!-- Navigation drawer-->
    <v-navigation-drawer
      app
      v-model="mostrar"
      temporary
      absolute
      dark
      color="blue"
      class="text-center"
    >
      <v-list nav dense>
        <br />
        <v-list>
          <v-avatar>
            <img src="../assets/logo2.png" alt="logo fresh food" />
          </v-avatar>
        </v-list>
        <v-list-item-title class="display-1 font-weight-bold"
          >FreshFood</v-list-item-title
        >

        <v-list-item-group v-model="group">
          <br />
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/">
                Inicio
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/Pregistro">
                Registrar Producto
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/Plista">
                Listar productos
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              <router-link to="/Pvencidos">
                Productos caducados
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <!--v-list-item>
            <v-list-item-title class="font-weight-bold font"
              >Productos proximos a caducar</v-list-item-title
            >
          </!v-list-item-->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mostrar: false,
    };
  },
};
</script>
<style>
.v-application a {
  color: #fff !important;
  text-decoration: none;
}
.titu {
  position: relative;
  left: 85%;
  color: #fff;
}
</style>

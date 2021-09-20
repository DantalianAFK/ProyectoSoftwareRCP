<template>
  <v-app>
    <v-main>
      <Ventana_Productos/>
    </v-main>
  </v-app>
</template>

<script>

import Ventana_Productos from './components/Ventana_Productos.vue';
export default {
  name: 'App',
  components: {
    Ventana_Productos,
  },

  data: () => ({
    //
  }),
};
</script>

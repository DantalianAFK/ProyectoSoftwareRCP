<template>
  <v-app>
    <v-main>
      <Menu />
    </v-main>
    <v-footer app absolute dark padless>
      <v-card flat tile width="100%" class="blue white--text text-center">
        <v-card-text height="400px">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"
          >Un sistema intuitivo escencial para la organización de los
          inventarios</v-card-text
        >

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>FreshFood</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
  data: () => ({
    //
  }),
};
</script>
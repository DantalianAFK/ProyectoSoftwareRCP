<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logoemp.png')"
          class="my-3"
          contain
          height="70"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 light-green--text">
          FreshFood
        </h1>

        <p class="subheading font-weight-regular center-text">
          Seleccione la opción deseada
        </p>
      </v-col>
    </v-row>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="RegistrarProducto.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="../views/Regis.vue"
            >Registro de Productos</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="Cad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/Cad"
            >Productos caducados</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ProxCad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ProxCad"
            >Productos cercanos a caducar</router-link
          >
        </div>
      </template>
    </v-hover>

    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ListaGeneral.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ListaGeneral"
            >Lista de productos</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- POSIBLE EDITAR BOTÓN
       <div class="my-6"></div>
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ProxCad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ProxCad"
            >Editar</router-link
          >
        </div>
      </template>
    </v-hover>

    <div class="my-6"></div>
      -->
    <div id="app">
      <v-app id="inspire">
        <v-footer dark padless>
          <v-card
            flat
            tile
            width="100%"
            class="light-green white--text text-center"
          >
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
    </div>
  </v-container>
</template>
<!--
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify', 
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [ rexto texto texo
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
-->

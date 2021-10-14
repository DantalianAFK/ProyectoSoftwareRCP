<template>
  <div>
    <v-carousel class="carousel">
      
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        height="50"
        
      ></v-carousel-item>
    </v-carousel>
    <br />
    <h1 class="text-center">Gestiona tus inventarios de manera intuitiva</h1>
    <br />

    <v-row justify="space-around">
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>About us</div>
          <p class="text-h6 text--primary">
            Integrantes
          </p>
          <div class="text--primary">
            <ul>
              <li>Jairo Bandera</li>
              <li>Luis Rosero</li>
              <li>Santiago Morán</li>
              <li>Jenny Arias</li>
            </ul>
            <br />
            "Solos podemos hacer poco, juntos podemos hacer mucho. Hellen
            Keller."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>Redes Sociales</div>
          <p class="text-h6 text--primary">
            GitHub
          </p>
          <div class="text--primary">
            <br />
            Para conocer más de este proyecto visita nuestro repositorio.
            <br />
            <br />
            <br />
            "Por muy alta que sea una montaña, siempre hay un camino hacia la
            cima. Anónimo."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>Projects</div>

          <p class="text-h6 text--primary">
            Universidad Tecnológica de Pereira
          </p>
          <div class="text--primary">
            <br />

            Este proyecto hace parte de la Mision TIC 2022
            <br />
            <br />
            <br />
            "Da siempre lo mejor que tienes. Lo que plantes ahora, lo cosecharás
            más tarde. Og Mandino."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">
            Seguir Leyendo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg",
        },
        {
          src: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
        },
        {
          src:
            "https://media-exp1.licdn.com/dms/image/C4E1BAQGR3x3xUt0apw/company-background_10000/0/1560802950655?e=2159024400&v=beta&t=Ix6FySV3CfLWil3iuFW2DMLGbHQiYBGh9bTd-bltlQs",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg",
        },
      ],
    };
  },
};
</script>

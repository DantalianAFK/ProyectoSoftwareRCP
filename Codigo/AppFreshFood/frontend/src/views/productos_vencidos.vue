<template>
  <div class="row">
    <h1 class="text-center">Próximamente</h1>
    <v-card-text class="blue--text text-center">
      <strong>Lista de Productos Vencidos</strong>
    </v-card-text>
    
    <v-card-text class="blue--text text-right">
      {{ new Date() }} — <strong>Fecha Actual</strong>
    </v-card-text>
    <div class="col-md-12">
      
      <v-simple-table > 
               
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Caducidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in Products" :key="product._id">
            <td>{{ product.ID }}</td>
            <td>{{ product.Nombre }}</td>
            <td>{{ product.Marca }}</td>
            <td>{{ product.Caducidad }}</td>
            <td>
              <router-link
                :to="{ name: 'Editar', params: { id: product._id } }"
                class="btn btn-success" color="primary"
                ><v-icon>mdi-pencil </v-icon>
              </router-link>

              <v-button
                @click.prevent="deleteProduct(product._id)"
                class="btn btn-danger" color="error"
              >
                <v-icon>mdi-delete </v-icon>
              </v-button>
            </td>
          </tr>
        </tbody>
        
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Products: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/Plista";
    axios
      .get(apiURL)
      .then((res) => {
        this.Products = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteProduct(id) {
      let apiURL = `http://localhost:4000/api/delete-product/${id}`;
      let indexOfArrayItem = this.Products.findIndex((i) => i._id === id);

      if (window.confirm("¿Desea borrar el Item?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Products.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>

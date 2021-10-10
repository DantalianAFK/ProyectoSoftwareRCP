<template>
  <div class="row">
    <v-card-text class="blue--text text-center">
      <strong>Lista de Productos en Inventario</strong>
    </v-card-text>
    <v-card-text class="blue--text text-right">
      {{ new Date() }} — <strong>Fecha Actual</strong>
    </v-card-text>
    <div class="col-md-12">
      <v-simple-table>
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
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>
<style>
.form-control {
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: #20b5fa;
  margin: 0 auto;
  padding: 20px 10px;
  width: 560px;
  height: 70px;
  background: white;
  padding: 5px;
  border-radius: 0.5em;
  font: bold;
  position: relative;
  top: 50%;
  left: 28.5%;
}
.btn-success {
  margin-right: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Products: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/busqueda-id/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Products = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

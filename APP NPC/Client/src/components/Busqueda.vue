<template>
  <div id="app">
    <div class="bg">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="my-6">
            <h1 class="text-center">Registro de productos</h1>
            <form>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  v-model="product.ID"
                  required
                  placeholder="Digite el ID"
                  minlength="5"
                  maxlength="5"
                />
              </div>
              <div class="form-group my-4">
                <button class="btn btn-danger btn-block">Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
.text-center {
  color: #ffffff;
}
.bg {
  background-image: url("https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg");
  background-color: #cccccc;
  opacity: 0.7;
  background-size: cover;
}
.btn {
  box-sizing: border-box;
  border: 10px #20b5fa;
  margin: 0 auto;
  padding: 20px 10px;
  width: 560px;
  height: 50px;
  background: linear-gradient(21deg, rgb(0, 140, 255), #20b5fa);
  padding: 3px;
  border-radius: 1em;
  position: relative;
  top: 50%;
  left: 28.5%;
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
  methods: {
    find() {
      let apiURL = "http://localhost:4000/api/busqueda-id";

      axios
        .post(apiURL, this.product)
        .then(() => {
          this.$router.push("/Pprueba");
          this.product = {
            ID: "",
            Nombre: "",
            Marca: "",
            Caducidad: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

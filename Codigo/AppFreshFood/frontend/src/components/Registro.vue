<template>
  <div id="app">
    <div class="bg">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="my-6">
            <h1 class="text-center">Registro de productos</h1>
            <form @submit.prevent="handleSubmitForm">
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
                <div class="validacion">
                  <p>
                    El ID es un número de 5 dígitos.
                  </p>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="product.Nombre"
                  required
                  placeholder="Digite el nombre"
                  minlength="1"
                  maxlength="30"
                />
              </div>

              <div class="form-group my-4">
                <input
                  type="text"
                  class="form-control"
                  v-model="product.Marca"
                  required
                  placeholder="Digite la marca"
                  minlength="1"
                  maxlength="30"
                />
              </div>

              <div class="form-group my-4">
                <input
                  type="date"
                  class="form-control"
                  v-model="product.Caducidad"
                  required
                  placeholder="Digite la fecha de caducidad"
                />
              </div>

              <div class="form-group my-4">
                <button class="btn btn-danger btn-block">Registrar</button>
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
  padding: 10px 10px;
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
  color: black;
}
.bg {
  background-image: url("https://images.squarespace-cdn.com/content/v1/54d5b958e4b0b96a66baf0f4/1425007266497-PDPGPEP75ZOKTS8ODAI1/BreakfastBackground.png");
  background-color: #cccccc;
  opacity: 0.8;
  background-size: cover;
}
.btn {
  box-sizing: border-box;
  border: 10px #20b5fa;
  margin: 0 auto;
  padding: 20px 10px;
  width: 560px;
  height: 50px;
  background: linear-gradient(21deg, #ffee58, #d4c006);
  padding: 3px;
  border-radius: 1em;
  position: relative;
  top: 50%;
  left: 28.5%;
}
.validacion {
  color: black;
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
      product: {
        ID: "",
        Nombre: "",
        Marca: "",
        Caducidad: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:3000/api/create-product";

      axios
        .post(apiURL, this.product)
        .then(() => {
          this.$router.push("/Plista");
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

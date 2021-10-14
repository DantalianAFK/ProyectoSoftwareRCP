<template>
  <div class="bg">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="my-6">
          <h2 class="text-center">Actualizar Producto</h2>
          <form @submit.prevent="handleUpdateForm">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="product.ID"
                required
              />
            </div>

            <div class="form-group my-4">
              <input
                type="text"
                class="form-control"
                v-model="product.Nombre"
                required
              />
            </div>

            <div class="form-group my-4">
              <input
                type="text"
                class="form-control"
                v-model="product.Marca"
                required
              />
            </div>

            <div class="form-group my-4">
              <input
                type="date"
                class="form-control"
                v-model="product.Caducidad"
                required
              />
            </div>

            <div class="form-group my-4">
              <button class="btn btn-danger btn-block" id="delete">Actualizar</button>
            </div>
          </form>
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
  color: #343636;
}
.bg {
  background-image: url("https://images.squarespace-cdn.com/content/v1/54d5b958e4b0b96a66baf0f4/1425007266497-PDPGPEP75ZOKTS8ODAI1/BreakfastBackground.png");
  background-color: #cccccc;
  opacity: 1;
  background-size: cover;
}
.btn {
  box-sizing: border-box;
  border: 10px #20b5fa;
  margin: 0 auto;
  padding: 10px 10px;
  width: 560px;
  height: 50px;
  background: linear-gradient(21deg, #ffee58, #d4c006);
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
      product: {},
    };
  },
  created() {
    let apiURL = `http://localhost:3000/api/edit-product/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.product = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:3000/api/update-product/${this.$route.params.id}`;

      axios
        .put(apiURL, this.product)
        .then((res) => {
          console.log(res);
          this.$router.push("/Plista");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

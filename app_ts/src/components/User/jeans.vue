<template>
  <!-- Top menu on small screens -->
  <header
    class="w3-container w3-top w3-white w3-medium w3-padding-16"
    style="background: white"
  >
    <span class="w3-left w3-padding"> Jeans </span>
    <a
      href="javascript:void(0)"
      class="w3-right w3-button w3-white"
      @click="$router.go(-1)"
    >
      « Back</a
    >
  </header>

  <!-- !PAGE CONTENT! -->

  <div
    class="container"
    style="max-width: 1600px; margin-top: 83px; background: white"
  >
    <!-- Photo grid -->

    <div class="w3-row" style="background: white">
      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="userjeans.jeans1" style="width: 100%" />
          <i class="fa fa-heart-o"></i>
          <p>
            {{ userjeans.jname1 }}<br /><b>{{ userjeans.prize1 }}</b>
          </p>
        </div>
        <div class="w3-container">
          <img :src="userjeans.jeans2" style="width: 100%" />
          <p>
            {{ userjeans.jname2 }}<br /><b>{{ userjeans.prize2 }}</b>
          </p>
        </div>
      </div>

      <div class="w3-col l3 s6">
        <div class="w3-container">
          <div class="w3-display-container">
            <img :src="userjeans.jeans3" style="width: 100%" />
            <span class="w3-tag w3-display-topleft">New</span>
            <div class="w3-display-middle w3-display-hover">
              <button
                class="w3-button w3-black"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                Buy now <i class="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <p>
            {{ userjeans.jname3 }}<br /><b>{{ userjeans.prize3 }}</b>
          </p>
        </div>
        <div class="w3-container">
          <img :src="userjeans.jeans4" style="width: 100%" />
          <p>
            {{ userjeans.jname4 }}<br /><b>{{ userjeans.prize4 }}</b>
          </p>
        </div>
      </div>

      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="userjeans.jeans4" style="width: 100%" />
          <p>
            {{ userjeans.jname4 }}<br /><b>{{ userjeans.prize4 }}</b>
          </p>
        </div>
        <div class="w3-container">
          <div class="w3-display-container">
            <img :src="userjeans.jeans3" style="width: 100%" />
            <span class="w3-tag w3-display-topleft">Sale</span>
            <div class="w3-display-middle w3-display-hover">
              <button
                class="w3-button w3-black"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                Buy now <i class="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <p>
            {{ userjeans.jname3 }}<br /><b class="w3-text-red">{{
              userjeans.prize3
            }}</b>
          </p>
        </div>
      </div>

      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="userjeans.jeans2" style="width: 100%" />
          <p>
            {{ userjeans.jname2 }}<br /><b>{{ userjeans.prize2 }}</b>
          </p>
        </div>
        <div class="w3-container">
          <img :src="userjeans.jeans1" style="width: 100%" />
          <p>
            {{ userjeans.jname1 }}<br /><b>{{ userjeans.prize1 }}</b>
          </p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="w3-center w3-padding-32" style="background: #ffbebe">
      <div class="w3-bar">
        <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
        <a href="#" class="w3-bar-item w3-black w3-button">1</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
        <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal4"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <strong> Buy Now </strong>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="bname" class="col-form-label">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="bname"
                v-model="buyform.bname"
              />
            </div>
            <div class="mb-3">
              <label for="Atext" class="col-form-label">Address:</label>
              <textarea
                class="form-control"
                id="message-text"
                name="Atext"
                v-model="buyform.Atext"
              ></textarea>
              <div>
                <label for="pincode" class="col-form-label">Pincode:</label>
                <input
                  type="number"
                  class="form-control"
                  id="pincode"
                  name="pincode"
                  v-model="buyform.pincode"
                />
              </div>
              <div>
                <label for="contactno" class="col-form-label">Contact:</label>
                <input
                  type="number"
                  class="form-control"
                  id="contactno"
                  name="contactno"
                  v-model="buyform.contactno"
                />
              </div>
            </div>
            <br />
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      userjeans: {},
      buyform: {
        bname: "",
        Atext: "",
        pincode: "",
        constactno: "",
      },
    };
  },

  methods: {
    user_jeans() {
      DataService.get("userjeans").then((response) => {
        // console.log("userjeans :", response);
        this.userjeans = response.data.result[0];
        console.log("userjeans", this.userjeans);
      });
    },
    submit() {
      if (
        this.buyform &&
        this.buyform.bname != "" &&
        this.buyform.Atext != "" &&
        this.buyform.constactno != {} &&
        this.buyform.pincode != {}
      ) {
        DataService.create("productpost", this.buyform).then((response) => {
          console.log("response", response);
          alert("order placed!! happy shopping!!");
        });
      } else {
        alert("please fill the form!!");
      }
    },
  },

  mounted() {
    this.user_jeans();
  },
};
</script>

<style scoped>
</style>
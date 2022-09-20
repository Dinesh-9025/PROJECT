<template>
  <div
    class="w3-main"
    style="margin-left: 290px; background: white"
    v-if="visibleContainer == 'dashboard'"
  >
    <div>
      <!-- Top header -->

      <header class="w3-container w3-xlarge" style="margin-top: 35px">
        <p class="w3-left">Shopping Zone</p>
        <!-- <p class="w3-right">
          <a class="fa fa-shopping-cart w3-margin-right" @click="cart"></a>
          <i class="fa fa-search"></i>
        </p> -->
      </header>

      <!-- Image header -->

      <div class="w3-display-container w3-container">
        <img :src="adimage.headerImage" alt="Jeans" style="width: 100%" />
        <div
          class="w3-display-topright w3-text-white"
          style="padding: 24px 48px"
        >
          <h1 class="w3-jumbo w3-hide-small" style="color: red">
            New arrivals
          </h1>

          <h1 class="w3-hide-small" style="color: red">COLLECTION 2022</h1>
          <p>
            <a
              href="#jeans"
              class="w3-button w3-black w3-padding-large w3-large"
              @click.prevent="userCommon('jeans')"
              >SHOP NOW</a
            >
          </p>
        </div>
      </div>

      <!-- Mobile phones -->

      <div class="w3-display-container w3-container">
        <img :src="adimage.adimage" alt="phones" style="width: 100%" />
        <div
          class="w3-display-topleft w3-text-white"
          style="padding: 24px 48px"
        >
          <h1 class="w3-hide-small" style="color: white">Latest SmartPhones</h1>
          <p>
            <a
              href="#phones"
              class="w3-button w3-black w3-padding-large w3-large"
              @click.prevent="userCommon('smartPhones')"
              >SHOP NOW</a
            >
          </p>
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
      visibleContainer: "dashboard",
      adimage: [],
    };
  },

  methods: {
    header_image() {
      DataService.get("userimage").then((response) => {
        // console.log("adimage :", response);
        this.adimage = response.data.result[0];
        console.log("adimage", this.adimage);
      });
    },

    userCommon(type) {
      // this.visibleContainer = type;

      if (type == "jeans") {
        this.$router.push("/jeans");
      } else if (type == "smartPhones") {
        this.$router.push("/smartphones");
      }

      console.log("type", type);
    },
  },
  mounted() {
    this.header_image();
  },
};
</script>

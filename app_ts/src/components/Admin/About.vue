<template>
  <div class="w3-container w3-dark-grey w3-padding-32">
    <div class="w3-row">
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-green">{{ about.heading }}</h5>
        <p>{{ about.Language }}</p>
        <p>{{ about.Country }}</p>
        <p>{{ about.City }}</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-red">{{ about.heading2 }}</h5>
        <p>{{ about.Browser }}</p>
        <p>{{ about.OS }}</p>
        <p>{{ about.More }}</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-orange">{{ about.heading3 }}</h5>
        <p>{{ about.Users }}</p>
        <p>{{ about.Active }}</p>
        <p>{{ about.Geo }}</p>
        <p>{{ about.Interests }}</p>
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      about: "",
    };
  },
  methods: {
    About() {
      DataService.get("about").then((response) => {
        console.log("about :", response);
        this.about = response.data.result[0];
        // console.log("about", this.about);
      });
    },
  },

  mounted() {
    this.About();
  },
};
</script>

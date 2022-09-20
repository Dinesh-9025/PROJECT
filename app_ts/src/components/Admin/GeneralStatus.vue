<template>
  <div class="w3-container">
    <h5>General Status</h5>
    <div v-for="(item, index) in general_status" :key="index">
      <p>{{ item.name }}</p>
      <div class="w3-grey">
        <div :class="item.color" :style="item.width">
          {{ item.percentage }}
        </div>
      </div>
    </div>

    <!-- <p>New Users</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-center w3-padding w3-orange"
            style="width: 50%"
          >
            50%
          </div>
        </div>

        <p>Bounce Rate</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-center w3-padding w3-red"
            style="width: 75%"
          >
            75%
          </div>
        </div> -->
  </div>
  <hr />
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      general_status: "",
    };
  },

  methods: {
    GeneralStatus() {
      DataService.get("GeneralStatus").then((response) => {
        console.log("general_status :", response);
        this.general_status = response.data.result;
        // console.log("general_status", this.general_status);
      });
    },
  },
  mounted() {
    this.GeneralStatus();
  },
};
</script>

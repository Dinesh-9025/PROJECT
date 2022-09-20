<template>
  <div class="w3-container">
    <h5>Recent Comments</h5>
    <div class="w3-row" v-for="(item, index) in recentComments" :key="index">
      <div class="w3-col m2 text-center">
        <img
          class="w3-circle"
          :src="item.image"
          style="width: 75px; height: 75px"
        />
      </div>
      <div class="w3-col m10 w3-container">
        <h4>
          {{ item.name }}
          <span class="w3-opacity w3-medium">{{ item.date }}</span>
        </h4>
        <p>
          {{ item.content }}
        </p>
        <br />
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      recentComments: "",
    };
  },
  methods: {
    RecentComments() {
      DataService.get("recentComments").then((response) => {
        console.log("recentComments :", response);
        this.recentComments = response.data.result;
        // console.log("recentComments", this.recentComments);
      });
    },
  },
  mounted() {
    this.RecentComments();
  },
};
</script>

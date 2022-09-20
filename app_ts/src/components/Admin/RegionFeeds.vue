<template>
  <div class="w3-panel">
    <div class="w3-row-padding" style="margin: 0 -16px">
      <div class="w3-third">
        <h5>Regions</h5>
        <img :src="Image" style="width: 100%" alt="Google Regional Map" />
      </div>
      <div class="w3-twothird">
        <h5>Feeds</h5>

        <table class="w3-table w3-striped w3-white">
          <tr v-for="(item, index) in feeds_data" :key="index">
            <td><i :class="item.class"></i></td>
            <td v-text="item.feedupdate"></td>
            <td v-text="item.time"></td>
          </tr>
          <!-- <tr>
                <td><i class="fa fa-bell w3-text-red w3-large"></i></td>
                <td>Database error.</td>
                <td><i>15 mins</i></td>
              </tr>
              <tr>
                <td><i class="fa fa-users w3-text-yellow w3-large"></i></td>
                <td>New record, over 40 users.</td>
                <td><i>17 mins</i></td>
              </tr>
              <tr>
                <td><i class="fa fa-comment w3-text-red w3-large"></i></td>
                <td>New comments.</td>
                <td><i>25 mins</i></td>
              </tr>
              <tr>
                <td><i class="fa fa-bookmark w3-text-blue w3-large"></i></td>
                <td>Check transactions.</td>
                <td><i>28 mins</i></td>
              </tr>
              <tr>
                <td><i class="fa fa-laptop w3-text-red w3-large"></i></td>
                <td>CPU overload.</td>
                <td><i>35 mins</i></td>
              </tr>
              <tr>
                <td><i class="fa fa-share-alt w3-text-green w3-large"></i></td>
                <td>New shares.</td>
                <td><i>39 mins</i></td>
              </tr> -->
        </table>
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
      feeds_data: [],
      Image: "",
    };
  },
  methods: {
    feeds() {
      DataService.get("feeds").then((response) => {
        console.log("feeds :", response);
        this.feeds_data = response.data.result;
        // console.log("feeds", this.feeds_data);
      });
    },

    regions() {
      DataService.get("regions").then((response) => {
        console.log("image :", response);
        this.Image = response.data.result[0].image;
        // console.log("find_image", this.Image);
      });
    },
  },
  mounted() {
    this.feeds();
    this.regions();
  },
};
</script>

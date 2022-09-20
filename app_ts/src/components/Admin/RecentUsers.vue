<template>
  <div class="w3-container">
    <h5>Recent Users</h5>
    <ul
      class="w3-ul w3-card-4 w3-white"
      v-for="(item, index) in recentUsers"
      :key="index"
    >
      <li class="w3-padding-16">
        <img :src="item.image" class="w3-left w3-circle w3-margin-right" style="width:35px">
        <span class="w3-xlarge">{{ item.name }}</span
        ><br />
      </li>
      <!-- <li class="w3-padding-16">
            <img src="/w3images/avatar5.png" class="w3-left w3-circle w3-margin-right" style="width:35px">
            <span class="w3-xlarge">Jill</span><br />
          </li>
          <li class="w3-padding-16">
            <img src="/w3images/avatar6.png" class="w3-left w3-circle w3-margin-right" style="width:35px">
            <span class="w3-xlarge">Jane</span><br />
          </li> -->
    </ul>
  </div>
  <hr />
</template>


<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      recentUsers: "",
    };
  },
  methods: {
    RecentUsers() {
      DataService.get("recentUsers").then((response) => {
        console.log("RecentUsers :", response);
        this.recentUsers = response.data.result;
        // console.log("recentUsers", this.recentUsers);
      });
    },
  },
  mounted() {
    this.RecentUsers();
  },
};
</script>

<template>
  <div class="w3-container">
    <h5>Countries</h5>
    <table
      class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white"
    >
      <tr v-for="(item, index) in countries" :key="index">
        <td v-text="item.name"></td>
        <td v-text="item.usage"></td>
      </tr>
      <!-- <tr>
            <td>UK</td>
            <td>15.7%</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>5.6%</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>2.1%</td>
          </tr>
          <tr>
            <td>India</td>
            <td>1.9%</td>
          </tr>
          <tr>
            <td>France</td>
            <td>1.5%</td>
          </tr> -->
    </table>
    <br />
    <button class="w3-button w3-dark-grey">
      More Countries <i class="fa fa-arrow-right"></i>
    </button>
  </div>

  <hr />
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      countries: "",
    };
  },
  methods: {
    Countries() {
      DataService.get("countries").then((response) => {
        console.log("countries :", response);
        this.countries = response.data.result;
        // console.log("countries", this.countries);
      });
    },
  },
  mounted() {
    this.Countries();
  },
};
</script>

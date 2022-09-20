<template>
  <!-- <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  /> -->
  <div class="w3-main" style="margin-left: 300px; margin-top: 43px; background: white">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="card-box bg-blue">
          <div class="inner">
            <h3>{{ userGeneral.deliveryCount }}</h3>
            <p>{{ userGeneral.dname }}</p>
          </div>
          <div class="icon">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          </div>
          <a href="#" class="card-box-footer"
            >View More <i class="fa fa-arrow-circle-right"></i
          ></a>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6">
        <div class="card-box bg-green">
          <div class="inner">
            <h3>{{ userGeneral.viewsCount }}</h3>
            <p>{{ userGeneral.vname }}</p>
          </div>
          <div class="icon">
            <i class="fa fa-money" aria-hidden="true"></i>
          </div>
          <a href="#" class="card-box-footer"
            >View More <i class="fa fa-arrow-circle-right"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card-box bg-orange">
          <div class="inner">
            <h3>{{ userGeneral.odersCount }}</h3>
            <p>{{ userGeneral.oname }}</p>
          </div>
          <div class="icon">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </div>
          <a href="#" class="card-box-footer"
            >View More <i class="fa fa-arrow-circle-right"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card-box bg-red">
          <div class="inner">
            <h3>{{ userGeneral.visitorCount }}</h3>
            <p>{{ userGeneral.visitorname }}</p>
          </div>
          <div class="icon">
            <i class="fa fa-users"></i>
          </div>
          <a href="#" class="card-box-footer"
            >View More <i class="fa fa-arrow-circle-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { commonUserHeader } from "../views/DashboardView.vue";
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      userGeneral: {},
    };
  },
  methods: {
    views() {
      DataService.get("views").then((response) => {
        console.log("userHeader :", response);
        this.userGeneral = response.data.result[0];
      });
    },
  },
  mounted() {
    this.views();
  },
};
</script>


<style scoped>
body {
  background: #eee;
}

.card-box {
  position: relative;
  color: #fff;
  padding: 20px 10px 40px;
  margin: 20px 0px;
}
.card-box:hover {
  text-decoration: none;
  color: #f1f1f1;
}
.card-box:hover .icon i {
  font-size: 100px;
  transition: 1s;
  -webkit-transition: 1s;
}
.card-box .inner {
  padding: 5px 10px 0 10px;
}
.card-box h3 {
  font-size: 27px;
  font-weight: bold;
  margin: 0 0 8px 0;
  white-space: nowrap;
  padding: 0;
  text-align: left;
}
.card-box p {
  font-size: 15px;
}
.card-box .icon {
  position: absolute;
  top: auto;
  bottom: 5px;
  right: 5px;
  z-index: 0;
  font-size: 72px;
  color: rgba(0, 0, 0, 0.15);
}
.card-box .card-box-footer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  text-align: center;
  padding: 3px 0;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  text-decoration: none;
}
.card-box:hover .card-box-footer {
  background: rgba(0, 0, 0, 0.3);
}
.bg-blue {
  background-color: #00c0ef !important;
}
.bg-green {
  background-color: #00a65a !important;
}
.bg-orange {
  background-color: #f39c12 !important;
}
.bg-red {
  background-color: #d9534f !important;
}
</style>

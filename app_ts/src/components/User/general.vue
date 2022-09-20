<template>
  <!-- <i class="fa fa-shopping-cart font-size-16"></i> -->
  <div
    class="w3-main"
    style="margin-left: 300px; margin-top: 43px; background: white"
  >
    <div class="row">
      <div class="col-md-6">
        <div class="card widget-user">
          <div class="card-body" style="background: aquamarine">
            <a
              ><i class="fa fa-heart-o" style="font-size: 60px; color: red"></i>
              <div class="wid-u-info">
                <h5 class="mt-3 mb-1">{{ cart_data.wishname }}</h5>
                <p class="text-muted mb-0">{{ cart_data.wishcount }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card widget-user">
          <div class="card-body" style="background: aquamarine">
            <a
              ><i
                class="fa fa-shopping-cart"
                style="font-size: 60px; color: black"
              ></i>
              <div class="wid-u-info">
                <h5 class="mt-3 mb-1">{{ cart_data.cartname }}</h5>
                <p class="text-muted mb-0">{{ cart_data.cartcount }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-6">
        <div class="card widget-user">
          <div class="card-body">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              class="img-fluid d-block rounded-circle avatar-md"
              alt="user"
            />
            <div class="wid-u-info">
              <h5 class="mt-3 mb-1">Michael Zenaty</h5>
              <p class="text-muted mb-0">coderthemes@gmail.com</p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card widget-user">
          <div class="card-body">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              class="img-fluid d-block rounded-circle avatar-md"
              alt="user"
            />
            <div class="wid-u-info">
              <h5 class="mt-3 mb-1">Michael Zenaty</h5>
              <p class="text-muted mb-0">coderthemes@gmail.com</p>
              
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      cart_data: [],
    };
  },

  methods: {
    cart() {
      DataService.get("userGeneral").then((response) => {
        console.log("cart_data :", response);
        this.cart_data = response.data.result[0];
        //console.log("feeds", this.cart_data);
      });
    },
  },
  mounted() {
    this.cart();
  },
};
</script>

<style>
.user-position {
  position: absolute;
  top: 0;
  border-left: 1px solid #dee2e6;
  bottom: 0;
  width: 44px;
  font-size: 16px;
  text-align: center;
  right: 0;
  left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.user-position span {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.avatar-md {
  height: 3.5rem;
  width: 3.5rem;
}
</style>

<template>
  <header class="w3-container" style="padding-top: 22px">
    <h5>
      <b><i class="fa fa-dashboard"></i> My Dashboard</b>
    </h5>
  </header>
  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16" @click="message">
        <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>52</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Messages</h4>
      </div>
    </div>

    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16" @click="views">
        <div class="w3-left"><i class="fa fa-eye w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>99</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Views</h4>
      </div>
    </div>

    <div class="w3-quarter">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left">
          <i class="fa fa-share-alt w3-xxxlarge"></i>
        </div>
        <div class="w3-right">
          <h3>{{ totalCount }}</h3>
        </div>
        <div class="w3-clear"></div>
        <!-- <h4>Waiting to sell</h4> -->
        <a
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          data-bs-whatever="@mdo"
          style="background: border-box"
        >
          Waiting To Sell
        </a>
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style="margin-top:5%;"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style="color: black"
                >
                  PRODUCT DETAILS
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <table class="table table-bordered table table-striped">
                <thead>
                  <tr>
                    <th>Modal</th>
                    <th>reason to sell</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody style="height: 50px">
                  <tr v-for="(item, index) in admin_table" :key="index">
                    <td v-text="item.modal_name"></td>
                    <td v-text="item.why_sell_this_product"></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="uploaded"
                      >
                        upload
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-quarter">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>50</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>To Sell Product</h4>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "/src/services/DataService";

export default {
  data() {
    return {
      admin_table: [],
    };
  },
  methods: {
    To_sell() {
      DataService.get("productsell").then((response) => {
        console.log("admin_response :", response);
        this.admin_table = response.data.result;
        // console.log("admin", this.admin_table);
        this.totalCount = this.admin_table.length;
      });
    },
  },
  mounted() {
    this.To_sell();
  },
};
</script>

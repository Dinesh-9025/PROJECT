<template>
  <div class="w3-white">
    <!-- Top container -->
    <div
      class="w3-bar w3-top w3-black w3-large"
      style="z-index: 4 margin-top: 25px"
    >
      <span class="w3-bar-item w3-right">Logo</span>
    </div>

    <!-- Sidebar/menu -->

    <nav
      class="w3-sidebar w3-collapse w3-white w3-animate-left"
      style="z-index: 3; width: 300px; margin-top: 1px"
      id="mySidebar"
    >
      <br />
      <div class="w3-container w3-row">
        <div class="w3-col s4">
          <img
            :src="findimage.avatarimage"
            class="w3-circle w3-margin-right"
            style="width: 46px"
          />
        </div>

        <div class="w3-col s8 w3-bar">
          <span
            >Welcome, <strong>{{ find_user.username }}</strong></span
          ><br />
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-envelope"></i
          ></a>
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-user"></i
          ></a>
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-cog"></i
          ></a>
        </div>
      </div>
      <hr />
      <div class="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div class="w3-bar-block">
        <div>
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding w3-blue"
            @click="common('dashboard')"
            ><i class="fa fa-users fa-fw"></i> Overview</a
          >
        </div>

        <div v-if="find_user && find_user.username == 'admin'">
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding"
            @click="common('views')"
            ><i class="fa fa-eye fa-fw"></i> Views</a
          >
        </div>

        <div
          v-if="
            find_user &&
            (find_user.username == 'user' || find_user.username == 'seller')
          "
        >
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding"
            @click="common('General')"
            ><i class="fa fa-bank fa-fw"></i> General</a
          >
        </div>

        <div v-if="find_user && find_user.username == 'seller'">
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ><i class="fa fa-diamond fa-fw"></i> Sell Product</a
          >
        </div>

        <div>
          <a
            href="#"
            class="w3-bar-item w3-button w3-padding"
            @click="common('setting')"
            ><i class="fa fa-cog fa-fw"></i>Settings</a
          ><br /><br />
        </div>
      </div>
      <footer
        class="w3-container w3-padding-16 w3-light-grey"
        style="position: inherit"
      >
        <a
          href=""
          class="w3-bar-item w3-button w3-padding"
          @click.prevent="Logout"
          >Logout</a
        >
      </footer>
    </nav>
  </div>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="margin-top: 5%"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: black">
            PRODUCT DETAILS
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="m_name" class="col-form-label" style="color: black"
                >Modal Name:</label
              >
              <input
                type="text"
                class="form-control"
                id="name"
                name="m_name"
                v-model="form.m_name"
                required="required"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="col-form-label" style="color: black">
                Why you Sell The Product:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                name="message"
                v-model="form.message"
                required="required"
              />
            </div>
            <center>
              <button type="button" class="btn btn-primary" @click="upload">
                Submit >
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Admin-Dashboard -->

  <div
    class="w3-main"
    style="margin-left: 300px; margin-top: 43px; background: white"
    v-if="visibleContainer == 'dashboard'"
  >
    <div v-if="find_user && find_user.username == 'admin'">
      <AdminDash />
    </div>

    <div v-if="find_user && find_user.username == 'admin'">
      <RegionFeeds />
    </div>

    <div v-if="find_user && find_user.username == 'admin'">
      <GeneralStatus />
    </div>

    <div v-if="find_user && find_user.username == 'admin'">
      <Countries />
    </div>

    <div v-if="find_user && find_user.username == 'admin'">
      <RecentUsers />
    </div>

    <div v-if="find_user && find_user.username == 'admin'">
      <RecentComments />
    </div>
    <div v-if="find_user && find_user.username == 'admin'">
      <About />
    </div>
  </div>

  <div style="background: white" v-if="visibleContainer == 'views'">
    <views />
  </div>

  <div style="background: white" v-if="visibleContainer == 'setting'">
    <settings />
  </div>

  <!-- user and seller page -->

  <div
    style="background: white"
    v-if="
      find_user &&
      (find_user.username == 'seller' || find_user.username == 'user') &&
      visibleContainer == 'dashboard'
    "
  >
    <UserSeller />
  </div>

  <div v-if="visibleContainer == 'General'">
    <div style="background: white">
      <General />
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

// Admin-Board
import AdminDash from "../components/Admin/AdminDash.vue";
import RegionFeeds from "../components/Admin/RegionFeeds.vue";
import GeneralStatus from "../components/Admin/GeneralStatus.vue";
import Countries from "../components/Admin/Countries.vue";
import RecentComments from "../components/Admin/RecentComments.vue";
import RecentUsers from "../components/Admin/RecentUsers.vue";
import About from "../components/Admin/About.vue";
import views from "../components/Admin/views.vue";

// common-Board
import settings from "../components/Common/settings.vue";

// user-Board
import UserSeller from "../components/User/UserSellerDash.vue";
import General from "../components/User/general.vue";

export default {
  components: {
    // Admin-Board
    AdminDash,
    RegionFeeds,
    GeneralStatus,
    Countries,
    RecentComments,
    RecentUsers,
    About,
    views,

    // common-Board
    settings,

    // user-Board
    UserSeller,
    General,
  },

  data() {
    return {
      user: "",
      value: {},
      findimage: [],
      find_user: {},
      visibleContainer: "dashboard",

      form: {
        m_name: "",
        message: "",
      },
    };
  },
  methods: {
    localvalue() {
      let locValue = JSON.parse(localStorage.getItem("user"));
      // console.log("localvalue",locValue)
      this.value = locValue.result;
    },

    getdata() {
      DataService.get("dashboard").then((response) => {
        console.log("submit_response :", response);
        this.userlist = response.data.result;
        //console.log("userlist", this.userlist)
        this.findimage = response.data.result[4];
        this.find_user = this.userlist.find(
          (obj) => obj.username === this.value.username
        );
        // console.log("find_user==>>", this.find_user);
      });
    },

    upload() {
      if (this.form && this.form.m_name != "" && this.form.message != "") {
        DataService.create("productpost", this.form).then((response) => {
          console.log("response", response);
        });
      } else {
        alert("please fill the form");
      }
    },

    common(type) {
      this.visibleContainer = type;
      console.log("type", this.visibleContainer);
    },

    // settings() {
    //   this.$router.push("/settings");
    // },

    Logout() {
      localStorage.removeItem("user");
      this.$router.push("/");
      localStorage.clear();
    },
  },

  mounted() {
    this.localvalue();
    this.getdata();
  },
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5 {
  font-family: "Raleway", sans-serif;
}
</style>

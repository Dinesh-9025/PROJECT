// eslint-disable-next-line
/* eslint-disable */
<template>
<div class="home image">
  <img alt="Vue logo" src="../assets/logo2.jpg">

<div class = "admin boxClass">
    <div class="vue-tempalte">
        <form @submit="LoginData">
            <h1> Sign In</h1><br><br>

            <div class="form-group inputValue">
              <i class="mail icon"></i>
                <!-- <label><strong> Email </strong></label> -->
                <input type="email" class="form-control form-control-lg" v-model="user.email" placeholder="Email" required/>
            <!-- <div>{{ errors.email }}</div> -->
            </div><br><br>

            <div class="form-group inputValue">
                <!-- <label><strong> Password </strong></label> -->
                <input type="password" class="form-control form-control-lg" v-model="user.password" placeholder="Password" minlength="7" required/>
            <!-- <div>{{ errors.password }}</div> -->
            </div><br>

            <center><button type="submit" class="btn btn-dark btn-lg btn-block sign_in" loader: true id="liveToastBtn">Sign In</button></center>
          <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
          <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
          <div class="toast-body">
           This is a toast message.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          </div>
          </div>
        </form>
    </div>
</div>
</div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */

import DataService from "../services/DataService";
// import validation from "../services/validation";

export default {
  name: "User",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      // valid: true,
      // success: false,
      // errors: {},
      //message: null,

      loader: false,
    };
  },
  methods: {
    LoginData(e) {
      e.preventDefault();
      this.loader = true;

      // this.errors = {}

      // const validEmail = validation.validateEmail(this.user.email);
      // this.errors.email = validEmail.error;
      // if (this.valid) {
      //   this.valid = validEmail.valid
      // }

      // const validPassword = validation.validatePassword(this.user.password)
      // this.errors.password = validPassword.error
      // if (this.valid) {
      //   this.valid = validPassword.valid
      // }

      // if (this.valid) {
      //   alert('HURRAAYYY!! :-)\n\n' + JSON.stringify(this.user))
      // }

      DataService.create("login", this.user).then((response) => {
        console.log("response", response.data);
        if ((response.apiStatus = "true")) {
          const res = response.data;
          localStorage.setItem("user", JSON.stringify(res));
          this.$router.push("/dashboard");
        }
      });
    },
  },
};

</script>
<style scoped>

.boxClass {
  max-width: 450px !important;
  background: rgb(255, 255, 255);
  margin-left: 30%;
  height: 60vh;
  margin: 50px auto;
  width: 640px;
  position: absolute;
  top: -1px;
  right: -8px;
  bottom: -8px;
  left: -8px;
}

.boxClass h1 {
  line-height: 60px;
  font-weight: bold;
  color: rgb(19, 104, 110);
  text-align: center;
  text-shadow: 0 1px white;
  background: #f3f3f3;
  border-bottom: 1px solid #cfcfcf;
  border-radius: 3px 3px 0 0;
}

.image {
  overflow: hidden;
  height: 600px;
}

.sign_in {
  color: rgb(252, 252, 252);
  background: #4c65f1;
}

</style>

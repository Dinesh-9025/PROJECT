/* eslint-disable */
<template>
  <main class="my-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue-app</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" >
          <!-- <li class="nav-item" >
            <a class="nav-link" href="" @click.prevent="Register">Register</a>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="Login">Login</a>
          </li> -->
          <!-- <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Sign in
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item active" href="#">UserLogin</a></li>
                <li><a class="dropdown-item" href="#">AdminLogin</a></li>
                <li><a class="dropdown-item" href="#">SellerLogin</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div> -->
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="Logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <div class="container">
      <router-view></router-view>
      </div>
    </main>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import store from '../store'

export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {

    // Register() {
    //   this.$router.push("/registerlogin");
    //   console.log("hello")
    // },
    Logout() {
      store.commit('SET_LAYOUT', 'login-layout')
      this.$router.push("/");
    }
}
}
</script>

<style>
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}</style>
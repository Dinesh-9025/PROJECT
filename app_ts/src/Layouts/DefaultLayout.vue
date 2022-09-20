<template>
        
         <div
      class="w3-main"
      style="margin-left: 290px"
      v-if="
        find_user &&
        (find_user.username == 'user' || find_user.username == 'seller')
      "
    >
      <div>
        <!-- Top header -->

        <header class="w3-container w3-xlarge" style="margin-top: 35px">
          <p class="w3-left">Shopping Zone</p>
          <p class="w3-right">
            <a class="fa fa-shopping-cart w3-margin-right" @click="cart"></a>
            <i class="fa fa-search"></i>
          </p>
        </header>

        <!-- Image header -->

        <div class="w3-display-container w3-container">
          <img :src="userHeader.headerImage" alt="Jeans" style="width: 100%" />
          <div
            class="w3-display-topright w3-text-white"
            style="padding: 24px 48px"
          >
            <h1 class="w3-jumbo w3-hide-small" style="color: red">
              New arrivals
            </h1>
            <!-- <h1 class="w3-hide-large w3-hide-medium" style="color: red;">New arrivals</h1> -->
            <h1 class="w3-hide-small" style="color: red">COLLECTION 2022</h1>
            <p>
              <a
                href="#jeans"
                class="w3-button w3-black w3-padding-large w3-large"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                >SHOP NOW</a
              >
            </p>
            <div style="color: black">
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  class="
                    modal-dialog
                    modal-dialog-centered
                    modal-dialog-scrollable
                    modal-fullscreen-xxl-down
                  "
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="exampleModalLabel"
                        style="color: black"
                      >
                        <strong> Jeans for men and women </strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="w3-row w3-grayscale">
                        <div class="w3-col l3 s6">
                          <div class="w3-container">
                            <img :src="userHeader.jeans1" style="width: 100%" />
                            <p>
                              {{ userHeader.jname1 }}<br /><b>{{
                                userHeader.prize1
                              }}</b>
                            </p>
                          </div>
                          <div class="w3-container">
                            <img :src="userHeader.jeans2" style="width: 100%" />
                            <p>
                              {{ userHeader.jname2 }}<br /><b>{{
                                userHeader.prize2
                              }}</b>
                            </p>
                          </div>
                        </div>

                        <div class="w3-col l3 s6">
                          <div class="w3-container">
                            <div class="w3-display-container">
                              <img
                                :src="userHeader.jeans3"
                                style="width: 100%"
                              />
                              <span class="w3-tag w3-display-topleft">New</span>
                              <div class="w3-display-middle w3-display-hover">
                                <button
                                  class="w3-button w3-black"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal4"
                                >
                                  Buy now <i class="fa fa-shopping-cart"></i>
                                </button>
                              </div>
                            </div>
                            <p>
                              {{ userHeader.jname3 }}<br /><b>{{
                                userHeader.prize3
                              }}</b>
                            </p>
                          </div>
                          <div class="w3-container">
                            <img :src="userHeader.jeans4" style="width: 100%" />
                            <p>
                              {{ userHeader.jname4 }}<br /><b>{{
                                userHeader.prize4
                              }}</b>
                            </p>
                          </div>
                        </div>

                        <div class="w3-col l3 s6">
                          <div class="w3-container">
                            <img :src="userHeader.jeans4" style="width: 100%" />
                            <p>
                              {{ userHeader.jname4 }}<br /><b>{{
                                userHeader.prize4
                              }}</b>
                            </p>
                          </div>
                          <div class="w3-container">
                            <div class="w3-display-container">
                              <img
                                :src="userHeader.jeans1"
                                style="width: 100%"
                              />
                              <span class="w3-tag w3-display-topleft"
                                >Sale</span
                              >
                              <div class="w3-display-middle w3-display-hover">
                                <button
                                  class="w3-button w3-black"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal4"
                                >
                                  Buy now <i class="fa fa-shopping-cart"></i>
                                </button>
                              </div>
                            </div>
                            <p>
                              {{ userHeader.jname1 }}<br /><b
                                class="w3-text-red"
                                >{{ userHeader.prize1 }}</b
                              >
                            </p>
                          </div>
                        </div>

                        <div class="w3-col l3 s6">
                          <div class="w3-container">
                            <img :src="userHeader.jeans3" style="width: 100%" />
                            <p>
                              {{ userHeader.jname3 }}<br /><b>{{
                                userHeader.prize3
                              }}</b>
                            </p>
                          </div>
                          <div class="w3-container">
                            <img
                              :src="userHeader.jeans2"
                              style="width: 100%"
                              height=""
                            />
                            <p>
                              {{ userHeader.jname2 }}<br /><b>{{
                                userHeader.prize2
                              }}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="cart"
                      >
                        Go to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            v-if="
              find_user &&
              (find_user.username == 'user' || find_user.username == 'seller')
            "
          />

          <!-- Mobile phones -->

          <div class="w3-display-container w3-container">
            <img :src="userHeader.adimage" alt="Jeans" style="width: 100%" />
            <div
              class="w3-display-topleft w3-text-white"
              style="padding: 24px 48px"
            >
              <!-- <h1 class="w3-jumbo w3-hide-small" style="color: red;">New arrivals</h1> -->
              <!-- <h1 class="w3-hide-large w3-hide-medium" style="color: red;">New arrivals</h1> -->
              <h1 class="w3-hide-small" style="color: white">
                Latest SmartPhones
              </h1>
              <p>
                <a
                  href="#jeans"
                  class="w3-button w3-black w3-padding-large w3-large"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  >SHOP NOW</a
                >
              </p>
              <div style="color: black">
                <div
                  class="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  @click="Mshopnow"
                  aria-hidden="true"
                >
                  <div
                    class="
                      modal-dialog
                      modal-dialog-centered
                      modal-dialog-scrollable
                      modal-fullscreen-xxl-down
                    "
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalLabel"
                          style="color: black"
                        >
                          <strong> SmartPhones </strong>
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="w3-row w3-grayscale">
                          <div class="w3-col l3 s6">
                            <div class="w3-container">
                              <img
                                :src="userHeader.mobile1"
                                style="width: 100%"
                              />
                              <hr />
                              <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->
                              <p>
                                {{ userHeader.mname1 }}<br /><b>{{
                                  userHeader.mobprize1
                                }}</b>
                              </p>
                            </div>
                            <div class="w3-container">
                              <img
                                :src="userHeader.mobile2"
                                style="width: 100%"
                              />
                              <hr />
                              <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->
                              <p>
                                {{ userHeader.mname2 }}<br /><b>{{
                                  userHeader.mobprize2
                                }}</b>
                              </p>
                            </div>
                          </div>

                          <div class="w3-col l3 s6">
                            <div class="w3-container">
                              <div class="w3-display-container">
                                <img
                                  :src="userHeader.mobile3"
                                  style="width: 100%"
                                />
                                <hr />
                                <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->
                                <span class="w3-tag w3-display-topleft"
                                  >New</span
                                >
                                <div class="w3-display-middle w3-display-hover">
                                  <button
                                    class="w3-button w3-black"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4"
                                  >
                                    Buy now <i class="fa fa-shopping-cart"></i>
                                  </button>
                                </div>
                              </div>
                              <p>
                                {{ userHeader.mname3 }}<br /><b>{{
                                  userHeader.mobprize3
                                }}</b>
                              </p>
                            </div>

                            <div class="w3-container">
                              <img
                                :src="userHeader.mobile4"
                                style="width: 100%"
                              />
                              <hr />
                              <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->
                              <p>
                                {{ userHeader.mname4 }}<br /><b>{{
                                  userHeader.mobprize4
                                }}</b>
                              </p>
                            </div>
                          </div>

                          <div class="w3-col l3 s6">
                            <div class="w3-container">
                              <img
                                :src="userHeader.mobile5"
                                style="width: 100%"
                              />
                              <hr />
                              <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->
                              <p>
                                {{ userHeader.mname5 }}<br /><b>{{
                                  userHeader.mobprize5
                                }}</b>
                              </p>
                            </div>

                            <div class="w3-container">
                              <div class="w3-display-container">
                                <img
                                  :src="userHeader.mobile6"
                                  style="width: 100%"
                                />
                                <hr />
                                <span class="w3-tag w3-display-topleft"
                                  >Sale</span
                                >
                                <!-- <span class="fa fa-shopping-cart w3-display-topright" @click="cart"></span> -->

                                <div class="w3-display-middle w3-display-hover">
                                  <button
                                    class="w3-button w3-black"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4"
                                  >
                                    Buy now <i class="fa fa-shopping-cart"></i>
                                  </button>
                                </div>
                              </div>
                              <p>
                                {{ userHeader.mname6 }}<br /><b
                                  class="w3-text-red"
                                  >{{ userHeader.mobprize6 }}</b
                                >
                              </p>
                            </div>
                          </div>

                          <!-- <div class="w3-col l3 s6">
                        <div class="w3-container">
                          <img :src="userHeader.jeans3" style="width: 100%" />
                          <p>
                            {{userHeader.mname1}}<br /><b>{{
                              userHeader.prize3
                            }}</b>
                          </p>
                        </div>
                        <div class="w3-container">
                          <img
                            :src="userHeader.jeans2"
                            style="width: 100%"
                            height=""
                          />
                          <p>
                            {{userHeader.mname1}}<br /><b>{{
                              userHeader.prize2
                            }}</b>
                          </p>
                        </div>
                      </div> -->
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="cart"
                        >
                          Go to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal4"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <strong> Buy Now </strong>
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
                <label for="bname" class="col-form-label">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="bname"
                  v-model="buyform.bname"
                />
              </div>
              <div class="mb-3">
                <label for="Atext" class="col-form-label">Address:</label>
                <textarea
                  class="form-control"
                  id="message-text"
                  name="Atext"
                  v-model="buyform.Atext"
                ></textarea>
                <div>
                  <label for="pincode" class="col-form-label">Pincode:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="pincode"
                    name="pincode"
                    v-model="buyform.pincode"
                  />
                </div>
                <div>
                  <label for="contactno" class="col-form-label">Contact:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="contactno"
                    name="contactno"
                    v-model="buyform.contactno"
                  />
                </div>
              </div>
              <br />
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

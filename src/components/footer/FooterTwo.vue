<template>
  <!-- Start Footer Style Two  -->
  <div
    class="footer-style-2 ptb--30 bg_image bg_image--1"
    data-black-overlay="6"
  >
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center">
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner">
            <div class="logo text-center text-sm-left mb_sm--20">
              <router-link to="/"
                ><img :src="logo" alt="Logo images"
              /></router-link>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="6" cols="12" class="d-flex align-center justify-space-between">
          <div class="inner text-center">
            <socialTwo />
          </div>
          <a
            class="rn-btn"
            :href="CONSTS.MAIN.basic.calendlyLink"
          >
            <span>Let's CALL</span>
          </a>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="12" cols="12">
          <div class="inner text-md-right text-center mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                Copyright © {{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
  import socialTwo from "../social/SocialTwo";
  export default {
    components: {
      socialTwo
    },

    data() {
      return {
        logo: require("../../assets/images/logo/logo-symbol-dark.png"),
      };
    },
  };
</script>

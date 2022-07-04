<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageTwo
      :hideMenu="true"
    />
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
      data-black-overlay="5"
      :style="{
        'background-image': `url(${service.back})`
      }"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="headingtitle theme-gradient">{{ service.title }}</h2>
              <p>{{ service.desc }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class="rn-service-details rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content pb--80 align-items-center"
                >
                  <v-col lg="12" md="12" cols="12">
                    <div class="details mt_md--30 mt_sm--30">
                      <!-- <h4 class="title">Proceess of metel</h4> -->
                      <p v-for="(t, index) in service.pContent">
                        {{ t }}
                      </p>
                      <ul class="liststyle bullet">
                        <li v-for="(t, index) in service.ulContent">{{ t }}</li>
                      </ul>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <FooterTwo />
  </div>
</template>

<script>
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  import FooterTwo from "../../components/footer/FooterTwo";
  export default {
    components: {
      HeaderOnePageTwo,
      Header,
      Footer,
      FooterTwo,
    },
    data() {
      return {
        index: null,
        service: {},
      };
    },

    computed: {
      items() {
        return [
          {
            thumb: require("../../assets/images/service/service-02.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ]
      },
      id () {
        return this.$route.params.id
      },
    },

    created () {
      this.service = this.CONSTS.SERVICES.find(prj => prj.id === this.id)
      if (!this.service) {
        this.$router.push({ name: 'Missing' })
      }
    },

    methods: {},
  };
</script>

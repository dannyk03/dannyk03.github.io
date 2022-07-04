<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <HeaderOnePageTwo />
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <div class="rn-slider-area poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-style-3 slider-paralax bg_image bg_image--25 d-flex align-center"
        :style="{ 'background-image': `url(${CONSTS.MAIN.homepage.top.backImage})` }"
      >
        <div style="height: 300px" />
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <div class="section about-area rn-section-gap bg_color--1" id="about">
      <div class="about-wrapper">
        <div class="container">
          <BannerThree>
            <span slot="designation"><span style="color: #FFF">{{ CONSTS.MAIN.homepage.top.title }}</span></span>
            <h1 class="heading-title" slot="heading-title">
              I’m <span>{{ CONSTS.MAIN.basic.firstName }}</span> Welcome to my World.
            </h1>
          </BannerThree>
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              :src="CONSTS.MAIN.homepage.aboutMe.image"
              alt="About Images"
            />
          </AboutFour>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div
      class="section service-area rn-service-area rn-section-gap bg_color--5"
      id="service"
    >
      <div class="container">
        <v-row>
          <v-col lg="12">
            <div
              class="section-title service-style--3 text-center mb--20 mb_sm--0 md_md--0"
            >
              <div class="d-flex align-center justify-center">
                <h2 class="heading-title mr-2">
                  My Services
                </h2>

                <v-img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/281/flexed-biceps_1f4aa.png"
                  :max-width="50"
                />
              </div>
              <p>
                {{ CONSTS.MAIN.homepage.services.desc }}
              </p>
            </div>
          </v-col>
        </v-row>
        <ServiceThree
          :items="activeServices"
        />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div
      class="section rn-portfolio-area rn-section-gap bg_color--1"
      id="portfolio"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--20">
              
              <div class="d-flex align-center justify-center">
                <h2 class="heading-title mr-2">
                  My Latest Project
                </h2>

                <v-img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/281/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png"
                  :max-width="50"
                />
              </div>
              <p>
                {{ CONSTS.MAIN.homepage.projects.desc }}
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioFour
          :items="activeProjects"
        />
        <!-- <v-row>
          <v-col lg="12">
            <div class="view-more-btn mt--60 mt_sm--30 text-center">
              <a class="rn-button-style--2 btn_solid" href="#">View All</a>
            </div>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Blog Area  -->
    <!-- Do not support news as of now -->
    <!-- <div class="section rn-blog-area rn-section-gap bg_color--5" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="12">
            <div class="section-title text-left">
              <h2>Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div> -->
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
    <div
      class="section rn-contact-area rn-section-gap bg_color--1"
      id="contact"
    >
      <div class="contact-form--1">
        <v-container>
          <Contact>
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import BannerThree from "../../components/slider/BannerThree";
  import AboutFour from "../../components/about/AboutFour";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Blog from "../../components/blog/Blog";
  import Contact from "../../components/contact/Contact";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageTwo,
      BannerThree,
      AboutFour,
      ServiceThree,
      PortfolioFour,
      Blog,
      Contact,
      Footer,
    },

    computed: {
      activeServices () {
        return this.CONSTS.SERVICES.filter(d => d.active)
      },
      activeProjects () {
        return this.CONSTS.PROJECTS.filter(d => d.active)
      },
    },

    data() {
      return {};
    },
  };
</script>

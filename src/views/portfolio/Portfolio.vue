<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">Portfolio</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center mb--20 mb_sm--0">
              <h2 class="heading-title">Featured</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <PortfolioTwo />
      </v-container>
    </div>
    <!-- Start Portfolio Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center mb--20 mb_sm--0">
              <h2 class="heading-title">All Works</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <PortfolioFour />
      </v-container>
    </div>
    <!-- Start Portfolio Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center mb--20 mb_sm--0">
                <h2 class="heading-title">All Works</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <Portfolio />
      </div>
    </div>
    <!-- Start Portfolio Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Portfolio from "../../components/portfolio/Portfolio";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      Header,
      PortfolioTwo,
      PortfolioFour,
      Portfolio,
      Footer,
    },
    data() {
      return {
        breadcrumbs: [
          {
            text: "Home",
            to: "/",
            disabled: false,
          },
          {
            text: "Portfolio",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>

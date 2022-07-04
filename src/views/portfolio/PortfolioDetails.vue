<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageTwo
      :hideMenu="true"
    />
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
      data-black-overlay="5"
      :style="{
        'background-image': `url('${project.landing}')`
      }"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="heading-title theme-gradient">
                {{ project.title }}
              </h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="portfolio-details">
              <div class="inner">
                <h2>{{ project.tag }}</h2>
                <p class="subtitle" v-html="project.descOverview" />
                <p v-if="project.desc">
                  <ul>
                    <li
                      v-for="(dec, index) in project.desc"
                    >
                      {{ dec }}  
                    </li>
                  </ul>
                </p>

                <div class="portfolio-view-list d-flex flex-wrap">
                  <div class="port-view">
                    <span>Technical stacks</span>
                    <h4>{{ project.techStack.join(', ') }}</h4>
                  </div>
                  <div v-if="project.link" class="port-view">
                    <span>Link</span>
                    <h4>
                      <a
                        :href="project.link"
                      >
                        {{ project.link }}
                      </a>
                    </h4>
                  </div>
                  <!-- <div class="port-view">
                    <span>Program</span>
                    <h4>View Project</h4>
                  </div> -->
                </div>
                <!-- <div class="portfolio-share-link mt--20 pb--70 pb_sm--40">
                  <ul
                    class="social-share rn-lg-size d-flex justify-start liststyle mt--15"
                  >
                    <li v-for="(social, i) in socialList" :key="i">
                      <a :href="social.url" v-html="iconSvg(social.icon)"></a>
                    </li>
                  </ul>
                </div> -->
              </div>

              <div class="portfolio-thumb-inner mt-10">
                <div class="thumb position-relative mb--30">
                  <CoolLightBox
                    :items="items"
                    :index="index"
                    :useZoomBar="true"
                    @close="index = null"
                  >
                  </CoolLightBox>

                  <div class="thumbnail position-relative">
                    <v-row>
                      <v-col
                        style="position: relative"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                        cols="12"
                        sm="6"
                        class="mb-3"
                      >
                        <v-img
                          class="w-100"
                          :src="image"
                          alt="About Images"
                          max-height="500"
                        />

                        <a
                          @click="index = imageIndex"
                          class="video-popup position-top-center theme-color play__btn"
                          ><span class="play-icon"></span
                        ></a>
                      </v-col>
                    </v-row>
                  </div>
                </div>
                <!-- <div class="thumb mb--30">
                  <img
                    src="../../assets/images/portfolio/portfolio-big-02.jpg"
                    alt="Portfolio Images"
                  />
                </div>
                <div class="thumb">
                  <img
                    src="../../assets/images/portfolio/portfolio-big-01.jpg"
                    alt="Portfolio Images"
                  />
                </div> -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Details Area  -->

    <!-- Start Related Work  -->
    <!-- <div class="portfolio-related-work pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col>
            <div class="section-title text-center">
              <span class="theme-color font--18 fontWeight600"
                >Related Work</span
              >
              <h2>Our More Projects</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt--10">
          <v-col
            lg="6"
            md="6"
            cols="12"
            v-for="(project, i) in moreProjects"
            :key="i"
          >
            <div class="related-work text-center mt--30">
              <div class="thumb">
                <a href="/portfolio-details">
                  <img :src="project.src" alt="Portfolio-images" />
                </a>
              </div>
              <div class="inner">
                <h4>
                  <a href="/portfolio-details">{{ project.title }}</a>
                </h4>
                <span class="category">{{ project.categorie }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <!-- End Related Work  -->

    <FooterTwo />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import Footer from "../../components/footer/Footer";
  import feather from "feather-icons";
  import FooterTwo from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      Footer,
      HeaderOnePageTwo,
      FooterTwo
    },

    computed: {
      id () {
        return this.$route.params.id
      },
      items () {
        // return this.project.images.map(img => ({
        //   title: 'XX',
        //   thumb: img,
        //   src: img
        // }))
        return this.project.images
      },
    },
    data() {
      return {
        project: {},
        socialList: [
          {
            url: "https://www.facebook.com/",
            icon: "facebook",
          },
          {
            url: "https://www.linkedin.com/",
            icon: "linkedin",
          },
          {
            url: "https://instagram.com/",
            icon: "instagram",
          },
          {
            url: "https://twitter.com/",
            icon: "twitter",
          },
        ],
        // moreProjects: [
        //   {
        //     src: require("../../assets/images/portfolio/related-image-01.jpg"),
        //     title: "Digital Analysis",
        //     categorie: "Technique",
        //   },
        //   {
        //     src: require("../../assets/images/portfolio/related-image-02.jpg"),
        //     title: "Plan Management",
        //     categorie: "Planning",
        //   },
        // ],
        index: null,
      };
    },

    created () {
      this.project = this.CONSTS.PROJECTS.find(prj => prj.id === this.id)
      if (!this.project) {
        this.$router.push({ name: 'Missing' })
      }
    },

    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

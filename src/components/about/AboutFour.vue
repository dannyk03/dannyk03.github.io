<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner pt--100 pt_sm--40 pt_md--40">
        <div class="section-title">
          <div class="d-flex align-center">
            <h2 class="heading-title mr-2">
              About Me
            </h2>

            <v-img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/281/face-savoring-food_1f60b.png"
              :max-width="50"
            />
          </div>
          <p class="description">
            {{ CONSTS.MAIN.homepage.aboutMe.desc }}
          </p>
        </div>
        <!-- End .section-title -->
        <div class="tab-wrapper mt--30">
          <v-row>
            <TabTwo
              :items="CONSTS.MAIN.homepage.aboutMe.skills"
            />
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import TabTwo from "../../components/tabs/TabTwo";
  export default {
    components: { TabTwo },
    data() {
      return {};
    },
  };
</script>

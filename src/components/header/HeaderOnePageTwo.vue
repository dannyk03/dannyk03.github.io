<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up header-one-page-nav-drawer"
      v-model="drawer"
      fixed
      width="60vw"
    >
      <v-list-item class="pa-2">
        <v-spacer></v-spacer>
        <v-btn large icon @click="drawer = !drawer" v-html="iconSvg(closeIcon)">
        </v-btn>
      </v-list-item>

      <v-list>
        <v-list-item
          :ripple="false"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- End mobile menu sidebar item list -->
      </v-list>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      color="transparent"
      fixed
      elevate-on-scroll
      class="header-one-page-nav header-one-page-nav-two"
    >
      <router-link to="/" class="logo">
        <img src="../../assets/images/logo/logo-symbol-dark.png" />
      </router-link>
      <!-- End brand logo -->

      <v-toolbar-items
        class="hidden-xs-only hidden-sm-only height-auto ml--35"
        v-if="!hideMenu"
      >
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
        >
          <v-btn
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            :ripple="false"
            text
            class="scrollactive-item"
            >{{ item.title }}</v-btn
          >
        </scrollactive>
      </v-toolbar-items>
      <!-- End header menu item -->
      <v-spacer></v-spacer>
      <div class="social-share-inner">
        <socialTwo />
      </div>
      <a
        class="rn-btn"
        :href="CONSTS.MAIN.basic.calendlyLink"
      >
        <span>Let's CALL</span>
      </a>
      <v-btn
        icon
        class="ma-0 pa-0 hidden-md-and-up"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
  import feather from "feather-icons";
  import socialTwo from "../social/SocialTwo";
  export default {
    components: {
      socialTwo,
    },
    props: {
      hideMenu: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      drawer: false,
      items: [
        { title: "Home", to: "#home" },
        { title: "About", to: "#about" },
        { title: "Service", to: "#service" },
        { title: "Portfolio", to: "#portfolio" },
        // { title: "Blog", to: "#blog" },
        { title: "Contact", to: "#contact" },
      ],
      icon: "menu",
      closeIcon: "x",
    }),
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

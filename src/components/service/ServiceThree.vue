<template>
  <div class="row mt_dec--30">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30"
      v-for="(service, i) in items"
      :key="i"
    >
      <div class="single-service service__style--2 bg-color-gray">
        <router-link :to="`/service-details/${service.id}`">
          <div class="service">
            <div class="icon">
              <div v-html="iconSvg(service.icon)"></div>
            </div>
            <div class="content">
              <h3 class="heading-title">{{ service.title }}</h3>
              <p>
                {{ service.desc }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    props: {
      items: {
        type: Array,
        default: [],
      },
    },

    data() {
      return {
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

<template>
  <div class="row mt_dec--30">
    <!-- Start Single Service  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--30 mt_sm--5 mt_md--5"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--4 large-size text-center">
        <router-link to="/service-details">
          <div class="service">
            <div class="icon" v-html="iconSvg(service.icon)"></div>
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
    data() {
      return {
        serviceContent: [
          {
            icon: "cast",
            title: "Business Stratagy",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "layers",
            title: "Website Development",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "cast",
            title: "Marketing & Reporting",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
        ],
      };
    },

    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

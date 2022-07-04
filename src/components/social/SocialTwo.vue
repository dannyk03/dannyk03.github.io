<template>
  <ul
    class="social-share social-style--2 d-flex justify-content-start liststyle"
  >
    <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.url" style="color: #FFF"><i class="fab" :class="social.icon"></i></a>
    </li>
  </ul>
</template>
<script>
  export default {
    computed: {
      socialList () {
        const list =  [
          {
            icon: "fa-github",
            url: this.CONSTS.MAIN.basic.github,
          },
          {
            icon: "fa-facebook-f",
            url: this.CONSTS.MAIN.basic.facebook,
          },
          {
            icon: "fa-linkedin-in",
            url: this.CONSTS.MAIN.basic.linkedin,
          },
          {
            icon: "fa-twitter",
            url: this.CONSTS.MAIN.basic.twitter,
          },
          {
            icon: "fa-instagram",
            url: this.CONSTS.MAIN.basic.instagram,
          },
        ];

        return list.filter(l => l.url)
      }
    },

    data() {
      return {}
    },
  };
</script>

import * as CONSTS from '@/constants'
import Vue from 'vue'


Vue.mixin({
  data: function () {
    return {
      CONSTS: { ...CONSTS },
    }
  },
  methods: {
  },
})

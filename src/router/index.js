import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Missing from '../views/404.vue'
import Demo from '../views/Demo.vue'
import LandingPersonalPortfolioTwo from '../views/all-home-version/LandingPersonalPortfolioTwo.vue'
import { MAIN } from '@/constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPersonalPortfolioTwo',
    meta: {
      title: MAIN.basic.firstName + ' ' + MAIN.basic.lastName
    },
    component: LandingPersonalPortfolioTwo
  },

  {
    path: '/portfolio-details/:id',
    name: 'PortfolioDetails',
    meta: {
      title: 'Portfolio Details'
    },
    component: () =>
      import ('../views/portfolio/PortfolioDetails.vue')
  },
  {
    path: '/service-details/:id',
    name: 'ServiceDetails',
    meta: {
      title: 'Service Details'
    },
    component: () =>
      import ('../views/service/ServiceDetails.vue')
  },

  {
    path: '/demo',
    component: Demo,
    meta: {
      title: 'Portfolio'
    }
  },

  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    component: () =>
      import ('../views/About.vue')
  },
  {
    path: '/main-demo',
    name: 'MainDemo',
    meta: {
      title: 'Main Demo'
    },
    component: () =>
      import ('../views/all-home-version/MainDemo.vue')
  },
  {
    path: '/main-demo-dark',
    name: 'MainDemoDark',
    meta: {
      title: 'Main Demo Dark'
    },
    component: () =>
      import ('../views/all-home-version/MainDemoDark.vue')
  },
  {
    path: '/creative-agency',
    name: 'CreativeAgency',
    meta: {
      title: 'Creative Agency'
    },
    component: () =>
      import ('../views/all-home-version/CreativeAgency.vue')
  },
  {
    path: '/digital-agency',
    name: 'DigitalAgency',
    meta: {
      title: 'Digital Agency'
    },
    component: () =>
      import ('../views/all-home-version/DigitalAgency.vue')
  },
  {
    path: '/business',
    name: 'Business',
    meta: {
      title: 'Business'
    },
    component: () =>
      import ('../views/all-home-version/Business.vue')
  },
  {
    path: '/corporate-business',
    name: 'CorporateBusiness',
    meta: {
      title: 'Corporate Business'
    },
    component: () =>
      import ('../views/all-home-version/CorporateBusiness.vue')
  },
  {
    path: '/startup',
    name: 'StartUp',
    meta: {
      title: 'Start Up'
    },
    component: () =>
      import ('../views/all-home-version/StartUp.vue')
  },
  {
    path: '/creative-portfolio',
    name: 'CreativePortfolio',
    meta: {
      title: 'Creative Portfolio'
    },
    component: () =>
      import ('../views/all-home-version/CreativePortfolio.vue')
  },
  {
    path: '/minimal-portfolio',
    name: 'MinimalPortfolio',
    meta: {
      title: 'Minimal Portfolio'
    },
    component: () =>
      import ('../views/all-home-version/MinimalPortfolio.vue')
  },
  {
    path: '/landing-home-particle',
    name: 'LandingHomeParticle',
    meta: {
      title: 'Landing Home Particle'
    },
    component: () =>
      import ('../views/all-home-version/LandingHomeParticle.vue')
  },
  {
    path: '/landing-creative-agency',
    name: 'LandingCreativeAgency',
    meta: {
      title: 'Landing Creative Agency'
    },
    component: () =>
      import ('../views/all-home-version/LandingCreativeAgency.vue')
  },
  {
    path: '/landing-interior',
    name: 'LandingInterior',
    meta: {
      title: 'Landing Interior'
    },
    component: () =>
      import ('../views/all-home-version/LandingInterior.vue')
  },
  {
    path: '/landing-personal-portfolio',
    name: 'LandingPersonalPortfolio',
    meta: {
      title: ' Personal Portfolio Landing'
    },
    component: () =>
      import ('../views/all-home-version/LandingPersonalPortfolio.vue')
  },
  {
    path: '/personal-portfolio',
    name: 'PersonalPortfolio',
    meta: {
      title: 'Personal Portfolio'
    },
    component: () =>
      import ('../views/all-home-version/PersonalPortfolio.vue')
  },
  {
    path: '/designer-portfolio',
    name: 'DesignerPortfolio',
    meta: {
      title: 'Designer Portfolio'
    },
    component: () =>
      import ('../views/all-home-version/DesignerPortfolio.vue')
  },
  {
    path: '/studio-agency',
    name: 'StudioAgency',
    meta: {
      title: 'Studio Agency'
    },
    component: () =>
      import ('../views/all-home-version/StudioAgency.vue')
  },
  {
    path: '/parallax-home',
    name: 'ParallaxHome',
    meta: {
      title: 'Parallax Home'
    },
    component: () =>
      import ('../views/all-home-version/ParallaxHome.vue')
  },
  {
    path: '/service',
    name: 'Service',
    meta: {
      title: 'Service'
    },
    component: () =>
      import ('../views/service/Service.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: 'Blog'
    },
    component: () =>
      import ('../views/blog/Blog.vue')
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    meta: {
      title: 'Blog Details'
    },
    component: () =>
      import ('../views/blog/BlogDetails.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: {
      title: 'Portfolio'
    },
    component: () =>
      import ('../views/portfolio/Portfolio.vue')
  },
  {
    path: '/team',
    name: 'Team',
    meta: {
      title: 'Team'
    },
    component: () =>
      import ('../views/Team.vue')
  },
  {
    path: '/button',
    name: 'Button',
    meta: {
      title: 'Button'
    },
    component: () =>
      import ('../views/Button.vue')
  },
  {
    path: '/pricing-plan',
    name: 'PricingPlan',
    meta: {
      title: 'Pricing Plan'
    },
    component: () =>
      import ('../views/PricingPlan.vue')
  },
  {
    path: '/accordion-with-tab',
    name: 'AccordionWithTab',
    meta: {
      title: 'Accordion With Tab'
    },
    component: () =>
      import ('../views/AccordionWithTab.vue')
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    meta: {
      title: 'Tesimonial'
    },
    component: () =>
      import ('../views/Testimonial.vue')
  },
  {
    path: '/column',
    name: 'Column',
    meta: {
      title: 'Column'
    },
    component: () =>
      import ('../views/Column.vue')
  },
  {
    path: '/list-style',
    name: 'ListStyle',
    meta: {
      title: 'List Style'
    },
    component: () =>
      import ('../views/ListStyle.vue')
  },
  {
    path: '/contact-form',
    name: 'ContactForm',
    meta: {
      title: 'Contact Form'
    },
    component: () =>
      import ('../views/ContactForm.vue')
  },
  {
    path: '/video-popup',
    name: 'VideoPopup',
    meta: {
      title: 'Video Popup'
    },
    component: () =>
      import ('../views/VideoPopup.vue')
  },
  {
    path: '/brand',
    name: 'Brand',
    meta: {
      title: 'Brand'
    },
    component: () =>
      import ('../views/Brand.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    meta: {
      title: 'Counter'
    },
    component: () =>
      import ('../views/Counter.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Contact'
    },
    component: () =>
      import ('../views/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: {
      title: 'Gallery'
    },
    component: () =>
      import ('../views/Gallery.vue')
  },
  {
    path: '/progressbar',
    name: 'Progressbar',
    meta: {
      title: 'Progressbar'
    },
    component: () =>
      import ('../views/Progressbar.vue')
  },
  {
    path: '*',
    component: Missing,
    name: 'Missing',
    meta: {
      title: '404'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


export default router
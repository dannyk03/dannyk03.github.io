export const API_BASE_URL = `https://my-json-server.typicode.com/Itsolution-git/portfoilo-data/`


export const MAIN = {
  "basic":{
    "firstName":"Danny",
    "lastName":"Kaganovitch",
    "email":"danny.kaganovitch@gmail.com",
    "logo":"https://i.ibb.co/mDqB0ys/49536502-biceps-flex-arm-vector-icon.jpg",
    "facebook":"",
    // "linkedin":"https://www.linkedin.com/in/dannykg/",
    "twitter":"",
    "instagram":"",
    "github":"https://github.com/dannyk03",
    "calendlyLink": "https://calendly.com/danny-kaganovitch/15min"
  },
  "homepage":{
    "top":{
      "title":"Senior Software Engineer",
      "backImage":"https://i.ibb.co/5vBxpSY/bren.png"
    },
    "aboutMe":{
      "image":"https://i.ibb.co/XShfFWH/t-TZRw-Q40v5-I.jpg",
      "desc":"I like to build and improve software that solves real-world business problems and creates a positive experience for users, as well as having a positive business impact for the organization. I was inspired by a high-productivity/innovative work culture—walking the line between perfection and a getting-it-done mentality.",
      "skills":[
        {
          "name":"Experience",
          "details":[
            {
              "title":"Freelancer",
              "org":"Consultation",
              "subtitle":"December 2020 - Present",
              "desc":"Working as an independent freelancer as well as working with many variants of Javascript technologies."
            },
            {
              "title":"Solution Architect",
              "org":"Oracle",
              "subtitle":"August 2017 - December 2020",
              "desc":"Built the foundations of a web components library to integrate into client's web applications. Ensured that the library is lightweight, easy to extend and maintain. Managed a small developer team (3 to 4 developers)."
            },
            {
              "title":"Software Automation Engineering",
              "org":"Amdocs",
              "subtitle":"Sept 2010 - August 2017",
              "desc":"Served as a second developer on a system modernization project. Built the app architecture and design system components. Implemented workflows and guidelines for code consistency, readability, maintainability, and testability. Conducted R&D (research and development) for libraries and ways to improve our codebase. Helped and mentored junior developers from various backgrounds."
            }
          ]
        },
        {
          "name":"Education & Certification",
          "details":[
            {
              "title":"Bachelor's degree in Computer Engineering",
              "org":"Ruppin Academic Center",
              "subtitle":"2009",
              "desc":"עמק חפר 4025000, Israel"
            },
            {
              "title":"Other, Networking Specialist",
              "org":"HP",
              "subtitle":"2012",
              "desc":"Israel"
            }
            
          ]
        }
      ]
    },
    "services":{
      "desc":"Appreciate the importance of quality code as well as the need to meet scheduling demands.",
    },
    "projects":{
      "desc":"Below are the most recent accomplishments I worked alone or worked as a lead or a core team member.",
    },
    "news":[
      
    ],
    "skills": [
       {
          "label": "Languages",
          "details": "JavaScript, Typescript, SQL, HTML, CSS, Python",
       },
       {
          "label": "Frameworks",
          "details": "NestJS, Express, Loopback, Cypress, React, Vue",
       },
       {
          "label": "Storage",
          "details": "MySQL, Firebase, Redis, PostgreSQL, Elasticsearch, MongoDB, DynamoDB",
       },
       {
          "label": "DevOps",
          "details": "Docker, Kubernetes, AWS, Azure, GCP",
       },
       {
          "label": "Other",
          "details": "Cryptocurrency, Solidity, Zapier, Work automation",
       }
    ],
    "preferredEnv": {
       "desc": "Visual Studio, Sublime, Ubuntu 20.0, Bash"
    },
    "skillByYear": [
       {
          "label": "Javascript",
          "years": 10
       },
       {
          "label": "NodeJS",
          "years": 8,
       },
       {
          "label": "VueJS",
          "years": 5,
       },
       {
          "label": "React",
          "years": 6,
       },
       {
          "label": "React Native",
          "years": 5,
       }
    ],
    "contactUs":false
  }
}

export const NEWS = []
export const SERVICES = [
  {
    "id":"web-application",
    "icon":"monitor",
    "title":"Web/Desktop Application",
    "desc":"I build web/desktop applications that take advantage of the cloud to provide the scale and performance that is needed for modern apps.",
    "refLink": "https://indexnine.com/services/scalable-web-applications/",
    "back": "https://i.ibb.co/31PKKxx/The-Evolution-Of-Web-Development.jpg",
    "pContent": [
      // "Build scalable and high performance applications for the cloud using cloud-native or agnostic architectures and contemporary UI technologies.",
      // "Our approach to web product development includes consideration of scale and performance at design time. We start by wire-framing to identify requirements in good detail. Data requirements and other considerations are identified upfront to ensure a reasonable timeline and action plan.",
      // "Leverage our experience in dealing with the cloud. We consult on the product requirements to identify the right technology and architecture for the product. Our familiarity with cloud providers enables us to suggest cloud-agnostic or cloud-native architectures for the project depending on requirements.",
      // "We have experience across the cloud landscape, be it AWS, Azure or Google Cloud. We have built applications that can be moved across any of these providers (cloud-agnostic) or can suggest cloud native architectures that will save time and money during development (such as lambda on AWS).",
    ],
    "ulContent": [
      "UX Design - Our design-led approach identifies requirements and dependencies up-front during wire-framing.      ",
      "Architecture - Decide on architecture and suggest technology choices based on the user landscape and type of application.",
      "Design for scale and performance - Our apps are always designed with scale and performance in mind. Review UX design and iterate to fix any red flags before development.",
      "Contemporary Technologies - Use contemporary UI technologies to take advantage of recent improvements in UI toolsets.",
      "Scale-out deployments - Leverage cost-effective horizontal deployment strategies on the cloud to prepare for future uptake in traffic.",
    ],
    "active": true
  },
  {
    "id":"mobile-application",
    "icon":"layers",
    "title":"Mobile Application",
    "desc":"I build native mobile applications for Android and iOS using React/Native or native SDKs.",
    "refLink": "https://indexnine.com/services/mobile-applications/",
    "back": "https://i.ibb.co/YPDfLvQ/download-2.jpg",
    "pContent": [
      "Build native or hybrid mobile apps for Android and iOS using React/Native or native SDKs.",
      "Enterprise mobile applications can be used to address an audience that is always online and improve productivity and operations in innovative ways. Digital transformation in workplaces will involve mobile technologies and move the workforce to a more productive, digital lifestyle.",
      "Cloud-connected mobile apps allow users to leverage information stored on the cloud across multiple devices and utilize available data for cost-reductions and time-saving across user workflows.",
    ],
    "ulConent": [],
    "active": true
  },
  {
    "id":"devops",
    "icon":"cast",
    "title":"DevOps",
    "desc":"I collaborate with your developers and architects to help you guide your software development. I customize, design and set your infrastructure or server up to ensure stable operation of your services.",
    "refLink": "https://wishdesk.com/services/devops-services",
    "back": "https://i.ibb.co/8bdf8L5/DevOps.jpg",
    "pContent": [
      "Professional experience in building pipelines using jenkins.",
      "Github, gitlab, bitbucket API hooks and various plugins in jenkins.",
      "Docker and kubernetes, terraform.",
    ],
    "ulContent": [],
    "active": true
  }
]

export const PROJECTS = [
  {
    "id":"cap-business",
    "tag":"NestJS + ReactJS",
    "title": "Cap Business Plan/Decision Application",
    "landing": "https://i.ibb.co/2hg6jtD/screencapture-capimpact-2021-03-24-04-34-27.png",
    "images":[
      "https://i.ibb.co/8PDkvRH/Screenshot-from-2021-03-24-04-37-07.png",
      "https://i.ibb.co/3fjcmWS/Screenshot-from-2021-03-24-04-36-37.png",
      "https://i.ibb.co/xg9tnKG/Screenshot-from-2021-03-24-04-36-25.png",
      "https://i.ibb.co/9vDCYH3/screencapture-54-88-176-131-3000-2021-03-24-04-36-05.png",
      "https://i.ibb.co/3mFKbjT/screencapture-54-88-176-131-3001-docs-2021-03-24-04-35-52.png",
      "https://i.ibb.co/prJFLfH/screencapture-clearprism-2021-03-24-04-34-53.png",
      "https://i.ibb.co/2hg6jtD/screencapture-capimpact-2021-03-24-04-34-27.png"
    ],
    "descOverview": "CapBusiness tool for compaines, <br/> Backend is built in NestJS + PostgreSQL. Frontend is built in React",
    "link": "https://testautomationu.applitools.com",
    "techStack": [
       "NodeJS", "Typescript", "NestJS", "PostgreSQL", "React", "MaterialUI"
    ],
    "utilities": [
    ],
    "active": true
  },
  {
    "id":"openmined-courses",
    "tag":"ExpressJS + ReactJS + Firebase",
    "title": "Openmined Courses",
    "landing": "https://i.ibb.co/ryy15z5/screencapture-courses-openmined-org-2021-03-24-04-26-09.png",
    "images":[
      "https://i.ibb.co/cF4zkJD/Screenshot-from-2021-03-24-04-29-00.png",
      "https://i.ibb.co/YhL9qy5/Screenshot-from-2021-03-24-04-28-49.png",
      "https://i.ibb.co/rGyymyZ/Screenshot-from-2021-03-24-04-28-41.png",
      "https://i.ibb.co/d4C1TKF/screencapture-courses-openmined-org-courses-2021-03-24-04-27-28.png",
      "https://i.ibb.co/1b7C3Mz/screencapture-courses-openmined-org-courses-our-privacy-opportunity-1f34d3a8-2fa1-4a1e-9ef1-eaaf9ddd.png",
      "https://i.ibb.co/ssRnBVh/screencapture-courses-openmined-org-users-dashboard-2021-03-24-04-26-43.png",
      "https://i.ibb.co/ryy15z5/screencapture-courses-openmined-org-2021-03-24-04-26-09.png"
    ],
    "descOverview": "Learning platform offered by Openmined.org. <br/> Backend is bulit in Firebase clouding functions and firestore. Frontend is built in React and latest Hooks. It manages content using CMS.",
    "link": "https://courses.openmined.org/",
    "techStack": [
       "NodeJS", "Typescript", "Firebase", "Express", "React", "ChakraUI", "TailwindCSS"
    ],
    "utilities": [
      "Nx", "CMS"
    ],
    "active": true
  },
  {
    "id":"kindquiz",
    "tag":"ExpressJS + NuxtJS",
    "title": "Kindquiz",
    "landing": "https://i.ibb.co/GRZD37H/screencapture-kindquiz-classic-2021-03-24-04-12-34.png",
    "images":[
      "https://i.ibb.co/gPNf56B/Screenshot-from-2021-03-24-04-19-49.png",
      "https://i.ibb.co/QXf2kvw/screencapture-kindquiz-classic-2021-03-24-04-15-44-1.png",
      "https://i.ibb.co/PjwgsYc/Screenshot-from-2021-03-24-04-17-31.png",
      "https://i.ibb.co/hcSTQkK/Screenshot-from-2021-03-24-04-17-21.png",
      "https://i.ibb.co/QXf2kvw/screencapture-kindquiz-classic-2021-03-24-04-15-44-1.png",
      "https://i.ibb.co/fkqbjS4/screencapture-kindquiz-gogates-2021-03-24-04-13-22.png",
      "https://i.ibb.co/P1BXydn/screencapture-summery-ai-2021-03-24-04-12-47.png",
      "https://i.ibb.co/GRZD37H/screencapture-kindquiz-classic-2021-03-24-04-12-34.png"
    ],
    "descOverview": "AI-driven social impact engagement. Assess, activate, and align your organizational culture. <br/> Backend is build in NodeJS + Sequelize + Express, frontend is built in VueJS for admin panel, NuxtJS for quiz application, wordpress for landing pages.",
    "link": "https://testautomationu.applitools.com",
    "techStack": [
       "NodeJS", "Sequelize", "Express", "PostgreSQL", "VueJS", "NuxtJS", "Wordpress"
    ],
    "utilities": [
      "Google Analytics", "Firebase", "Data Extraction", "AI"
    ],
    "active": true
  },
  {
    "id":"testautomation-u",
    "tag":"Firebase + Vuepress",
    "title": "Test Automation University",
    "landing": "https://i.ibb.co/pzRjym4/Screenshot-from-2021-03-24-04-09-00.png",
    "images":[
      "https://i.ibb.co/pzRjym4/Screenshot-from-2021-03-24-04-09-00.png",
      "https://i.ibb.co/PTGxfqS/Screenshot-from-2021-03-24-04-08-45.png",
      "https://i.ibb.co/BqK76pT/Screenshot-from-2021-03-24-04-08-36.png",
      "https://i.ibb.co/YjyxrDM/Screenshot-from-2021-03-24-04-07-57.png",
      "https://i.ibb.co/jMS8L1k/Screenshot-from-2021-03-24-04-07-15.png",
      "https://i.ibb.co/cb4tsFS/screencapture-testautomationu-applitools-learningpaths-html-2021-03-24-04-04-55.png",
      "https://i.ibb.co/DD206Jz/screencapture-testautomationu-applitools-me-html-2021-03-24-04-04-04.png",
      "https://i.ibb.co/fGtdKp5/Screenshot-from-2021-03-24-04-02-45.png",
      "https://i.ibb.co/3FXx8V9/Screenshot-from-2021-03-24-04-00-11.png",
      "https://i.ibb.co/HCMbsTj/Screenshot-from-2021-03-24-03-59-57.png",
    ],
    "descOverview": "Learning platform developed as a marketing tool of Applitools.",
    "link": "https://testautomationu.applitools.com",
    "techStack": [
       "Firebase", "NodeJS", "Typescript", "Frontend - Vuepress(Vue)"
    ],
    "utilities": [
      "imagemagic", "ffmpeg", "markdown"
    ],
    "active": true
  },
  {
    "id": "platform-purple",
    "tag":"Electron + VueJS",
    "title": "Platform purple",
    "landing": "https://i.ibb.co/m83pzvZ/Screenshot-from-2021-03-24-03-10-18.png",
    "images": [
       "https://i.ibb.co/m83pzvZ/Screenshot-from-2021-03-24-03-10-18.png",
       "https://i.ibb.co/K2XXjv9/Screenshot-from-2021-03-24-03-09-25.png"
    ],
    "desc": [
       "Worked with a team of software engineers on a content distribution platform that serves millions of users.",
       "Wrote front-end code for pre-sale, consumption stage, and administration/dashboard side pages.",
       "Maintained a React-and-Electron desktop application for The Discovery Channel.",
       "Translated the React-based Electron Discovery Channel application into Vue.js, Electron, and Cordova to deliver a mobile as well as the desktop experience."
    ],
    "techStack": [
       "Electron", "Cordova", "CSS", "HTML5", "JavaScript", "React", "Vue.js"
    ],
    "active": true
  },
  {
    "id": "varicent",
    "tag":"ReactJS",
    "title": "Varicent",
    "landing": "https://i.ibb.co/wzFDKs6/Screenshot-from-2021-03-24-03-16-48.png",
    "images": [
       "https://i.ibb.co/wzFDKs6/Screenshot-from-2021-03-24-03-16-48.png"
    ],
    "desc": [
       "Implemented the UI for Symon.AI, a machine learning pipeline, using React, Redux, TypeScript, and PostCSS.",
       "Owned the hiring and onboarding of new UI developers.",
       "Integrated with Intercom, Upscope, and WalkMe to provide a premium experience educating and helping users.",
       "Collaborated with product management to make decisions on what features are most valuable.",
       "Led a team of five software developers to implement the UI for all new product features."
    ],
    "techStack": [
       "TypeScript", "RxJS", "Redux", "React", "Webpack", "Web UI", "ECharts", "PostCSS"
    ],
    "active": true
  },
  {
    "id": "joice-mobile",
    "tag":"React Native",
    "title": "Joice Mobile",
    "landing": "https://i.ibb.co/0Q3vqxC/Screenshot-from-2021-03-24-03-19-47.png",
    "images": [
       "https://i.ibb.co/0Q3vqxC/Screenshot-from-2021-03-24-03-19-47.png"
    ],
    "desc": [
       "Collaborated with the product manager to develop features.",
       "Analyzed the requirements and estimated the effort.",
       "Designed the software architecture, then coded the feature, and also wrote the unit and E2E tests.",
       "Led a refactoring project on the front-end. The old codebase was based on AngularJS which lacked modularity and had a lot of coupling.",
       "Analyzed the requirements and our current architecture; then borrowing concepts from React/Redux, designed a new architecture for our codebase.",
       "Created a customized web component (AngularJS and Redux) to make the codebase more modular and much easier for future development.",
       "Migrated the current product (which was AngularJS) and rewrote every screen with Angular 6 from scratch.",
       "Migrated some UI logic from the old codebase; used Angular and ng2-redux."
    ],
    "techStack": [
       "TypeScript", "React Native", "Redux", "React", "Webpack", "iOS", "Android"
    ],
    "active": true
  },
  {
    "id": "artilia",
    "tag":"React Native + Vue SSR / ReactJS",
    "title": "Joice Mobile",
    "landing": "https://i.ibb.co/3p4JYDS/Screenshot-from-2021-03-24-03-30-21.png",
    "images": [
      "https://i.ibb.co/3p4JYDS/Screenshot-from-2021-03-24-03-30-21.png",
      "https://i.ibb.co/XyKyVg2/Screenshot-from-2021-03-24-03-29-02.png",
      "https://i.ibb.co/vYWykFc/Screenshot-from-2021-03-24-03-28-47.png"
    ],
    "link": "https://artiliamade.com/",
    "descOverview":  "eCcommerce website for selling unique kid-created art pieces. Based on the WordPress platform with a custom shopping process, products, and user experience. <br/> The scope of work included implementing client designs and user journeys.",
    "techStack": [
       "Amazon Web Services (AWS)", "Cucumber", "AWS", "Vue SSR", "Mocha", "Cypress.io", "PHP", "React", "JavaScript"
    ],
    "active": true
  }
]
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ac02df"],{"4c03":function(t,a,s){"use strict";var e=s("62ad"),i=s("0fd9"),l=function(){var t=this,a=t._self._c;return a("footer",{staticClass:"footer-area footer-default"},[a("div",{staticClass:"footer-wrapper"},[a(i["a"],{staticClass:"row--0",attrs:{align:"end"}},[a(e["a"],{attrs:{md:"6",sm:"12",cols:"12"}},[a("div",{staticClass:"footer-left"},[a("div",{staticClass:"inner"},[a("span",[t._v("Ready To Do This")]),a("h2",[t._v(" Let's get "),a("br"),t._v(" to work ")]),a("router-link",{staticClass:"rn-button-style--2",attrs:{to:"/contact"}},[a("span",[t._v("Contact Us")])])],1)])]),a(e["a"],{attrs:{md:"6",sm:"12",cols:"12"}},[a("div",{staticClass:"footer-right",attrs:{"data-black-overlay":"6"}},[a(i["a"],[a(e["a"],{attrs:{lg:"6",sm:"6",cols:"12"}},[a("div",{staticClass:"footer-widget"},[a("h4",[t._v("Quick Link")]),a("ul",{staticClass:"ft-link"},t._l(t.navList,(function(s,e){return a("li",{key:e},[a("router-link",{attrs:{to:s.to}},[t._v(t._s(s.navItem))])],1)})),0)])]),a(e["a"],{staticClass:"mt_mobile--30",attrs:{lg:"6",sm:"6",cols:"12"}},[a("div",{staticClass:"footer-widget"},[a("h4",[t._v("Say Hello")]),a("ul",{staticClass:"ft-link"},t._l(t.mailList,(function(s,e){return a("li",{key:e},[a("a",{attrs:{href:s.to}},[t._v(t._s(s.mailItem))])])})),0),a("div",{staticClass:"social-share-inner"},[a("ul",{staticClass:"social-share social-style--2 d-flex justify-content-start liststyle mt--15"},t._l(t.socialList,(function(t,s){return a("li",{key:s},[a("a",{attrs:{href:t.url}},[a("i",{staticClass:"fab",class:t.icon})])])})),0)])])]),a(e["a"],{attrs:{lg:"12"}},[a("div",{staticClass:"copyright-text"},[a("p",[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Rainbow-Themes. All Rights Reserved. ")])])])],1)],1)])],1)],1)])},r=[],o={data(){return{socialList:[{icon:"fa-facebook-f",url:"https://www.facebook.com/"},{icon:"fa-linkedin-in",url:"https://www.linkedin.com/"},{icon:"fa-twitter",url:"https://twitter.com/"},{icon:"fa-instagram-square",url:"https://www.instagram.com/"}],navList:[{navItem:"Work",to:"/portfolio"},{navItem:"About",to:"/about"},{navItem:"Let's Talk",to:"/contact"}],mailList:[{mailItem:"admin@example.com",to:"mailto:admin@example.com"},{mailItem:"hr@example.com",to:"mailto:hr@example.com"}]}}},n=o,c=s("2877"),d=Object(c["a"])(n,l,r,!1,null,null,null);a["a"]=d.exports},"7a41":function(t,a,s){t.exports=s.p+"img/service-02.79e324df.png"},"7f12":function(t,a,s){"use strict";s.r(a);var e=s("62ad"),i=s("a523"),l=s("0fd9"),r=function(){var t=this,a=t._self._c;return a("div",[a("HeaderOnePageTwo",{attrs:{hideMenu:!0}}),a("div",{staticClass:"rn-page-title-area pt--120 pb--190 bg_image bg_image--5",style:{"background-image":`url(${t.service.back})`},attrs:{"data-black-overlay":"5"}},[a(i["a"],[a(l["a"],[a(e["a"],{attrs:{cols:"12"}},[a("div",{staticClass:"rn-page-title text-center pt--100"},[a("h2",{staticClass:"headingtitle theme-gradient"},[t._v(t._s(t.service.title))]),a("p",[t._v(t._s(t.service.desc))])])])],1)],1)],1),a("div",{staticClass:"rn-service-details rn-section-gap bg_color--1"},[a(i["a"],[a(l["a"],[a(e["a"],{attrs:{lg:"12"}},[a("div",{staticClass:"service-details-inner"},[a("div",{staticClass:"inner"},[a(l["a"],{staticClass:"sercice-details-content pb--80 align-items-center"},[a(e["a"],{attrs:{lg:"12",md:"12",cols:"12"}},[a("div",{staticClass:"details mt_md--30 mt_sm--30"},[t._l(t.service.pContent,(function(s,e){return a("p",[t._v(" "+t._s(s)+" ")])})),a("ul",{staticClass:"liststyle bullet"},t._l(t.service.ulContent,(function(s,e){return a("li",[t._v(t._s(s))])})),0)],2)])],1)],1)])])],1)],1)],1),a("FooterTwo")],1)},o=[],n=s("b8c7"),c=s("a960"),d=s("4c03"),u=s("3b35"),m={components:{HeaderOnePageTwo:n["a"],Header:c["a"],Footer:d["a"],FooterTwo:u["a"]},data(){return{index:null,service:{}}},computed:{items(){return[{thumb:s("7a41"),src:"https://www.youtube.com/watch?v=ZOoVOfieAF8"}]},id(){return this.$route.params.id}},created(){this.service=this.CONSTS.SERVICES.find(t=>t.id===this.id),this.service||this.$router.push({name:"Missing"})},methods:{}},v=m,f=s("2877"),p=Object(f["a"])(v,r,o,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-75ac02df.57388032.js.map
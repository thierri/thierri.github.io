/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},197:function(t,e,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var n in e)t[n]=e[n]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(e,n,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=e+"="+n+d}}function l(t,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");n||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=e(l[0]);if(d=(r.read||r)(d,f)||e(d),n)try{d=JSON.parse(d)}catch(t){}if(o[f]=d,t===f)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,n){c(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},204:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current opacity-75 h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},207:function(t,e,n){"use strict";var r=n(6),o=n(208)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(87)("find")},208:function(t,e,n){var r=n(32),o=n(86),c=n(33),l=n(25),d=n(209);t.exports=function(t,e){var n=1==t,f=2==t,v=3==t,m=4==t,h=6==t,x=5==t||h,y=e||d;return function(e,d,C){for(var w,_,k=c(e),A=o(k),R=r(d,C,3),O=l(A.length),F=0,$=n?y(e,O):f?y(e,0):void 0;O>F;F++)if((x||F in A)&&(_=R(w=A[F],F,k),t))if(n)$[F]=_;else if(_)switch(t){case 3:return!0;case 5:return w;case 6:return F;case 2:$.push(w)}else if(m)return!1;return h?-1:v||m?m:$}}},209:function(t,e,n){var r=n(210);t.exports=function(t,e){return new(r(t))(e)}},210:function(t,e,n){var r=n(14),o=n(128),c=n(4)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},229:function(t,e,n){"use strict";n.r(e);n(207),n(15);var r=n(3),o=(n(42),n(196)),c=n(1),l=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current opacity-75 h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports,d=n(85),f=n(204),v=n(202),m=n.n(v),h=(n(197),{middleware:"auth",components:{times:o.a,plusCircle:l,plus:f.a,ArrowForRight:d.a},data:function(){return{userEmailOrPhone:null,availableRestrictions:[],questions:[{category:"business_type",text:"Qual tipo de campanha vc tem interesse?",multiplequestion:!1,showOptions:!0},{category:"public_interest",text:"Qual seu público alvo?",multiplequestion:!0,showOptions:!0}],campaign:{name:"Nova Campanha",description:"Nova Campanha",restrictions:[],links:[{httpAddress:null}]}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/campaign/available_restrictions");case 2:t.availableRestrictions=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{createCampaign:function(){var t=this;this.$axios.$post("/campaign",this.campaign).then((function(e){t.$router.push({path:"/nova-campanha/2-concluido?campanha=".concat(e.id)})}))},restrictionsFiltered:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m.a.filter(t,{category:e});return n&&m.a.forEach(this.campaign.restrictions,(function(t){r=m.a.reject(r,t)})),r},removeRestriction:function(t){this.campaign.restrictions=m.a.reject(this.campaign.restrictions,t)},addRestriction:function(t){m.a.find(this.campaign.restrictions,t)||this.campaign.restrictions.push(t)}},head:function(){return{title:"Crie uma nova campanha",meta:[{hid:"description",name:"description",content:"Crie uma nova campanha"}]}}}),x=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100 px-5 flex content-center flex-col h-full md:h-auto"},[n("p",{staticClass:"my-2 text-gray-600 text-2xl font-thin"},[t._v(t._s(t.campaign.name))]),t._v(" "),t._l(t.questions,(function(e,r){return n("div",{key:r,staticClass:"my-1"},[n("p",{staticClass:"mt-10 mb-2 font-bold text-gray-600"},[t._v(t._s(e.text))]),t._v(" "),t._l(t.restrictionsFiltered(t.campaign.restrictions,e.category),(function(e){return n("div",{key:e.slug,staticClass:"rounded-full bg-red-200 text-red-900 px-2 py-1 flex items-center inline-flex m-2",on:{click:function(n){return t.removeRestriction(e)}}},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"bg-white rounded-full ml-3 text-red-400"},[n("times")],1)])})),t._v(" "),t.restrictionsFiltered(t.campaign.restrictions,e.category).length>0&&e.multiplequestion&&!e.showOptions?n("div",{staticClass:"rounded-full bg-gray-200 text-red-900 px-2 py-1 flex items-center inline-flex m-2",on:{click:function(t){e.showOptions=!0}}},[n("p",{staticClass:"text-gray-600"},[t._v("Adicionar")]),t._v(" "),n("div",{staticClass:"bg-gray-100 rounded-full ml-3 text-gray-600"},[n("plus")],1)]):t._e(),t._v(" "),0==t.restrictionsFiltered(t.campaign.restrictions,e.category).length||e.multiplequestion&&e.showOptions?n("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-4 my-2"},t._l(t.restrictionsFiltered(t.availableRestrictions,e.category,!0),(function(option){return n("div",{key:option.slug,staticClass:"shadow bg-white shadow-md rounded px-4 py-2",on:{click:function(n){e.showOptions=t.addRestriction(option)}}},[n("p",{staticClass:"text-red-600 font-bold text-sm"},[t._v(t._s(option.title))]),t._v(" "),n("p",{staticClass:"text-gray-600 my-3 text-sm"},[t._v(t._s(option.description))])])})),0):t._e()],2)})),t._v(" "),n("p",{staticClass:"mt-10 mb-2 font-bold text-gray-600"},[t._v("Seu produto ou serviço tem um site?")]),t._v(" "),n("div",{staticClass:"flex mb-4 items-center border-b border-b-2 border-gray-300 py-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.campaign.links[0].httpAddress,expression:"campaign.links[0].httpAddress"}],staticClass:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",attrs:{type:"text",placeholder:"www.minhaloja.com/meu-produto","aria-label":"Full name"},domProps:{value:t.campaign.links[0].httpAddress},on:{input:function(e){e.target.composing||t.$set(t.campaign.links[0],"httpAddress",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mt-auto"},[n("button",{staticClass:"py-2 px-4 my-4 flex items-center float-left rounded bg-gray-600 text-white"},[t._v("Cancelar")]),t._v(" "),n("button",{staticClass:"py-2 px-4 my-4 flex items-center float-right rounded bg-red-600 text-white",on:{click:t.createCampaign}},[t._v("\n      Avançar\n      "),n("ArrowForRight",{staticClass:"ml-2"})],1)])],2)}),[],!1,null,null,null);e.default=x.exports}}]);
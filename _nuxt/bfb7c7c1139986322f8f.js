/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("1751733b",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},196:function(t,e,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(e,r,e,t):n)||(t.exports=o),!0,t.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var r in e)t[r]=e[r]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(e,r,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(t){}r=n.write?n.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=e+"="+r+f}}function l(t,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=e(l[0]);if(f=(n.read||n)(f,d)||e(f),r)try{f=JSON.parse(f)}catch(t){}if(o[d]=f,t===d)break}catch(t){}}return t?o[t]:o}}return o.set=c,o.get=function(t){return l(t,!1)},o.getJSON=function(t){return l(t,!0)},o.remove=function(e,r){c(e,"",t(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},197:function(t,e,r){"use strict";var n=r(194);r.n(n).a},198:function(t,e,r){(e=r(70)(!1)).push([t.i,".red-alert{border-color:#f56565;border-color:rgba(245,101,101,var(--border-opacity));color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.red-alert,.yellow-alert{--border-opacity:1;--text-opacity:1;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.yellow-alert{border-color:#ecc94b;border-color:rgba(236,201,75,var(--border-opacity));color:#b7791f;color:rgba(183,121,31,var(--text-opacity))}.green-alert{--border-opacity:1;border-color:#48bb78;border-color:rgba(72,187,120,var(--border-opacity));--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity));--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}",""]),t.exports=e},199:function(t,e,r){"use strict";var n={props:["title","text","color","sticky"],components:{Times:r(195).a}},o=(r(197),r(1)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-l-4 border flex p-4",class:{"red-alert":"red"==t.color,"yellow-alert":"yellow"==t.color,"green-alert":"green"==t.color},attrs:{role:"alert"}},[r("div",{staticClass:"flex-grow text-sm"},[r("p",{staticClass:"font-bold "},[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.text))])])])}),[],!1,null,null,null);e.a=component.exports},201:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-6 h-6 transform scale-95",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,null,null);e.a=component.exports},202:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current opacity-75 h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-4 h-4 transform scale-95",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])}),[],!1,null,null,null);e.a=component.exports},209:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-4 h-4 transform scale-95",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},226:function(t,e,r){"use strict";r.r(e);r(15);var n=r(3),o=(r(42),r(201)),c=r(202),l=r(208),f=r(209),d={props:["type","active"],components:{SquareAlert:r(199).a},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notificationType[t.type]?t.currentNotification=t.notificationType[t.type]:t.currentNotification=t.notificationType.unknowNotification;case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{currentNotification:null,notificationType:{campaignPendingApproval:{color:"yellow",title:"Campanha Pendente de Aprovação",text:"Estamos avaliando seu produto. Em breve retornamos.",sticky:!0},newSuggestedInfluencers:{color:"green",title:"Novos Influencers Disponíveis",text:"Novos Influencers Disponíveis para sua campanha",sticky:!0},campaignApproved:{color:"green",title:"Campanha Aprovada!",text:"Parabéns! Sua campanha foi aprovada. Estamos selecionando influencers.",sticky:!1},unknowNotification:{color:"green",title:"Notificacao Nao Encontrada!",text:"Parabéns! Sua campanha foi aprovada. Estamos selecionando influencers.",sticky:!1}}}}},v=r(1),m=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("SquareAlert",{staticClass:"my-1",attrs:{title:this.currentNotification.title,text:this.currentNotification.text,color:this.currentNotification.color,sticky:this.currentNotification.sticky}})],1)}),[],!1,null,null,null).exports,h=r(200),x=r.n(h),y=(r(196),{middleware:"auth",components:{ExternalLink:o.a,Plus:c.a,Star:l.a,Eye:f.a,campaignNotification:m},data:function(){return{campaign:{name:null,description:null,restrictions:[],notifications:[],influencersSuggestions:[]},campaignFromServer:null}},computed:{visibleInfluencers:function(){return x.a.chunk(this.campaign.influencersSuggestions,5)[0]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/my-campaign/"+t.$route.params.campaignid);case 2:t.campaign=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{resultingInfluencerClass:function(t){return{"hidden md:flex":3==t,"hidden lg:flex":4==t,hidden:t>4}}},head:function(){return{title:"Crie uma nova campanha",meta:[{hid:"description",name:"description",content:"Crie uma nova campanha"}]}}}),_=Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-5 flex space-y-4 flex-col h-full md:h-auto"},[r("div",{staticClass:"my-4"},[r("p",{staticClass:"text-gray-800 text-2xl"},[t._v(t._s(t.campaign.name))]),t._v(" "),r("div",[t._l(t.campaign.restrictions,(function(e,n){return r("span",{key:n,staticClass:"text-gray-600 mr-4"},[t._v(t._s(e.restriction.title))])})),t._v(" "),t.campaign.links&&t.campaign.links.length>0?r("span",{staticClass:"text-gray-600 mr-4"},[t._v(t._s(t.campaign.links[0].httpAddress))]):t._e()],2)]),t._v(" "),t._l(t.campaign.notifications,(function(t,e){return r("campaignNotification",{key:e,attrs:{type:t.type}})})),t._v(" "),t._m(0),t._v(" "),r("div",[r("p",{staticClass:"mt-4 mb-3 uppercase font-bold text-gray-600 tracking-widest text-sm"},[t._v("Influencers")]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 grid-rows-1 md:grid-cols-4 lg:grid-cols-5 gap-4"},t._l(this.campaign.influencersSuggestions,(function(e,n){return r("nuxt-link",{key:n,staticClass:"bg-white flex-1 p-3 shadow flex flex-col",class:t.resultingInfluencerClass(n),attrs:{to:{path:"/minha-campanha/"+t.campaign.id+"/influencer/"+e.influencer.id}}},[r("div",{staticClass:"h-16 w-16 mx-auto my-2"},[r("img",{staticClass:"rounded-full",attrs:{src:"https://picsum.photos/200"}})]),t._v(" "),r("div",{staticClass:"text-sm font-bold my-3 text-center"},[t._v(t._s(e.influencer.artisticName))]),t._v(" "),r("div",[r("div",{staticClass:"text-xs flex my-1 items-center text-gray-500 space-x-2"},[r("div",[r("star")],1),t._v(" "),e.influencer.rating?r("div",[t._v(t._s(e.influencer.rating))]):r("div",[t._v("Novo!")])]),t._v(" "),r("div",{staticClass:"text-xs flex my-1 items-center text-gray-500 space-x-2"},[r("div",[r("Eye")],1),t._v(" "),r("div",[t._v(t._s(e.influencer.audience))])])])])})),1)]),t._v(" "),t._m(1)],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-grow"},[r("p",{staticClass:"mt-4 mb-3 uppercase font-bold text-gray-600 tracking-widest text-sm"},[t._v("Em negociação")]),t._v(" "),r("div",{staticClass:"flex bg-white p-3 rounded mb-5 shadow shadow-lg items-center"},[r("div",{staticClass:"h-12 w-12 mx-2"},[r("img",{staticClass:"rounded-full",attrs:{src:"https://picsum.photos/200"}})]),t._v(" "),r("div",{staticClass:"flex-grow"},[r("p",{staticClass:"font-bold"},[t._v("Lucas Amadeu")]),t._v(" "),r("p",[t._v("👋🏻 Olá")])]),t._v(" "),r("div",{staticClass:"bg-orange-200 px-2 rounded-full text-sm font-medium text-orange-600"},[t._v("Em negociação")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-gray-600 text-sm text-center my-4"},[this._v("Ver mais")])])}],!1,null,null,null);e.default=_.exports}}]);
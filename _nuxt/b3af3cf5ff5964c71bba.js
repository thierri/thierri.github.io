(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-6 h-auto",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.a=component.exports},237:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),c=n(196),o=n(205),l={middleware:"auth",components:{times:c.a,bigCheck:o.a},data:function(){return{topics:[{title:"Verificação do seu serviço/produto",description:"Qual tipo de campanha vc tem interesse?",icon:"bigCheck"},{title:"Busca por influencers",description:"Qual tipo de campanha vc tem interesse?",icon:"bigCheck"},{title:"Tá com dúvida?",description:"Qual tipo de campanha vc tem interesse?",icon:"bigCheck"}]}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},head:function(){return{title:"Crie uma nova campanha",meta:[{hid:"description",name:"description",content:"Crie uma nova campanha"}]}}},d=n(1),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 flex flex-col h-full md:h-auto"},[n("p",{staticClass:"m-4 text-lg font-semibold text-gray-700"},[t._v("Tudo Certo! Fique ligado nos próximos passos...")]),t._v(" "),n("div",{staticClass:"flex-grow"},t._l(t.topics,(function(e,r){return n("div",{key:r,staticClass:"m-4"},[n("div",{staticClass:"rounded bg-red-500 p-3 w-auto inline-block"},[n(e.icon,{tag:"component",staticClass:"text-white"})],1),t._v(" "),n("div",[n("p",{staticClass:"font-semibold text-gray-700 my-2"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"text-gray-600 my-2"},[t._v(t._s(e.description))])])])})),0),t._v(" "),t.$route.query.campanha?n("div",{staticClass:"my-5"},[n("nuxt-link",{attrs:{to:"/minha-campanha/"+t.$route.query.campanha}},[n("p",{staticClass:"text-center text-gray-600 font-semibold"},[t._v("Ir para minha campanha")])])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);
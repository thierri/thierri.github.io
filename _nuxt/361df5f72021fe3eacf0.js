(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),c={middleware:"auth",components:{},data:function(){return{campaigns:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/me/suggestedCampaigns");case 2:t.campaigns=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{},head:function(){return{title:"Seu Perfil",meta:[{hid:"description",name:"description",content:"Crie uma nova campanha"}]}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5 flex space-y-8 flex-col h-full md:h-auto"},[t._m(0),t._v(" "),n("div",[n("p",{staticClass:"uppercase font-bold text-gray-600 tracking-widest text-sm mb-4"},[t._v("Campanhas Disponíveis")]),t._v(" "),n("div",{staticClass:"grid grid-cols-2 grid-rows-1 md:grid-cols-4 lg:grid-cols-5 gap-4"},t._l(t.campaigns,(function(e){return n("div",{key:e.id,staticClass:"bg-white p-3 shadow text-sm"},[n("div",{staticClass:"font-bold text-gray-700 mb-1"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-gray-700 mb-2"},[t._v(t._s(e.description))]),t._v(" "),t._l(e.restrictions,(function(e,r){return n("span",{key:r,staticClass:"text-gray-600 mr-4 mb-2"},[t._v(t._s(e.restriction.title))])})),t._v(" "),n("ul",{staticClass:"mt-3"},t._l(e.links,(function(link,e){return n("li",{key:e,staticClass:"text-sm text-gray-600"},[t._v(t._s(link.httpAddress))])})),0)],2)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"uppercase font-bold text-gray-600 tracking-widest text-sm mb-4"},[t._v("Campanhas em Negociação")]),t._v(" "),n("div",{staticClass:"flex bg-white p-3 rounded mb-5 shadow shadow-lg items-center"},[n("div",{staticClass:"h-12 w-12 mx-2"},[n("img",{staticClass:"rounded-full",attrs:{src:"https://picsum.photos/200"}})]),t._v(" "),n("div",{staticClass:"flex-grow"},[n("p",{staticClass:"font-bold"},[t._v("Lucas Amadeu")]),t._v(" "),n("p",[t._v("👋🏻 Olá")])]),t._v(" "),n("div",{staticClass:"bg-orange-200 px-2 rounded-full text-sm font-medium text-orange-600"},[t._v("Em negociação")])])])}],!1,null,null,null);e.default=component.exports}}]);
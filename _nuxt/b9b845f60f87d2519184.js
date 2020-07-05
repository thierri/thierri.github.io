/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(e,t,r){var content=r(199);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("1751733b",content,!0,{sourceMap:!1})},196:function(e,t,r){"use strict";var o=r(1),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-4 w-4",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.a=component.exports},197:function(e,t,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(o){function n(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},n.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var v in c)c[v]&&(d+="; "+v,!0!==c[v]&&(d+="="+c[v].split(";")[0]));return document.cookie=t+"="+r+d}}function l(e,r){if("undefined"!=typeof document){for(var n={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var v=t(l[0]);if(d=(o.read||o)(d,v)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(n[v]=d,e===v)break}catch(e){}}return e?n[e]:n}}return n.set=c,n.get=function(e){return l(e,!1)},n.getJSON=function(e){return l(e,!0)},n.remove=function(t,r){c(t,"",e(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}((function(){}))}))},198:function(e,t,r){"use strict";var o=r(195);r.n(o).a},199:function(e,t,r){(t=r(70)(!1)).push([e.i,".red-alert{border-color:#f56565;border-color:rgba(245,101,101,var(--border-opacity));color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.red-alert,.yellow-alert{--border-opacity:1;--text-opacity:1;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.yellow-alert{border-color:#ecc94b;border-color:rgba(236,201,75,var(--border-opacity));color:#b7791f;color:rgba(183,121,31,var(--text-opacity))}.green-alert{--border-opacity:1;border-color:#48bb78;border-color:rgba(72,187,120,var(--border-opacity));--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity));--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}",""]),e.exports=t},200:function(e,t,r){"use strict";var o={props:["title","text","color","sticky"],components:{Times:r(196).a}},n=(r(198),r(1)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"border-l-4 border flex p-4",class:{"red-alert":"red"==e.color,"yellow-alert":"yellow"==e.color,"green-alert":"green"==e.color},attrs:{role:"alert"}},[r("div",{staticClass:"flex-grow text-sm"},[r("p",{staticClass:"font-bold "},[e._v(e._s(e.title))]),e._v(" "),r("p",[e._v(e._s(e.text))])])])}),[],!1,null,null,null);t.a=component.exports},234:function(e,t,r){"use strict";r.r(t);r(15);var o=r(3),n=(r(42),r(85)),c=r(200),l=(r(202),r(197),{middleware:"auth",components:{ArrowForRight:n.a,SquareAlert:c.a},data:function(){return{content:{welcomePhrases:{big:"Bem-vindo de volta!",medium:"Entre na sua conta cadastrada em nossa plataforma.",small:"Precisa de ajuda? Entre em contato@5publi.app"}},credentials:{username:null,password:null},errors:{invalidTempkey:{active:!1,color:"red",title:"Erro na chave temparária",text:"Erro ao processar chave temporaria. Tente novamente."},InvalidUser:{active:!1,color:"red",title:"Credenciais inválidas",text:"Ops, algo errado com as credenciais fornecidas."},PasswordNotProvided:{active:!1,color:"yellow",title:"Senha necessária",text:"Para entrar na sua conta digite sua senha."},EmailLinkLogin:{active:!1,color:"yellow",title:"Login via email",text:"Enviamos um link no seu email para que você possa fazer o login."},UnknowError:{active:!1,color:"red",title:"Erro desconhecido",text:"Por favor, tente novamente."}}}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$route.query.tempkey&&e.loginWithKey(e.$route.query.tempkey);case 1:case"end":return t.stop()}}),t)})))()},watch:{"credentials.username":function(e){this.errors.InvalidUser.active=!1}},methods:{loginWithKey:function(e){var t=this,data={key:e};this.$axios.$post("/users/login_with_key",data).then((function(e){t.$auth.setUserToken(e.access_token)})).catch((function(){t.errors.invalidTempkey.active=!0,t.$router.push(t.$route.path)}))},postLogin:function(){var e=this;this.$axios.$post("users/login",this.credentials).then((function(t){e.$auth.setUserToken(t.access_token)})).catch((function(t){try{e.errors[t.response.data.id].active=!0,t.response.data.loginLink&&(e.linkToLogin=t.response.data.loginLink)}catch(t){e.errors.UnknowError.active=!0}}))}},head:function(){return{title:"Crie uma nova campanha",meta:[{hid:"description",name:"description",content:"Crie uma nova campanha"}]}}}),d=r(1),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-5 flex content-center flex-col md:min-w-0 max-w-md mx-auto"},[r("p",{staticClass:"my-5 text-gray-700 text-4xl font-extrabold tracking-tight leading-8"},[e._v(e._s(e.content.welcomePhrases.big))]),e._v(" "),r("p",{staticClass:"my-5 text-gray-600 text-2xl leading-8"},[e._v(e._s(e.content.welcomePhrases.medium))]),e._v(" "),r("p",{staticClass:"my-5 text-gray-700"},[e._v(e._s(e.text))]),e._v(" "),r("div",{staticClass:"my-5"},[e._l(e.errors,(function(t,o){return r("div",{key:o},[t.active?r("SquareAlert",{staticClass:"mb-4",attrs:{title:t.title,text:t.text,color:t.color}}):e._e()],1)})),e._v(" "),r("p",{staticClass:"font-semibold text-gray-700"},[e._v("Qual seu email cadastrado?")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.username,expression:"credentials.username"}],staticClass:"bg-white my-3 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal",class:{"input-error":e.errors.InvalidUser.active},attrs:{type:"email",placeholder:"jane@gmail.com"},domProps:{value:e.credentials.username},on:{input:function(t){t.target.composing||e.$set(e.credentials,"username",t.target.value)}}})],2),e._v(" "),e.errors.PasswordNotProvided.active?r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal",class:{"input-error":e.errors.InvalidUser.active},attrs:{type:"password",placeholder:"Senha"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}):e._e(),e._v(" "),e.linkToLogin?r("nuxt-link",{staticClass:"my-5 bg-red-900 text-white",attrs:{to:{path:"/login",query:{tempkey:e.linkToLogin}}}},[e._v("Entrar")]):e._e(),e._v(" "),e.errors.EmailLinkLogin.active?e._e():r("div",{staticClass:"py-2 px-4 cursor-pointer hover:bg-red-500 active:bg-red-400 rounded bg-red-600 text-white flex items-center mb-5 float-right",on:{click:e.postLogin}},[r("span",[e._v("Prosseguir")]),e._v(" "),r("ArrowForRight")],1),e._v(" "),r("p",{staticClass:"my-5 text-gray-600 text-sm italic"},[e._v(e._s(e.content.welcomePhrases.small))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"13f0":function(e,t,n){"use strict";n("450b")},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),s=n("9112");for(var a in o){var c=r[a],l=c&&c.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1fb6":function(e,t,n){},"30b2":function(e,t,n){e.exports=n.p+"img/sintesis.29ec3113.png"},"3cd8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{domProps:{innerHTML:e._s(e.titulo)}}),n("h2",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.subTitulo)}})])])])},o=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=i,a=(n("8385"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,null,null);t["default"]=c.exports},"438b":function(e,t,n){"use strict";n("1fb6")},"450b":function(e,t,n){},"52e5":function(e,t,n){e.exports=n.p+"img/cc.58a75e32.svg"},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),s=i("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"79ad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{titulo:"Unidad 3. Diseño e implementación de algoritmos",subTitulo:"SÍNTESIS"}}),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("p",{staticClass:"mb-4 mb-md-5"},[e._v("La Unidad 3: Diseño e implementación de algoritmos, se centra en el desarrollo de competencias clave para crear y optimizar algoritmos eficientes. Aprenderá a reconocer los principios de las soluciones utilizando paradigmas como divide y vencerás, programación dinámica y algoritmos voraces; implementando sus diseños en Python y aplicando técnicas de optimización asistidas por IA. Esta unidad es esencial para comprender cómo abordar problemas complejos de manera sistemática, optimizando el uso de recursos y mejorando el rendimiento de las soluciones algorítmicas en diversos contextos computacionales.")]),r("figure",[r("img",{attrs:{src:n("30b2"),alt:""}})])])}],i=(n("d3b7"),n("159b"),n("3cd8")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto mb-2 mb-sm-0"},[r("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(n("13f0"),n("2877")),d=Object(u["a"])(l,s,a,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:i["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(e){var t="";return Array.isArray(e)?e.forEach((function(e,n){t+=(n?"<br/>":"")+e})):t+=e,t}}},m=p,b=(n("438b"),Object(u["a"])(m,r,o,!1,null,null,null));t["default"]=b.exports},8385:function(e,t,n){"use strict";n("d36b")},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,f=7==e,p=5==e||d;return function(m,b,v,E){for(var g,h,y=i(m),_=o(y),C=r(b,v,3),S=s(_.length),I=0,O=E||a,A=t?O(m,S):n||f?O(m,0):void 0;S>I;I++)if((p||I in _)&&(g=_[I],h=C(g,I,y),e))if(t)A[I]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return I;case 2:c.call(A,g)}else switch(e){case 4:return!1;case 7:c.call(A,g)}return d?-1:l||u?u:A}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(e,t,n){},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=sintesis.f86df0f8.js.map
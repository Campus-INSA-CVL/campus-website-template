(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{324:function(e,t,l){"use strict";l.r(t);var n={name:"TeamForm",props:{value:{type:Array,default:function(){}}},methods:{isTextField:function(e){return"text-field"===e}}},o=l(57),r=l(80),c=l.n(r),d=l(282),v=l(283),f=l(290),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-row",{attrs:{tag:"section","no-gutters":""}},[l("v-col",[l("h2",{staticClass:"text-h6 font-weight-bold"},[e._v("Composition de votre équipe")]),l("v-row",{attrs:{justify:"center"}},e._l(e.value,(function(component,t){return l("v-col",{key:t,attrs:{cols:"12"}},[e.isTextField(component.type)?l("v-text-field",{key:t,attrs:{label:component.label,outlined:"","hide-details":""},model:{value:component.value,callback:function(t){e.$set(component,"value",t)},expression:"component.value"}}):e._e()],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:d.a,VRow:v.a,VTextField:f.a})}}]);
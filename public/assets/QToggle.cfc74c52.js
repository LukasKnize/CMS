import{G as I,c as n,m as s,x as P,X as z,as as d,aq as F,p as Q,v as R,W as D,y as K,K as V,l as L,k as N}from"./index.ebd26a2c.js";import{f as G,j as M}from"./QInput.6e1b2dad.js";function W(l,f){const e=I(null),i=n(()=>l.disable===!0?null:s("span",{ref:e,class:"no-outline",tabindex:-1}));function c(a){const o=f.value;a!==void 0&&a.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():e.value!==null&&(a===void 0||o!==null&&o.contains(a.target)===!0)&&e.value.focus()}return{refocusTargetEl:i,refocusTarget:c}}const X={xs:30,sm:35,md:40,lg:50,xl:60},H={...R,...D,...G,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},J=["update:modelValue"];function U(l,f){const{props:e,slots:i,emit:c,proxy:a}=K(),{$q:o}=a,C=P(e,o),k=I(null),{refocusTargetEl:h,refocusTarget:q}=W(e,k),S=z(e,X),v=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),m=n(()=>{const t=d(e.val);return v.value===!0?e.modelValue.findIndex(u=>d(u)===t):-1}),r=n(()=>v.value===!0?m.value>-1:d(e.modelValue)===d(e.trueValue)),g=n(()=>v.value===!0?m.value===-1:d(e.modelValue)===d(e.falseValue)),p=n(()=>r.value===!1&&g.value===!1),_=n(()=>e.disable===!0?-1:e.tabindex||0),y=n(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=n(()=>{const t=r.value===!0?"truthy":g.value===!0?"falsy":"indet",u=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?r.value===!0:g.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${u}`}),O=n(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":r.value===!0?"checked":void 0,name:e.name,value:v.value===!0?e.val:e.trueValue}),t}),T=M(O),w=n(()=>{const t={tabindex:_.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":p.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(V(t),q(t)),e.disable!==!0&&c("update:modelValue",j(),t)}function j(){if(v.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(m.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(g.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function B(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const E=f(r,p);return Object.assign(a,{toggle:b}),()=>{const t=E();e.disable!==!0&&T(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const u=[s("div",{class:$.value,style:S.value,"aria-hidden":"true"},t)];h.value!==null&&u.push(h.value);const x=e.label!==void 0?F(i.default,[e.label]):Q(i.default);return x!==void 0&&u.push(s("div",{class:`q-${l}__label q-anchor--skip`},x)),s("div",{ref:k,class:y.value,...w.value,onClick:b,onKeydown:A,onKeyup:B},u)}}const ee=L({name:"QToggle",props:{...H,icon:String,iconColor:String},emits:J,setup(l){function f(e,i){const c=n(()=>(e.value===!0?l.checkedIcon:i.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),a=n(()=>e.value===!0?l.iconColor:null);return()=>[s("div",{class:"q-toggle__track"}),s("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[s(N,{name:c.value,color:a.value})]:void 0)]}return U("toggle",f)}});export{ee as Q};

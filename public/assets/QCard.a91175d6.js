import{j as s,c as o,k as n,l as c,m as l,q as u,r as i,s as q,t as v}from"./index.0660e1ab.js";const f=s({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const r=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(a.tag,{class:r.value},c(e.default))}}),m=s({name:"QCardActions",props:{...l,vertical:Boolean},setup(a,{slots:e}){const r=u(a),t=o(()=>`q-card__actions ${r.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>n("div",{class:t.value},c(e.default))}}),C=s({name:"QCard",props:{...i,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const{proxy:{$q:r}}=v(),t=q(a,r),d=o(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>n(a.tag,{class:d.value},c(e.default))}});export{C as Q,f as a,m as b};

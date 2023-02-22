import{A as Ce,y as J,B as P,C as ie,D as le,E as we,G as I,c as p,H as Me,I as be,J as Se,K as Re,L as K,M as qe,N as Fe,O as Ve,m as b,P as Q,v as Ae,x as _e,k as se,R as Be,p as G,T as Ee,S as $e,U as Oe,l as Te,V as de}from"./index.f58664d0.js";function Ie({validate:e,resetValidation:t,requiresQForm:u}){const i=Ce(we,!1);if(i!==!1){const{props:g,proxy:v}=J();Object.assign(v,{validate:e,resetValidation:t}),P(()=>g.disable,h=>{h===!0?(typeof t=="function"&&t(),i.unbindComponent(v)):i.bindComponent(v)}),ie(()=>{g.disable!==!0&&i.bindComponent(v)}),le(()=>{g.disable!==!0&&i.unbindComponent(v)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>X.test(e)||Y.test(e),hexOrRgbColor:e=>fe.test(e)||X.test(e),hexaOrRgbaColor:e=>ce.test(e)||Y.test(e),anyColor:e=>ve.test(e)||X.test(e)||Y.test(e)},Pe=[!0,!1,"ondemand"],je={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Pe.includes(e)}};function De(e,t){const{props:u,proxy:i}=J(),g=I(!1),v=I(null),h=I(null);Ie({validate:A,resetValidation:R});let C=0,w;const V=p(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),M=p(()=>u.disable!==!0&&V.value===!0),y=p(()=>u.error===!0||g.value===!0),U=p(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:v.value);P(()=>u.modelValue,()=>{N()}),P(()=>u.reactiveRules,T=>{T===!0?w===void 0&&(w=P(()=>u.rules,()=>{N(!0)})):w!==void 0&&(w(),w=void 0)},{immediate:!0}),P(e,T=>{T===!0?h.value===null&&(h.value=!1):h.value===!1&&(h.value=!0,M.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&S())});function R(){C++,t.value=!1,h.value=null,g.value=!1,v.value=null,S.cancel()}function A(T=u.modelValue){if(M.value!==!0)return!0;const D=++C,Z=t.value!==!0?()=>{h.value=!0}:()=>{},E=(l,r)=>{l===!0&&Z(),g.value=l,v.value=r||null,t.value=!1},$=[];for(let l=0;l<u.rules.length;l++){const r=u.rules[l];let a;if(typeof r=="function"?a=r(T,oe):typeof r=="string"&&oe[r]!==void 0&&(a=oe[r](T)),a===!1||typeof a=="string")return E(!0,a),!1;a!==!0&&a!==void 0&&$.push(a)}return $.length===0?(E(!1),!0):(t.value=!0,Promise.all($).then(l=>{if(l===void 0||Array.isArray(l)===!1||l.length===0)return D===C&&E(!1),!0;const r=l.find(a=>a===!1||typeof a=="string");return D===C&&E(r!==void 0,r),r===void 0},l=>(D===C&&(console.error(l),E(!0)),!1)))}function N(T){M.value===!0&&u.lazyRules!=="ondemand"&&(h.value===!0||u.lazyRules!==!0&&T!==!0)&&S()}const S=Me(A,0);return le(()=>{w!==void 0&&w(),S.cancel()}),Object.assign(i,{resetValidation:R,validate:A}),be(i,"hasError",()=>y.value),{isDirtyModel:h,hasRules:V,hasError:y,errorMessage:U,validate:A,resetValidation:R}}const ge=/^on[A-Z]/;function ze(e,t){const u={listeners:I({}),attributes:I({})};function i(){const g={},v={};for(const h in e)h!=="class"&&h!=="style"&&ge.test(h)===!1&&(g[h]=e[h]);for(const h in t.props)ge.test(h)===!0&&(v[h]=t.props[h]);u.attributes.value=g,u.listeners.value=v}return Se(i),i(),u}let re,ee=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const Le=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),me=4096;function Ue(){(re===void 0||ee+16>me)&&(ee=0,re=Le(me));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}let H=[],W=[];function ye(e){W=W.filter(t=>t!==e)}function ut(e){ye(e),W.push(e)}function it(e){ye(e),W.length===0&&H.length>0&&(H[H.length-1](),H=[])}function ke(e){W.length===0?e():H.push(e)}function Ne(e){H=H.filter(t=>t!==e)}function ae(e){return e===void 0?`f_${Ue()}`:e}function ue(e){return e!=null&&(""+e).length>0}const Ze={...Ae,...je,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He(){const{props:e,attrs:t,proxy:u,vnode:i}=J();return{isDark:_e(e,u.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:ze(t,i),targetUid:I(ae(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function Qe(e){const{props:t,emit:u,slots:i,attrs:g,proxy:v}=J(),{$q:h}=v;let C;e.hasValue===void 0&&(e.hasValue=p(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:f}),Object.assign(e,{clearValue:s,onControlFocusin:d,onControlFocusout:f,focus:r}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:w,hasRules:V,hasError:M,errorMessage:y,resetValidation:U}=De(e.focused,e.innerLoading),R=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=p(()=>t.bottomSlots===!0||t.hint!==void 0||V.value===!0||t.counter===!0||t.error!==null),N=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),S=p(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(R.value===!0?" q-field--float":"")+(D.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(M.value===!0?" q-field--error":"")+(M.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),T=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(M.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),D=p(()=>t.labelSlot===!0||t.label!==void 0),Z=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&M.value!==!0?` text-${t.labelColor}`:"")),E=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:R.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=p(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});P(()=>t.for,n=>{e.targetUid.value=ae(n)});function l(){const n=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(n===null||n.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==n&&c.focus({preventScroll:!0}))}function r(){ke(l)}function a(){Ne(l);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function d(n){clearTimeout(C),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function f(n,c){clearTimeout(C),C=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),c!==void 0&&c())})}function s(n){Re(n),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),K(()=>{U(),h.platform.is.mobile!==!0&&(w.value=!1)})}function x(){const n=[];return i.prepend!==void 0&&n.push(b("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Q},i.prepend())),n.push(b("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),M.value===!0&&t.noErrorIcon===!1&&n.push(_("error",[b(se,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(_("inner-loading-append",i.loading!==void 0?i.loading():[b(Be,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(_("inner-clearable-append",[b(se,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(b("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Q},i.append())),e.getInnerAppend!==void 0&&n.push(_("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function m(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(b("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(b("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(E.value))),D.value===!0&&n.push(b("div",{class:Z.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(b("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(G(i.default))}function k(){let n,c;M.value===!0?y.value!==null?(n=[b("div",{role:"alert"},y.value)],c=`q--slot-error-${y.value}`):(n=G(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[b("div",t.hint)],c=`q--slot-hint-${t.hint}`):(n=G(i.hint),c="q--slot-hint"));const j=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&j===!1&&n===void 0)return;const o=b("div",{key:c,class:"q-field__messages col"},n);return b("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:Q},[t.hideBottomSpace===!0?o:b(Ee,{name:"q-transition--field-message"},()=>o),j===!0?b("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function _(n,c){return c===null?null:b("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let L=!1;return qe(()=>{L=!0}),Fe(()=>{L===!0&&t.autofocus===!0&&v.focus()}),ie(()=>{Ve.value===!0&&t.for===void 0&&(e.targetUid.value=ae()),t.autofocus===!0&&v.focus()}),le(()=>{clearTimeout(C)}),Object.assign(v,{focus:r,blur:a}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return b("label",{ref:e.rootRef,class:[S.value,g.class],style:g.style,...c},[i.before!==void 0?b("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Q},i.before()):null,b("div",{class:"q-field__inner relative-position col self-stretch"},[b("div",{ref:e.controlRef,class:T.value,tabindex:-1,...e.controlEvents},x()),A.value===!0?k():null]),i.after!==void 0?b("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Q},i.after()):null])}}const he={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(te);xe.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const We=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),pe=/[.*+?^${}()|[\]\\]/g,q=String.fromCharCode(1),Je={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ge(e,t,u,i){let g,v,h,C;const w=I(null),V=I(y());function M(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,R),P(()=>e.mask,l=>{if(l!==void 0)A(V.value,!0);else{const r=E(V.value);R(),e.modelValue!==r&&t("update:modelValue",r)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&A(V.value,!0)}),P(()=>e.unmaskedValue,()=>{w.value===!0&&A(V.value)});function y(){if(R(),w.value===!0){const l=D(E(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function U(l){if(l<g.length)return g.slice(-l);let r="",a=g;const d=a.indexOf(q);if(d>-1){for(let f=l-a.length;f>0;f--)r+=q;a=a.slice(0,d)+r+a.slice(d)}return a}function R(){if(w.value=e.mask!==void 0&&e.mask.length>0&&M(),w.value===!1){C=void 0,g="",v="";return}const l=he[e.mask]===void 0?e.mask:he[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",a=r.replace(pe,"\\$&"),d=[],f=[],s=[];let x=e.reverseFillMask===!0,m="",k="";l.replace(We,(c,j,o,F,z)=>{if(F!==void 0){const O=te[F];s.push(O),k=O.negate,x===!0&&(f.push("(?:"+k+"+)?("+O.pattern+"+)?(?:"+k+"+)?("+O.pattern+"+)?"),x=!1),f.push("(?:"+k+"+)?("+O.pattern+")?")}else if(o!==void 0)m="\\"+(o==="\\"?"":o),s.push(o),d.push("([^"+m+"]+)?"+m+"?");else{const O=j!==void 0?j:z;m=O==="\\"?"\\\\\\\\":O.replace(pe,"\\\\$&"),s.push(O),d.push("([^"+m+"]+)?"+m+"?")}});const _=new RegExp("^"+d.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),L=f.length-1,n=f.map((c,j)=>j===0&&e.reverseFillMask===!0?new RegExp("^"+a+"*"+c):j===L?new RegExp("^"+c+"("+(k===""?".":k)+"+)?"+(e.reverseFillMask===!0?"$":a+"*")):new RegExp("^"+c));h=s,C=c=>{const j=_.exec(e.reverseFillMask===!0?c:c.slice(0,s.length));j!==null&&(c=j.slice(1).join(""));const o=[],F=n.length;for(let z=0,O=c;z<F;z++){const ne=n[z].exec(O);if(ne===null)break;O=O.slice(ne.shift().length),o.push(...ne)}return o.length>0?o.join(""):c},g=s.map(c=>typeof c=="string"?c:q).join(""),v=g.split(q).join(r)}function A(l,r,a){const d=i.value,f=d.selectionEnd,s=d.value.length-f,x=E(l);r===!0&&R();const m=D(x),k=e.fillMask!==!1?$(m):m,_=V.value!==k;d.value!==k&&(d.value=k),_===!0&&(V.value=k),document.activeElement===d&&K(()=>{if(k===v){const n=e.reverseFillMask===!0?v.length:0;d.setSelectionRange(n,n,"forward");return}if(a==="insertFromPaste"&&e.reverseFillMask!==!0){const n=f-1;S.right(d,n,n);return}if(["deleteContentBackward","deleteContentForward"].indexOf(a)>-1){const n=e.reverseFillMask===!0?f===0?k.length>m.length?1:0:Math.max(0,k.length-(k===v?0:Math.min(m.length,s)+1))+1:f;d.setSelectionRange(n,n,"forward");return}if(e.reverseFillMask===!0)if(_===!0){const n=Math.max(0,k.length-(k===v?0:Math.min(m.length,s+1)));n===1&&f===1?d.setSelectionRange(n,n,"forward"):S.rightReverse(d,n,n)}else{const n=k.length-s;d.setSelectionRange(n,n,"backward")}else if(_===!0){const n=Math.max(0,g.indexOf(q),Math.min(m.length,f)-1);S.right(d,n,n)}else{const n=f-1;S.right(d,n,n)}});const L=e.unmaskedValue===!0?E(k):k;String(e.modelValue)!==L&&u(L,!0)}function N(l,r,a){const d=D(E(l.value));r=Math.max(0,g.indexOf(q),Math.min(d.length,r)),l.setSelectionRange(r,a,"forward")}const S={left(l,r,a,d){const f=g.slice(r-1).indexOf(q)===-1;let s=Math.max(0,r-1);for(;s>=0;s--)if(g[s]===q){r=s,f===!0&&r++;break}if(s<0&&g[r]!==void 0&&g[r]!==q)return S.right(l,0,0);r>=0&&l.setSelectionRange(r,d===!0?a:r,"backward")},right(l,r,a,d){const f=l.value.length;let s=Math.min(f,a+1);for(;s<=f;s++)if(g[s]===q){a=s;break}else g[s-1]===q&&(a=s);if(s>f&&g[a-1]!==void 0&&g[a-1]!==q)return S.left(l,f,f);l.setSelectionRange(d?r:a,a,"forward")},leftReverse(l,r,a,d){const f=U(l.value.length);let s=Math.max(0,r-1);for(;s>=0;s--)if(f[s-1]===q){r=s;break}else if(f[s]===q&&(r=s,s===0))break;if(s<0&&f[r]!==void 0&&f[r]!==q)return S.rightReverse(l,0,0);r>=0&&l.setSelectionRange(r,d===!0?a:r,"backward")},rightReverse(l,r,a,d){const f=l.value.length,s=U(f),x=s.slice(0,a+1).indexOf(q)===-1;let m=Math.min(f,a+1);for(;m<=f;m++)if(s[m-1]===q){a=m,a>0&&x===!0&&a--;break}if(m>f&&s[a-1]!==void 0&&s[a-1]!==q)return S.leftReverse(l,f,f);l.setSelectionRange(d===!0?r:a,a,"forward")}};function T(l){if($e(l)===!0)return;const r=i.value,a=r.selectionStart,d=r.selectionEnd;if(l.keyCode===37||l.keyCode===39){const f=S[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),f(r,a,d,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&a===d?S.left(r,a,d,!0):l.keyCode===46&&e.reverseFillMask===!0&&a===d&&S.rightReverse(r,a,d,!0)}function D(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return Z(l);const r=h;let a=0,d="";for(let f=0;f<r.length;f++){const s=l[a],x=r[f];if(typeof x=="string")d+=x,s===x&&a++;else if(s!==void 0&&x.regex.test(s))d+=x.transform!==void 0?x.transform(s):s,a++;else return d}return d}function Z(l){const r=h,a=g.indexOf(q);let d=l.length-1,f="";for(let s=r.length-1;s>=0&&d>-1;s--){const x=r[s];let m=l[d];if(typeof x=="string")f=x+f,m===x&&d--;else if(m!==void 0&&x.regex.test(m))do f=(x.transform!==void 0?x.transform(m):m)+f,d--,m=l[d];while(a===s&&m!==void 0&&x.regex.test(m));else return f}return f}function E(l){return typeof l!="string"||C===void 0?typeof l=="number"?C(""+l):l:C(l)}function $(l){return v.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?v.slice(0,-l.length)+l:l+v.slice(l.length)}return{innerValue:V,hasMask:w,moveCursorForPaste:N,updateMaskValue:A,onMaskedKeydown:T}}const Xe={name:String};function st(e={}){return(t,u,i)=>{t[u](b("input",{class:"hidden"+(i||""),...e.value}))}}function Ye(e){return p(()=>e.name||e.for)}function et(e,t){function u(){const i=e.modelValue;try{const g="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(v=>{g.items.add(v)}),{files:g.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return u()}):p(u)}const tt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,lt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,nt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ot=/[a-z0-9_ -]$/i;function rt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Oe.is.firefox===!0?ot.test(u.data)===!1:tt.test(u.data)===!0||lt.test(u.data)===!0||nt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const dt=Te({name:"QInput",inheritAttrs:!1,props:{...Ze,...Je,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ke,"paste","change"],setup(e,{emit:t,attrs:u}){const{proxy:i}=J(),{$q:g}=i,v={};let h=NaN,C,w,V,M;const y=I(null),U=Ye(e),{innerValue:R,hasMask:A,moveCursorForPaste:N,updateMaskValue:S,onMaskedKeydown:T}=Ge(e,t,k,y),D=et(e,!0),Z=p(()=>ue(R.value)),E=rt(m),$=He(),l=p(()=>e.type==="textarea"||e.autogrow===!0),r=p(()=>l.value===!0||["text","search","url","tel","password"].includes(e.type)),a=p(()=>{const o={...$.splitAttrs.listeners.value,onInput:m,onPaste:x,onChange:L,onBlur:n,onFocus:de};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=E,A.value===!0&&(o.onKeydown=T),e.autogrow===!0&&(o.onAnimationend=_),o}),d=p(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return l.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});P(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),P(()=>e.modelValue,o=>{if(A.value===!0){if(w===!0&&(w=!1,String(o)===h))return;S(o)}else R.value!==o&&(R.value=o,e.type==="number"&&v.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete v.value));e.autogrow===!0&&K(_)}),P(()=>e.autogrow,o=>{o===!0?K(_):y.value!==null&&u.rows>0&&(y.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&K(_)});function f(){ke(()=>{const o=document.activeElement;y.value!==null&&y.value!==o&&(o===null||o.id!==$.targetUid.value)&&y.value.focus({preventScroll:!0})})}function s(){y.value!==null&&y.value.select()}function x(o){if(A.value===!0&&e.reverseFillMask!==!0){const F=o.target;N(F,F.selectionStart,F.selectionEnd)}t("paste",o)}function m(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const F=o.target.value;if(o.target.qComposing===!0){v.value=F;return}if(A.value===!0)S(F,!1,o.inputType);else if(k(F),r.value===!0&&o.target===document.activeElement){const{selectionStart:z,selectionEnd:O}=o.target;z!==void 0&&O!==void 0&&K(()=>{o.target===document.activeElement&&F.indexOf(o.target.value)===0&&o.target.setSelectionRange(z,O)})}e.autogrow===!0&&_()}function k(o,F){M=()=>{e.type!=="number"&&v.hasOwnProperty("value")===!0&&delete v.value,e.modelValue!==o&&h!==o&&(h=o,F===!0&&(w=!0),t("update:modelValue",o),K(()=>{h===o&&(h=NaN)})),M=void 0},e.type==="number"&&(C=!0,v.value=o),e.debounce!==void 0?(clearTimeout(V),v.value=o,V=setTimeout(M,e.debounce)):M()}function _(){requestAnimationFrame(()=>{const o=y.value;if(o!==null){const F=o.parentNode.style,{overflow:z}=o.style;g.platform.is.firefox!==!0&&(o.style.overflow="hidden"),o.style.height="1px",F.marginBottom=o.scrollHeight-1+"px",o.style.height=o.scrollHeight+"px",o.style.overflow=z,F.marginBottom=""}})}function L(o){E(o),clearTimeout(V),M!==void 0&&M(),t("change",o.target.value)}function n(o){o!==void 0&&de(o),clearTimeout(V),M!==void 0&&M(),C=!1,w=!1,delete v.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=R.value!==void 0?R.value:"")})}function c(){return v.hasOwnProperty("value")===!0?v.value:R.value!==void 0?R.value:""}le(()=>{n()}),ie(()=>{e.autogrow===!0&&_()}),Object.assign($,{innerValue:R,fieldClass:p(()=>`q-${l.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:k,hasValue:Z,floatingLabel:p(()=>Z.value===!0||ue(e.displayValue)),getControl:()=>b(l.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...d.value,...a.value,...e.type!=="file"?{value:c()}:D.value}),getShadowControl:()=>b("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(l.value===!0?"":" text-no-wrap")},[b("span",{class:"invisible"},c()),b("span",e.shadowText)])});const j=Qe($);return Object.assign(i,{focus:f,select:s,getNativeElement:()=>y.value}),be(i,"nativeEl",()=>y.value),j}});export{dt as Q,Ke as a,Qe as b,He as c,ut as d,ke as e,Xe as f,Ye as g,ue as h,rt as i,st as j,it as r,Ze as u};

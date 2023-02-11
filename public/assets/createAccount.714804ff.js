import{Q as f}from"./QSelect.a4f82ecb.js";import{Q as n}from"./QInput.7ec94c2a.js";import{_ as x,z as k,at as V,u as p,a as m,r as _,au as S,o as h,b as w,f as u,w as C,e,i as T,Q as v}from"./index.9de7e5fd.js";import{Q as U}from"./QForm.e26377c6.js";const Q={class:"Container"},z={__name:"createAccount",setup(E){k(s=>({"3da9306e":e(t).text})),V();let c=p(),l=m(),o=_({username:"",email:"",pass:"",passV:"",accountType:""}),b=["admin","editor"],g=new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/),q=RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);function d(s){return g.test(s)}function i(s){return q.test(s)}function y(s){if(s.preventDefault(),o.username!=""&&i(o.email)&&o.accountType!=""&&d(o.pass)&&o.pass==o.passV){let r={username:o.username,email:o.email,type:o.accountType,password:o.pass};fetch("http://localhost:5500/auth/signUp/",{method:"POST",headers:{"Content-Type":"application/json",authorization:c.token},body:JSON.stringify(r)}).then(a=>{})}}let t=S(()=>(l=m(),c=p(),c.mode=="Dark"?{base:l.dark.base,gray:l.dark.gray,color:l.dark.color,darkColor:l.dark.darkColor,text:l.dark.text,qbase:l.dark.qbase,qtext:l.dark.qtext,qgrey:l.dark.qgrey,qcolor:l.dark.qcolor,qdarkcolor:l.dark.qdarkColor}:c.mode=="Light"?{base:l.light.base,gray:l.light.gray,color:l.light.color,qcolor:l.light.qcolor,darkColor:l.light.darkColor,text:l.light.text,qbase:l.light.qbase,qtext:l.light.qtext,qgrey:l.light.qgrey,qdarkcolor:l.light.qdarkColor}:{qbase:"blue",base:"#ecf0f1",gray:"#bdc3c7",qgrey:"grey-3",color:"#3498db",darkColor:"#2980b9",text:"#000000",qtext:"dark",qcolor:"blue-10",qdarkcolor:"dark"}));return(s,r)=>(h(),w("div",Q,[u(U,{onSubmit:s.onSubmit,class:"q-gutter-md"},{default:C(()=>[u(f,{filled:"",modelValue:e(o).accountType,"onUpdate:modelValue":r[0]||(r[0]=a=>e(o).accountType=a),options:e(b),label:"Type of account","bg-color":e(t).qgrey,color:e(t).qtext,"label-color":e(t).qtext},null,8,["modelValue","options","bg-color","color","label-color"]),u(n,{filled:"",modelValue:e(o).email,"onUpdate:modelValue":r[1]||(r[1]=a=>e(o).email=a),label:"Email*","lazy-rules":"",rules:[a=>i(a)||"This is not a valid email."],"bg-color":e(t).qgrey,color:e(t).qtext,"label-color":e(t).qtext},null,8,["modelValue","rules","bg-color","color","label-color"]),u(n,{filled:"",modelValue:e(o).username,"onUpdate:modelValue":r[2]||(r[2]=a=>e(o).username=a),label:"UserName*","lazy-rules":"",rules:[a=>a&&a.length>0||"Please type your username"],"bg-color":e(t).qgrey,color:e(t).qtext,"label-color":e(t).qtext},null,8,["modelValue","rules","bg-color","color","label-color"]),u(n,{filled:"",type:"password",modelValue:e(o).pass,"onUpdate:modelValue":r[3]||(r[3]=a=>e(o).pass=a),label:"Password *","lazy-rules":"",rules:[a=>d(a)||"Password must contain atleast 12 characters, capital letter and numbers."],"bg-color":e(t).qgrey,color:e(t).qtext,"label-color":e(t).qtext},null,8,["modelValue","rules","bg-color","color","label-color"]),u(n,{filled:"",type:"password",modelValue:e(o).passV,"onUpdate:modelValue":r[4]||(r[4]=a=>e(o).passV=a),label:"Password *","lazy-rules":"",rules:[a=>a==e(o).pass||"Passwords are different"],"bg-color":e(t).qgrey,color:e(t).qtext,"label-color":e(t).qtext},null,8,["modelValue","rules","bg-color","color","label-color"]),T("div",null,[u(v,{label:"Submit",type:"submit",color:e(t).qbase,onClick:y},null,8,["color"])])]),_:1},8,["onSubmit"])]))}},R=x(z,[["__scopeId","data-v-4fbdbea6"]]);export{R as default};

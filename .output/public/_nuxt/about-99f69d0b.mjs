import{_ as u,w as l,r as d,c as n,a as m,b as f,F as h,d as x,u as b,o as a,t as _,e as y}from"./entry-c3612b5a.mjs";const k={async setup(p,{expose:r}){r();let t,e;console.time("setup");const{data:c}=([t,e]=l(()=>b("https://jsonplaceholder.typicode.com/posts")),t=await t,e(),t);console.timeEnd("setup");const s={data:c};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},v=y(" About (internal link that belongs to the Nuxt App) ");function N(p,r,t,e,c,s){const i=d("NuxtLink");return a(),n("div",null,[m(i,{to:"/"},{default:f(()=>[v]),_:1}),(a(!0),n(h,null,x(e.data,o=>(a(),n("div",{key:o.id},_(o.id)+" : => "+_(o.title),1))),128))])}var g=u(k,[["render",N]]);export{g as default};

if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let c={};const t=e=>s(e,n),u={module:{uri:n},exports:c,require:t};r[n]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nutri-score"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/NutriScore/css/app.13ae6c6c.css",revision:null},{url:"/NutriScore/css/chunk-vendors.af438ed9.css",revision:null},{url:"/NutriScore/index.html",revision:"475202bba89f830e05952c6e662ae9dc"},{url:"/NutriScore/js/app.4e1d7ca0.js",revision:null},{url:"/NutriScore/js/chunk-vendors.deae6839.js",revision:null},{url:"/NutriScore/manifest.json",revision:"d995b75fdf3f06f3029ae8382caf1418"},{url:"/NutriScore/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

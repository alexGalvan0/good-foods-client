if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YQ81ywBfU-WMiFHXuNohC/_buildManifest.js",revision:"20408a9e51f26efad83a59997c8a755b"},{url:"/_next/static/YQ81ywBfU-WMiFHXuNohC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/344-74e2318d14166419.js",revision:"74e2318d14166419"},{url:"/_next/static/chunks/483-d3afe5ab6c029129.js",revision:"d3afe5ab6c029129"},{url:"/_next/static/chunks/594-3c0b08bd7ca1f28a.js",revision:"3c0b08bd7ca1f28a"},{url:"/_next/static/chunks/998-8d7df520e5cc62b9.js",revision:"8d7df520e5cc62b9"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-5e3622d04d8f5315.js",revision:"5e3622d04d8f5315"},{url:"/_next/static/chunks/pages/_app-50ec45fcf4166cda.js",revision:"50ec45fcf4166cda"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-8db4dba4d7d7f0af.js",revision:"8db4dba4d7d7f0af"},{url:"/_next/static/chunks/pages/index-b739eee8e09f1fc6.js",revision:"b739eee8e09f1fc6"},{url:"/_next/static/chunks/pages/login-40e3d204fd97d96a.js",revision:"40e3d204fd97d96a"},{url:"/_next/static/chunks/pages/movie/%5BimdbID%5D-eb8e7890857a4697.js",revision:"eb8e7890857a4697"},{url:"/_next/static/chunks/pages/movie/search-5b42875a25b8a230.js",revision:"5b42875a25b8a230"},{url:"/_next/static/chunks/pages/profile-032c4fa1a05e1d48.js",revision:"032c4fa1a05e1d48"},{url:"/_next/static/chunks/pages/register-d46ea0b15eff9f16.js",revision:"d46ea0b15eff9f16"},{url:"/_next/static/chunks/pages/user/%5Bid%5D-8ce51b033e9da6ea.js",revision:"8ce51b033e9da6ea"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/734bf2b4ab8a0243.css",revision:"734bf2b4ab8a0243"},{url:"/favicon.ico",revision:"a4ad8f49346ee695f14c8e4b37331512"},{url:"/icon-192x192.png",revision:"76faf5676afde1fb512782fddfe4c305"},{url:"/icon-256x256.png",revision:"a1db711abbbd61e14f03023e0d57ba16"},{url:"/icon-384x384.png",revision:"fec88d0194567cc295877e8a040db63d"},{url:"/icon-512x512.png",revision:"ba6fa7ab56d1925447070cd4b0ba3d1d"},{url:"/img/home-cinema.jpg",revision:"08b8ce11c6c24a4ceb510f6e3a9b2241"},{url:"/img/movie.svg",revision:"f4a0f87ae2ec47abf5bc3c87aaa60859"},{url:"/manifest.json",revision:"0f204655f191409efe8b83ba56832405"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/workspace:good-movies-clien.textClipping",revision:"d9b88697d92972a736f046cb0dcd783b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

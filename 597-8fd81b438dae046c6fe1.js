"use strict";(self.webpackChunkgatsby_starter_ghost=self.webpackChunkgatsby_starter_ghost||[]).push([[597],{3597:function(t,e,n){n.r(e),n.d(e,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(9230),a=n(7294),r=n(7762);n(2369);let i;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function d(t,e,n,o,a,r){const i=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),s=n.has(e);function l(t){this.removeEventListener("load",l);const e=t.currentTarget,n=new Image;n.src=e.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==a||a({wasCached:s})})).catch((t=>{u(this,c),null==r||r(t)})):(u(this,c),null==a||a({wasCached:s}))}return i.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(i.parentElement.children).forEach((t=>{const e=t.getAttribute("data-src"),n=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),n&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",n))})),n.add(e),i.complete&&l.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",l)}}function g(t,e,a,r,l,u,g){if(!(0,o.h)()){let o;const f=(m=()=>{o=d(t,e,a,l,u,g)},"IntersectionObserver"in window?(i||(i=new IntersectionObserver((t=>{t.forEach((t=>{var e;t.isIntersecting&&(null==(e=c.get(t.target))||e(),c.delete(t.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(t){return c.set(t,m),i.observe(t),function(){i&&t&&(c.delete(t),i.unobserve(t))}}):function(){return m(),function(){}}),v=f(t);var b,h;return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(b=r.objectFit)?b:"cover",t.dataset.objectPosition=`${null!=(h=r.objectPosition)?h:"50% 50%"}`,async function(t){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(t)}(t)),()=>{o&&o(),v()}}var m;return d(t,e,a,l,u,g)}function b(t){let{image:e,loading:n="lazy",isLoading:i,isLoaded:c,imgClassName:s,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=t,h=(0,o._)(t,l);const{width:m,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=e;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,r.uS)(a.createElement(o.L,{layout:v,width:m,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,m,f,p,b,d))),a.createElement(o.M,(0,o.a)({},h,{width:m,height:f,className:s},(0,o.b)(i,c,w,n,u)))))}}}]);
//# sourceMappingURL=597-8fd81b438dae046c6fe1.js.map
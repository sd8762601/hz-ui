import{t as i}from"./chunks/theme.eBiT7x1F.js";import{j as o,a1 as u,a2 as c,a3 as l,a4 as f,a5 as d,a6 as m,a7 as h,a8 as A,a9 as g,aa as v,d as y,u as C,l as P,x as w,ab as b,ac as R,ad as j,ae as x}from"./chunks/framework.Rw18uWXD.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),D=y({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=C();return P(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&b(),R(),j(),s.setup&&s.setup(),()=>x(s.Layout)}});async function E(){const e=F(),a=S();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function S(){return A(D)}function F(){let e=o,a;return g(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&E().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{E as createApp};

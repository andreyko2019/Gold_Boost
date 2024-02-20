import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="modulepreload",f=function(_,i){return new URL(_,i).href},m={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=f(r,l),r in m)return;m[r]=!0;const c=r.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const O=t[a];if(O.href===r&&(!c||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":E,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,O)=>{n.addEventListener("load",a),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const w={};async function P(_){return w[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-CHW2vSpi.js"),__vite__mapDeps([0,1]),import.meta.url),o(()=>import("./entry-preview-docs-CrZpYJOJ.js"),__vite__mapDeps([2,3,4,1]),import.meta.url),o(()=>import("./preview-B_0crF9I.js"),__vite__mapDeps([5,6]),import.meta.url),o(()=>import("./preview-DCvCTjJ7.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-D8VCGkL0.js"),__vite__mapDeps([7,8]),import.meta.url),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([9,8]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([10,8]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-qkA8UADg.js"),__vite__mapDeps([11,4]),import.meta.url),o(()=>import("./preview-CIwosuWp.js"),__vite__mapDeps([]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:h});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./entry-preview-CHW2vSpi.js","./vue.esm-bundler-C2_yd54h.js","./entry-preview-docs-CrZpYJOJ.js","./index-i-pPh9Pv.js","./_commonjsHelpers-Cpj98o6Y.js","./preview-B_0crF9I.js","./index-Bw8VTzHM.js","./preview-D8VCGkL0.js","./index-DrFu-skq.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-qkA8UADg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

import"./assets/vendor-b20c67ea.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c="https://pixabay.com/api/",a="43803068-e4e7e851cef47a5cf0e066a7d",i=(r="flower")=>{const e=new URLSearchParams({key:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:5,q:r});return fetch(`${c}?${e}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},f=r=>r.map(e=>{`${e.largeImageURL}${e.webformatURL}${e.tags}${e.likes}${e.views}${e.comments}${e.downloads}`}).join("");gallery.insertAdjacentHTML("beforeend",f);const u=document.querySelector(".gallery"),d=document.querySelector(".myForm"),m=document.querySelector(".loader");console.log(u,d,m);i().then(r=>{const e=console.log(r.hits);console.log(e)});
//# sourceMappingURL=commonHelpers.js.map

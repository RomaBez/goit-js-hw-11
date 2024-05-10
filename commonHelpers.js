import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="43803068-e4e7e851cef47a5cf0e066a7d",d=(s="flower")=>{const o=new URLSearchParams({key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:6,q:s});return fetch(`${f}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},h=s=>s.map(({largeImageURL:o,webformatURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${i}"
        />
      </a>
      <div class="image-info">
        <span class="info-item">Likes: ${e}</span>
        <span class="info-item">Views: ${t}</span>
        <span class="info-item">Comments: ${a}</span>
        <span class="info-item">Downloads: ${u}</span>
      </div>
    </li>`).join(""),n=document.querySelector(".gallery"),g=document.querySelector(".myForm"),l=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){s.preventDefault();const o=s.target.elements.textInput.value.trim();if(o===""){n.innerHTML="",s.target.reset(),c.error({position:"topRight",class:"error",message:"Please put your request",timeout:2e3});return}n.innerHTML="",l.classList.remove("is-hidden"),d(o).then(r=>{r.total===0&&(s.target.reset(),c.error({position:"topRight",class:"error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:2e3})),n.innerHTML=h(r.hits),y.refresh(),s.target.reset(),l.classList.add("is-hidden")}).catch(r=>console.log(r))}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map

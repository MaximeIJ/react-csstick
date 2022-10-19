import{e as M,j as E,w as A,l as m,$ as h}from"./iframe.6bde7c7e.js";var b="backgrounds",{document:s,window:B}=A,H=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,L=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(o=>o.name).join(", ");M.warn(E`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(T)},T=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},F=(r,e)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},I=(r,e,t)=>{let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let o=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=s.getElementById(o);d?d.parentElement.insertBefore(a,d):s.head.appendChild(a)}},j=(r,e)=>{var u;let{globals:t,parameters:n}=e,a=(u=t[b])==null?void 0:u.value,o=n[b],d=m(()=>o.disable?"transparent":L(a,o.values,o.default),[o,a]),i=m(()=>d&&d!=="transparent",[d]),p=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=m(()=>{let l="transition: background-color 0.3s;";return`
      ${p} {
        background: ${d} !important;
        ${H()?"":l}
      }
    `},[d,p]);return h(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!i){k(l);return}I(l,c,e.viewMode==="docs"?e.id:null)},[i,c,e]),r()},z=(r,e)=>{var x,v,y;let{globals:t,parameters:n}=e,a=n[b].grid,o=((x=t[b])==null?void 0:x.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:i,opacity:p}=a,c=e.viewMode==="docs",u=n.layout===void 0||n.layout==="padded"?16:0,l=(v=a.offsetX)!=null?v:c?20:u,g=(y=a.offsetY)!=null?y:c?20:u,f=m(()=>{let $=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",w=[`${i*d}px ${i*d}px`,`${i*d}px ${i*d}px`,`${i}px ${i}px`,`${i}px ${i}px`].join(", ");return`
      ${$} {
        background-size: ${w} !important;
        background-position: ${l}px ${g}px, ${l}px ${g}px, ${l}px ${g}px, ${l}px ${g}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${p/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p/2}) 1px, transparent 1px) !important;
      }
    `},[i]);return h(()=>{let $=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){k($);return}F($,f)},[o,f,e]),r()},S=[z,j],N={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{S as decorators,N as parameters};
//# sourceMappingURL=preview.2722ec35.js.map

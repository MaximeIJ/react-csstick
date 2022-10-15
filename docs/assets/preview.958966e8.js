import{e as T,j as w,w as z,k as B,o as $,$ as M}from"./iframe.c71a47d0.js";var f="backgrounds",{document:s,window:H}=z,L=()=>H.matchMedia("(prefers-reduced-motion: reduce)").matches,S=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let a=e.find(n=>n.name===t);if(a)return a.value;if(t){let n=e.map(i=>i.name).join(", ");T.warn(w`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},A=r=>{(Array.isArray(r)?r:[r]).forEach(I)},I=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},j=(r,e)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e,s.head.appendChild(a)}},F=(r,e,t)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,o=s.getElementById(i);o?o.parentElement.insertBefore(n,o):s.head.appendChild(n)}},C=(r,e)=>{var d;let{globals:t,parameters:a}=e,n=(d=t[f])==null?void 0:d.value,i=a[f],o=$(()=>i.disable?"transparent":S(n,i.values,i.default),[i,n]),u=$(()=>o&&o!=="transparent",[o]),l=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=$(()=>{let p="transition: background-color 0.3s;";return`
      ${l} {
        background: ${o} !important;
        ${L()?"":p}
      }
    `},[o,l]);return M(()=>{let p=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!u){A(p);return}F(p,c,e.viewMode==="docs"?e.id:null)},[u,c,e]),r()},R=B(()=>{},w`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `),X=(r,e)=>{var h,k,v,y;let{globals:t,parameters:a}=e,n=a[f].grid,i=((h=t[f])==null?void 0:h.grid)===!0&&n.disable!==!0,{cellAmount:o,cellSize:u,opacity:l}=n,c=e.viewMode==="docs",d;(k=a.grid)!=null&&k.cellSize?(d=a.grid.cellSize,R()):d=u;let p=a.layout===void 0||a.layout==="padded"?16:0,g=(v=n.offsetX)!=null?v:c?20:p,m=(y=n.offsetY)!=null?y:c?20:p,x=$(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${d*o}px ${d*o}px`,`${d*o}px ${d*o}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${b} {
        background-size: ${E} !important;
        background-position: ${g}px ${m}px, ${g}px ${m}px, ${g}px ${m}px, ${g}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${l/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return M(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){A(b);return}j(b,x)},[i,x,e]),r()},N=[X,C],O={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{N as decorators,O as parameters};
//# sourceMappingURL=preview.958966e8.js.map

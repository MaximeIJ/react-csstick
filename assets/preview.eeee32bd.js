import{y as r,L as a,w as g}from"./iframe.c71a47d0.js";const i="storybook/highlight",l="storybookHighlight",m=`${i}/add`,H=`${i}/reset`,{document:n}=g,p=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,b=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"});module&&module.hot&&module.hot.decline&&module.hot.decline();const h=r.getChannel(),u=e=>{const t=l;s();const d=Array.from(new Set(e.elements)),o=n.createElement("style");o.setAttribute("id",t),o.innerHTML=d.map(c=>`${c}{
          ${p(e.color,e.style)}
         }`).join(" "),n.head.appendChild(o)},s=()=>{const e=l,t=n.getElementById(e);t&&t.parentNode.removeChild(t)};h.on(a,s);h.on(H,s);h.on(m,u);export{b as highlightObject,p as highlightStyle};
//# sourceMappingURL=preview.eeee32bd.js.map

import{y as s,L as m,w as g}from"./iframe.6bde7c7e.js";var h="storybook/highlight",n="storybookHighlight",p=`${h}/add`,u=`${h}/reset`,{document:l}=g,b=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,$=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"});module&&module.hot&&module.hot.decline&&module.hot.decline();var d=s.getChannel(),x=e=>{let t=n;i();let r=Array.from(new Set(e.elements)),o=l.createElement("style");o.setAttribute("id",t),o.innerHTML=r.map(a=>`${a}{
          ${b(e.color,e.style)}
         }`).join(" "),l.head.appendChild(o)},i=()=>{let e=n,t=l.getElementById(e);t&&t.parentNode.removeChild(t)};d.on(m,i);d.on(u,i);d.on(p,x);export{$ as highlightObject,b as highlightStyle};
//# sourceMappingURL=highlight.b796869b.js.map

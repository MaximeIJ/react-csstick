import{r as B}from"./iframe.c71a47d0.js";import{j as h,a as A}from"./jsx-runtime.48176d35.js";function k(e){const o=n=>{const{id:t,onClick:l}=n;return h(e,{...n,onClick:s=>{l&&l([t,s].join("|"))}})};return o.displayName=`clickable(${e.displayName||e.name||"Component"})`,o}function T(e){return function(n){n.stopPropagation(),e()}}try{k.displayName="chainClickable",k.__docgenInfo={description:"",displayName:"chainClickable",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainClickable"]={docgenInfo:k.__docgenInfo,name:"chainClickable",path:"src/hooks/chainClickable.tsx#chainClickable"})}catch{}try{T.displayName="chainCall",T.__docgenInfo={description:"",displayName:"chainCall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainCall"]={docgenInfo:T.__docgenInfo,name:"chainCall",path:"src/hooks/chainClickable.tsx#chainCall"})}catch{}const K="3rem",Y={childProps:[],type:"text",bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},dimensions:{width:K,height:K,thickness:"2px"},id:"text bubble",onClick:()=>null,text:"",font:"Comic Sans MS, Comic Sans, cursive",fontSize:"1.5rem",fontWeight:"normal",borderColor:"transparent",borderRadius:"40%"};const M=(e,o)=>`calc(${e} * ${o})`,_=(e,o)=>`calc(${e} / ${o||1})`,d=e=>`calc(100% - var(--${e}))`,F=e=>`${e!=null?e:0}deg`,G=e=>`rotate(${F(e)})`,J=e=>({transform:G(e)}),L=e=>{const{bgColor:o,color:n,width:t,height:l,thickness:i}=e;return{["--w"]:t,["--h"]:l,["--t"]:i,["--c"]:n,["--bgc"]:o}},U=e=>{var u,c,y,m;const{bgColor:o,color:n,width:t,height:l,thickness:i,base:s,coord:a,offsets:r}=e;return{...L({bgColor:o,color:n,width:t,height:l,thickness:i}),["--angle"]:F(s!=null?s:0),top:`calc(${(u=a==null?void 0:a.y)!=null?u:0} - ${(c=r==null?void 0:r.y)!=null?c:"0%"})`,left:`calc(${(y=a==null?void 0:a.x)!=null?y:0} - ${(m=r==null?void 0:r.x)!=null?m:"0%"})`}},Q=e=>{const{font:o,fontSize:n,fontWeight:t,borderColor:l,borderRadius:i}=e;return{["--f"]:o,["--fs"]:n,["--fw"]:t,["--bc"]:l,["--br"]:i}},N=(e=Y)=>{const{font:o,fontSize:n,fontWeight:t,bgColor:l,borderColor:i,borderRadius:s,color:a,dimensions:r,coord:u,text:c,onClick:y}=e,{width:m,height:C,thickness:p}={...Y.dimensions,...r},S=U({width:m,height:C,thickness:p,bgColor:l,color:a,coord:u}),x=Q({font:o,fontSize:n,fontWeight:t,borderColor:i,borderRadius:s}),g={...S,...x};return h("div",{className:"bubble",style:g,onClick:T(y),children:h("div",{className:"text",children:c!=null?c:""})})},X=k(N);try{N.displayName="TextBubble",N.__docgenInfo={description:"",displayName:"TextBubble",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextBubble/TextBubble.tsx#TextBubble"]={docgenInfo:N.__docgenInfo,name:"TextBubble",path:"src/components/TextBubble/TextBubble.tsx#TextBubble"})}catch{}const W="12rem",f={childProps:[],children:[],bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},customPos:{limbs:{base:10}},dimensions:{width:W,height:W,thickness:"2px"},id:"stick",onClick:()=>null,posId:"default",type:"stick"},ee={default:f.customPos,custom:{},pointL:{limbs:{...f.customPos.limbs,arms:{left:{angle:89}}}},pointR:{limbs:{...f.customPos.limbs,arms:{right:{angle:-89}}}},sitL:{limbs:{...f.customPos.limbs,legs:{left:{angle:90},right:{angle:90}}},offsets:{x:"0",y:"-3rem"}},walkL:{},walkR:{}};const E=(e=f)=>{var D;const{bgColor:o,color:n,posId:t,customPos:l,dimensions:i,coord:s,childProps:a,children:r,onClick:u}=e,c=t==="custom"&&l,{limbs:y,offsets:m}=c?l:ee[t!=null?t:"custom"],{width:C,height:p,thickness:S}={...f.dimensions,...i},{base:x=0,arms:g,legs:v}={...f.customPos.limbs,...y},Z=U({width:C,height:p,thickness:S,bgColor:o,color:n,base:x,offsets:m,coord:s}),O=b=>{const $=b!=null&&b.angle?J(b.angle):{};return h("div",{style:$})};return A("div",{className:"stick",style:Z,onClick:T(u),children:[h("div",{className:"head"}),A("div",{className:"body",children:[A("div",{className:"arms",children:[O(g==null?void 0:g.left),O(g==null?void 0:g.right)]}),A("div",{className:"legs",children:[O(v==null?void 0:v.left),O(v==null?void 0:v.right)]})]}),(D=a||r)==null?void 0:D.map((b,$)=>{const{type:H}=b;let R=null;switch(H){case"stick":R=E;return;case"text":R=X;break}return R&&B.exports.createElement(R,{...b,key:`stickchild-${$}`})})]})},ne=k(E);try{E.displayName="Stick",E.__docgenInfo={description:"",displayName:"Stick",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},posId:{defaultValue:null,description:"",name:"posId",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"custom"'},{value:'"pointL"'},{value:'"pointR"'},{value:'"sitL"'},{value:'"walkL"'},{value:'"walkR"'}]}},customPos:{defaultValue:null,description:"",name:"customPos",required:!1,type:{name:"StickPosition"}},children:{defaultValue:null,description:"@deprecated use childProps instead",name:"children",required:!0,type:{name:"TextBubbleProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Stick/Stick.tsx#Stick"]={docgenInfo:E.__docgenInfo,name:"Stick",path:"src/components/Stick/Stick.tsx#Stick"})}catch{}const z="50vmin",te={childProps:[],color:f.color,type:"comic",bgColor:"transparent",coord:{x:"0",y:"0"},dimensions:{width:z,height:z,thickness:f.dimensions.thickness},id:"",onClick:()=>null,scenes:[],layout:[]};const j="100%",oe={childProps:[],type:"scene",bgColor:"transparent",coord:{x:"0",y:"0"},color:f.color,dimensions:{width:j,height:j,thickness:f.dimensions.thickness},id:"",onClick:()=>null,sticks:[]},P="h",V="w",q="0%",re={C:{x:_(d(V),2),y:_(d(P),2)},SW:{x:q,y:d(P)},W:{x:q,y:_(d(P),2)},NW:{x:q,y:q},N:{x:_(d(V),2),y:q},NE:{x:d(V),y:q},E:{x:d(V),y:_(d(P),2)},SE:{x:d(V),y:d(P)},S:{x:_(d(V),2),y:d(P)}};const w=({bgColor:e,color:o,dimensions:n,sticks:t,onClick:l})=>{const{width:i,height:s,thickness:a}=n!=null?n:oe.dimensions,r=L({width:i,height:s,thickness:a,bgColor:e,color:o});return h("div",{className:"container",style:r,onClick:()=>l(),children:t==null?void 0:t.map((u,c)=>B.exports.createElement(ne,{...u,onClick:l,key:`stick-${c}-${u.id}`}))})},le=k(w);try{w.displayName="Scene",w.__docgenInfo={description:"",displayName:"Scene",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},sticks:{defaultValue:null,description:"@deprecated (ignore for now) use childProps field instead",name:"sticks",required:!1,type:{name:"StickProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Scene/Scene.tsx#Scene"]={docgenInfo:w.__docgenInfo,name:"Scene",path:"src/components/Scene/Scene.tsx#Scene"})}catch{}const I=({bgColor:e,color:o,dimensions:n,layout:t,onClick:l,scenes:i})=>{const{width:s,height:a,thickness:r}=n!=null?n:te.dimensions,u=L({width:s,height:a,thickness:r,bgColor:e,color:o}),c=B.exports.useMemo(()=>{const y=t.map(m=>{const C=m.reduce((p,S)=>p+S,0);return m.map(p=>p/(C||1))}).flat();return h("div",{className:"row",children:y.map((m,C)=>{var x;const p=i[C],S=p?{...p,dimensions:{...p.dimensions,width:M("100%",m),height:_((x=n==null?void 0:n.height)!=null?x:"",t.length||1)}}:void 0;return S&&h(le,{...S,onClick:l},`scene-${C}`)})})},[n==null?void 0:n.height,t,i]);return h("div",{className:"container",style:u,children:c})},se=k(I);try{I.displayName="Comic",I.__docgenInfo={description:"",displayName:"Comic",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},scenes:{defaultValue:null,description:"@deprecated (ignore for now) use childProps field instead",name:"scenes",required:!0,type:{name:"SceneProps[]"}},layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"number[][]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Comic/Comic.tsx#Comic"]={docgenInfo:I.__docgenInfo,name:"Comic",path:"src/components/Comic/Comic.tsx#Comic"})}catch{}export{se as C,te as D,le as S,X as T,re as a,oe as b,ne as c,f as d,Y as e};
//# sourceMappingURL=Comic.0fedacf7.js.map
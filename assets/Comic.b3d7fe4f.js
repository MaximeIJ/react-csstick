import{r as D}from"./index.631bb338.js";import{j as y,a as A}from"./jsx-runtime.bb8cf836.js";function k(e){const t=o=>{const{id:n,onClick:l}=o;return y(e,{...o,onClick:s=>{l&&l([n,s].join("|"))}})};return t.displayName=`clickable(${e.displayName||e.name||"Component"})`,t}function O(e){return function(o){o.stopPropagation(),e()}}try{k.displayName="chainClickable",k.__docgenInfo={description:"",displayName:"chainClickable",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainClickable"]={docgenInfo:k.__docgenInfo,name:"chainClickable",path:"src/hooks/chainClickable.tsx#chainClickable"})}catch{}try{O.displayName="chainCall",O.__docgenInfo={description:"",displayName:"chainCall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainCall"]={docgenInfo:O.__docgenInfo,name:"chainCall",path:"src/hooks/chainClickable.tsx#chainCall"})}catch{}const Y="3rem",W={childProps:[],type:"text",bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},dimensions:{width:Y,height:Y,thickness:"2px"},id:"text bubble",lineStyle:"",onClick:()=>null,text:"",font:"Comic Sans MS, Comic Sans, cursive",fontSize:"1.5rem",fontWeight:"normal",borderColor:"transparent",borderRadius:"40%"};const U=(e,t)=>`calc(${e} * ${t})`,_=(e,t)=>`calc(${e} / ${t||1})`,p=e=>`calc(100% - var(--${e}))`,G=e=>`${e!=null?e:0}deg`,K=e=>{const{bgColor:t,color:o,width:n,height:l,thickness:a}=e;return{["--w"]:n,["--h"]:l,["--t"]:a,["--c"]:o,["--bgc"]:t}},Z=(e,t)=>{const o=typeof e=="number"?[e]:e.slice(0,3),n={};return o.forEach((l,a)=>{const s=`--${t}-${a}`;n[s]=G(l)}),n},H=e=>{var C,d,u,S;const{bgColor:t,color:o,width:n,height:l,thickness:a,base:s,coord:i,offsets:r}=e;return{...K({bgColor:t,color:o,width:n,height:l,thickness:a}),...Z(s!=null?s:0,"base"),top:`calc(${(C=i==null?void 0:i.y)!=null?C:0} - ${(d=r==null?void 0:r.y)!=null?d:"0%"})`,left:`calc(${(u=i==null?void 0:i.x)!=null?u:0} - ${(S=r==null?void 0:r.x)!=null?S:"0%"})`}},J=e=>{const{font:t,fontSize:o,fontWeight:n,borderColor:l,borderRadius:a}=e;return{["--f"]:t,["--fs"]:o,["--fw"]:n,["--bc"]:l,["--br"]:a}},Q=e=>e,I=(e=W)=>{const{font:t,fontSize:o,fontWeight:n,bgColor:l,borderColor:a,borderRadius:s,color:i,dimensions:r,coord:C,text:d,onClick:u}=e,{width:S,height:E,thickness:g}={...W.dimensions,...r},m=H({width:S,height:E,thickness:g,bgColor:l,color:i,coord:C}),b=J({font:t,fontSize:o,fontWeight:n,borderColor:a,borderRadius:s}),c={...m,...b};return y("div",{className:"bubble",style:c,onClick:O(u),children:y("div",{className:"text",children:d!=null?d:""})})},X=k(I);try{I.displayName="TextBubble",I.__docgenInfo={description:"",displayName:"TextBubble",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:"",name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextBubble/TextBubble.tsx#TextBubble"]={docgenInfo:I.__docgenInfo,name:"TextBubble",path:"src/components/TextBubble/TextBubble.tsx#TextBubble"})}catch{}const z="12rem",h={childProps:[],children:[],bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},customPos:{limbs:{base:10}},dimensions:{width:z,height:z,thickness:"2px"},id:"stick",lineStyle:"",onClick:()=>null,posId:"default",type:"stick"},ee={default:h.customPos,custom:{},pointL:{limbs:{...h.customPos.limbs,arms:{left:{angle:[75,15]}}}},pointR:{limbs:{...h.customPos.limbs,arms:{right:{angle:[75,15]}}}},sitL:{limbs:{...h.customPos.limbs,legs:{left:{angle:90},right:{angle:90}}},offsets:{x:"0",y:"-3rem"}},walkL:{},walkR:{}};const P=(e=h)=>{const{bgColor:t,color:o,posId:n,customPos:l,dimensions:a,coord:s,childProps:i,lineStyle:r,onClick:C}=e,d=n==="custom"&&l,{limbs:u,offsets:S}=d?l:ee[n!=null?n:"custom"],{width:E,height:g,thickness:m}={...h.dimensions,...a},{base:b=0,arms:c,legs:f}={...h.customPos.limbs,...u},R=H({width:E,height:g,thickness:m,bgColor:t,color:o,base:b,offsets:S,coord:s}),$=v=>{const N=v==null?void 0:v.angle,L={},x=N?Z(N,"angle"):{};return y("div",{style:{...L,...x},children:y("div",{children:y("div",{})})})},M=r==="sketch"&&m?Q({["--t"]:U(m,1.75)}):{};return A("div",{className:`${r!=null?r:""} stick`,style:R,onClick:O(C),children:[y("div",{className:"head"}),A("div",{className:"body",style:M,children:[A("div",{className:"arms",children:[$(c==null?void 0:c.left),$(c==null?void 0:c.right)]}),A("div",{className:"legs",children:[$(f==null?void 0:f.left),$(f==null?void 0:f.right)]})]}),i==null?void 0:i.map((v,N)=>{const{type:L}=v;let x=null;switch(L){case"stick":x=P;return;case"text":x=X;break}return x&&D.exports.createElement(x,{...v,key:`stickchild-${N}`})})]})},ne=k(P);try{P.displayName="Stick",P.__docgenInfo={description:"",displayName:"Stick",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:"",name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},posId:{defaultValue:null,description:"",name:"posId",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"custom"'},{value:'"pointL"'},{value:'"pointR"'},{value:'"sitL"'},{value:'"walkL"'},{value:'"walkR"'}]}},customPos:{defaultValue:null,description:"",name:"customPos",required:!1,type:{name:"StickPosition"}},children:{defaultValue:null,description:"@deprecated use childProps instead",name:"children",required:!0,type:{name:"TextBubbleProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Stick/Stick.tsx#Stick"]={docgenInfo:P.__docgenInfo,name:"Stick",path:"src/components/Stick/Stick.tsx#Stick"})}catch{}const j="50vmin",te={childProps:[],color:h.color,type:"comic",bgColor:"transparent",coord:{x:"0",y:"0"},dimensions:{width:j,height:j,thickness:h.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,scenes:[],layout:[]};const F="100%",le={childProps:[],type:"scene",bgColor:"transparent",coord:{x:"0",y:"0"},color:h.color,dimensions:{width:F,height:F,thickness:h.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,sticks:[]},V="h",q="w",T="0%",re={C:{x:_(p(q),2),y:_(p(V),2)},SW:{x:T,y:p(V)},W:{x:T,y:_(p(V),2)},NW:{x:T,y:T},N:{x:_(p(q),2),y:T},NE:{x:p(q),y:T},E:{x:p(q),y:_(p(V),2)},SE:{x:p(q),y:p(V)},S:{x:_(p(q),2),y:p(V)}};const w=({bgColor:e,childProps:t,color:o,dimensions:n,lineStyle:l,sticks:a,onClick:s})=>{const{width:i,height:r,thickness:C}=n!=null?n:le.dimensions,d=K({width:i,height:r,thickness:C,bgColor:e,color:o});return y("div",{className:`${l!=null?l:""} scene`,style:d,onClick:()=>s(),children:[...t!=null?t:[],...a!=null?a:[]].filter(({type:u})=>u==="stick").map(u=>({bgColor:e,color:o,lineStyle:l,...u})).map((u,S)=>D.exports.createElement(ne,{...u,onClick:s,key:`stick-${S}-${u.id}`}))})},oe=k(w);try{w.displayName="Scene",w.__docgenInfo={description:"",displayName:"Scene",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:"",name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},sticks:{defaultValue:null,description:"@deprecated use childProps field instead",name:"sticks",required:!1,type:{name:"StickProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Scene/Scene.tsx#Scene"]={docgenInfo:w.__docgenInfo,name:"Scene",path:"src/components/Scene/Scene.tsx#Scene"})}catch{}const B=({bgColor:e,childProps:t,color:o,dimensions:n,layout:l,lineStyle:a,onClick:s,scenes:i})=>{const{width:r,height:C,thickness:d}=n!=null?n:te.dimensions,u=K({width:r,height:C,thickness:d,bgColor:e,color:o}),S=D.exports.useMemo(()=>{const E=l.map(m=>{const b=m.reduce((c,f)=>c+f,0);return m.map(c=>c/(b||1))}).flat(),g=t==null?void 0:t.filter(({type:m})=>m==="scene");return y("div",{className:"row",children:E.map((m,b)=>{var R;const c=[...g!=null?g:[],...i!=null?i:[]][b],f=c?{bgColor:e,color:o,lineStyle:a,...c,dimensions:{thickness:d,...c.dimensions,width:U("100%",m),height:_((R=n==null?void 0:n.height)!=null?R:"",l.length||1)}}:void 0;return f&&y(oe,{...f,onClick:s},`scene-${b}`)})})},[n==null?void 0:n.height,l,i]);return y("div",{className:`${a!=null?a:""} comic`,style:u,children:S})},se=k(B);try{B.displayName="Comic",B.__docgenInfo={description:"",displayName:"Comic",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id?: string | undefined) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:"",name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},scenes:{defaultValue:null,description:"@deprecated use childProps field instead",name:"scenes",required:!0,type:{name:"SceneProps[]"}},layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"number[][]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Comic/Comic.tsx#Comic"]={docgenInfo:B.__docgenInfo,name:"Comic",path:"src/components/Comic/Comic.tsx#Comic"})}catch{}export{se as C,te as D,oe as S,X as T,re as a,le as b,ne as c,h as d,W as e};
//# sourceMappingURL=Comic.b3d7fe4f.js.map

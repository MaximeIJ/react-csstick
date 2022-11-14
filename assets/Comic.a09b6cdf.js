import{r as H}from"./index.b95fb34d.js";import{j as m,a as N}from"./jsx-runtime.332064e9.js";function x(e){const n=a=>{const{onClick:l}=a,t=H.exports.useRef(null);return l?m("span",{onClick:r=>{r.preventDefault(),r.stopPropagation(),l&&l(t)},ref:t,children:m(e,{...a})}):m(e,{...a})};return n.displayName=`clickable(${e.displayName||e.name||"Component"})`,n}function W(e){return function(a){a.stopPropagation(),e()}}try{x.displayName="chainClickable",x.__docgenInfo={description:"",displayName:"chainClickable",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainClickable"]={docgenInfo:x.__docgenInfo,name:"chainClickable",path:"src/hooks/chainClickable.tsx#chainClickable"})}catch{}try{W.displayName="chainCall",W.__docgenInfo={description:"",displayName:"chainCall",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/hooks/chainClickable.tsx#chainCall"]={docgenInfo:W.__docgenInfo,name:"chainCall",path:"src/hooks/chainClickable.tsx#chainCall"})}catch{}const Y="3rem",M={childProps:[],type:"text",bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},dimensions:{width:Y,height:Y,thickness:"2px"},id:"",lineStyle:"",onClick:()=>null,text:"",font:"Comic Sans MS, Comic Sans, cursive",fontSize:"1.5rem",fontWeight:"normal",borderColor:"transparent",borderRadius:"40%"};const G=(e,n)=>`calc(${e} * ${n})`,v=(e,n)=>`calc(${e} / ${n||1})`,h=e=>`calc(100% - var(--${e}))`,Q=e=>`${e!=null?e:0}deg`,K=e=>{const{bgColor:n,color:a,width:l,height:t,thickness:o}=e;return{["--w"]:l,["--h"]:t,["--t"]:o,["--c"]:a,["--bgc"]:n}},U=(e,n)=>{const a=typeof e=="number"?[e]:e.slice(0,3),l={};return a.forEach((t,o)=>{const r=`--${n}-${o}`;l[r]=Q(t)}),l},Z=e=>{var d,g,u,p;const{bgColor:n,color:a,width:l,height:t,thickness:o,base:r,coord:s,offsets:i}=e;return{...K({bgColor:n,color:a,width:l,height:t,thickness:o}),...U(r!=null?r:0,"base"),top:`calc(${(d=s==null?void 0:s.y)!=null?d:0} - ${(g=i==null?void 0:i.y)!=null?g:"0%"})`,left:`calc(${(u=s==null?void 0:s.x)!=null?u:0} - ${(p=i==null?void 0:i.x)!=null?p:"0%"})`}},X=e=>{const{font:n,fontSize:a,fontWeight:l,borderColor:t,borderRadius:o}=e;return{["--f"]:n,["--fs"]:a,["--fw"]:l,["--bc"]:t,["--br"]:o}},ee=e=>e,I=(e=M)=>{const{id:n,font:a,fontSize:l,fontWeight:t,bgColor:o,borderColor:r,borderRadius:s,color:i,dimensions:d,coord:g,text:u}=e,{width:p,height:C,thickness:k}={...M.dimensions,...d},_=Z({width:p,height:C,thickness:k,bgColor:o,color:i,coord:g}),f=X({font:a,fontSize:l,fontWeight:t,borderColor:r,borderRadius:s}),S={..._,...f};return m("div",{className:"bubble",style:S,id:n||void 0,children:m("div",{className:"text",children:u!=null?u:""})})},te=x(I);try{I.displayName="TextBubble",I.__docgenInfo={description:"",displayName:"TextBubble",props:{onClick:{defaultValue:null,description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`,name:"onClick",required:!1,type:{name:"((ref: MutableRefObject<HTMLSpanElement | null>) => void)"}},id:{defaultValue:null,description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"Type discriminator representing the elements that extent this base",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`,name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"See preset defaults to see what the fallbacks are for missing attributes",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},text:{defaultValue:null,description:"Text content for the bubble. Whitespaces and lines breaks are preserved",name:"text",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"Passed directly, no additional processing ensures the font is installed",name:"font",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextBubble/TextBubble.tsx#TextBubble"]={docgenInfo:I.__docgenInfo,name:"TextBubble",path:"src/components/TextBubble/TextBubble.tsx#TextBubble"})}catch{}const j="12rem",P={default:{angle:[10,0,-180]},armPoint:{angle:[75,15]},armHip:{angle:[75,-85,10]},armHeadHold:{angle:[110,80,-30]},legHalfSquat:{angle:[50,-50,90]}},y={childProps:[],children:[],bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},customPos:{limbs:{base:[10,0,-180]}},dimensions:{width:j,height:j,thickness:"2px"},id:"",lineStyle:"",onClick:()=>null,posId:"default",type:"stick"},ne={default:y.customPos,custom:{},panik:{limbs:{...y.customPos.limbs,arms:{left:P.armHeadHold,right:P.armHeadHold},legs:{left:P.legHalfSquat,right:P.legHalfSquat}},offsets:{x:"0px",y:"calc(var(--h) / -14)"}},pointL:{limbs:{...y.customPos.limbs,arms:{left:P.armPoint}}},pointR:{limbs:{...y.customPos.limbs,arms:{right:P.armPoint}}},sitL:{limbs:{...y.customPos.limbs,legs:{left:{angle:90},right:{angle:90}}},offsets:{x:"0px",y:"-3rem"}},walkL:{},walkR:{}};const R=(e=y)=>{const{id:n,bgColor:a,color:l,posId:t,customPos:o,dimensions:r,coord:s,childProps:i,lineStyle:d,onClick:g}=e,u=t==="custom"&&o,{limbs:p,offsets:C}=u?o:ne[t!=null?t:"custom"],{width:k,height:_,thickness:f}={...y.dimensions,...r},{base:S=0,arms:c,legs:b}={...y.customPos.limbs,...p},O=Z({width:k,height:_,thickness:f,bgColor:a,color:l,base:S,offsets:C,coord:s}),A=T=>{const $=T==null?void 0:T.angle,D={},q=$?U($,"angle"):{};return m("div",{style:{...D,...q},children:m("div",{children:m("div",{})})})},J=d==="sketch"&&f?ee({["--t"]:G(f,1.75)}):{};return N("div",{className:`${d!=null?d:""} stick`,style:O,id:n||void 0,children:[m("div",{className:"head"}),N("div",{className:"body",style:J,children:[N("div",{className:"arms",children:[A(c==null?void 0:c.left),A(c==null?void 0:c.right)]}),N("div",{className:"legs",children:[A(b==null?void 0:b.left),A(b==null?void 0:b.right)]})]}),i==null?void 0:i.map((T,$)=>{const{type:D}=T;let q=null;switch(D){case"stick":q=R;return;case"text":q=te;break}return q&&H.exports.createElement(q,{onClick:g,...T,key:`stickchild-${$}`})})]})},ae=x(R);try{R.displayName="Stick",R.__docgenInfo={description:"",displayName:"Stick",props:{onClick:{defaultValue:null,description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`,name:"onClick",required:!1,type:{name:"((ref: MutableRefObject<HTMLSpanElement | null>) => void)"}},id:{defaultValue:null,description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"Type discriminator representing the elements that extent this base",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`,name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"See preset defaults to see what the fallbacks are for missing attributes",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},posId:{defaultValue:null,description:"Preset position key or 'custom' to define `customPos`",name:"posId",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"custom"'},{value:'"panik"'},{value:'"pointL"'},{value:'"pointR"'},{value:'"sitL"'},{value:'"walkL"'},{value:'"walkR"'}]}},customPos:{defaultValue:null,description:"Ignored unless posId === 'custom'",name:"customPos",required:!1,type:{name:"StickPosition"}},children:{defaultValue:null,description:"@deprecated use childProps instead",name:"children",required:!0,type:{name:"TextBubbleProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Stick/Stick.tsx#Stick"]={docgenInfo:R.__docgenInfo,name:"Stick",path:"src/components/Stick/Stick.tsx#Stick"})}catch{}const z="50vmin",le={childProps:[],color:y.color,type:"comic",bgColor:"transparent",coord:{x:"0",y:"0"},dimensions:{width:z,height:z,thickness:y.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,scenes:[],layout:[]};const F="100%",oe={childProps:[],type:"scene",bgColor:"transparent",coord:{x:"0",y:"0"},color:y.color,dimensions:{width:F,height:F,thickness:y.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,sticks:[]},V="h",E="w",w="0%",ce={C:{x:v(h(E),2),y:v(h(V),2)},SW:{x:w,y:h(V)},W:{x:w,y:v(h(V),2)},NW:{x:w,y:w},N:{x:v(h(E),2),y:w},NE:{x:h(E),y:w},E:{x:h(E),y:v(h(V),2)},SE:{x:h(E),y:h(V)},S:{x:v(h(E),2),y:h(V)}};const L=({id:e="scene",bgColor:n,childProps:a,color:l,dimensions:t,lineStyle:o,sticks:r,onClick:s})=>{const{width:i,height:d,thickness:g}=t!=null?t:oe.dimensions,u=K({width:i,height:d,thickness:g,bgColor:n,color:l});return m("div",{className:`${o!=null?o:""} scene`,style:u,id:e||void 0,children:[...a!=null?a:[],...r!=null?r:[]].filter(({type:p})=>p==="stick").map((p,C)=>{const k={bgColor:n,color:l,lineStyle:o,...p};return H.exports.createElement(ae,{...k,onClick:s,key:`stick-${C}-${k.id}`})})})},re=x(L);try{L.displayName="Scene",L.__docgenInfo={description:"",displayName:"Scene",props:{onClick:{defaultValue:null,description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`,name:"onClick",required:!1,type:{name:"((ref: MutableRefObject<HTMLSpanElement | null>) => void)"}},id:{defaultValue:{value:"scene"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Type discriminator representing the elements that extent this base",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`,name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"See preset defaults to see what the fallbacks are for missing attributes",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},sticks:{defaultValue:null,description:"@deprecated use childProps field instead",name:"sticks",required:!1,type:{name:"StickProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Scene/Scene.tsx#Scene"]={docgenInfo:L.__docgenInfo,name:"Scene",path:"src/components/Scene/Scene.tsx#Scene"})}catch{}const B=({id:e="comic",bgColor:n,childProps:a,color:l,dimensions:t,layout:o,lineStyle:r,onClick:s,scenes:i})=>{const{width:d,height:g,thickness:u}=t!=null?t:le.dimensions,p=K({width:d,height:g,thickness:u,bgColor:n,color:l}),C=H.exports.useMemo(()=>{const k=o.map(f=>{const S=f.reduce((c,b)=>c+b,0);return f.map(c=>c/(S||1))}).flat(),_=a==null?void 0:a.filter(({type:f})=>f==="scene");return m("div",{className:"row",children:k.map((f,S)=>{var O;const c=[..._!=null?_:[],...i!=null?i:[]][S],b=c?{bgColor:n,color:l,lineStyle:r,...c,dimensions:{thickness:u,...c.dimensions,width:G("100%",f),height:v((O=t==null?void 0:t.height)!=null?O:"",o.length||1)}}:void 0;return b&&m(re,{onClick:s,...b},`scene-${S}`)})})},[t==null?void 0:t.height,o,i]);return m("div",{className:`${r!=null?r:""} comic`,style:p,id:e||void 0,children:C})},de=x(B);try{B.displayName="Comic",B.__docgenInfo={description:"",displayName:"Comic",props:{onClick:{defaultValue:null,description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`,name:"onClick",required:!1,type:{name:"((ref: MutableRefObject<HTMLSpanElement | null>) => void)"}},id:{defaultValue:{value:"comic"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Type discriminator representing the elements that extent this base",name:"type",required:!0,type:{name:"enum",value:[{value:'"common"'},{value:'"stick"'},{value:'"text"'},{value:'"scene"'},{value:'"comic"'}]}},lineStyle:{defaultValue:null,description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`,name:"lineStyle",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sketch"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},coord:{defaultValue:null,description:"",name:"coord",required:!1,type:{name:"Coordinates"}},dimensions:{defaultValue:null,description:"See preset defaults to see what the fallbacks are for missing attributes",name:"dimensions",required:!1,type:{name:"Partial<Dimensions>"}},childProps:{defaultValue:null,description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)",name:"childProps",required:!1,type:{name:"CommonProps<unknown>[]"}},scenes:{defaultValue:null,description:"@deprecated use childProps field instead",name:"scenes",required:!0,type:{name:"SceneProps[]"}},layout:{defaultValue:null,description:`Determine the composition of the scenes
Each array within \`layout\` corresponds to a row,
with each number inside corresponding to its width ratio.
Ratios per row are summed to determine the % each one takes
Ratios must be > 0`,name:"layout",required:!0,type:{name:"number[][]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Comic/Comic.tsx#Comic"]={docgenInfo:B.__docgenInfo,name:"Comic",path:"src/components/Comic/Comic.tsx#Comic"})}catch{}export{de as C,le as D,re as S,te as T,ce as a,oe as b,ae as c,y as d,M as e};
//# sourceMappingURL=Comic.a09b6cdf.js.map
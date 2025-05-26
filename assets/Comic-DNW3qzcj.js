import{a as R}from"./index-B8_3Qn-5.js";import{j as d,a as S}from"./jsx-runtime-C9hz6BAZ.js";function L(e){const n=a=>{const{onClick:r}=a,t=R.useRef(null);return r?d("span",{onClick:o=>{o.preventDefault(),o.stopPropagation(),r&&r(t)},ref:t,children:d(e,{...a})}):d(e,{...a})};return n.displayName=`clickable(${e.displayName||e.name||"Component"})`,n}const H="3rem",D={childProps:[],type:"text",bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},dimensions:{width:H,height:H,thickness:"2px"},id:"",lineStyle:"",onClick:()=>null,text:"",font:"Comic Sans MS, Comic Sans, cursive",fontSize:"1.5rem",fontWeight:"normal",borderColor:"transparent",borderRadius:"40%"},_=(e,n)=>`calc(${e} * ${n})`,j=(e,n)=>`calc(${e} / ${n||1})`,A=e=>`calc(100% - var(--${e}))`,Q=e=>`${e??0}deg`,E=e=>{const{bgColor:n,color:a,width:r,height:t,thickness:i}=e;return{"--w":r,"--h":t,"--t":i,"--c":a,"--bgc":n}},B=(e,n)=>{const a=typeof e=="number"?[e]:e.slice(0,3),r={};return a.forEach((t,i)=>{const o=`--${n}-${i}`;r[o]=Q(t)}),r},U=e=>{const{bgColor:n,color:a,width:r,height:t,thickness:i,base:o,coord:l,offsets:s}=e;return{...E({bgColor:n,color:a,width:r,height:t,thickness:i}),...B(o??0,"base"),top:`calc(${(l==null?void 0:l.y)??0} - ${(s==null?void 0:s.y)??"0%"})`,left:`calc(${(l==null?void 0:l.x)??0} - ${(s==null?void 0:s.x)??"0%"})`}},X=e=>{const{font:n,fontSize:a,fontWeight:r,borderColor:t,borderRadius:i}=e;return{"--f":n,"--fs":a,"--fw":r,"--bc":t,"--br":i}},Y=e=>e,F=(e=D)=>{const{id:n,font:a,fontSize:r,fontWeight:t,bgColor:i,borderColor:o,borderRadius:l,color:s,dimensions:g,coord:k,text:f}=e,{width:p,height:w,thickness:b}={...D.dimensions,...g},q=U({width:p,height:w,thickness:b,bgColor:i,color:s,coord:k}),u=X({font:a,fontSize:r,fontWeight:t,borderColor:o,borderRadius:l}),y={...q,...u};return d("div",{className:"bubble",style:y,id:n||void 0,children:d("div",{className:"text",children:f??""})})},ee=L(F);F.__docgenInfo={description:"",methods:[],displayName:"TextBubble",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}}},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`},id:{required:!0,tsType:{name:"string"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},type:{required:!0,tsType:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}]},description:"Type discriminator representing the elements that extent this base"},lineStyle:{required:!1,tsType:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}]},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},bgColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},coord:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]}},description:""},dimensions:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>"},description:"See preset defaults to see what the fallbacks are for missing attributes"},childProps:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>"},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"},text:{required:!1,tsType:{name:"string"},description:"Text content for the bubble. Whitespaces and lines breaks are preserved"},font:{required:!1,tsType:{name:"string"},description:"Passed directly, no additional processing ensures the font is installed"},fontSize:{required:!1,tsType:{name:"string"},description:""},fontWeight:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""}}};const N="12rem",P={armPoint:{angle:[75,15]},armHeadHold:{angle:[110,80,-30]},legHalfSquat:{angle:[50,-50,90]}},c={childProps:[],children:[],bgColor:"transparent",color:"#888888",coord:{x:"0",y:"0"},customPos:{limbs:{base:[10,0,-180]}},dimensions:{width:N,height:N,thickness:"2px"},id:"",lineStyle:"",onClick:()=>null,posId:"default",type:"stick"},te={default:c.customPos,custom:{},panik:{limbs:{...c.customPos.limbs,arms:{left:P.armHeadHold,right:P.armHeadHold},legs:{left:P.legHalfSquat,right:P.legHalfSquat}},offsets:{x:"0px",y:"calc(var(--h) / -14)"}},pointL:{limbs:{...c.customPos.limbs,arms:{left:P.armPoint}}},pointR:{limbs:{...c.customPos.limbs,arms:{right:P.armPoint}}},sitL:{limbs:{...c.customPos.limbs,legs:{left:{angle:90},right:{angle:90}}},offsets:{x:"0px",y:"-3rem"}},walkL:{},walkR:{}},O=(e=c)=>{const{id:n,bgColor:a,color:r,posId:t,customPos:i,dimensions:o,coord:l,childProps:s,lineStyle:g,onClick:k}=e,f=t==="custom"&&i,{limbs:p,offsets:w}=f?i:te[t??"custom"],{width:b,height:q,thickness:u}={...c.dimensions,...o},{base:y=0,arms:m,legs:h}={...c.customPos.limbs,...p},K=U({width:b,height:q,thickness:u,bgColor:a,color:r,base:y,offsets:w,coord:l}),T=v=>{const x=v==null?void 0:v.angle,M={},C=x?B(x,"angle"):{};return d("div",{style:{...M,...C},children:d("div",{children:d("div",{})})})},J=g==="sketch"&&u?Y({"--t":_(u,1.75)}):{};return S("div",{className:`${g??""} stick`,style:K,id:n||void 0,children:[d("div",{className:"head"}),S("div",{className:"body",style:J,children:[S("div",{className:"arms",children:[T(m==null?void 0:m.left),T(m==null?void 0:m.right)]}),S("div",{className:"legs",children:[T(h==null?void 0:h.left),T(h==null?void 0:h.right)]})]}),s==null?void 0:s.map((v,x)=>{const{type:M}=v;let C=null;switch(M){case"stick":C=O;return;case"text":C=ee;break}return C&&R.createElement(C,{onClick:k,...v,key:`stickchild-${x}`})})]})},ne=L(O);O.__docgenInfo={description:"",methods:[],displayName:"Stick",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}}},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`},id:{required:!0,tsType:{name:"string"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},type:{required:!0,tsType:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}]},description:"Type discriminator representing the elements that extent this base"},lineStyle:{required:!1,tsType:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}]},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},bgColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},coord:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]}},description:""},dimensions:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>"},description:"See preset defaults to see what the fallbacks are for missing attributes"},childProps:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>"},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"},posId:{required:!1,tsType:{name:"union",raw:"'default' | 'custom' | 'panik' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'custom'"},{name:"literal",value:"'panik'"},{name:"literal",value:"'pointL'"},{name:"literal",value:"'pointR'"},{name:"literal",value:"'sitL'"},{name:"literal",value:"'walkL'"},{name:"literal",value:"'walkR'"}]},description:"Preset position key or 'custom' to define `customPos`"},customPos:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** The angles in the Stick's body */
  limbs?: LimbAngles;
  /**
   * An offset applied after the Stick's coord to further adjust placement.
   * Useful for positions like sitting to lower the stick relative to where
   * it would render if it was standing.
   */
  offsets?: Coordinates;
}`,signature:{properties:[{key:"limbs",value:{name:"signature",type:"object",raw:`{
  /** Applies to every limb that doesn't have attributes in \`arms\` or \`legs\` */
  base?: number | Array<number>;
  /** Optionally override either or both arms' angles */
  arms?: LimbsProps;
  /** Optionally override either or both legs' angles */
  legs?: LimbsProps;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!1},description:"Applies to every limb that doesn't have attributes in `arms` or `legs`"},{key:"arms",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both arms' angles"},{key:"legs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both legs' angles"}]},required:!1},description:"The angles in the Stick's body"},{key:"offsets",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1},description:`An offset applied after the Stick's coord to further adjust placement.
Useful for positions like sitting to lower the stick relative to where
it would render if it was standing.`}]}},description:"Ignored unless posId === 'custom'"},children:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"CommonProps & TextProps",elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** Text content for the bubble. Whitespaces and lines breaks are preserved */
  text?: string;
  /** Passed directly, no additional processing ensures the font is installed */
  font?: string;
  fontSize?: string;
  fontWeight?: string;
  borderColor?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1},description:"Text content for the bubble. Whitespaces and lines breaks are preserved"},{key:"font",value:{name:"string",required:!1},description:"Passed directly, no additional processing ensures the font is installed"},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}}]}],raw:"Array<TextBubbleProps>"},description:"@deprecated use childProps instead"}}};const W="50vmin",re={childProps:[],color:c.color,type:"comic",bgColor:"transparent",coord:{x:"0",y:"0"},dimensions:{width:W,height:W,thickness:c.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,scenes:[],layout:[]},I="100%",ae={childProps:[],type:"scene",bgColor:"transparent",coord:{x:"0",y:"0"},color:c.color,dimensions:{width:I,height:I,thickness:c.dimensions.thickness},id:"",lineStyle:"",onClick:()=>null,sticks:[]},$="h",z="w",G="0%",le={C:{x:j(A(z),2),y:j(A($),2)},SW:{x:G,y:A($)},N:{x:j(A(z),2),y:G}},V=({id:e="scene",bgColor:n,childProps:a,color:r,dimensions:t,lineStyle:i,sticks:o,onClick:l})=>{const{width:s,height:g,thickness:k}=t??ae.dimensions,f=E({width:s,height:g,thickness:k,bgColor:n,color:r});return d("div",{className:`${i??""} scene`,style:f,id:e||void 0,children:[...a??[],...o??[]].filter(({type:p})=>p==="stick").map((p,w)=>{const b={bgColor:n,color:r,lineStyle:i,...p};return R.createElement(ne,{...b,onClick:l,key:`stick-${w}-${b.id}`})})})},ie=L(V);V.__docgenInfo={description:"",methods:[],displayName:"Scene",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}}},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`},id:{required:!1,tsType:{name:"string"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",defaultValue:{value:"'scene'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}]},description:"Type discriminator representing the elements that extent this base"},lineStyle:{required:!1,tsType:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}]},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},bgColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},coord:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]}},description:""},dimensions:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>"},description:"See preset defaults to see what the fallbacks are for missing attributes"},childProps:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>"},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"},sticks:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`CommonProps & {
  /** Preset position key or 'custom' to define \`customPos\` */
  posId?: PosType;
  /** Ignored unless posId === 'custom' */
  customPos?: StickPosition;
  /** @deprecated use childProps instead */
  children: Array<TextBubbleProps>;
}`,elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** Preset position key or 'custom' to define \`customPos\` */
  posId?: PosType;
  /** Ignored unless posId === 'custom' */
  customPos?: StickPosition;
  /** @deprecated use childProps instead */
  children: Array<TextBubbleProps>;
}`,signature:{properties:[{key:"posId",value:{name:"union",raw:"'default' | 'custom' | 'panik' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'custom'"},{name:"literal",value:"'panik'"},{name:"literal",value:"'pointL'"},{name:"literal",value:"'pointR'"},{name:"literal",value:"'sitL'"},{name:"literal",value:"'walkL'"},{name:"literal",value:"'walkR'"}],required:!1},description:"Preset position key or 'custom' to define `customPos`"},{key:"customPos",value:{name:"signature",type:"object",raw:`{
  /** The angles in the Stick's body */
  limbs?: LimbAngles;
  /**
   * An offset applied after the Stick's coord to further adjust placement.
   * Useful for positions like sitting to lower the stick relative to where
   * it would render if it was standing.
   */
  offsets?: Coordinates;
}`,signature:{properties:[{key:"limbs",value:{name:"signature",type:"object",raw:`{
  /** Applies to every limb that doesn't have attributes in \`arms\` or \`legs\` */
  base?: number | Array<number>;
  /** Optionally override either or both arms' angles */
  arms?: LimbsProps;
  /** Optionally override either or both legs' angles */
  legs?: LimbsProps;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!1},description:"Applies to every limb that doesn't have attributes in `arms` or `legs`"},{key:"arms",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both arms' angles"},{key:"legs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both legs' angles"}]},required:!1},description:"The angles in the Stick's body"},{key:"offsets",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1},description:`An offset applied after the Stick's coord to further adjust placement.
Useful for positions like sitting to lower the stick relative to where
it would render if it was standing.`}]},required:!1},description:"Ignored unless posId === 'custom'"},{key:"children",value:{name:"Array",elements:[{name:"intersection",raw:"CommonProps & TextProps",elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** Text content for the bubble. Whitespaces and lines breaks are preserved */
  text?: string;
  /** Passed directly, no additional processing ensures the font is installed */
  font?: string;
  fontSize?: string;
  fontWeight?: string;
  borderColor?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1},description:"Text content for the bubble. Whitespaces and lines breaks are preserved"},{key:"font",value:{name:"string",required:!1},description:"Passed directly, no additional processing ensures the font is installed"},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}}]}],raw:"Array<TextBubbleProps>",required:!0},description:"@deprecated use childProps instead"}]}}]}],raw:"Array<StickProps>"},description:"@deprecated use childProps field instead"}}};const Z=({id:e="comic",bgColor:n,childProps:a,color:r,dimensions:t,layout:i,lineStyle:o,onClick:l,scenes:s})=>{const{width:g,height:k,thickness:f}=t??re.dimensions,p=E({width:g,height:k,thickness:f,bgColor:n,color:r}),w=R.useMemo(()=>{const b=i.map(u=>{const y=u.reduce((m,h)=>m+h,0);return u.map(m=>m/(y||1))}).flat(),q=a==null?void 0:a.filter(({type:u})=>u==="scene");return d("div",{className:"row",children:b.map((u,y)=>{const m=[...q??[],...s??[]][y],h=m?{bgColor:n,color:r,lineStyle:o,...m,dimensions:{thickness:f,...m.dimensions,width:_("100%",u),height:j((t==null?void 0:t.height)??"",i.length||1)}}:void 0;return h&&d(ie,{onClick:l,...h},`scene-${y}`)})})},[t==null?void 0:t.height,i,s]);return d("div",{className:`${o??""} comic`,style:p,id:e||void 0,children:w})},me=L(Z);Z.__docgenInfo={description:"",methods:[],displayName:"Comic",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}}},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`},id:{required:!1,tsType:{name:"string"},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1",defaultValue:{value:"'comic'",computed:!1}},type:{required:!0,tsType:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}]},description:"Type discriminator representing the elements that extent this base"},lineStyle:{required:!1,tsType:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}]},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},bgColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},coord:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]}},description:""},dimensions:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>"},description:"See preset defaults to see what the fallbacks are for missing attributes"},childProps:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>"},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"},scenes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`CommonProps & {
  /** @deprecated use childProps field instead */
  sticks?: Array<StickProps>;
}`,elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** @deprecated use childProps field instead */
  sticks?: Array<StickProps>;
}`,signature:{properties:[{key:"sticks",value:{name:"Array",elements:[{name:"intersection",raw:`CommonProps & {
  /** Preset position key or 'custom' to define \`customPos\` */
  posId?: PosType;
  /** Ignored unless posId === 'custom' */
  customPos?: StickPosition;
  /** @deprecated use childProps instead */
  children: Array<TextBubbleProps>;
}`,elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** Preset position key or 'custom' to define \`customPos\` */
  posId?: PosType;
  /** Ignored unless posId === 'custom' */
  customPos?: StickPosition;
  /** @deprecated use childProps instead */
  children: Array<TextBubbleProps>;
}`,signature:{properties:[{key:"posId",value:{name:"union",raw:"'default' | 'custom' | 'panik' | 'pointL' | 'pointR' | 'sitL' | 'walkL' | 'walkR'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'custom'"},{name:"literal",value:"'panik'"},{name:"literal",value:"'pointL'"},{name:"literal",value:"'pointR'"},{name:"literal",value:"'sitL'"},{name:"literal",value:"'walkL'"},{name:"literal",value:"'walkR'"}],required:!1},description:"Preset position key or 'custom' to define `customPos`"},{key:"customPos",value:{name:"signature",type:"object",raw:`{
  /** The angles in the Stick's body */
  limbs?: LimbAngles;
  /**
   * An offset applied after the Stick's coord to further adjust placement.
   * Useful for positions like sitting to lower the stick relative to where
   * it would render if it was standing.
   */
  offsets?: Coordinates;
}`,signature:{properties:[{key:"limbs",value:{name:"signature",type:"object",raw:`{
  /** Applies to every limb that doesn't have attributes in \`arms\` or \`legs\` */
  base?: number | Array<number>;
  /** Optionally override either or both arms' angles */
  arms?: LimbsProps;
  /** Optionally override either or both legs' angles */
  legs?: LimbsProps;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!1},description:"Applies to every limb that doesn't have attributes in `arms` or `legs`"},{key:"arms",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both arms' angles"},{key:"legs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},{name:"signature",type:"object",raw:`{
  /**
   * The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
   * e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
   * 30 degrees between the upper arm and the body (shoulder)
   * 105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
   * -45 degrees between the lower arm and the hand (wrist)
   * Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)
   */
  angle: number | Array<number>;
}`,signature:{properties:[{key:"angle",value:{name:"union",raw:"number | Array<number>",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],required:!0},description:`The first 3 angles (in degrees) will affect a limb's first three joints starting from the body
e.g.: On an arm, the values [30, 105, -45] would look like holding the hand horizontal with the elbow bent, or:
30 degrees between the upper arm and the body (shoulder)
105 degrees between the lower and upper arms (elbow) - Note: don't think about the anatomy of it
-45 degrees between the lower arm and the hand (wrist)
Note that angles are transitive: the sum of all angles equals the angle between the body and the hand (90 deg)`}]}}],raw:"Record<Side, LimbAngleProps>"}],raw:"Partial<Record<Side, LimbAngleProps>>",required:!1},description:"Optionally override either or both legs' angles"}]},required:!1},description:"The angles in the Stick's body"},{key:"offsets",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1},description:`An offset applied after the Stick's coord to further adjust placement.
Useful for positions like sitting to lower the stick relative to where
it would render if it was standing.`}]},required:!1},description:"Ignored unless posId === 'custom'"},{key:"children",value:{name:"Array",elements:[{name:"intersection",raw:"CommonProps & TextProps",elements:[{name:"intersection",raw:`Clickable & {
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Callback on element click returning ref to a wrapper around
   * the React Element clicked.
   */
  onClick?: (ref: MutableRefObject<HTMLSpanElement | null>) => void;
}`,signature:{properties:[{key:"onClick",value:{name:"signature",type:"function",raw:"(ref: MutableRefObject<HTMLSpanElement | null>) => void",signature:{arguments:[{type:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLSpanElement | null",elements:[{name:"HTMLSpanElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLSpanElement | null>"},name:"ref"}],return:{name:"void"}},required:!1},description:`Callback on element click returning ref to a wrapper around
the React Element clicked.`}]}},{name:"signature",type:"object",raw:`{
  /** Will be prepended by the parent's id e.g. comic-scene1-stick2-text1 */
  id: string;
  /** Type discriminator representing the elements that extent this base */
  type: 'common' | 'stick' | 'text' | 'scene' | 'comic';
  /**
   * Affects the texture of the stroke for the drawn element,
   * with 'sketch' distorting straight lines/angles for a more natural look
   */
  lineStyle?: 'sketch' | '';
  bgColor?: string;
  color?: string;
  coord?: Coordinates;
  /** See preset defaults to see what the fallbacks are for missing attributes */
  dimensions?: Partial<Dimensions>;
  /** Generic array of children of either a predefined type or CommonProps itself (for multiple types) */
  childProps?: Array<T extends CommonProps ? T : CommonProps>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Will be prepended by the parent's id e.g. comic-scene1-stick2-text1"},{key:"type",value:{name:"union",raw:"'common' | 'stick' | 'text' | 'scene' | 'comic'",elements:[{name:"literal",value:"'common'"},{name:"literal",value:"'stick'"},{name:"literal",value:"'text'"},{name:"literal",value:"'scene'"},{name:"literal",value:"'comic'"}],required:!0},description:"Type discriminator representing the elements that extent this base"},{key:"lineStyle",value:{name:"union",raw:"'sketch' | ''",elements:[{name:"literal",value:"'sketch'"},{name:"literal",value:"''"}],required:!1},description:`Affects the texture of the stroke for the drawn element,
with 'sketch' distorting straight lines/angles for a more natural look`},{key:"bgColor",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"coord",value:{name:"signature",type:"object",raw:`{
  /** Calculated from the left */
  x: string;
  /** Calculated from the top */
  y: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!0},description:"Calculated from the left"},{key:"y",value:{name:"string",required:!0},description:"Calculated from the top"}]},required:!1}},{key:"dimensions",value:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  width: string;
  height: string;
  /** Determines the thickness of the lines in the object */
  thickness: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}},{key:"thickness",value:{name:"string",required:!0},description:"Determines the thickness of the lines in the object"}]}}],raw:"Partial<Dimensions>",required:!1},description:"See preset defaults to see what the fallbacks are for missing attributes"},{key:"childProps",value:{name:"Array",elements:[{name:"unknown"}],raw:"Array<T extends CommonProps ? T : CommonProps>",required:!1},description:"Generic array of children of either a predefined type or CommonProps itself (for multiple types)"}]}}]},{name:"signature",type:"object",raw:`{
  /** Text content for the bubble. Whitespaces and lines breaks are preserved */
  text?: string;
  /** Passed directly, no additional processing ensures the font is installed */
  font?: string;
  fontSize?: string;
  fontWeight?: string;
  borderColor?: string;
  borderRadius?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1},description:"Text content for the bubble. Whitespaces and lines breaks are preserved"},{key:"font",value:{name:"string",required:!1},description:"Passed directly, no additional processing ensures the font is installed"},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}}]}}]}],raw:"Array<TextBubbleProps>",required:!0},description:"@deprecated use childProps instead"}]}}]}],raw:"Array<StickProps>",required:!1},description:"@deprecated use childProps field instead"}]}}]}],raw:"Array<SceneProps>"},description:"@deprecated use childProps field instead"},layout:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"Array<number>"}],raw:"Array<Array<number>>"},description:`Determine the composition of the scenes
Each array within \`layout\` corresponds to a row,
with each number inside corresponding to its width ratio.
Ratios per row are summed to determine the % each one takes
Ratios must be > 0`}}};export{me as C,re as D,ie as S,ee as T,le as a,ae as b,ne as c,c as d,D as e};

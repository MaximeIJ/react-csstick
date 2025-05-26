var u={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i;function d(){if(i)return e;i=1;var R=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function x(j,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var n in r)n!=="key"&&(t[n]=r[n])}else t=r;return r=t.ref,{$$typeof:R,type:j,key:s,ref:r!==void 0?r:null,props:t}}return e.Fragment=v,e.jsx=x,e.jsxs=x,e}var o;function l(){return o||(o=1,u.exports=d()),u.exports}var a=l();const p=a.jsx,E=a.jsxs;export{E as a,p as j};

import{r as o,j as t}from"./index-8175f80a.js";const b=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function v(){const[d,m]=o.useState(["#FF0000","#00FF00","#0000FF"]),[a,h]=o.useState("#FF0000"),[F,l]=o.useState(!1),[n,c]=o.useState(!1),[C,i]=o.useState([!1,!1,!1]),u=b;var r=["#","#","#"];for(let e=0;e<3;e++)for(let s=0;s<6;s++)r[e]+=u[Math.floor(Math.random()*u.length)];function j(e,s){l(!0),setTimeout(()=>{l(!1)},1e3),e===a?(i([!1,!1,!1]),c(!0),m(r),h(r[Math.floor(Math.random()*r.length)])):(i(x=>{const f=[...x];return f[s]=!0,f}),c(!1))}return t.jsxs(t.Fragment,{children:[F&&t.jsx("div",{className:n?"answer green":"answer",children:n?"Correct!":"False!"}),t.jsxs("div",{className:"colorGame",children:[t.jsx("div",{className:"color",style:{backgroundColor:a}}),t.jsx("div",{children:d.map((e,s)=>t.jsx("button",{disabled:C[s],className:"button",onClick:()=>{j(e,s)},children:e},s))})]})]})}export{v as default};

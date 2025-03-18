import{r as o,ag as y,c as p,j as e}from"./index-C2iY12u9.js";import{M as P}from"./index-Dq2v8-oy.js";import{ab as b}from"./toString-DHyRyMxG.js";import{m as M}from"./Views-DVTSfLY6.js";import{b as H}from"./useRootClose-CBf41JAC.js";const C=o.createContext({}),D=C.Provider,S=C.Consumer,N=o.forwardRef((a,s)=>{const{children:l,className:t,defaultActiveKeys:r=[],defaultExpandedKeys:d=[],menuItemHeight:u=40,onSelect:n,sideCollapsed:i=!1,variant:c="light",...x}=a,m="menu",{themeColor:f,primaryColorLevel:h}=y(),v=p(m,c==="themed"?`bg-${f}-${h} ${m}-${c}`:`${m}-${c}`,t);return e.jsx("nav",{ref:s,className:v,...x,children:e.jsx(D,{value:{onSelect:n,menuItemHeight:u,variant:c,sideCollapsed:i,defaultExpandedKeys:d,defaultActiveKeys:r},children:l})})});N.displayName="Menu";const I=o.createContext(null),w=I.Provider,A=I.Consumer,$=o.createContext(!1),R=$.Provider,k=$.Consumer,G=a=>{const{eventKey:s,...l}=a;return e.jsx(S,{children:t=>e.jsx(A,{children:()=>e.jsx(k,{children:()=>e.jsx(P,{menuItemHeight:t.menuItemHeight,variant:t.variant,isActive:t.defaultActiveKeys.includes(s),eventKey:s,onSelect:t.onSelect,...l})})})})};G.displayName="MenuItem";const E=a=>{const{children:s,className:l,eventKey:t,expanded:r=!1,label:d=null,onToggle:u}=a,[n,i]=o.useState(r),{variant:c,sideCollapsed:x,defaultExpandedKeys:m}=o.useContext(C),{direction:f}=y();o.useEffect(()=>{m.includes(t)&&i(!0),r!==n&&i(!0)},[r,u,t,m]);const h=v=>{typeof u=="function"&&u(!n,v),i(!n)},g=p("menu-collapse-item",`menu-collapse-item-${c}`,l);return e.jsxs("div",{className:"menu-collapse",children:[e.jsxs("div",{className:g,role:"presentation",onClick:h,children:[e.jsx("span",{className:"flex items-center",children:d}),e.jsx(M.span,{className:"text-lg mt-1",initial:{transform:"rotate(0deg)"},animate:{transform:n?"rotate(-180deg)":"rotate(0deg)"},transition:{duration:.15},children:x?null:e.jsx(b,{})})]}),e.jsx(R,{value:n,children:e.jsx(M.ul,{className:f==="rtl"?"mr-5":"ml-5",initial:{opacity:0,height:0,overflow:"hidden"},animate:{opacity:n?1:0,height:n?"auto":0},transition:{duration:.15},children:s})})]})};E.displayName="MenuCollapse";const K=a=>{const{label:s,children:l,className:t}=a,{variant:r,sideCollapsed:d}=o.useContext(C),n=p("menu-group",t),i=H("entity-header-");return e.jsxs("div",{className:n,children:[s&&!d&&e.jsx("div",{className:p("menu-title",`menu-title-${r}`),id:i,children:s}),e.jsx(w,{value:null,children:e.jsx("ul",{children:l})})]})};K.displayName="MenuGroup";const j=N;j.MenuItem=G;j.MenuCollapse=E;j.MenuGroup=K;export{j as M};

import{r as m,j as a}from"./index-C2iY12u9.js";import{B as i}from"./toString-DHyRyMxG.js";import{I as d}from"./Input-CF3VyKMy.js";import{C as x}from"./index-CgfdXKrB.js";import{d as h}from"./debounce-BrVmJBvb.js";const j=({onSearch:s,onFilter:r})=>{const[t,n]=m.useState(!1),o=h(e=>{s(e)},500),l=e=>{o(e.target.value)},c=e=>{n(e),r(e)};return a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2",children:[a.jsx(d,{className:"w-full md:w-96 md:mb-0 mb-4",size:"sm",placeholder:"Search pending complaints...",prefix:a.jsx(i,{className:"text-lg"}),onChange:l}),a.jsx("div",{className:"flex items-center",children:a.jsx(x,{checked:t,onChange:c,children:"Warranty"})})]})};export{j as P};

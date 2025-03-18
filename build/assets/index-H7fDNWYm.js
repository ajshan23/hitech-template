import{r as C,a9 as F,j as s,aa as y}from"./index-C2iY12u9.js";import{F as N,a as S,b as k,c as d,d as c}from"./formik.esm-ArP3_adF.js";import{B as l}from"./Button-D3qeit4v.js";import{A as R}from"./Alert-BUCnMLNe.js";import{P as p}from"./PasswordInput-CCSTlAEC.js";import{A}from"./ActionLink-BfJ91BkB.js";import{u as I}from"./useTimeOutMessage-CS_yp6O9.js";import{c as M,a as w,d as B}from"./index.esm-7-xCUnXA.js";import"./context-Cji_IDOW.js";import"./index-pusp267n.js";import"./Views-DVTSfLY6.js";import"./get-C0nIbHDE.js";import"./toString-DHyRyMxG.js";import"./useColorLevel-10S34ZEH.js";import"./StatusIcon-zd0QlFoJ.js";import"./CloseButton-CQqh2RdZ.js";import"./Input-CF3VyKMy.js";import"./isNil-DIAHqIoc.js";import"./useThemeClass-9zipaxgJ.js";const Y=M().shape({password:w().required("Please enter your password"),confirmPassword:w().oneOf([B("password")],"Your passwords do not match")}),$=f=>{const{disableSubmit:u=!1,className:h,signInUrl:x="/sign-in"}=f,[t,j]=C.useState(!1),[n,b]=I(),P=F(),g=async(a,e)=>{var i,m;const{password:o}=a;e(!0);try{(await y({password:o})).data&&(e(!1),j(!0))}catch(r){b(((m=(i=r==null?void 0:r.response)==null?void 0:i.data)==null?void 0:m.message)||r.toString()),e(!1)}},v=()=>{P("/sign-in")};return s.jsxs("div",{className:h,children:[s.jsx("div",{className:"mb-6",children:t?s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Reset done"}),s.jsx("p",{children:"Your password has been successfully reset"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"mb-1",children:"Set new password"}),s.jsx("p",{children:"Your new password must different to previos password"})]})}),n&&s.jsx(R,{showIcon:!0,className:"mb-4",type:"danger",children:n}),s.jsx(N,{initialValues:{password:"123Qwe1",confirmPassword:"123Qwe1"},validationSchema:Y,onSubmit:(a,{setSubmitting:e})=>{u?e(!1):g(a,e)},children:({touched:a,errors:e,isSubmitting:o})=>s.jsx(S,{children:s.jsxs(k,{children:[t?s.jsx(l,{block:!0,variant:"solid",type:"button",onClick:v,children:"Continue"}):s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Password",invalid:e.password&&a.password,errorMessage:e.password,children:s.jsx(c,{autoComplete:"off",name:"password",placeholder:"Password",component:p})}),s.jsx(d,{label:"Confirm Password",invalid:e.confirmPassword&&a.confirmPassword,errorMessage:e.confirmPassword,children:s.jsx(c,{autoComplete:"off",name:"confirmPassword",placeholder:"Confirm Password",component:p})}),s.jsx(l,{block:!0,loading:o,variant:"solid",type:"submit",children:o?"Submiting...":"Submit"})]}),s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("span",{children:"Back to "}),s.jsx(A,{to:x,children:"Sign in"})]})]})})})]})},es=()=>s.jsx($,{disableSubmit:!1});export{es as default};

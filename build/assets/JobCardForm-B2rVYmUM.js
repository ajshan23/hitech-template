import{r as x,j as e,a7 as S,ah as E,ai as M}from"./index-BM13tXlW.js";import{u as D,c as g,d,F as P,a as $,b as q}from"./formik.esm-CjXDcxR1.js";import{B as w}from"./Button-mPLf3e2P.js";import{S as T}from"./StickyFooter-B1QkQ1Sw.js";import{c as z,a as h,e as j,f as N,b as J,g as K}from"./index.esm-CsHsAGHu.js";import{t as A,N as C}from"./toast-Du1XL2BS.js";import{A as v}from"./AdaptableCard-S0V3F3D9.js";import{I as F}from"./Input-BDyFHEHH.js";import"./Alert-CmxhFRv7.js";import"./index-Bqch-tRy.js";import"./Badge-CjbLqAKu.js";import"./index-cpvdiBaZ.js";import"./Card-Bu1MVQSg.js";import"./index-D7naHzVB.js";import"./index-vCm1pUfs.js";import"./Dialog-BrvweEo1.js";import"./Drawer-BVIdsEV9.js";import"./index-CmGk0WUA.js";import"./useRootClose-D1KFPgnL.js";import"./index-BjiutrA3.js";import"./index-Cxm45JOp.js";import"./Skeleton-CiBPwE_V.js";import"./ScrollBar-D0FgHD4H.js";import"./index-CgKH22AO.js";import"./Select-wVU8qQSS.js";import"./index-Co_XQlG1.js";import"./Tag-h1QHZ3MK.js";import{U as V}from"./Upload-D0HX0Acz.js";import{J as B}from"./JobCardMachineDetailsFields-Dngmf7GU.js";import"./context-BsDA0hJO.js";import"./index-DjY4Mmwk.js";import"./Views-C55FHhfo.js";import"./get-DaIh6SQK.js";import"./toString-DsRmm2zR.js";import"./useColorLevel-10S34ZEH.js";import"./StatusIcon-Bgt-qPvL.js";import"./CloseButton-BQ2-rMGt.js";import"./chainedFunction-BxZSneMW.js";import"./isNil-Da3VpJ5R.js";import"./useControllableState-DRbqptMX.js";import"./_baseIsEqual-C6NqMIho.js";import"./_getPrototype-Cl_NgycI.js";import"./index-NXaP3oL6.js";import"./index-Chjiymov.js";import"./index-C2uHdBR5.js";import"./index-B3W0xuVG.js";const I=k=>{const{touched:u,errors:o,values:a}=k,{setFieldValue:n}=D(),p=x.useRef(null),f=a.phoneNumbers||[],y=(b,i)=>{if(b.key==="Enter"){b.preventDefault();{const m=document.querySelector(`[name="${i}"]`);m==null||m.focus()}}};return x.useEffect(()=>{p.current&&(p.current.style.height="auto",p.current.style.height=`${p.current.scrollHeight}px`)},[a.customerAddress]),e.jsxs(v,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Customer Details"}),e.jsx("p",{className:"mb-6",children:"Section to configure customer information"}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-6",children:"Fields marked with * are required"}),e.jsx(g,{label:"Customer Name *",invalid:!!o.customerName&&u.customerName,errorMessage:o.customerName,children:e.jsx(d,{type:"text",autoComplete:"off",name:"customerName",placeholder:"Customer Name",component:F,onKeyDown:b=>y(b,"customerAddress")})}),e.jsx(g,{label:"Customer Address *",invalid:!!o.customerAddress&&u.customerAddress,errorMessage:o.customerAddress,children:e.jsx(d,{as:"textarea",name:"customerAddress",placeholder:"Customer Address",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:p,style:{overflow:"hidden",resize:"none"}})}),e.jsxs(g,{label:"Phone Numbers *",invalid:!!o.phoneNumbers&&u.phoneNumbers,children:[f.map((b,i)=>e.jsx(d,{type:"tel",autoComplete:"tel",name:`phoneNumbers[${i}]`,placeholder:`Phone Number ${i+1}`,component:F,className:"mb-2"},i)),e.jsx(w,{size:"sm",type:"button",onClick:()=>n("phoneNumbers",[...f,""]),children:"Add Phone Number"})]})]})},H=k=>{const{touched:u,errors:o}=k,{values:a,setFieldValue:n}=D(),p=x.useRef(null),f=x.useRef(null),y=x.useRef(null),b=x.useRef(null),i=(t,r)=>{if(t.key==="Enter"){if(t.shiftKey)return;if(t.preventDefault(),r){const s=document.querySelector(`[name="${r}"]`);s==null||s.focus()}}},m=t=>{t.current&&(t.current.style.height="auto",t.current.style.height=`${t.current.scrollHeight}px`)};return x.useEffect(()=>m(p),[a.works]),x.useEffect(()=>m(f),[a.spares]),x.useEffect(()=>m(y),[a.industrialworks]),x.useEffect(()=>m(b),[a.others]),e.jsxs(v,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Work Details"}),e.jsx("p",{className:"mb-6",children:"Section to configure work information"}),e.jsx(g,{label:"Works",invalid:!!o.works&&u.works,errorMessage:o.works,children:e.jsx(d,{as:"textarea",name:"works",placeholder:"Describe the works to be done",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:p,onKeyDown:t=>i(t,"spares"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(g,{label:"Spares",invalid:!!o.spares&&u.spares,errorMessage:o.spares,children:e.jsx(d,{as:"textarea",name:"spares",placeholder:"List the spares required",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:f,onKeyDown:t=>i(t,"industrialworks"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(g,{label:"Industrial Works",invalid:!!o.industrialworks&&u.industrialworks,errorMessage:o.industrialworks,children:e.jsx(d,{as:"textarea",name:"industrialworks",placeholder:"Describe any industrial works",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:y,onKeyDown:t=>i(t,"others"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(g,{label:"Others",invalid:!!o.others&&u.others,errorMessage:o.others,children:e.jsx(d,{as:"textarea",name:"others",placeholder:"Any other details",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:b,onKeyDown:t=>i(t),style:{overflow:"hidden",resize:"none"}})}),e.jsx(g,{label:"Select Additional Fittings",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"fan",name:"attachments",value:"fan",checked:a.attachments.includes("fan"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"fan",className:"text-gray-800 dark:text-white",children:"Fan"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"fan_cover",name:"attachments",value:"fan cover",checked:a.attachments.includes("fan cover"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"fan_cover",className:"text-gray-800 dark:text-white",children:"Fan Cover"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"terminal",name:"attachments",value:"terminal",checked:a.attachments.includes("terminal"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"terminal",className:"text-gray-800 dark:text-white",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"terminal_box",name:"attachments",value:"terminal box",checked:a.attachments.includes("terminal box"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"terminal_box",className:"text-gray-800 dark:text-white",children:"Terminal Box"})]})]}),e.jsxs("div",{className:"flex flex-row gap-4 mt-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"pulli",name:"attachments",value:"pulli",checked:a.attachments.includes("pulli"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"pulli",className:"text-gray-800 dark:text-white",children:"Pulli"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"avr",name:"attachments",value:"AVR",checked:a.attachments.includes("AVR"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"avr",className:"text-gray-800 dark:text-white",children:"AVR"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"diode",name:"attachments",value:"diode",checked:a.attachments.includes("diode"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"diode",className:"text-gray-800 dark:text-white",children:"Diode"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"grill",name:"attachments",value:"grill",checked:a.attachments.includes("grill"),onChange:t=>{const{value:r,checked:s}=t.target,l=s?[...a.attachments,r]:a.attachments.filter(c=>c!==r);n("attachments",l)},className:"mr-2"}),e.jsx("label",{htmlFor:"grill",className:"text-gray-800 dark:text-white",children:"Grill"})]})]})]})})]})},L=k=>{const u=(o,a)=>{if(!o||o.length===0)return"Please upload a file!";const n=o[0],p=n.type.startsWith("image/"),f=n.type==="application/pdf";return!p&&!f?"Please upload an image or PDF file!":n.size/1024/1024<=2?!0:"File size must be less than 2MB!"};return e.jsxs(v,{className:"mb-4",children:[e.jsx("h5",{children:"Job Card Files"}),e.jsx("p",{className:"mb-6",children:"Add or change files for the job card"}),e.jsx(g,{children:e.jsx(d,{name:"images",children:({field:o,form:a})=>e.jsx(V,{draggable:!0,beforeUpload:u,onChange:n=>{a.setFieldValue(o.name,n)},children:e.jsxs("div",{className:"my-16 text-center",children:[e.jsxs("p",{className:"font-semibold",children:[e.jsxs("span",{className:"text-gray-800 dark:text-white",children:["Drop your file here, or"," "]}),e.jsx("span",{className:"text-blue-500",children:"browse"})]}),e.jsx("p",{className:"mt-1 opacity-60 dark:text-white",children:"Support: jpeg, png, pdf"})]})})})})]})},W=z().shape({customerName:h().required("Customer Name is required"),customerAddress:h().required("Customer Address is required"),phoneNumbers:j().of(h().required("Phone Number is required")).min(1,"At least one phone number is required"),Make:h().required("Make is required"),HP:N().nullable(),KVA:N().nullable(),RPM:N().nullable(),Type:h().nullable(),Frame:h().nullable(),SrNo:h().nullable(),DealerName:h().nullable(),DealerNumber:h().nullable(),works:h().nullable(),spares:h().nullable(),industrialworks:h().nullable(),attachments:j().of(h()),warranty:J().nullable(),others:h().nullable(),images:j().of(K())}),_=x.forwardRef((k,u)=>{const{type:o,onDiscard:a}=k,n=S(),[p,f]=x.useState(!1),y={customerName:"",customerAddress:"",phoneNumbers:[""],Make:"",HP:void 0,KVA:void 0,RPM:void 0,Type:"",Frame:"",SrNo:"",DealerName:"",DealerNumber:"",works:"",spares:"",industrialworks:"",attachments:[],warranty:!1,others:"",images:[]},b=async(i,{setSubmitting:m})=>{m(!0),f(!0);const t=new FormData;Object.keys(i).forEach(r=>{const s=i[r];if(r==="attachments"&&Array.isArray(s))s.forEach(l=>{t.append("attachments",l)});else if(r==="images"&&Array.isArray(s))s.forEach(l=>{t.append("files",l)});else if(r==="phoneNumbers"){const l=typeof s=="string"?s.split(","):Array.isArray(s)?s:[];l.length>0&&l.forEach((c,R)=>{t.append(`phoneNumbers[${R}]`,c)})}else s!=null&&t.append(r,s.toString())});try{if((await E.post(`${M}/jobcards`,t,{headers:{"Content-Type":"multipart/form-data"}})).status!==201)throw new Error("Failed to create job card");A.push(e.jsx(C,{title:"Job Card Created",type:"success",duration:2500,children:"Job Card created successfully."}),{placement:"top-center"}),n("/sales/jobcard-list")}catch(r){console.error("Error creating job card:",r),A.push(e.jsx(C,{title:"Error",type:"danger",duration:2500,children:"Failed to create job card. Please try again."}),{placement:"top-center"})}finally{m(!1)}};return e.jsx(e.Fragment,{children:e.jsx(P,{innerRef:u,initialValues:y,validationSchema:W,onSubmit:b,children:({values:i,touched:m,errors:t,isSubmitting:r})=>(p&&(t.customerName||t.customerAddress||t.phoneNumbers||t.Make)&&(window.scrollTo({top:0,behavior:"smooth"}),f(!1)),e.jsx($,{children:e.jsxs(q,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx(I,{touched:m,errors:t,values:i}),e.jsx(B,{touched:m,errors:t,values:i}),e.jsx(H,{touched:m,errors:t})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx(L,{values:{images:i.images}})})]}),e.jsxs(T,{className:"-mx-8 px-8 flex items-center justify-between py-4",stickyClass:"border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",children:[e.jsx("div",{children:e.jsx(w,{size:"sm",className:"ltr:mr-3 rtl:ml-3",type:"button",onClick:a,children:"Discard"})}),e.jsx("div",{className:"md:flex items-center",children:e.jsx(w,{size:"sm",variant:"solid",loading:r,type:"submit",children:"Create Job Card"})})]})]})}))})})});_.displayName="JobCardForm";export{_ as default};

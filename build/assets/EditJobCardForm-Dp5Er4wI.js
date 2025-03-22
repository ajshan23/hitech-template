import{j as e,r as u,aj as B,a7 as K,ah as M,ai as T}from"./index-DHv1yXA-.js";import{c as f,d,u as _,F as z,a as U}from"./formik.esm-x4KNxzoC.js";import{c as L,a as c,e as N,f as v,b as W,g as S}from"./index.esm-LFGhDp7J.js";import{t as w,N as F}from"./toast-OpLiu7qz.js";import{A}from"./AdaptableCard--eZME5HE.js";import{U as H}from"./Upload-BbtORN7C.js";import"./Alert-DJIoTZxy.js";import"./index-CmVeQOe5.js";import"./Badge-C-g0WcBr.js";import{B as J}from"./Button-B1sPJbu2.js";import"./index-DFV1-dQC.js";import"./Card-DdIk2Mlj.js";import"./index-CLV_f2Cv.js";import"./index-DaVwnF-D.js";import"./Dialog-DTeUBQKh.js";import"./Drawer-C5oVLCVy.js";import"./index-gi-ce0Uz.js";import"./useRootClose-DwVEEG8t.js";import{I as $}from"./Input-cPukz7Wb.js";import"./index-DQyB5Cmj.js";import"./index-OETeq4pR.js";import"./Skeleton-BvhYX4_T.js";import"./ScrollBar-DLkyk1iv.js";import"./index-Be1RGobo.js";import"./Select-BCtg_heQ.js";import"./index-TQS-sWSx.js";import"./Tag-BOf_Yihy.js";import{F as O,a as q,b as G}from"./index-CQZdcBFV.js";import{J as Q}from"./JobCardMachineDetailsFields-yFJ-rB9A.js";import"./context-Dy1SCCPB.js";import"./index-DB_gK4a9.js";import"./Views-TIXPd6WS.js";import"./get-sgx0T26Q.js";import"./toString-C1MnMNc4.js";import"./StatusIcon-CNMiiMhb.js";import"./CloseButton-C-Dut2Ee.js";import"./chainedFunction-BxZSneMW.js";import"./_baseIsEqual-CmZ2Gl91.js";import"./_getPrototype-muYxfETC.js";import"./index-BZAmOOs-.js";import"./useColorLevel-10S34ZEH.js";import"./useControllableState-CYe2JX8H.js";import"./index-DiRY_fvU.js";import"./index-Chjiymov.js";import"./isNil-QKP5f01Q.js";const X=b=>{const{values:m,setFieldValue:i}=b,n=s=>{if(!s||s.length===0)return"Please upload a file!";const t=s[0],r=t.type.startsWith("image/"),o=t.type==="application/pdf";return!r&&!o?"Please upload an image or PDF file!":t.size/1024/1024<=2?!0:"File size must be less than 2MB!"},g=(s,t)=>{console.log("New Files Added:",s),i("newFiles",s)},h=s=>{console.log("Removing File ID:",s),i("removedImages",[...m.removedImages,s]);const t=m.images.filter(r=>r._id!==s);i("images",t)},x=s=>{const t=s.fileType==="application/pdf"||s.image.toLowerCase().endsWith(".pdf");return e.jsx("div",{className:"relative group",children:t?e.jsxs("div",{className:"flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx(O,{className:"text-red-500 w-6 h-6"}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("a",{href:s.image,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate block",children:"View PDF"})}),e.jsx("button",{onClick:()=>h(s._id),className:"text-red-500 hover:text-red-700 p-1",title:"Remove file",children:e.jsx(q,{className:"w-4 h-4"})})]}):e.jsxs("div",{className:"relative group",children:[e.jsx("img",{src:s.image,alt:"Preview",className:"w-24 h-24 object-cover rounded-lg border border-gray-200 dark:border-gray-700"}),e.jsxs("div",{className:"absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-2 rounded-lg transition-opacity",children:[e.jsx("a",{href:s.image,target:"_blank",rel:"noopener noreferrer",className:"p-1 bg-white rounded-full hover:bg-gray-100",title:"View image",children:e.jsx(G,{className:"w-4 h-4 text-gray-700"})}),e.jsx("button",{onClick:()=>h(s._id),className:"p-1 bg-white rounded-full hover:bg-gray-100",title:"Remove image",children:e.jsx(q,{className:"w-4 h-4 text-red-500"})})]})]})})};return e.jsxs(A,{className:"mb-4",children:[e.jsx("h5",{children:"Job Card Files"}),e.jsx("p",{className:"mb-6",children:"Add or change files for the job card"}),e.jsx(f,{children:e.jsx(d,{name:"images",children:({field:s,form:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 mb-4",children:m.images.map(r=>e.jsx("div",{children:x(r)},r._id))}),e.jsx(H,{draggable:!0,beforeUpload:n,onChange:g,accept:".jpg,.jpeg,.png,.pdf",children:e.jsxs("div",{className:"my-16 text-center",children:[e.jsxs("p",{className:"font-semibold",children:[e.jsxs("span",{className:"text-gray-800 dark:text-white",children:["Drop your files here, or"," "]}),e.jsx("span",{className:"text-blue-500",children:"browse"})]}),e.jsx("p",{className:"mt-1 opacity-60 dark:text-white",children:"Support: jpeg, png, pdf (Max: 2MB)"})]})}),e.jsx("input",{type:"hidden",name:"removedImages",value:JSON.stringify(m.removedImages)})]})})})]})},Y=b=>{var p,j,C,D,R,E,P,I;const{touched:m,errors:i}=b,{values:n,setFieldValue:g}=_();u.useEffect(()=>{n.attachments||g("attachments",[])},[n.attachments,g]);const h=u.useRef(null),x=u.useRef(null),s=u.useRef(null),t=u.useRef(null),r=(a,k)=>{if(a.key==="Enter"){if(a.shiftKey)return;if(a.preventDefault(),k){const y=document.querySelector(`[name="${k}"]`);y==null||y.focus()}}},o=a=>{a.current&&(a.current.style.height="auto",a.current.style.height=`${a.current.scrollHeight}px`)};u.useEffect(()=>o(h),[n.works]),u.useEffect(()=>o(x),[n.spares]),u.useEffect(()=>o(s),[n.industrialworks]),u.useEffect(()=>o(t),[n.others]);const l=(a,k)=>{const y=k?[...n.attachments||[],a]:(n.attachments||[]).filter(V=>V!==a);g("attachments",y)};return e.jsxs(A,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Work Details"}),e.jsx("p",{className:"mb-6",children:"Section to configure work information"}),e.jsx(f,{label:"Works",invalid:!!i.works&&m.works,errorMessage:i.works,children:e.jsx(d,{as:"textarea",name:"works",placeholder:"Describe the works to be done",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:h,onKeyDown:a=>r(a,"spares"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(f,{label:"Spares",invalid:!!i.spares&&m.spares,errorMessage:i.spares,children:e.jsx(d,{as:"textarea",name:"spares",placeholder:"List the spares required",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:x,onKeyDown:a=>r(a,"industrialworks"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(f,{label:"Industrial Works",invalid:!!i.industrialworks&&m.industrialworks,errorMessage:i.industrialworks,children:e.jsx(d,{as:"textarea",name:"industrialworks",placeholder:"Describe any industrial works",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:s,onKeyDown:a=>r(a,"others"),style:{overflow:"hidden",resize:"none"}})}),e.jsx(f,{label:"Others",invalid:!!i.others&&m.others,errorMessage:i.others,children:e.jsx(d,{as:"textarea",name:"others",placeholder:"Any other details",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:t,onKeyDown:a=>r(a),style:{overflow:"hidden",resize:"none"}})}),e.jsx(f,{label:"Select Additional Fittings",children:e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"fan",name:"attachments",value:"fan",checked:(p=n.attachments)==null?void 0:p.includes("fan"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"fan",className:"text-gray-800 dark:text-white",children:"Fan"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"fan_cover",name:"attachments",value:"fan cover",checked:(j=n.attachments)==null?void 0:j.includes("fan cover"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"fan_cover",className:"text-gray-800 dark:text-white",children:"Fan Cover"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"terminal",name:"attachments",value:"terminal",checked:(C=n.attachments)==null?void 0:C.includes("terminal"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"terminal",className:"text-gray-800 dark:text-white",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"terminal_box",name:"attachments",value:"terminal box",checked:(D=n.attachments)==null?void 0:D.includes("terminal box"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"terminal_box",className:"text-gray-800 dark:text-white",children:"Terminal Box"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"pulli",name:"attachments",value:"pulli",checked:(R=n.attachments)==null?void 0:R.includes("pulli"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"pulli",className:"text-gray-800 dark:text-white",children:"Pulli"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"avr",name:"attachments",value:"AVR",checked:(E=n.attachments)==null?void 0:E.includes("AVR"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"avr",className:"text-gray-800 dark:text-white",children:"AVR"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"diode",name:"attachments",value:"diode",checked:(P=n.attachments)==null?void 0:P.includes("diode"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"diode",className:"text-gray-800 dark:text-white",children:"Diode"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(d,{type:"checkbox",id:"grill",name:"attachments",value:"grill",checked:(I=n.attachments)==null?void 0:I.includes("grill"),onChange:a=>{l(a.target.value,a.target.checked)},className:"mr-2"}),e.jsx("label",{htmlFor:"grill",className:"text-gray-800 dark:text-white",children:"Grill"})]})]})})]})},Z=b=>{const{touched:m,errors:i,values:n,setFieldValue:g}=b,h=u.useRef(null),x=n.phoneNumber||[],s=(t,r)=>{if(t.key==="Enter"){t.preventDefault();{const o=document.querySelector(`[name="${r}"]`);o==null||o.focus()}}};return u.useEffect(()=>{h.current&&(h.current.style.height="auto",h.current.style.height=`${h.current.scrollHeight}px`)},[n.customerAddress]),e.jsxs(A,{divider:!0,className:"mb-4",children:[e.jsx("h5",{children:"Customer Details"}),e.jsx("p",{className:"mb-6",children:"Section to configure customer information"}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-6",children:"Fields marked with * are required"}),e.jsx(f,{label:"Customer Name *",invalid:!!i.customerName&&m.customerName,errorMessage:i.customerName,children:e.jsx(d,{type:"text",autoComplete:"off",name:"customerName",placeholder:"Customer Name",component:$,onKeyDown:t=>s(t,"customerAddress")})}),e.jsx(f,{label:"Customer Address *",invalid:!!i.customerAddress&&m.customerAddress,errorMessage:i.customerAddress,children:e.jsx(d,{as:"textarea",name:"customerAddress",placeholder:"Customer Address",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400",rows:1,innerRef:h,style:{overflow:"hidden",resize:"none"}})}),e.jsxs(f,{label:"Phone Numbers *",invalid:!!i.phoneNumber&&m.phoneNumber,children:[x.map((t,r)=>e.jsx(d,{type:"tel",autoComplete:"tel",name:`phoneNumber[${r}]`,placeholder:`Phone Number ${r+1}`,component:$,className:"mb-2"},r)),e.jsx(J,{size:"sm",type:"button",onClick:()=>g("phoneNumber",[...x,""]),children:"Add Phone Number"})]})]})},ee=L().shape({customerName:c().required("Customer Name is required"),customerAddress:c().required("Customer Address is required"),phoneNumber:N().of(c().required("Phone Number is required")).min(1,"At least one phone number is required"),Make:c().nullable(),HP:v().nullable(),KVA:v().nullable(),RPM:v().nullable(),Type:c().nullable(),Frame:c().nullable(),SrNo:c().nullable(),DealerName:c().nullable(),DealerNumber:c().nullable(),works:c().nullable(),spares:c().nullable(),industrialworks:c().nullable(),attachments:N().of(c()),warranty:W(),others:c().nullable(),images:N().of(S()),invoiceNumber:c().nullable(),removedImages:N().of(c()),newFiles:N().of(S())}),We=()=>{const{id:b}=B(),m=K(),[i,n]=u.useState({customerName:"",customerAddress:"",phoneNumber:[""],Make:"",HP:void 0,KVA:void 0,RPM:void 0,Type:"",Frame:"",SrNo:"",DealerName:"",DealerNumber:"",works:"",spares:"",industrialworks:"",attachments:[],warranty:!1,others:"",images:[],invoiceNumber:"",removedImages:[],newFiles:[]}),[g,h]=u.useState(!1);u.useEffect(()=>{b&&(async()=>{try{const r=(await M.get(`${T}/jobcards/${b}`)).data.data;h(r.jobCardStatus==="Billed"),n({customerName:r.customerName,customerAddress:r.customerAddress,phoneNumber:r.phoneNumber||[""],Make:r.Make,HP:r.HP,KVA:r.KVA,RPM:r.RPM,Type:r.Type,Frame:r.Frame,SrNo:r.SrNo,DealerName:r.DealerName,DealerNumber:r.DealerNumber,works:r.works,spares:r.spares,industrialworks:r.industrialworks,attachments:r.attachments||[],warranty:r.warranty,others:r.others,images:r.images.map(o=>({...o,fileType:o.fileType||(o.image.toLowerCase().endsWith(".pdf")?"application/pdf":"image/jpeg")}))||[],invoiceNumber:r.invoiceNumber,removedImages:[],newFiles:[]})}catch(t){console.error("Error fetching job card:",t),w.push(e.jsx(F,{title:"Error",type:"danger",duration:2500,children:"Failed to fetch job card. Please try again."}),{placement:"top-center"})}})()},[b]);const x=async(s,{setSubmitting:t})=>{t(!0);const r=new FormData;Object.keys(s).forEach(o=>{const l=s[o];o==="newFiles"&&Array.isArray(l)?l.forEach(p=>{r.append("files",p)}):o==="removedImages"&&Array.isArray(l)?l.forEach(p=>{r.append("removedImages",p)}):o==="attachments"&&Array.isArray(l)?l.forEach(p=>{r.append("attachments",p)}):o==="phoneNumber"&&Array.isArray(l)?l.forEach((p,j)=>{r.append(`phoneNumber[${j}]`,p)}):l!=null&&r.append(o,l.toString())});try{if((await M.put(`${T}/jobcards/${b}`,r,{headers:{"Content-Type":"multipart/form-data"}})).status!==200)throw new Error("Failed to update job card");w.push(e.jsx(F,{title:"Job Card Updated",type:"success",duration:2500,children:"Job card updated successfully."}),{placement:"top-center"}),m(-1)}catch(o){console.error("Error updating job card:",o),w.push(e.jsx(F,{title:"Error",type:"danger",duration:2500,children:"Failed to update job card. Please try again."}),{placement:"top-center"})}finally{t(!1)}};return e.jsx(z,{initialValues:i,validationSchema:ee,onSubmit:x,enableReinitialize:!0,children:({values:s,touched:t,errors:r,isSubmitting:o,setFieldValue:l})=>((r.customerName||r.customerAddress||r.phoneNumber)&&Object.keys(t).length>0&&window.scrollTo({top:0,behavior:"smooth"}),e.jsxs(U,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx(Z,{touched:t,errors:r,values:s,setFieldValue:l}),e.jsx(Q,{touched:t,errors:r,values:s}),e.jsx(Y,{touched:t,errors:r}),g&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"invoiceNumber",className:"block text-sm font-medium text-gray-700",children:"Invoice Number"}),e.jsx(d,{type:"text",name:"invoiceNumber",placeholder:"Invoice Number",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400"})]})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx(X,{values:{images:s.images,removedImages:s.removedImages},setFieldValue:l})})]}),e.jsx("div",{className:"mt-6",children:e.jsx(J,{variant:"solid",type:"submit",loading:o,disabled:o,children:o?"Updating...":"Update Job Card"})})]}))})};export{We as default};

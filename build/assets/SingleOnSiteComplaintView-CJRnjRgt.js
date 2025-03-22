import{r as a,aj as j,a7 as u,ah as k,ai as N,j as r,a2 as f,b as n,c as d}from"./index-DHv1yXA-.js";import{C as w,i as m}from"./Views-TIXPd6WS.js";import{D as h}from"./DoubleSidedImage-DYyqjAOL.js";import{T as o}from"./Tag-BOf_Yihy.js";import{B as b}from"./Button-B1sPJbu2.js";import{d as v,e as S,f as A}from"./index-CQZdcBFV.js";import"./context-Dy1SCCPB.js";import"./useColorLevel-10S34ZEH.js";const F=()=>{const[e,p]=a.useState(null),[i,c]=a.useState(!0),[g,x]=a.useState(null),{id:s}=j(),l=u();a.useEffect(()=>{y()},[s]);const y=async()=>{if(!s){l("/admin/onsite-complaints");return}c(!0);try{const t=await k.get(`${N}/onsite/${s}`);t.data.success?p(t.data.data):x("Failed to fetch complaint data")}catch(t){console.error(t),x("An error occurred while fetching data")}finally{c(!1)}};return g?r.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[r.jsx(h,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"Error",className:"w-48 h-48"}),r.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200",children:g})]}):r.jsxs(w,{className:"py-8",children:[r.jsx(f,{loading:i,children:!m(e)&&r.jsxs("div",{className:"max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden",children:[r.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 p-6 border-b border-gray-200 dark:border-gray-600",children:r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(v,{className:"text-blue-600 dark:text-blue-400 text-3xl"}),r.jsxs("div",{children:[r.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200",children:["Complaint #",(e==null?void 0:e.complaintNumber)||"N/A"]}),r.jsxs("div",{className:"flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400",children:[r.jsx(S,{}),r.jsx("span",{children:n(e==null?void 0:e.createdAt).format("MMM DD, YYYY")}),r.jsx(o,{className:d("rounded-full px-2 py-1 text-sm",(e==null?void 0:e.complaintStatus)==="Pending"&&"bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100",(e==null?void 0:e.complaintStatus)==="Closed"&&"bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100",(e==null?void 0:e.complaintStatus)==="Sent to Workshop"&&"bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100",(!(e!=null&&e.complaintStatus)||!["Pending","Closed","Sent to Workshop"].includes(e.complaintStatus))&&"bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"),children:(e==null?void 0:e.complaintStatus)||"Unknown"})]})]})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx(b,{variant:"solid",className:"bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md",onClick:()=>l(`/app/onsite/form/${s}`),children:"Edit"}),r.jsx(b,{variant:"default",className:"border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded-md",onClick:()=>l(-1),children:"Back"})]})]})}),r.jsxs("div",{className:"p-6 space-y-8",children:[r.jsxs("section",{className:"border-b border-gray-200 dark:border-gray-700 pb-6",children:[r.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2",children:[r.jsx(A,{className:"text-blue-600 dark:text-blue-400"})," Customer Details"]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Name:"})," ",(e==null?void 0:e.customerName)||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Address:"})," ",(e==null?void 0:e.customerAddress)||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Phone Numbers:"})," ",(e==null?void 0:e.phoneNumbers.join(", "))||"N/A"]})]})]}),r.jsxs("section",{className:"border-b border-gray-200 dark:border-gray-700 pb-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Complaint Details"}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Make:"})," ",(e==null?void 0:e.make)||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Dealer Name:"})," ",(e==null?void 0:e.dealerName)||"N/A"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Warranty Status:"})," ",r.jsx(o,{className:d("rounded-full px-2 py-1 text-sm",(e==null?void 0:e.warrantyStatus)==="Warranty"?"bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100":"bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"),children:(e==null?void 0:e.warrantyStatus)||"N/A"})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Payment Status:"})," ",r.jsx(o,{className:d("rounded-full px-2 py-1 text-sm",(e==null?void 0:e.paymentStatus)==="Pending"?"bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100":"bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"),children:(e==null?void 0:e.paymentStatus)||"N/A"})]})]})]}),(e==null?void 0:e.attendedPerson)&&r.jsxs("section",{className:"border-b border-gray-200 dark:border-gray-700 pb-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2",children:"Assigned Worker"}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("img",{src:e.attendedPerson.workerImage,alt:e.attendedPerson.workerName,className:"w-10 h-10 rounded-full object-cover"}),r.jsx("div",{children:r.jsx("p",{className:"text-gray-700 dark:text-gray-300 font-semibold",children:e.attendedPerson.workerName})})]})]}),r.jsxs("section",{className:"border-b border-gray-200 dark:border-gray-700 pb-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Reported Complaint"}),r.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:r.jsx("p",{className:"text-gray-700 dark:text-gray-300 whitespace-pre-line",children:(e==null?void 0:e.reportedComplaint)||"N/A"})})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Dates"}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Created At:"})," ",n(e==null?void 0:e.createdAt).format("MMM DD, YYYY")]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Updated At:"})," ",n(e==null?void 0:e.updatedAt).format("MMM DD, YYYY")]})]})]})]})]})}),!i&&m(e)&&r.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[r.jsx(h,{src:"/img/others/img-2.png",darkModeSrc:"/img/others/img-2-dark.png",alt:"No complaint found!",className:"w-48 h-48"}),r.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200",children:"No complaint found!"})]})]})};export{F as default};

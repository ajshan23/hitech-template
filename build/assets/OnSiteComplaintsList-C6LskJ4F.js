import{r as t,a7 as z,j as e,ah as O,ai as D}from"./index-DHv1yXA-.js";import{A as E}from"./AdaptableCard--eZME5HE.js";import{I,T as P,U as T,V as A,W as B}from"./toString-C1MnMNc4.js";import{D as K,d as R}from"./debounce-BlnRu6wQ.js";import{B as N}from"./Badge-C-g0WcBr.js";import{I as H}from"./Input-cPukz7Wb.js";import{B as f}from"./Button-B1sPJbu2.js";import{D as L}from"./Drawer-C5oVLCVy.js";import{F as M,a as U,b as _,c as w}from"./formik.esm-x4KNxzoC.js";import{C as h}from"./index-CLV_f2Cv.js";import{L as $}from"./LinkButton-EHxd7v8A.js";import"./Card-DdIk2Mlj.js";import"./Views-TIXPd6WS.js";import"./index-TQS-sWSx.js";import"./index-CQZdcBFV.js";import"./Skeleton-BvhYX4_T.js";import"./Select-BCtg_heQ.js";import"./get-sgx0T26Q.js";import"./context-Dy1SCCPB.js";import"./index-CT9EfquD.js";import"./isNil-QKP5f01Q.js";import"./useColorLevel-10S34ZEH.js";import"./index-DiRY_fvU.js";import"./index-Chjiymov.js";import"./CloseButton-C-Dut2Ee.js";import"./index-DB_gK4a9.js";import"./_baseIsEqual-CmZ2Gl91.js";import"./_getPrototype-muYxfETC.js";const q={Pending:{dotClass:"bg-amber-500"},Closed:{dotClass:"bg-emerald-500"},"Sent to Workshop":{dotClass:"bg-blue-500"}},G={Warranty:{dotClass:"bg-green-500"},"Non-Warranty":{dotClass:"bg-red-500"}},Q=({searchTerm:i,filters:r})=>{const d=t.useRef(null),c=z(),[S,b]=t.useState([]),[j,x]=t.useState(!0),[o,p]=t.useState(1),[s,g]=t.useState(10),[u,k]=t.useState(0);t.useEffect(()=>{p(1)},[i,r]),t.useEffect(()=>{(async()=>{var n,l,C;x(!0);try{const m={page:o,limit:s,searchTerm:i||""};r.warrantyStatus&&(m.warrantyStatus=r.warrantyStatus),(n=r.complaintStatus)!=null&&n.includes("Pending")&&(m.pending=!0),(l=r.complaintStatus)!=null&&l.includes("Closed")&&(m.closed=!0),(C=r.complaintStatus)!=null&&C.includes("Sent to Workshop")&&(m.sentToWorkshop=!0);const y=await O.get(`${D}/onsite`,{params:m});b(y.data.data.data),k(y.data.data.countOfDocuments)}catch(m){console.error("Error fetching complaints:",m)}finally{x(!1)}})()},[o,s,i,r]);const v=t.useMemo(()=>[{header:"Customer Name",accessorKey:"customerName",cell:a=>e.jsx("span",{className:"capitalize",children:a.row.original.customerName})},{header:"Address",accessorKey:"customerAddress"},{header:"Complaint No.",accessorKey:"complaintNumber"},{header:"Make",accessorKey:"make"},{header:"Warranty",accessorKey:"warrantyStatus",cell:a=>{var l;const n=a.row.original.warrantyStatus;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{className:((l=G[n])==null?void 0:l.dotClass)||"bg-gray-500"}),e.jsx("span",{className:"capitalize font-semibold",children:n})]})}},{header:"Status",accessorKey:"complaintStatus",cell:a=>{var l;const n=a.row.original.complaintStatus;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{className:((l=q[n])==null?void 0:l.dotClass)||"bg-gray-500"}),e.jsx("span",{className:"capitalize font-semibold",children:n})]})}},{header:"Actions",id:"actions",cell:a=>e.jsx("div",{className:"flex justify-end text-lg",children:e.jsx("span",{className:"cursor-pointer p-2 hover:text-green-500",onClick:()=>c(`/app/onsite/${a.row.original._id}`),children:e.jsx(I,{})})})}],[c]),F=a=>p(a),W=a=>{g(a),p(1)};return e.jsx(K,{ref:d,columns:v,data:S,loading:j,pagingData:{total:u,pageIndex:o,pageSize:s},onPaginationChange:F,onSelectChange:W})},V=({onSearch:i,onFilter:r})=>{const[d,c]=t.useState(!1),S=t.useRef(null),b=R(s=>{i(s)},500),j=s=>{b(s.target.value)},x=()=>c(!0),o=()=>c(!1),p=s=>{r({warrantyStatus:s.warrantyStatus||void 0,complaintStatus:s.complaintStatus.length>0?s.complaintStatus:void 0}),o()};return e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2",children:[e.jsx(H,{ref:S,className:"w-full md:w-96 md:mb-0 mb-4",size:"sm",placeholder:"Search complaints...",prefix:e.jsx(P,{className:"text-lg"}),onChange:j}),e.jsx(f,{size:"sm",className:"block lg:inline-block md:mb-0 mb-4",icon:e.jsx(T,{}),onClick:x,children:"Filter"}),e.jsx(f,{block:!0,size:"sm",icon:e.jsx(A,{}),className:"block lg:inline-block md:mb-0 mb-4",children:"Export"}),e.jsx($,{to:"/app/onsite/form",block:!0,variant:"solid",size:"sm",icon:e.jsx(B,{}),className:"block lg:inline-block md:mb-0 mb-4",children:"Add Complaint"}),e.jsx(L,{title:"Filter Complaints",isOpen:d,onClose:o,onRequestClose:o,footer:e.jsxs("div",{className:"text-right w-full",children:[e.jsx(f,{size:"sm",className:"mr-2",onClick:o,children:"Cancel"}),e.jsx(f,{size:"sm",variant:"solid",type:"submit",form:"filter-form",children:"Query"})]}),children:e.jsx(M,{initialValues:{complaintStatus:[],warrantyStatus:null},onSubmit:p,children:({values:s,setFieldValue:g})=>e.jsx(U,{id:"filter-form",children:e.jsxs(_,{children:[e.jsxs(w,{children:[e.jsx("h6",{className:"mb-4",children:"Complaint Status"}),e.jsxs(h.Group,{vertical:!0,value:s.complaintStatus,onChange:u=>g("complaintStatus",u),children:[e.jsx(h,{className:"mb-3",value:"Pending",children:"Pending"}),e.jsx(h,{className:"mb-3",value:"Closed",children:"Closed"}),e.jsx(h,{className:"mb-3",value:"Sent to Workshop",children:"Sent to Workshop"})]})]}),e.jsxs(w,{children:[e.jsx("h6",{className:"mb-4",children:"Warranty Status"}),e.jsx(h,{checked:s.warrantyStatus==="Warranty",onChange:u=>g("warrantyStatus",u?"Warranty":null),children:"Warranty"})]})]})})})})]})},we=()=>{const[i,r]=t.useState(""),[d,c]=t.useState({});return e.jsxs(E,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"On-Site Complaints"}),e.jsx(V,{onSearch:r,onFilter:c})]}),e.jsx(Q,{searchTerm:i,filters:d})]})};export{we as default};

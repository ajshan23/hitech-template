const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0zhdNVV.js","assets/VerticalMenuContent-CK3KFubY.js","assets/index-DzuwMUJk.js","assets/index-CVvgmnOh.css","assets/index-1pkQZEz6.js","assets/index-ceQsHoYg.js","assets/useRootClose-CdIiGngw.js","assets/toString-wyiJ7teT.js","assets/Views-B7C5aCBY.js","assets/isNil-fn8XfVYM.js","assets/index-Blid5lza.js","assets/chainedFunction-BxZSneMW.js","assets/index-DaxwILGT.js","assets/_getPrototype-BUYMZDCV.js","assets/SidePanel-DXeMio9T.js","assets/Drawer-DfVTzd_2.js","assets/index-DyhAhzq0.js","assets/index-Chjiymov.js","assets/CloseButton-C9u0iwLZ.js","assets/index-DBljXpvd.js","assets/context-DYzOV7Yr.js","assets/index-DNk-pEkC.js","assets/useControllableState-3FFwmPR4.js","assets/useThemeClass-Dcjf0UNN.js","assets/DoubleSidedImage-C9Ca47SF.js","assets/Select-D4hXbUsF.js","assets/get-CYTsGD9q.js","assets/Badge-tWit_D0R.js","assets/Button-wjgR3boE.js","assets/useColorLevel-10S34ZEH.js","assets/toast-CcPug4ol.js","assets/StatusIcon-f0e85OpL.js","assets/Dialog-Cd76JUN6.js","assets/debounce-DIqprdcr.js"])))=>i.map(i=>d[i]);
import{r as A,m as Re,n as ke,j as n,c as Q,H as Pe,A as ve,o as Ae,p as Ie,g as Ce,u as G,a as He,l as Me,q as De,t as $e,v as ze,w as We,_ as Ue,h as Ke,N as Fe,f as Je,G as Be,x as qe}from"./index-DzuwMUJk.js";import{w as oe}from"./SidePanel-DXeMio9T.js";import{B as Ye}from"./Button-wjgR3boE.js";import{D as Ge}from"./Dialog-Cd76JUN6.js";import{u as Qe}from"./useThemeClass-Dcjf0UNN.js";import{g as Ve,h as Xe,i as Ze,j as _e,k as et,l as tt,m as nt,n as xe,o as rt,p as at,q as it,r as st,s as ot,t as be,u as lt,v as ct,w as je,x as ut,y as dt,z as ft,A as ht,B as pt,d as gt,C as vt,D as mt,E as yt,F as Te,G as xt,I as bt,J as jt,K as Tt,L as Ot}from"./toString-wyiJ7teT.js";import{d as wt}from"./debounce-DIqprdcr.js";import{A as se}from"./index-DaxwILGT.js";import{D as V}from"./index-ceQsHoYg.js";import{D as Et}from"./Drawer-DfVTzd_2.js";import{A as D,U as $,a as F,u as Nt}from"./Views-B7C5aCBY.js";const Ct=(...d)=>{console!=null&&console.warn&&(X(d[0])&&(d[0]=`react-i18next:: ${d[0]}`),console.warn(...d))},Oe={},pe=(...d)=>{X(d[0])&&Oe[d[0]]||(X(d[0])&&(Oe[d[0]]=new Date),Ct(...d))},Se=(d,r)=>()=>{if(d.isInitialized)r();else{const l=()=>{setTimeout(()=>{d.off("initialized",l)},0),r()};d.on("initialized",l)}},ge=(d,r,l)=>{d.loadNamespaces(r,Se(d,l))},we=(d,r,l,e)=>{if(X(l)&&(l=[l]),d.options.preload&&d.options.preload.indexOf(r)>-1)return ge(d,l,e);l.forEach(a=>{d.options.ns.indexOf(a)<0&&d.options.ns.push(a)}),d.loadLanguages(r,Se(d,e))},St=(d,r,l={})=>!r.languages||!r.languages.length?(pe("i18n.languages were undefined or empty",r.languages),!0):r.hasLoadedNamespace(d,{lng:l.lng,precheck:(e,a)=>{var t;if(((t=l.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,d))return!1}}),X=d=>typeof d=="string",Lt=d=>typeof d=="object"&&d!==null,Rt=A.createContext();class kt{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(l=>{this.usedNamespaces[l]||(this.usedNamespaces[l]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Pt=(d,r)=>{const l=A.useRef();return A.useEffect(()=>{l.current=d},[d,r]),l.current},Le=(d,r,l,e)=>d.getFixedT(r,l,e),At=(d,r,l,e)=>A.useCallback(Le(d,r,l,e),[d,r,l,e]),dn=(d,r={})=>{var R,H,B,Y;const{i18n:l}=r,{i18n:e,defaultNS:a}=A.useContext(Rt)||{},t=l||e||ke();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new kt),!t){pe("You will need to pass in an i18next instance by using initReactI18next");const M=(I,U)=>X(U)?U:Lt(U)&&X(U.defaultValue)?U.defaultValue:Array.isArray(I)?I[I.length-1]:I,W=[M,{},!1];return W.t=M,W.i18n={},W.ready=!1,W}(R=t.options.react)!=null&&R.wait&&pe("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const g={...Re(),...t.options.react,...r},{useSuspense:s,keyPrefix:f}=g;let i=a||((H=t.options)==null?void 0:H.defaultNS);i=X(i)?[i]:i||["translation"],(Y=(B=t.reportNamespaces).addUsedNamespaces)==null||Y.call(B,i);const c=(t.isInitialized||t.initializedStoreOnce)&&i.every(M=>St(M,t,g)),y=At(t,r.lng||null,g.nsMode==="fallback"?i:i[0],f),x=()=>y,u=()=>Le(t,r.lng||null,g.nsMode==="fallback"?i:i[0],f),[h,p]=A.useState(x);let v=i.join();r.lng&&(v=`${r.lng}${v}`);const m=Pt(v),T=A.useRef(!0);A.useEffect(()=>{const{bindI18n:M,bindI18nStore:W}=g;T.current=!0,!c&&!s&&(r.lng?we(t,r.lng,i,()=>{T.current&&p(u)}):ge(t,i,()=>{T.current&&p(u)})),c&&m&&m!==v&&T.current&&p(u);const I=()=>{T.current&&p(u)};return M&&(t==null||t.on(M,I)),W&&(t==null||t.store.on(W,I)),()=>{T.current=!1,t&&(M==null||M.split(" ").forEach(U=>t.off(U,I))),W&&t&&W.split(" ").forEach(U=>t.store.off(U,I))}},[t,v]),A.useEffect(()=>{T.current&&c&&p(x)},[t,f,c]);const j=[h,t,c];if(j.t=h,j.i18n=t,j.ready=c,c||!c&&!s)return j;throw new Promise(M=>{r.lng?we(t,r.lng,i,()=>M()):ge(t,i,()=>M())})},fn=d=>{const{headerStart:r,headerEnd:l,headerMiddle:e,className:a,container:t}=d;return n.jsx("header",{className:Q("header",a),children:n.jsxs("div",{className:Q("header-wrapper",Pe,t&&"container mx-auto"),children:[n.jsx("div",{className:"header-action header-action-start",children:r}),e&&n.jsx("div",{className:"header-action header-action-middle",children:e}),n.jsx("div",{className:"header-action header-action-end",children:l})]})})},_={xs:"576",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},ee=(d="")=>parseInt(d.replace("px","")),It={"2xl":ee(_["2xl"]),xl:ee(_.xl),lg:ee(_.lg),md:ee(_.md),sm:ee(_.sm),xs:ee(_.xs)},Ht=()=>{const d=(t="smaller")=>{const g=window.innerWidth;return Object.fromEntries(Object.entries(It).map(([s,f])=>[s,t==="larger"?g>f:g<f]))},r=()=>({windowWidth:window.innerWidth,larger:d("larger"),smaller:d("smaller")}),[l,e]=A.useState(r()),a=()=>{const t=r();e(t)};return A.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[l.windowWidth]),l},Mt=({toggled:d,className:r})=>n.jsx("div",{className:r,children:d?n.jsx(Ve,{}):n.jsx(Xe,{})});async function hn(){return ve.fetchData({url:"/notification/count",method:"get"})}async function pn(){return ve.fetchData({url:"/notification/list",method:"get"})}async function Dt(d){return ve.fetchData({url:"/search/query",method:"post",data:d})}const $t={apps:n.jsx(Ze,{}),project:n.jsx(_e,{}),crm:n.jsx(et,{}),sales:n.jsx(tt,{}),crypto:n.jsx(nt,{}),knowledgeBase:n.jsx(xe,{}),account:n.jsx(rt,{}),uiComponents:n.jsx(at,{}),common:n.jsx(it,{}),feedback:n.jsx(st,{}),dataDisplay:n.jsx(ot,{}),forms:n.jsx(be,{}),navigation:n.jsx(lt,{}),graph:n.jsx(ct,{}),authentication:n.jsx(je,{}),signIn:n.jsx(ut,{}),signUp:n.jsx(dt,{}),forgotPassword:n.jsx(je,{}),resetPassword:n.jsx(ft,{}),pages:n.jsx(ht,{}),welcome:n.jsx(pt,{}),accessDenied:n.jsx(gt,{}),guide:n.jsx(xe,{}),documentation:n.jsx(be,{}),sharedComponentDoc:n.jsx(vt,{}),utilsDoc:n.jsx(mt,{}),changeLog:n.jsx(yt,{})};var de={exports:{}},Ee;function zt(){return Ee||(Ee=1,function(d){d.exports=function(r){var l={};function e(a){if(l[a])return l[a].exports;var t=l[a]={exports:{},id:a,loaded:!1};return r[a].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}return e.m=r,e.c=l,e.p="",e(0)}([function(r,l,e){r.exports=e(1)},function(r,l,e){Object.defineProperty(l,"__esModule",{value:!0});function a(s){return s&&s.__esModule?s:{default:s}}var t=e(2),g=a(t);l.default=g.default,r.exports=l.default},function(r,l,e){Object.defineProperty(l,"__esModule",{value:!0});var a=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var v=arguments[p];for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&(h[m]=v[m])}return h};l.default=u;function t(h){return h&&h.__esModule?h:{default:h}}function g(h,p){var v={};for(var m in h)p.indexOf(m)>=0||Object.prototype.hasOwnProperty.call(h,m)&&(v[m]=h[m]);return v}var s=e(3),f=e(4),i=t(f),c=e(14),y=e(15),x=t(y);u.propTypes={activeClassName:i.default.string,activeIndex:i.default.number,activeStyle:i.default.object,autoEscape:i.default.bool,className:i.default.string,findChunks:i.default.func,highlightClassName:i.default.oneOfType([i.default.object,i.default.string]),highlightStyle:i.default.object,highlightTag:i.default.oneOfType([i.default.node,i.default.func,i.default.string]),sanitize:i.default.func,searchWords:i.default.arrayOf(i.default.oneOfType([i.default.string,i.default.instanceOf(RegExp)])).isRequired,textToHighlight:i.default.string.isRequired,unhighlightTag:i.default.oneOfType([i.default.node,i.default.func,i.default.string]),unhighlightClassName:i.default.string,unhighlightStyle:i.default.object};function u(h){var p=h.activeClassName,v=p===void 0?"":p,m=h.activeIndex,T=m===void 0?-1:m,j=h.activeStyle,R=h.autoEscape,H=h.caseSensitive,B=H===void 0?!1:H,Y=h.className,M=h.findChunks,W=h.highlightClassName,I=W===void 0?"":W,U=h.highlightStyle,te=U===void 0?{}:U,ne=h.highlightTag,le=ne===void 0?"mark":ne,ce=h.sanitize,Z=h.searchWords,re=h.textToHighlight,q=h.unhighlightTag,ae=q===void 0?"span":q,ie=h.unhighlightClassName,ue=ie===void 0?"":ie,o=h.unhighlightStyle,b=g(h,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightTag","unhighlightClassName","unhighlightStyle"]),L=(0,s.findAll)({autoEscape:R,caseSensitive:B,findChunks:M,sanitize:ce,searchWords:Z,textToHighlight:re}),E=le,O=-1,P="",N=void 0,w=function(k){var z={};for(var K in k)z[K.toLowerCase()]=k[K];return z},C=(0,x.default)(w);return(0,c.createElement)("span",a({className:Y},b,{children:L.map(function(S,k){var z=re.substr(S.start,S.end-S.start);if(S.highlight){O++;var K=void 0;typeof I=="object"?B?K=I[z]:(I=C(I),K=I[z.toLowerCase()]):K=I;var me=O===+T;P=K+" "+(me?v:""),N=me===!0&&j!=null?Object.assign({},te,j):te;var ye={children:z,className:P,key:k,style:N};return typeof E!="string"&&(ye.highlightIndex=O),(0,c.createElement)(E,ye)}else return(0,c.createElement)(ae,{children:z,className:ue,key:k,style:o})})}))}r.exports=l.default},function(r,l){r.exports=function(e){var a={};function t(g){if(a[g])return a[g].exports;var s=a[g]={exports:{},id:g,loaded:!1};return e[g].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}return t.m=e,t.c=a,t.p="",t(0)}([function(e,a,t){e.exports=t(1)},function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0});var g=t(2);Object.defineProperty(a,"combineChunks",{enumerable:!0,get:function(){return g.combineChunks}}),Object.defineProperty(a,"fillInChunks",{enumerable:!0,get:function(){return g.fillInChunks}}),Object.defineProperty(a,"findAll",{enumerable:!0,get:function(){return g.findAll}}),Object.defineProperty(a,"findChunks",{enumerable:!0,get:function(){return g.findChunks}})},function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.findAll=function(y){var x=y.autoEscape,u=y.caseSensitive,h=u===void 0?!1:u,p=y.findChunks,v=p===void 0?g:p,m=y.sanitize,T=y.searchWords,j=y.textToHighlight;return s({chunksToHighlight:t({chunks:v({autoEscape:x,caseSensitive:h,sanitize:m,searchWords:T,textToHighlight:j})}),totalLength:j?j.length:0})};var t=a.combineChunks=function(y){var x=y.chunks;return x=x.sort(function(u,h){return u.start-h.start}).reduce(function(u,h){if(u.length===0)return[h];var p=u.pop();if(h.start<=p.end){var v=Math.max(p.end,h.end);u.push({start:p.start,end:v})}else u.push(p,h);return u},[]),x},g=function(y){var x=y.autoEscape,u=y.caseSensitive,h=y.sanitize,p=h===void 0?f:h,v=y.searchWords,m=y.textToHighlight;return m=p(m),v.filter(function(T){return T}).reduce(function(T,j){j=p(j),x&&(j=i(j));for(var R=new RegExp(j,u?"g":"gi"),H=void 0;H=R.exec(m);){var B=H.index,Y=R.lastIndex;Y>B&&T.push({start:B,end:Y}),H.index==R.lastIndex&&R.lastIndex++}return T},[])};a.findChunks=g;var s=a.fillInChunks=function(y){var x=y.chunksToHighlight,u=y.totalLength,h=[],p=function(T,j,R){j-T>0&&h.push({start:T,end:j,highlight:R})};if(x.length===0)p(0,u,!1);else{var v=0;x.forEach(function(m){p(v,m.start,!1),p(m.start,m.end,!0),v=m.end}),p(v,u,!1)}return h};function f(c){return c}function i(c){return c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])},function(r,l,e){(function(a){if(a.env.NODE_ENV!=="production"){var t=typeof Symbol=="function"&&Symbol.for&&Symbol.for("react.element")||60103,g=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===t},s=!0;r.exports=e(6)(g,s)}else r.exports=e(13)()}).call(l,e(5))},function(r,l){var e=r.exports={},a,t;function g(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=g}catch{a=g}try{typeof clearTimeout=="function"?t=clearTimeout:t=s}catch{t=s}})();function f(T){if(a===setTimeout)return setTimeout(T,0);if((a===g||!a)&&setTimeout)return a=setTimeout,setTimeout(T,0);try{return a(T,0)}catch{try{return a.call(null,T,0)}catch{return a.call(this,T,0)}}}function i(T){if(t===clearTimeout)return clearTimeout(T);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(T);try{return t(T)}catch{try{return t.call(null,T)}catch{return t.call(this,T)}}}var c=[],y=!1,x,u=-1;function h(){!y||!x||(y=!1,x.length?c=x.concat(c):u=-1,c.length&&p())}function p(){if(!y){var T=f(h);y=!0;for(var j=c.length;j;){for(x=c,c=[];++u<j;)x&&x[u].run();u=-1,j=c.length}x=null,y=!1,i(T)}}e.nextTick=function(T){var j=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)j[R-1]=arguments[R];c.push(new v(T,j)),c.length===1&&!y&&f(p)};function v(T,j){this.fun=T,this.array=j}v.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={};function m(){}e.on=m,e.addListener=m,e.once=m,e.off=m,e.removeListener=m,e.removeAllListeners=m,e.emit=m,e.prependListener=m,e.prependOnceListener=m,e.listeners=function(T){return[]},e.binding=function(T){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(T){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(r,l,e){(function(a){var t=e(7),g=e(8),s=e(9),f=e(10),i=e(11),c=e(12);r.exports=function(y,x){var u=typeof Symbol=="function"&&Symbol.iterator,h="@@iterator";function p(o){var b=o&&(u&&o[u]||o[h]);if(typeof b=="function")return b}var v="<<anonymous>>",m={array:H("array"),bool:H("boolean"),func:H("function"),number:H("number"),object:H("object"),string:H("string"),symbol:H("symbol"),any:B(),arrayOf:Y,element:M(),instanceOf:W,node:ne(),objectOf:U,oneOf:I,oneOfType:te,shape:le,exact:ce};function T(o,b){return o===b?o!==0||1/o===1/b:o!==o&&b!==b}function j(o){this.message=o,this.stack=""}j.prototype=Error.prototype;function R(o){if(a.env.NODE_ENV!=="production")var b={},L=0;function E(P,N,w,C,S,k,z){if(C=C||v,k=k||w,z!==i){if(x)g(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if(a.env.NODE_ENV!=="production"&&typeof console<"u"){var K=C+":"+w;!b[K]&&L<3&&(s(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",k,C),b[K]=!0,L++)}}return N[w]==null?P?N[w]===null?new j("The "+S+" `"+k+"` is marked as required "+("in `"+C+"`, but its value is `null`.")):new j("The "+S+" `"+k+"` is marked as required in "+("`"+C+"`, but its value is `undefined`.")):null:o(N,w,C,S,k)}var O=E.bind(null,!1);return O.isRequired=E.bind(null,!0),O}function H(o){function b(L,E,O,P,N,w){var C=L[E],S=q(C);if(S!==o){var k=ae(C);return new j("Invalid "+P+" `"+N+"` of type "+("`"+k+"` supplied to `"+O+"`, expected ")+("`"+o+"`."))}return null}return R(b)}function B(){return R(t.thatReturnsNull)}function Y(o){function b(L,E,O,P,N){if(typeof o!="function")return new j("Property `"+N+"` of component `"+O+"` has invalid PropType notation inside arrayOf.");var w=L[E];if(!Array.isArray(w)){var C=q(w);return new j("Invalid "+P+" `"+N+"` of type "+("`"+C+"` supplied to `"+O+"`, expected an array."))}for(var S=0;S<w.length;S++){var k=o(w,S,O,P,N+"["+S+"]",i);if(k instanceof Error)return k}return null}return R(b)}function M(){function o(b,L,E,O,P){var N=b[L];if(!y(N)){var w=q(N);return new j("Invalid "+O+" `"+P+"` of type "+("`"+w+"` supplied to `"+E+"`, expected a single ReactElement."))}return null}return R(o)}function W(o){function b(L,E,O,P,N){if(!(L[E]instanceof o)){var w=o.name||v,C=ue(L[E]);return new j("Invalid "+P+" `"+N+"` of type "+("`"+C+"` supplied to `"+O+"`, expected ")+("instance of `"+w+"`."))}return null}return R(b)}function I(o){if(!Array.isArray(o))return a.env.NODE_ENV!=="production"&&s(!1,"Invalid argument supplied to oneOf, expected an instance of array."),t.thatReturnsNull;function b(L,E,O,P,N){for(var w=L[E],C=0;C<o.length;C++)if(T(w,o[C]))return null;var S=JSON.stringify(o);return new j("Invalid "+P+" `"+N+"` of value `"+w+"` "+("supplied to `"+O+"`, expected one of "+S+"."))}return R(b)}function U(o){function b(L,E,O,P,N){if(typeof o!="function")return new j("Property `"+N+"` of component `"+O+"` has invalid PropType notation inside objectOf.");var w=L[E],C=q(w);if(C!=="object")return new j("Invalid "+P+" `"+N+"` of type "+("`"+C+"` supplied to `"+O+"`, expected an object."));for(var S in w)if(w.hasOwnProperty(S)){var k=o(w,S,O,P,N+"."+S,i);if(k instanceof Error)return k}return null}return R(b)}function te(o){if(!Array.isArray(o))return a.env.NODE_ENV!=="production"&&s(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),t.thatReturnsNull;for(var b=0;b<o.length;b++){var L=o[b];if(typeof L!="function")return s(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",ie(L),b),t.thatReturnsNull}function E(O,P,N,w,C){for(var S=0;S<o.length;S++){var k=o[S];if(k(O,P,N,w,C,i)==null)return null}return new j("Invalid "+w+" `"+C+"` supplied to "+("`"+N+"`."))}return R(E)}function ne(){function o(b,L,E,O,P){return Z(b[L])?null:new j("Invalid "+O+" `"+P+"` supplied to "+("`"+E+"`, expected a ReactNode."))}return R(o)}function le(o){function b(L,E,O,P,N){var w=L[E],C=q(w);if(C!=="object")return new j("Invalid "+P+" `"+N+"` of type `"+C+"` "+("supplied to `"+O+"`, expected `object`."));for(var S in o){var k=o[S];if(k){var z=k(w,S,O,P,N+"."+S,i);if(z)return z}}return null}return R(b)}function ce(o){function b(L,E,O,P,N){var w=L[E],C=q(w);if(C!=="object")return new j("Invalid "+P+" `"+N+"` of type `"+C+"` "+("supplied to `"+O+"`, expected `object`."));var S=f({},L[E],o);for(var k in S){var z=o[k];if(!z)return new j("Invalid "+P+" `"+N+"` key `"+k+"` supplied to `"+O+"`.\nBad object: "+JSON.stringify(L[E],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(o),null,"  "));var K=z(w,k,O,P,N+"."+k,i);if(K)return K}return null}return R(b)}function Z(o){switch(typeof o){case"number":case"string":case"undefined":return!0;case"boolean":return!o;case"object":if(Array.isArray(o))return o.every(Z);if(o===null||y(o))return!0;var b=p(o);if(b){var L=b.call(o),E;if(b!==o.entries){for(;!(E=L.next()).done;)if(!Z(E.value))return!1}else for(;!(E=L.next()).done;){var O=E.value;if(O&&!Z(O[1]))return!1}}else return!1;return!0;default:return!1}}function re(o,b){return o==="symbol"||b["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&b instanceof Symbol}function q(o){var b=typeof o;return Array.isArray(o)?"array":o instanceof RegExp?"object":re(b,o)?"symbol":b}function ae(o){if(typeof o>"u"||o===null)return""+o;var b=q(o);if(b==="object"){if(o instanceof Date)return"date";if(o instanceof RegExp)return"regexp"}return b}function ie(o){var b=ae(o);switch(b){case"array":case"object":return"an "+b;case"boolean":case"date":case"regexp":return"a "+b;default:return b}}function ue(o){return!o.constructor||!o.constructor.name?v:o.constructor.name}return m.checkPropTypes=c,m.PropTypes=m,m}}).call(l,e(5))},function(r,l){function e(t){return function(){return t}}var a=function(){};a.thatReturns=e,a.thatReturnsFalse=e(!1),a.thatReturnsTrue=e(!0),a.thatReturnsNull=e(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(t){return t},r.exports=a},function(r,l,e){(function(a){var t=function(f){};a.env.NODE_ENV!=="production"&&(t=function(f){if(f===void 0)throw new Error("invariant requires an error message argument")});function g(s,f,i,c,y,x,u,h){if(t(f),!s){var p;if(f===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[i,c,y,x,u,h],m=0;p=new Error(f.replace(/%s/g,function(){return v[m++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}}r.exports=g}).call(l,e(5))},function(r,l,e){(function(a){var t=e(7),g=t;if(a.env.NODE_ENV!=="production"){var s=function(i){for(var c=arguments.length,y=Array(c>1?c-1:0),x=1;x<c;x++)y[x-1]=arguments[x];var u=0,h="Warning: "+i.replace(/%s/g,function(){return y[u++]});typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};g=function(i,c){if(c===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(c.indexOf("Failed Composite propType: ")!==0&&!i){for(var y=arguments.length,x=Array(y>2?y-2:0),u=2;u<y;u++)x[u-2]=arguments[u];s.apply(void 0,[c].concat(x))}}}r.exports=g}).call(l,e(5))},function(r,l){var e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function g(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function s(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var i={},c=0;c<10;c++)i["_"+String.fromCharCode(c)]=c;var y=Object.getOwnPropertyNames(i).map(function(u){return i[u]});if(y.join("")!=="0123456789")return!1;var x={};return"abcdefghijklmnopqrst".split("").forEach(function(u){x[u]=u}),Object.keys(Object.assign({},x)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}r.exports=s()?Object.assign:function(f,i){for(var c,y=g(f),x,u=1;u<arguments.length;u++){c=Object(arguments[u]);for(var h in c)a.call(c,h)&&(y[h]=c[h]);if(e){x=e(c);for(var p=0;p<x.length;p++)t.call(c,x[p])&&(y[x[p]]=c[x[p]])}}return y}},function(r,l){var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";r.exports=e},function(r,l,e){(function(a){if(a.env.NODE_ENV!=="production")var t=e(8),g=e(9),s=e(11),f={};function i(c,y,x,u,h){if(a.env.NODE_ENV!=="production"){for(var p in c)if(c.hasOwnProperty(p)){var v;try{t(typeof c[p]=="function","%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",u||"React class",x,p,typeof c[p]),v=c[p](y,p,u,x,null,s)}catch(T){v=T}if(g(!v||v instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",x,p,typeof v),v instanceof Error&&!(v.message in f)){f[v.message]=!0;var m=h?h():"";g(!1,"Failed %s type: %s%s",x,v.message,m??"")}}}}r.exports=i}).call(l,e(5))},function(r,l,e){var a=e(7),t=e(8),g=e(11);r.exports=function(){function s(c,y,x,u,h,p){p!==g&&t(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}s.isRequired=s;function f(){return s}var i={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:f,element:s,instanceOf:f,node:s,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f};return i.checkPropTypes=a,i.PropTypes=i,i}},function(r,l){r.exports=Ae()},function(r,l){var e=function(g,s){return g===s};function a(t){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,s=void 0,f=[],i=void 0,c=!1,y=function(h,p){return g(h,f[p])},x=function(){for(var h=arguments.length,p=Array(h),v=0;v<h;v++)p[v]=arguments[v];return c&&s===this&&p.length===f.length&&p.every(y)||(c=!0,s=this,f=p,i=t.apply(this,p)),i};return x}r.exports=a}])}(de)),de.exports}var Wt=zt();const Ut=Ie(Wt),fe=[{title:"Recommended",data:[{title:"Documentation",url:"/docs/documentation/introduction",icon:"documentation",category:"Docs",categoryTitle:"Docs"},{title:"Changelog",url:"/docs/changelog",icon:"changeLog",category:"Docs",categoryTitle:"Docs"},{title:"Button",url:"/ui-components/button",icon:"common",category:"Common",categoryTitle:"UI Components"}]}],Kt=d=>{const{icon:r,label:l,url:e="",isLast:a,keyWord:t,onNavigate:g}=d,{textTheme:s}=Qe();return n.jsx(Ce,{to:e,onClick:g,children:n.jsxs("div",{className:Q("flex items-center justify-between rounded-lg p-3.5 cursor-pointer user-select","bg-gray-50 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700/90",!a&&"mb-3"),children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:Q("mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm text-xl group-hover:shadow h-6 w-6 flex items-center justify-center bg-white dark:bg-gray-700",s,"dark:text-gray-100"),children:r&&$t[r]}),n.jsx("div",{className:"text-gray-900 dark:text-gray-300",children:n.jsx(Ut,{autoEscape:!0,highlightClassName:Q(s,"underline bg-transparent font-semibold dark:text-white"),searchWords:[t],textToHighlight:l})})]}),n.jsx(xt,{className:"text-lg"})]})})},Ft=({className:d})=>{var p;const[r,l]=A.useState(!1),[e,a]=A.useState(fe),[t,g]=A.useState(!1),s=A.useRef(null),f=()=>{g(!1),a(fe)},i=()=>{l(!0)},c=()=>{l(!1),t&&setTimeout(()=>{f()},300)},y=wt(x,200);async function x(v){if(!v){a(fe);return}t&&g(!1);const m=await Dt({query:v});m.data&&(m.data.length===0&&g(!0),a(m.data))}const u=v=>{y(v.target.value)};A.useEffect(()=>{if(r){const v=setTimeout(()=>{var m;return(m=s.current)==null?void 0:m.focus()},100);return()=>{clearTimeout(v)}}},[r]);const h=()=>{c()};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:Q(d,"text-2xl"),onClick:i,children:n.jsx(Te,{})}),n.jsx(Ge,{contentClassName:"p-0",isOpen:r,closable:!1,onRequestClose:c,children:n.jsxs("div",{children:[n.jsxs("div",{className:"px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx(Te,{className:"text-xl"}),n.jsx("input",{ref:s,className:"ring-0 outline-none block w-full p-4 text-base bg-transparent text-gray-900 dark:text-gray-100",placeholder:"Search...",onChange:u})]}),n.jsx(Ye,{size:"xs",onClick:c,children:"Esc"})]}),n.jsxs("div",{className:"py-6 px-5 max-h-[550px] overflow-y-auto",children:[e.map(v=>n.jsxs("div",{className:"mb-6",children:[n.jsx("h6",{className:"mb-3",children:v.title}),v.data.map((m,T)=>{var j;return n.jsx(Kt,{icon:m.icon,label:m.title,url:m.url,keyWord:((j=s.current)==null?void 0:j.value)||"",onNavigate:h},m.title+T)})]},v.title)),e.length===0&&t&&n.jsxs("div",{className:"my-10 text-center text-lg",children:[n.jsx("span",{children:"No results for "}),n.jsxs("span",{className:"heading-text",children:["'",(p=s.current)==null?void 0:p.value,"'"]})]})]})]})})]})},gn=oe(Ft),Ne=[{label:"English",value:"en",flag:"us"},{label:"Chinese",value:"zhCn",flag:"cn"},{label:"Espanol",value:"es",flag:"sp"},{label:"Arabic",value:"ar",flag:"ar"}],Jt=({className:d})=>{const[r,l]=A.useState(!1),e=G(f=>f.locale.currentLang),a=He(),t=A.useMemo(()=>{var f;return(f=Ne.find(i=>i.value===e))==null?void 0:f.flag},[e]),g=n.jsx("div",{className:Q(d,"flex items-center"),children:r?n.jsx(Me,{size:20}):n.jsx(se,{size:24,shape:"circle",src:`/img/countries/${t}.png`})}),s=f=>{const i=f.replace(/-([a-z])/g,function(y){return y[1].toUpperCase()});l(!0);const c=()=>{ze.changeLanguage(i),a(We(f)),l(!1)};De[i]().then(()=>{$e.locale(i),c()}).catch(()=>{c()})};return n.jsx(V,{renderTitle:g,placement:"bottom-end",children:Ne.map(f=>n.jsxs(V.Item,{className:"mb-1 justify-between",eventKey:f.label,onClick:()=>s(f.value),children:[n.jsxs("span",{className:"flex items-center",children:[n.jsx(se,{size:18,shape:"circle",src:`/img/countries/${f.flag}.png`}),n.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:f.label})]}),e===f.value&&n.jsx(bt,{className:"text-emerald-500 text-lg"})]},f.label))})},vn=oe(Jt),Bt="title",he="collapse",J="item",qt=[{key:"apps",path:"",title:"APPS",translateKey:"nav.apps",icon:"apps",type:Bt,authority:[D,$],subMenu:[{key:"apps.jobcard",path:"",title:"Jobcard",translateKey:"nav.appsJobcard.jobcard",icon:"project",type:he,authority:[D,$],subMenu:[{key:"appsJobcard.dashboard",path:`${F}/jobcards/dashboard`,title:"Dashboard",translateKey:"nav.appsJobcard.dashboard",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsJobcard.jobcardList",path:`${F}/jobcards/jobcard-list`,title:"Jobcard List",translateKey:"nav.appsJobcard.jobcardList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsJobcard.pendingList",path:`${F}/jobcards/pending-list`,title:"Pending List",translateKey:"nav.appsJobcard.pendingList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsJobcard.returnList",path:`${F}/jobcards/return-list`,title:"Return List",translateKey:"nav.appsJobcard.returnList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsJobcard.completedList",path:`${F}/jobcards/completed-list`,title:"Completed List",translateKey:"nav.appsJobcard.completedList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsJobcard.billedList",path:`${F}/jobcards/billed-list`,title:"Billed List",translateKey:"nav.appsJobcard.billedList",icon:"",type:J,authority:[D,$],subMenu:[]}]},{key:"apps.onsite",path:"",title:"OnSite",translateKey:"nav.appsOnsite.onsite",icon:"common",type:he,authority:[D,$],subMenu:[{key:"appsOnsite.dashboard",path:`${F}/jobcards/dashboard`,title:"Dashboard",translateKey:"nav.appsJobcard.dashboard",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsOnsite.onsiteList",path:`${F}/onsite`,title:"Onsite List",translateKey:"nav.onsiteList.onsiteList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsOnsite.pendingList",path:`${F}/onsite-pending`,title:"Pending List",translateKey:"nav.appsOnsite.pendingList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsOnsite.closedList",path:`${F}/onsite-closed`,title:"Closed List",translateKey:"nav.appsOnsite.closedList",icon:"",type:J,authority:[D,$],subMenu:[]},{key:"appsOnsite.sentList",path:`${F}/onsite-sent`,title:"Sent to Workshop List",translateKey:"nav.appsOnsite.sentList",icon:"",type:J,authority:[D,$],subMenu:[]}]},{key:"apps.worker",path:"",title:"worker",translateKey:"nav.appsWorker.worker",icon:"crm",type:he,authority:[D,$],subMenu:[{key:"appsWorker.workerList",path:`${F}/worker`,title:"Worker List",translateKey:"nav.appsWorker.workerList",icon:"",type:J,authority:[D,$],subMenu:[]}]}]}],Yt=[...qt],Gt=A.lazy(()=>Ue(()=>import("./index-D0zhdNVV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),Qt=oe(Mt),mn=()=>{const[d,r]=A.useState(!1),l=()=>{r(!0)},e=()=>{r(!1)},a=G(u=>u.theme.themeColor),t=G(u=>u.theme.primaryColorLevel),g=G(u=>u.theme.navMode),s=G(u=>u.theme.mode),f=G(u=>u.theme.direction),i=G(u=>u.base.common.currentRouteKey),c=G(u=>u.auth.user.authority),{smaller:y}=Ht(),x=()=>g===Fe?`bg-${a}-${t} side-nav-${g}`:g===Je?`side-nav-${s}`:`side-nav-${g}`;return n.jsx(n.Fragment,{children:y.md&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-2xl",onClick:l,children:n.jsx(Qt,{toggled:d})}),n.jsx(Et,{title:"Navigation",isOpen:d,bodyClass:Q(x(),"p-0"),width:330,placement:f===Ke?"right":"left",onClose:e,onRequestClose:e,children:n.jsx(A.Suspense,{fallback:n.jsx(n.Fragment,{}),children:d&&n.jsx(Gt,{navMode:g,collapsed:!1,navigationTree:Yt,routeKey:i,userAuthority:c,direction:f,onMenuItemClick:e})})})]})})};function Vt(d){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(d)}const Xt=[{label:"Profile",path:"/app/account/settings/profile",icon:n.jsx(Tt,{})},{label:"Account Setting",path:"/app/account/settings/profile",icon:n.jsx(Ot,{})},{label:"Activity Log",path:"/app/account/activity-log",icon:n.jsx(Vt,{})}],Zt=({className:d})=>{const{avatar:r,userName:l,authority:e,email:a}=G(s=>s.auth.user),{signOut:t}=qe(),g=n.jsxs("div",{className:Q(d,"flex items-center gap-2"),children:[n.jsx(se,{size:32,shape:"circle",src:r}),n.jsxs("div",{className:"hidden md:block",children:[n.jsx("div",{className:"text-xs capitalize",children:(e==null?void 0:e[0])||"guest"}),n.jsx("div",{className:"font-bold",children:l})]})]});return n.jsx("div",{children:n.jsxs(V,{menuStyle:{minWidth:240},renderTitle:g,placement:"bottom-end",children:[n.jsx(V.Item,{variant:"header",children:n.jsxs("div",{className:"py-2 px-3 flex items-center gap-2",children:[n.jsx(se,{shape:"circle",src:r}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-gray-900 dark:text-gray-100",children:l}),n.jsx("div",{className:"text-xs",children:a})]})]})}),n.jsx(V.Item,{variant:"divider"}),Xt.map(s=>n.jsx(V.Item,{eventKey:s.label,className:"mb-1 px-0",children:n.jsx(Ce,{className:"flex h-full w-full px-2",to:s.path,children:n.jsxs("span",{className:"flex gap-2 items-center w-full",children:[n.jsx("span",{className:"text-xl opacity-50",children:s.icon}),n.jsx("span",{children:s.label})]})})},s.label)),n.jsx(V.Item,{variant:"divider"}),n.jsxs(V.Item,{eventKey:"Sign Out",className:"gap-2",onClick:t,children:[n.jsx("span",{className:"text-xl opacity-50",children:n.jsx(jt,{})}),n.jsx("span",{children:"Sign Out"})]})]})})},yn=oe(Zt),xn=d=>{const{userAuthority:r=[],authority:l=[],children:e}=d,a=Nt(r,l);return n.jsx(n.Fragment,{children:a?e:null})};export{xn as A,fn as H,Rt as I,vn as L,mn as M,Mt as N,gn as S,yn as U,J as a,$t as b,dn as c,Bt as d,he as e,hn as f,pn as g,Ct as h,X as i,Lt as j,Yt as n,Ht as u,pe as w};

"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1488],{11981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=r(74848),i=r(28453);const n={},s="Merchant data file specification",c={id:"cdi/merchant data file specification",title:"Merchant data file specification",description:"Data file naming",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cdi/merchant data file specification.md",sourceDirName:"cdi",slug:"/cdi/merchant data file specification",permalink:"/qfpay-sdk/zh/docs/cdi/merchant data file specification",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cdi/merchant data file specification.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDI Integration",permalink:"/qfpay-sdk/zh/docs/cdi/integration"},next:{title:"test values",permalink:"/qfpay-sdk/zh/docs/cdi/test values"}},a={},l=[{value:"Data file naming",id:"data-file-naming",level:2},{value:"File Content",id:"file-content",level:2},{value:"Record type",id:"record-type",level:3},{value:"record type 02 - Data record",id:"record-type-02---data-record",level:3},{value:"record type 99 - trailer record",id:"record-type-99---trailer-record",level:3},{value:"Samples of data files",id:"samples-of-data-files",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"merchant-data-file-specification",children:"Merchant data file specification"}),"\n",(0,d.jsx)(t.h2,{id:"data-file-naming",children:"Data file naming"}),"\n",(0,d.jsx)(t.p,{children:"merchant-V02-{MID}-{generation_timestamp}.csv"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"MID"}),": Merchant ID"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"generation_timestamp"}),": Unix timestamp of the file generation, e.g. 1587657600000 refers to 24th April 2020 00:00:00"]}),"\n",(0,d.jsx)(t.h2,{id:"file-content",children:"File Content"}),"\n",(0,d.jsx)(t.h3,{id:"record-type",children:"Record type"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Record type"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"00"}),(0,d.jsx)(t.td,{children:"header record (optional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"01"}),(0,d.jsx)(t.td,{children:"data header"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"02"}),(0,d.jsx)(t.td,{children:"data records"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"99"}),(0,d.jsx)(t.td,{children:"tailer record"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-02---data-record",children:"record type 02 - Data record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"Name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"Role, e.g. merchant, store, etc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"Address"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6"}),(0,d.jsx)(t.td,{children:"Onboard date - format in YYYY-MM-DD"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"9"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-99---trailer-record",children:"record type 99 - trailer record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"no. of data rows"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"samples-of-data-files",children:"Samples of data files"}),"\n",(0,d.jsx)(t.p,{children:"(privately shared)"})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var d=r(96540);const i={},n=d.createContext(i);function s(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);
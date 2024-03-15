"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8441],{61284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var d=r(74848),n=r(28453);const s={},i="Transaction data file specification",c={id:"cdi/transaction data file specification",title:"Transaction data file specification",description:"Data file naming",source:"@site/docs/cdi/transaction data file specification.md",sourceDirName:"cdi",slug:"/cdi/transaction data file specification",permalink:"/qfpay-sdk/docs/cdi/transaction data file specification",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cdi/transaction data file specification.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"test values",permalink:"/qfpay-sdk/docs/cdi/test values"},next:{title:"PayMe",permalink:"/qfpay-sdk/docs/category/payme"}},l={},a=[{value:"Data file naming",id:"data-file-naming",level:2},{value:"File Content",id:"file-content",level:2},{value:"Record type",id:"record-type",level:3},{value:"record type 00 - Header record",id:"record-type-00---header-record",level:3},{value:"record type 02 - Data record",id:"record-type-02---data-record",level:3},{value:"record type 99 - trailer record",id:"record-type-99---trailer-record",level:3},{value:"Samples of data files",id:"samples-of-data-files",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"transaction-data-file-specification",children:"Transaction data file specification"}),"\n",(0,d.jsx)(t.h2,{id:"data-file-naming",children:"Data file naming"}),"\n",(0,d.jsxs)(t.p,{children:["TXN-V02-{MID}-{from",":YYYYMMDD","}-{to",":YYYMMDD","}-{generation_timestamp}[-{split_index}].csv"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"MID"}),": Merchant ID"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"from:YYYYMMDD"}),": Start date of the transaction, e.g. 20200101 refers to 1st Jan 2020 00:00:00"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"to:YYYYMMDD"}),": End date of the transaction, e.g. 20200101 refers to 1st Jan 2020 23:59:59"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"generation_timestamp"}),": Unix timestamp of the file generation, e.g. 1587657600000 refers to 24th April 2020 00:00:00"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"split_index"}),": Optional, only present when the file is split into multiple files. e.g. 1 refers to the first file of the split files."]}),"\n",(0,d.jsx)(t.h2,{id:"file-content",children:"File Content"}),"\n",(0,d.jsx)(t.h3,{id:"record-type",children:"Record type"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Record type"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"00"}),(0,d.jsx)(t.td,{children:"header record"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"01"}),(0,d.jsx)(t.td,{children:"transaction header"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"02"}),(0,d.jsx)(t.td,{children:"transaction detail"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"99"}),(0,d.jsx)(t.td,{children:"tailer record"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-00---header-record",children:"record type 00 - Header record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"from date"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"to date"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"MID - QFPay merchant ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"SID - QFPay store ID (if applicable)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6"}),(0,d.jsx)(t.td,{children:"BR No. (8 digits)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"no. of transactions in the current file"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8"}),(0,d.jsx)(t.td,{children:"sum of amount of transactions in the current file"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"9"}),(0,d.jsx)(t.td,{children:"no. of transactions in the batch"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10"}),(0,d.jsx)(t.td,{children:"sum of amount of transactions in the batch"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-02---data-record",children:"record type 02 - Data record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"Store Name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"Cashier"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"Transaction type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"Transaction Date"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"Transaction time"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6"}),(0,d.jsx)(t.td,{children:"Transaction amount"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"Transaction status"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8"}),(0,d.jsx)(t.td,{children:"Transaction ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"9"}),(0,d.jsx)(t.td,{children:"Original Transaction ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"10"}),(0,d.jsx)(t.td,{children:"Currency"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"11"}),(0,d.jsx)(t.td,{children:"UDID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"12"}),(0,d.jsx)(t.td,{children:"Merchant Order ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"13"}),(0,d.jsx)(t.td,{children:"Remark"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"14"}),(0,d.jsx)(t.td,{children:"Store ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"15"}),(0,d.jsx)(t.td,{children:"External Order ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"16"}),(0,d.jsx)(t.td,{children:"Consumer Source"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-99---trailer-record",children:"record type 99 - trailer record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"no. of transactions in the current file"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"sum of amount of transactions in the current file"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"no. of transactions in the batch"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"sum of amount of transactions in the batch"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"samples-of-data-files",children:"Samples of data files"}),"\n",(0,d.jsxs)(t.p,{children:["Data sample: ",(0,d.jsx)(t.a,{href:"https://cdn.qfpay.com.hk/cdi/data-samples/TXN-V02-11000001-20221001-20221002-1692085343502.csv",children:"https://cdn.qfpay.com.hk/cdi/data-samples/TXN-V02-11000001-20221001-20221002-1692085343502.csv"})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var d=r(96540);const n={},s=d.createContext(n);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);
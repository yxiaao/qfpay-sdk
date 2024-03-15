"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[344],{17643:(d,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),t=r(28453);r(28774);const i={},s="Appendix",c={id:"AndroidSDK/Appendix",title:"Appendix",description:"Transaction Information Field Description",source:"@site/docs/AndroidSDK/03-Appendix.md",sourceDirName:"AndroidSDK",slug:"/AndroidSDK/Appendix",permalink:"/qfpay-sdk/docs/AndroidSDK/Appendix",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AndroidSDK/03-Appendix.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Third-party Interface Invoke Sample",permalink:"/qfpay-sdk/docs/AndroidSDK/Third-party Interface Invoke"},next:{title:"Android SDK",permalink:"/qfpay-sdk/docs/AndroidSDK/Android SDK"}},l={},h=[{value:"Transaction Information Field Description",id:"transaction-information-field-description",level:2},{value:"Channel Information Field Description",id:"channel-information-field-description",level:2},{value:"Transaction Status Field Description",id:"transaction-status-field-description",level:2},{value:"Result Code Description",id:"result-code-description",level:2}];function x(d){const e={h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...d.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"appendix",children:"Appendix"}),"\n",(0,n.jsx)(e.h2,{id:"transaction-information-field-description",children:"Transaction Information Field Description"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Field Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"M/O"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"id"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Transaction idendity number"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"amt"}),(0,n.jsx)(e.td,{children:"Long"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Transaction Amount"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"time"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsxs)(e.td,{children:["Transaction time yyy-MM-dd HH:mm",":ss"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"channel"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Transaction channel like weixin, alipay"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"status"}),(0,n.jsx)(e.td,{children:"Integer"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Transaction status"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"type"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Transaction type, payment or refund"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"originId"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Original transaction id, mandatory if the transaction is refund"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mchntName"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Sore name"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"remarks"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Transaction remarks"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"confirmCode"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Transaction confirmation code"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"operatorAccount"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Operator name"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"appCode"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Application code (swipe card)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"customerId"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Idendity of customer wallet (pre-authorization)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"customerAccount"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Account of customer wallet (pre-authorization)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"completeTransId"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsx)(e.td,{children:"Newly generated transaction id when the pre-authorization transaction is completed (pre-authorization)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"completeTime"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"O"}),(0,n.jsxs)(e.td,{children:["Complete time when the pre-authorization transaction is completed yyyy-MM-dd HH:mm",":ss"," (pre-authorization)"]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"channel-information-field-description",children:"Channel Information Field Description"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Field Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"M/O"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"name"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Channel name"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"desc"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"M"}),(0,n.jsx)(e.td,{children:"Channel description"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"transaction-status-field-description",children:"Transaction Status Field Description"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Transaction Status"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"Normal transaction"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"-1/-2"}),(0,n.jsx)(e.td,{children:"Waiting for payment"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"-3"}),(0,n.jsx)(e.td,{children:"Failed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Reversal"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"Void"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"Refund"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"Partial Refund"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"Pre-authorization Frozen"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"6"}),(0,n.jsx)(e.td,{children:"Pre-authorization Unfrozen"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"7"}),(0,n.jsx)(e.td,{children:"Pre-authorization Completed"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"result-code-description",children:"Result Code Description"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Result Code"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"-1"}),(0,n.jsx)(e.td,{children:"Unknown error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"Success"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"100"}),(0,n.jsx)(e.td,{children:"Client error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"101"}),(0,n.jsx)(e.td,{children:"Amount error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"102"}),(0,n.jsx)(e.td,{children:"AppId is empty"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"103"}),(0,n.jsx)(e.td,{children:"Order id is empty"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"104"}),(0,n.jsx)(e.td,{children:"Other parameter is empty"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"105"}),(0,n.jsx)(e.td,{children:"User cancel"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"106"}),(0,n.jsx)(e.td,{children:"Network error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"107"}),(0,n.jsx)(e.td,{children:"User not logged in"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"108"}),(0,n.jsx)(e.td,{children:"Application not installed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"109"}),(0,n.jsx)(e.td,{children:"Launch App failed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"110"}),(0,n.jsx)(e.td,{children:"Non-support API invoke"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"111"}),(0,n.jsx)(e.td,{children:"Time period error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"112"}),(0,n.jsx)(e.td,{children:"Cross-month query not allowed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"113"}),(0,n.jsx)(e.td,{children:"Failed to get config info"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"114"}),(0,n.jsx)(e.td,{children:"Card adjust failed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"115"}),(0,n.jsx)(e.td,{children:"Device does not support card swiping"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"116"}),(0,n.jsx)(e.td,{children:"Password input error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"200"}),(0,n.jsx)(e.td,{children:"Server error"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"201"}),(0,n.jsx)(e.td,{children:"Order id does not exist"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"202"}),(0,n.jsx)(e.td,{children:"Transaction Failed"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"203"}),(0,n.jsx)(e.td,{children:"Insufficient account balance"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"204"}),(0,n.jsx)(e.td,{children:"Transaction is confirming"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"205"}),(0,n.jsx)(e.td,{children:"Login status expired"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"206"}),(0,n.jsx)(e.td,{children:"Refund is confirming"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"207"}),(0,n.jsx)(e.td,{children:"Refund Failed"})]})]})]})]})}function j(d={}){const{wrapper:e}={...(0,t.R)(),...d.components};return e?(0,n.jsx)(e,{...d,children:(0,n.jsx)(x,{...d})}):x(d)}},28453:(d,e,r)=>{r.d(e,{R:()=>s,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function s(d){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function c(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(t):d.components||t:s(d.components),n.createElement(i.Provider,{value:e},d.children)}}}]);
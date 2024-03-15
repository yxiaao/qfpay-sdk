"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[9600],{98089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(74848),a=r(28453),i=(r(11470),r(19365),r(28774));const s={},l="Alipay Service Window H5",c={id:"Integration/alipay service window h5",title:"Alipay Service Window H5",description:"flow chart",source:"@site/docs/Integration/alipay service window h5.md",sourceDirName:"Integration",slug:"/Integration/alipay service window h5",permalink:"/qfpay-sdk/docs/Integration/alipay service window h5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Integration/alipay service window h5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Enquiry",permalink:"/qfpay-sdk/docs/Integration/Transaction Enquiry"},next:{title:"Payment",permalink:"/qfpay-sdk/docs/Integration/payment"}},o={},d=[{value:"flow chart",id:"flow-chart",level:3},{value:"Alipay Service Window H5 Payment (WAP)",id:"alipay-service-window-h5-payment-wap",level:3},{value:"HTTP Request",id:"http-request",level:3},{value:"Payment Parameters",id:"payment-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Freeze Funds",id:"freeze-funds",level:2},{value:"HTTP Request",id:"http-request-1",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"alipay-service-window-h5",children:"Alipay Service Window H5"}),"\n",(0,n.jsx)(t.h3,{id:"flow-chart",children:"flow chart"}),"\n",(0,n.jsx)(t.mermaid,{value:"sequenceDiagram\n  participant c as Customer\n  participant aa as Alipay App \n  participant m as Merchant\n  participant qf as QF Pay\n  participant a as Alipay\n  \n  c->>+m:enter the merchant page\n  %%c->>+aa:enter the merchant page\n  c->>+m:place order\n  %%aa->>+m:place order\n  m->>+qf:send payment request\n  qf->>+a:send payment request\n  a->>a:verify transaction\n  a--\x3e>-qf:return the pre-paid order information\n  qf--\x3e>-m:return the pre-paid order information\n  m--\x3e>-aa:invoke the SDK with the returned paramters\n  c->>+aa:The user click\n  aa->>+a:initiate payment\n  a->>a:verify payment parameters\n  a--\x3e>-aa:prompt user for authorization\n  c->>aa:authorise payment\n  aa->>+a:authorise payment\n  a->>a:verify authorisation\n  a--\x3e>aa:show deduction result to the user\n  aa--\x3e>-c:show result\n  a--\x3e>-qf:return payment result\n  qf--\x3e>m:return payment result"}),"\n",(0,n.jsx)(t.h3,{id:"alipay-service-window-h5-payment-wap",children:"Alipay Service Window H5 Payment (WAP)"}),"\n",(0,n.jsx)(t.p,{children:"Alipay Service Window H5 Payment enables merchants to call the Alipay payment module by using the JSAPI interface to collect payments. The customer checks out on the merchant's mobile website in Alipay, confirms the total amount and makes the payment."}),"\n",(0,n.jsx)(t.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,n.jsx)(t.code,{children:"PayType: 800107"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 1:"})," Get User ID\nFor more details about how to acquire the user id please refer to the ",(0,n.jsx)(t.a,{href:"https://docs.open.alipay.com/289/105656",children:"official Alipay documentation"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 2:"})," Request Payment"]}),"\n",(0,n.jsx)(t.h3,{id:"payment-parameters",children:"Payment Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,n.jsx)(t.th,{children:"Parameter type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameters"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,n.jsx)(t.td,{children:"\u2014"}),(0,n.jsx)(t.td,{children:"\u2014"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alipay authorization code"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"openid"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,n.jsx)(t.td,{children:"String(64)"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.code,{children:"user_id"})," is returned by the interface, e.g. 2088802811715388"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Redirect URL"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"return_url"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,n.jsx)(t.td,{children:"String(512)"}),(0,n.jsx)(t.td,{children:"Address for user redirect after successful payment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Designated payment method"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"limit_pay"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Only applicable for mainland China"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Secondary parameter code"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter type"}),(0,n.jsx)(t.th,{children:"Parameter name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"pay_params"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"tradeNO"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,n.jsx)(t.td,{children:"Transaction number"}),(0,n.jsx)(t.td,{children:"Provide the transaction number in the call function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"txcurrcd"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"String(3)"}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Transaction currency. View the ",(0,n.jsx)(t.a,{href:"#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Public response parameters"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,n.jsx)(t.td,{children:"\u2014"}),(0,n.jsx)(t.td,{children:"\u2014"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Step 3:"})," Payout through the cashout interface\nFor more information regarding the cashout interface please refer to the ",(0,n.jsx)(t.a,{href:"https://docs.open.alipay.com/common/105591",children:"official Alipay documentation"}),"."]}),"\n",(0,n.jsx)(t.h1,{id:"alipay-pre-authorization",children:"Alipay Pre-Authorization"}),"\n",(0,n.jsx)(t.h2,{id:"freeze-funds",children:"Freeze Funds"}),"\n",(0,n.jsxs)(t.p,{children:["At the moment only Alipay wallet funds can be used for pre-authorization, credit-cards are not supported. Authorization requests lose their validity after 15min. In case of technical or currency related integration difficulties please contact ",(0,n.jsx)(t.a,{href:"mailto:technical.support@qfpay.global",children:"technical.support@qfpay.global"})," for support. Merchants can, at any time, unfreeze the funds in which case the assets will be available for spending on the original wallet. In addition, merchants can initiate a transfer for a fraction or all of the frozen funds in order to collect money for open customer invoices."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Alipay pre-authorization currently supports the following currencies: AUD, HKD, MYR, NZD, PHP, SGD, THB and USD:::",type:"note",children:[(0,n.jsx)(i.A,{href:"/img/alipay_preauth_process.jpg",target:"_blank",children:(0,n.jsx)(t.img,{alt:"Alipay Pre-Auth process-flow",src:r(87245).A+"",width:"935",height:"861"})}),(0,n.jsx)(t.h3,{id:"http-request-1",children:"HTTP Request"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.p,{children:["Find the correct ",(0,n.jsx)(t.code,{children:"pay_type"})," for your checkout szenario from the table below."]}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"PayType"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"801801"}),(0,n.jsx)(t.td,{children:"Alipay Pre-Authorization in-store QRC Payment - Consumer Present Mode (CPM)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"801808"}),(0,n.jsx)(t.td,{children:"Alipay Pre-Authorization in-store QRC Payment - Merchant Present Mode (MPM)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"801810"}),(0,n.jsx)(t.td,{children:"Alipay Pre-Authorization in-APP Payment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"801814"}),(0,n.jsx)(t.td,{children:"Alipay Pre-Authorization Online Payment"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),a=r(34164),i=r(23104),s=r(56347),l=r(205),c=r(57485),o=r(31682),d=r(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,u]=m({queryString:r,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),y=(()=>{const e=o??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=l[r].value;a!==n&&(o(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function A(e){const t=(0,x.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},87245:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alipay_preauth_process-7d37b713314f9f9cb3cb9ec527f2c5b5.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
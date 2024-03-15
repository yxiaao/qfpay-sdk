"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[5815],{68915:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=s(74848),n=s(28453);s(11470),s(19365),s(28774);const l={},i="Customs Declaration",d={id:"customs declaration",title:"Customs Declaration",description:"Customs declaration API auto-sends the WeChat/Alipay payment data to the customs to simplify the clearance process and saves time for online cross-border stores.",source:"@site/docs/06-customs declaration.md",sourceDirName:".",slug:"/customs declaration",permalink:"/qfpay-sdk/zh/docs/customs declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-customs declaration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appendix",permalink:"/qfpay-sdk/zh/docs/android-sdk/appendix"},next:{title:"CDI",permalink:"/qfpay-sdk/zh/docs/category/cdi"}},c={},a=[{value:"Push Customs Declaration",id:"push-customs-declaration",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Query Customs Declaration",id:"query-customs-declaration",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Request Parameters",id:"request-parameters-1",level:3},{value:"Response Parameters",id:"response-parameters-1",level:3},{value:"Repush Customs Declaration",id:"repush-customs-declaration",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Request Parameters",id:"request-parameters-2",level:3},{value:"Response Parameters",id:"response-parameters-2",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"customs-declaration",children:"Customs Declaration"}),"\n",(0,r.jsx)(t.p,{children:"Customs declaration API auto-sends the WeChat/Alipay payment data to the customs to simplify the clearance process and saves time for online cross-border stores."}),"\n",(0,r.jsx)(t.h2,{id:"push-customs-declaration",children:"Push Customs Declaration"}),"\n",(0,r.jsx)(t.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST ../custom/v1/declare"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"trade_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"weixin or alipay"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"customs"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsx)(t.td,{children:"Customs for declaration. Example\uff1aSHANGHAI_ZS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mch_customs_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsx)(t.td,{children:"Customs registration No. of the merchant"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"action_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(256)"}),(0,r.jsxs)(t.td,{children:["Declaration type. Only valid when ",(0,r.jsx)(t.code,{children:"trate_type"}),' is "wechat". "ADD" - new appplication, "MODIFY" - modification of applied declaration']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mch_customs_name"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(256)"}),(0,r.jsxs)(t.td,{children:["Merchant customs record name. Must be passed when ",(0,r.jsx)(t.code,{children:"trate_type"}),' is "alipay". Exaple: jwyhanguo_card']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"out_request_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsxs)(t.td,{children:["Merchant order number. Must be passed when ",(0,r.jsx)(t.code,{children:"trate_type"}),' is "alipay". Exaple: 15725904083420588032']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"amount"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Declaration amount. Must be passed when ",(0,r.jsx)(t.code,{children:"trate_type"}),' is "alipay". Example: 2.00']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["The following fields should be passed in case splitting or modifying order: ",(0,r.jsx)("br",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sub_order_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsx)(t.td,{children:"Merchant sub-order No. It is required if there is a split order. Example\uff1a1111960490"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fee_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsxs)(t.td,{children:["Currency. Must be passed when ",(0,r.jsx)(t.code,{children:"trate_type"}),' is "wechat". It can only be CNY']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"order_fee"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"Sub-order amount (in 0.01 CNY). Cannot exceed the original order amount. order_fee=transport_fee+product_fee. It is required if there is a split order Example\uff1a888"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"product_fee"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"Product price (in 0.01 CNY). It is required if there is a split order. Example\uff1a888"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"transport_fee"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"Logistics fee (in 0.01 CNY). It is required if there is a split order. Example\uff1a888"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(4)"}),(0,r.jsxs)(t.td,{children:["0000 = Declaration successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the declaration result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(t.a,{href:"./preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"resperr"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Response message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respmsg"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Other message information"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"verify_department"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Verification organization"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"verify_department_trade_id"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Transaction number of verification organization"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"query-customs-declaration",children:"Query Customs Declaration"}),"\n",(0,r.jsx)(t.p,{children:"Merchants query declaration status by QFPay transaction number."}),"\n",(0,r.jsx)(t.h3,{id:"http-request-1",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST/GET ../custom/v1/query"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters-1",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"trade_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"weixin or alipay"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"customs"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsx)(t.td,{children:"Customs for declaration. Example\uff1aSHANGHAI_ZS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sub_order_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"Sub order number. It is required if there is a split order."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters-1",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(4)"}),(0,r.jsxs)(t.td,{children:["0000 = Declaration successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the declaration result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(t.a,{href:"./preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"resperr"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Response message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respmsg"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Other message information"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"data"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:'Customs declaration details [{"resperr" : "", "errmsg" : null, "sub_order_no" : "15752730835729139712", "verify_department" : "OTHERS", "verify_department_trade_id" : "4200000459201911265585026208"}]'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"repush-customs-declaration",children:"Repush Customs Declaration"}),"\n",(0,r.jsx)(t.p,{children:"If additional order information has been submitted to the customs but is lost in the electronic port, the customs declaration re-push API can be used to push the information to the customs again."}),"\n",(0,r.jsx)(t.h3,{id:"http-request-2",children:"HTTP Request"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"POST ../custom/v1/redeclare"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters-2",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"trade_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(8)"}),(0,r.jsx)(t.td,{children:"weixin or alipay"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"customs"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsx)(t.td,{children:"Customs for declaration. Example\uff1aSHANGHAI_ZS"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mch_customs_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsx)(t.td,{children:"Customs registration No. of the merchant. Example: 110084111"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sub_order_no"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"Sub order number. It is required if there is a split order."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters-2",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Parameter type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"QFPay transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(4)"}),(0,r.jsxs)(t.td,{children:["0000 = Declaration successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the declaration result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(t.a,{href:"./preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"resperr"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Response message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"respmsg"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"Other message information"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(34164);const n={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>v});var r=s(96540),n=s(34164),l=s(23104),i=s(56347),d=s(205),c=s(57485),a=s(31682),o=s(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function u(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function p(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,l=x(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[a,h]=j({queryString:s,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,o.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:n}),m=(()=>{const e=a??p;return u({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function g(e){let{className:t,block:s,selectedValue:r,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),o=e=>{const t=e.currentTarget,s=c.indexOf(t),n=d[s].value;n!==r&&(a(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:d.map((e=>{let{value:t,label:s,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:o,...l,className:(0,n.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:n}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function A(e){const t=p(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(b,{...e,...t})]})}function v(e){const t=(0,f.A)();return(0,y.jsx)(A,{...e,children:h(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var r=s(96540);const n={},l=r.createContext(n);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);
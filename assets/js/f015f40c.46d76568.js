"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[6538],{18969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=t(74848),r=t(28453),i=t(11470),c=t(19365);const o={},a="Asynchronous Notifications",d={id:"common-api/asynchronous-notification",title:"Asynchronous Notifications",description:"To configure your notification URL of choice, please send the address as well as merchant and store information via email to technical.support@qfpay.com",source:"@site/docs/04-common-api/04-asynchronous-notification.md",sourceDirName:"04-common-api",slug:"/common-api/asynchronous-notification",permalink:"/qfpay-sdk/docs/common-api/asynchronous-notification",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-common-api/04-asynchronous-notification.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Refunds",permalink:"/qfpay-sdk/docs/common-api/refunds"},next:{title:"Transaction Notes",permalink:"/qfpay-sdk/docs/common-api/transaction-note"}},l={},h=[{value:"Description",id:"description",level:3},{value:"Asynchronous Notification Rules",id:"asynchronous-notification-rules",level:2},{value:"Signature Verification",id:"signature-verification",level:2},{value:"Response Parameters of Asynchronous Notifications",id:"response-parameters-of-asynchronous-notifications",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"asynchronous-notifications",children:"Asynchronous Notifications"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To configure your notification URL of choice, please send the address as well as merchant and store information via email to ",(0,s.jsx)(n.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Notifications are available for payments ",(0,s.jsx)(n.strong,{children:'"notify_type": "payment"'})," and refunds ",(0,s.jsx)(n.strong,{children:'"notify_type": "refund"'}),". The request parameters from Asynchronous Notifications may include additional parameters in future versions. Developers must ensure that their programs can support new parameters. In addition, developers can get the latest development documentation from this website."]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Upon successful payment and refund, QFPay API will send an asynchronous notification message to the URL address defined by the merchant. Merchant can develop an end-point to receive this notification message and update the status of a transaction accordingly. We recommend merchants to use the query function of the API in conjunction with the asynchronous notification end point to retireve the payment status. Asynchronous notifications only work with ports 80 and 443 due to security requirements."}),"\n",(0,s.jsx)(n.h2,{id:"asynchronous-notification-rules",children:"Asynchronous Notification Rules"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The merchant will only be notified after the payment or refund transaction has been successful."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Please send an email with your notification endpoint URL address to ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})})," for the asynchronous notification setup. Our technical support team will setup the provided URL for you."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Upon receiving the notification, merchant shall verifiy the message integrity according to signature verification procedure described below. If the verification is successful, the system is required to response with status code 200 OK and the string SUCCESS in the response body."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If our API does not receive a response with status code 200 OK and SUCCESS message, we will send out asynchronous notifications at the following intervals after the first message; 2m, 10m, 10m, 60m, 2h, 6h, 15h. Notifications will stop when the response with status code 200 OK and SUCCESS message is received."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"One set of app code and key can be setup with one notification URL address only. Patners shall use one notification URL address for their sub-merchants."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Method: POST content-type: ",(0,s.jsx)(n.code,{children:"application/json"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"signature-verification",children:"Signature Verification"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"For code instructions select Python with the tabs above.\n"})}),"\n",(0,s.jsx)(i.A,{children:(0,s.jsx)(c.A,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import hashlib\nimport json\n\n# Client Credentials\nclient_key = "3ABB1BFFE2E0497BB9270978B0BXXXXX"\n\n# Raw Content Data\ndata = {"status": "1", "pay_type": "800101", "sysdtm": "2020-06-15 10:32:58", "paydtm": "2020-06-15 10:33:35", "goods_name": "", "txcurrcd": "THB", "txdtm": "2020-06-15 10:32:58", "mchid": "O37MRh6Qq5", "txamt": "10", "exchange_rate": "", "chnlsn2": "", "out_trade_no": "9G3ZIWTG1R3IVSC2AH2O5EGKJQ7I72QO", "syssn": "20200615000200020000641807", "cash_fee_type": "", "cancel": "0", "respcd": "0000", "goods_info": "", "cash_fee": "0", "notify_type": "payment", "chnlsn": "2020061522001453561406303428", "cardcd": "2088032341453564"}\n\ncombine_str = (json.dumps(data)+client_key).encode()\n\nsignature = hashlib.md5(combine_str).hexdigest().upper()\n\nprint(signature)\n'})})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Signature String:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"A4021A3B1EBBB0F05451EF94E9EXXXXX"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The signature generation method for notifications is slightly different from other POST requests. In order to generate the signature simply take the raw content and add the ",(0,s.jsx)(n.code,{children:"client_key"})," to the end. Then hash the encoded string with the MD5 algorithm."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Obtain the signature from the ",(0,s.jsx)(n.code,{children:"X-QF-SIGN"})," field in the HTTP request header"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2:"})," Attach the key to the end of the request body received by the end point"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3:"})," Sign the string from step 2 with MD5 algorithm"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4:"})," Compare the MD5 result with the signature from ",(0,s.jsx)(n.code,{children:"X-QF-SIGN"}),", return an HTTP response with status code 200 OK and SUCCESS in the response body if the verification is successful"]}),"\n",(0,s.jsx)(n.h2,{id:"response-parameters-of-asynchronous-notifications",children:"Response Parameters of Asynchronous Notifications"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Asynchronous Notifications POST data in JSON form structured like this:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "1",\n  "pay_type": "800101",\n  "sysdtm": "2020-05-14 12:32:56",\n  "paydtm": "2020-05-14 12:33:56",\n  "goods_name": "",\n  "txcurrcd": "THB",\n  "txdtm": "2020-05-14 12:32:56",\n  "mchid": "lkbqahlRYj",\n  "txamt": "10",\n  "exchange_rate": "",\n  "chnlsn2": "",\n  "out_trade_no": "YEPE7WTW46NVU30JW5N90H7DHD94N56B",\n  "syssn": "20200514000300020093755455",\n  "cash_fee_type": "",\n  "cancel": "0",\n  "respcd": "0000",\n  "goods_info": "",\n  "cash_fee": "0",\n  "notify_type": "payment",\n  "chnlsn": "2020051422001453561444935817",\n  "cardcd": "2088032341453564"\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Send always"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"status"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"1 = payment success"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pay_type"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Please refer to the section ",(0,s.jsx)(n.a,{href:"../preparation/paycode#payment-codes",children:"Payment Codes"})," for a complete list of payment types."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sysdtm"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Transaction creation time in the system. This parameter value is used as the cut-off time for settlements."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"paydtm"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Payment time of the transaction."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"txcurrcd"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Transaction currency. View the ",(0,s.jsx)(n.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"txdtm"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Order creation time provided by the merchant in the payment request."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"txamt"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Transaction amount in Cents."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"out_trade_no"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"External transaction number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"syssn"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"QFPay transaction number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cancel"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Transaction cancel status: ",(0,s.jsx)("br",{})," 0 = Not cancelled ",(0,s.jsx)("br",{})," 1 = For CPM: Transaction reversed or refunded successfully ",(0,s.jsx)("br",{})," 2 = For MPM: Transaction canceled successfully ",(0,s.jsx)("br",{})," 3 = Transaction refunded ",(0,s.jsx)("br",{})," 4 = Alipay Preauth order finished ",(0,s.jsx)("br",{})," 5 = Transaction partially refunded."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"respcd"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Transaction status - will be ",(0,s.jsx)(n.code,{children:"0000"})," in the async notification message"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"notify_type"})}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Notification Type: ",(0,s.jsx)(n.code,{children:"payment"})," or ",(0,s.jsx)(n.code,{children:"refund"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mchid"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Unique merchant ID. This parameter is only returned to agents."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"goods_name"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Goods name or marking. Custom goods name. Parameter needs to be ",(0,s.jsx)(n.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"exchange_rate"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Applied currency conversion exchange rate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"chnlsn2"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Additional transaction number added to the order"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"goods_info"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Product description"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"chnlsn"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Transaction number from the payment channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cardcd"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Card number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cash_fee"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Actual payment amount by user = transaction amount - discounts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cash_fee_type"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Actual payment currency e.g. CNY"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cash_refund_fee"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Actual refund amount"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cash_refund_fee_type"})}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Actual refund currency e.g. CNY"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(96540),r=t(34164),i=t(23104),c=t(56347),o=t(205),a=t(57485),d=t(31682),l=t(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[c,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,h]=p({queryString:t,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,l.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),m=(()=>{const e=d??j;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&a(m)}),[m]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),l=e=>{const n=e.currentTarget,t=a.indexOf(n),r=o[t].value;r!==s&&(d(n),c(r))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:l,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function S(e){const n=(0,f.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
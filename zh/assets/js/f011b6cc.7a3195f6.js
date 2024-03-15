"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[5373],{73911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const o={},d="Refunds",c={id:"common-api/refunds",title:"Refunds",description:"Only transactions with the return code 0000 (transaction successful) can be refunded.",source:"@site/docs/04-common-api/03-refunds.md",sourceDirName:"04-common-api",slug:"/common-api/refunds",permalink:"/qfpay-sdk/zh/docs/common-api/refunds",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-common-api/03-refunds.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reversal/ Cancel",permalink:"/qfpay-sdk/zh/docs/common-api/reversal-cancel"},next:{title:"Asynchronous Notifications",permalink:"/qfpay-sdk/zh/docs/common-api/asynchronous-notification"}},l={},u=[{value:"API Endpoint for Refunds",id:"api-endpoint-for-refunds",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"refunds",children:"Refunds"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only transactions with the return code 0000 (transaction successful) can be refunded."})}),"\n",(0,r.jsx)(n.h2,{id:"api-endpoint-for-refunds",children:"API Endpoint for Refunds"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Request Header:\n\n{\n  Content-Type: application/x-www-form-urlencoded;\n  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********\n  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19\n}\n\nRequest Body:\n\n{\n  txamt=10&syssn=20191227000200020061752831&out_trade_no=12345678&txdtm=2019-12-27 10:39:39&key=0E32A59A8B454940A2FF39**********&mchid=ZaMVg*****\n}\n\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nfrom hashids import Hashids\nimport datetime\nimport string\nimport random\n\n# Enter Client Credentials\nenvironment = 'https://openapi-test.qfpay.com'\napp_code = 'D5589D2A1F2E42A9A60C37**********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)         \nrandom_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))                       \n  \n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #Partial or full refund amount\nsyssn = '20191227000200020061752831' #Original transaction number\nout_trade_no = random_string\ntxdtm = current_time \nkey = client_key\nmchid = 'ZaMVg*****'\n\n\n#data ={'txamt': txamt, 'syssn': syssn, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}\ndata ={'mchid': mchid, 'txamt': txamt, 'syssn': syssn,  'out_trade_no': out_trade_no, 'txdtm': txdtm}\n\nr = requests.post(environment+\"/trade/v1/refund\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class Refund {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37**********";\n        String key="0E32A59A8B454940A2FF39**********";\n        String mchid="ZaMVg*****"; // Only Agents must provide the mchid\n\n        String out_trade_no= "22333444455555";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="15";\n        String syssn="20191227000300020061662295";\n         //\u5982\u679c\u662f\u56fd\u5185\u94b1\u53f0\uff0c\u4ea7\u54c1\u540d\u79f0\u5bf9\u5e94\u7684\u5b57\u6bb5\u662fgoods_name\uff0c\u4e0d\u662fproduct_name.\n         //String product_name="Test Name";\n\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("syssn", syssn);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n         //\u5982\u679c\u662f\u56fd\u5185\u94b1\u53f0\uff0c\u7f51\u5740\u662f\uff1ahttps://openapi-test.qfpay.com.\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/refund", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://openapi-test.qfpay.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37**********'\nconst client_key = '0E32A59A8B454940A2FF3***********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'syssn': '20191231000300020063521806',\n'txamt': '10',\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/refund\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-eur.qfapi.com';\n     $api_type = '/trade/v1/refund';\n     $syssn = '20200311066100020000977840';\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get the currend date-time  \n     \n     $fields_string = '';\n     $fields = array(\n\t  //'mchid' => urlencode($mchid),\n    'syssn' => urlencode($syssn),\n\t  'out_trade_no' => urlencode(GetRandStr(20)),\n\t  'txamt' => urlencode(2200),\n\t  'txdtm' => $now_time\n    );\n    ksort($fields); //Sort parameters in ascending order from A to Z\n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n\t$fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"orig_syssn": "20191227000200020061752831", \n"sysdtm": "2019-12-27 11:11:23", \n"paydtm": "2019-12-27 11:11:26", \n"txdtm": "2019-12-27 11:10:38", \n"udid": "qiantai2", \n"txcurrcd": "EUR", \n"txamt": "10", \n"resperr": "success", \n"respmsg": "", \n"out_trade_no": "RGNOEIVU9JZLNP9GGYXWXCW7OEMI720F", \n"syssn": "20191227000300020061652643", \n"respcd": "0000", \n"chnlsn": "2019122722001411461404119764", \n"cardcd": ""\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST ../trade/v1/refund"})}),"\n",(0,r.jsx)(n.p,{children:"Merchants can use the refund interface to refund transactions. The merchant account must have a sufficient transaction amount on the same trading day in order to refund transactions. The maximum refund amount for a transaction must not exceed to original payment amount. Unless otherwise specified, once a refund request is submitted and accepted, it is not reversible. The refund capability and the maximum time period for refund varies across payment channels. Please contact your QFPay support representative for more information."}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Parameter code"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Parameter type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QF Pay transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsxs)(n.td,{children:["Original transaction ID ",(0,r.jsx)(n.code,{children:"syssn"}),"  that is supposed to be refunded"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API order number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External refund transaction number / Merchant platform refund transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Refund amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsxs)(n.td,{children:["Amount of the refund. Unit in cents (i.e. 100 = $1) ",(0,r.jsx)("br",{})," Required for both full refund and partial refund. Some payment channel may not support partial refund."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transaction request time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Merchant ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID. On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"Used to record the local transaction time. The default is Beijing time UTC+8 (+0800)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Device ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"udid"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{children:"Unique transaction device ID"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["|Parameter name|Parameter code|Parameter type|Description|\n|-----    |----|------ |-----   |-----   |\n|Refund Transaction ID | ",(0,r.jsx)(n.code,{children:"syssn"}),"  |String(40)   |New transaction ID referring to the newly created refund transaction|\n|Original Transaction ID| ",(0,r.jsx)(n.code,{children:"orig_syssn"}),"  |String(128)   |Previous transaction ID referring to the original transaction that has been refunded|\n|Refund amount| ",(0,r.jsx)(n.code,{children:"txamt"}),"   |Int(11)  | Amount of the refund. Unit in cents (i.e. 100 = $1)|\n|System transaction time | ",(0,r.jsx)(n.code,{children:"sysdtm"}),"  | String(20)  |Format: YYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements.|\n|Return code| ",(0,r.jsx)(n.code,{children:"respcd"})," |  String(4)|  0000-Request successful.",(0,r.jsx)("br",{}),"1143/1145 - merchants are required to continue to query the refund transaction result. ",(0,r.jsx)("br",{}),"All other return codes indicate transaction failure. Please refer to the section ",(0,r.jsx)(n.a,{href:"../preparation/paycode#transaction-status-codes",children:"payment status codes"})," for a complete list of return codes.|\n|Response message| ",(0,r.jsx)(n.code,{children:"resperr"})," |  String(128)| Error message |\n| Net payment amount |",(0,r.jsx)(n.code,{children:"cash_fee"}),"  | String | Actual payment amount by user = transaction amount - discounts |\n| Payment currency |",(0,r.jsx)(n.code,{children:"cash_fee_type"})," | String | Actual payment currency e.g. CNY |\n| Net refund amount | ",(0,r.jsx)(n.code,{children:"cash_refund_fee"})," | String | Actual refund amount |\n| Refund currency | ",(0,r.jsx)(n.code,{children:"cash_refund_fee_type"})," | String | Actual refund currency e.g. CNY |"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),o=t(205),d=t(57485),c=t(31682),l=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&d(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),l=e=>{const n=e.currentTarget,t=d.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:l,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function _(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
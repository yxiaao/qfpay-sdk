"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[4344],{94454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=t(74848),s=t(28453),d=t(11470),i=t(19365);const a={},c="Transaction Enquiry",l={id:"common-api/transaction-enquiry",title:"Transaction Enquiry",description:"If the mchid is provided, it is mandatory to submit the mchid when calling the API (unless otherwise specified). On the contrary, if mchid is not provided, merchants shall not pass the mchid field in the API request.",source:"@site/docs/04-common-api/01-transaction-enquiry.md",sourceDirName:"04-common-api",slug:"/common-api/transaction-enquiry",permalink:"/qfpay-sdk/zh/docs/common-api/transaction-enquiry",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-common-api/01-transaction-enquiry.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common API",permalink:"/qfpay-sdk/zh/docs/category/common-api"},next:{title:"Reversal/ Cancel",permalink:"/qfpay-sdk/zh/docs/common-api/reversal-cancel"}},o={},h=[{value:"API Endpoint for Transaction Enquiry",id:"api-endpoint-for-transaction-enquiry",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Account Statement",id:"account-statement",level:2},{value:"API Endpoint for Account Statement",id:"api-endpoint-for-account-statement",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Request Parameter",id:"request-parameter",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"transaction-enquiry",children:"Transaction Enquiry"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"mchid"})," is provided, it is mandatory to submit the ",(0,r.jsx)(n.code,{children:"mchid"})," when calling the API (unless otherwise specified). On the contrary, if ",(0,r.jsx)(n.code,{children:"mchid"})," is not provided, merchants shall not pass the ",(0,r.jsx)(n.code,{children:"mchid"})," field in the API request."]})]}),"\n",(0,r.jsx)(n.h2,{id:"api-endpoint-for-transaction-enquiry",children:"API Endpoint for Transaction Enquiry"}),"\n",(0,r.jsx)(n.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST ../trade/v1/query"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Request Header:\n\n{\n  Content-Type: application/x-www-form-urlencoded;\n  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********\n  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19\n}\n\nRequest Body:\n\n{\n  mchid=ZaMVg*****&syssn=20191227000200020061752831&start_time=2019-12-27 00:00:00&end_time=2019-12-27 23:59:59\n}\n"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nfrom hashids import Hashids\nimport datetime\nimport string\nimport random\n\n# Enter Client Credentials\nenvironment = 'https://openapi-test.qfpay.com'\napp_code = 'D5589D2A1F2E42A9A60C37**********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)         \nrandom_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))                       \n\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\nmchid = 'ZaMVg*****' #(Agent ID, Merchant ID)\nsyssn = '20191227000200020061752831' #Search by transaction number only\nout_trade_no = '2019122722001411461404119764' #Search by out_trade_no only\nstart_time = '2019-12-27 00:00:00'\nend_time = '2019-12-27 23:59:59'\nkey = client_key\n\n\n#data ={'mchid': mchid, 'syssn': syssn, 'out_trade_no': out_trade_no, 'start_time': start_time, 'end_time': end_time}\ndata ={'mchid': mchid, 'syssn': syssn}\n\nr = requests.post(environment+\"/trade/v1/query\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(make_req_sign(data, key))  \nprint(r.json())\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class Enquiry {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37**********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****"; // Only Agents must provide the mchid\n\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n\n        String syssn="20191227000300020061662295";\n        String start_time = "2019-12-27 00:00:00";\n        String end_time = "2019-12-27 23:59:59";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("syssn", syssn);\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/query", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://openapi-test.qfpay.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37**********'\nconst client_key = '0E32A59A8B454940A2FF39**********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'syssn': '20191231000300020063521806',\n'start_time': '2019-12-27 00:00:00',\n'end_time': '2019-12-31 23:59:59',\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/query\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\nob_start();\nfunction GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n    $num=mt_rand(0,$len);\n    $randstr .= $str[$num];\n  }\n  return $randstr;\n}\n  \n$url = 'https://test-openapi-eur.qfapi.com';\n$api_type = '/trade/v1/query';\n$syssn = '20200311066100020000977841';\n//$out_trade_no = 'zCvo0IqTg0SaQkGnHd6w';\n//$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials provided by QFPay\n$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials provided by QFPay\n$now_time = date(\"Y-m-d H:i:s\"); //Get the current date-time  \n\n$fields_string = '';\n$fields = array(\n//'mchid' => urlencode($mchid),\n'syssn' => urlencode($syssn),\n//'out_trade_no' => urlencode($out_trade_no),\n//'start_time' = '2020-03-01 00:00:00',\n//'end_time' = '2020-03-04 23:59:59'\n);\nksort($fields); //Sort parameters in ascending order from A to Z\nprint_r($fields);\n\nforeach($fields as $key=>$value) { \n\t$fields_string .= $key.'='.$value.'&' ;\n}\n$fields_string = substr($fields_string , 0 , strlen($fields_string) - 1); \n\n$sign = strtoupper(md5($fields_string . $app_key));\n\n//// Header ////\n$header = array();\n$header[] = 'X-QF-APPCODE: ' . $app_code;\n$header[] = 'X-QF-SIGN: ' . $sign;\n\n//Post Data\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url . $api_type);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $header);\ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n$output = curl_exec($ch);\ncurl_close($ch);    \n\n$final_data = json_decode($output, true);\nprint_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"respmsg": "", \n"resperr": "\u8bf7\u6c42\u6210\u529f", \n"respcd": 0000, \n"data": \n[{\n"cardtp": "5", \n"cancel": "0", \n"pay_type": "800101", \n"order_type": "payment", \n"clisn": "038424", \n"txdtm": "2019-12-27 10:39:39", \n"goods_detail": "", \n"out_trade_no": "CHZ7D61JN1ANJF2R2K1I7TXP2JTCEWBL", \n"syssn": "20191227000200020061752831", \n"sysdtm": "2019-12-27 10:40:24", \n"paydtm": "2019-12-27 10:42:18", \n"goods_name": "", \n"txcurrcd": "EUR", \n"chnlsn2": "", \n"udid": "qiantai2", \n"userid": "2605489", \n"txamt": "10", \n"chnlsn": "2019122722001411461404119764", \n"respcd": "0000", \n"goods_info": "", \n"errmsg": "success"\n}], \n"page": "1", \n"page_size": "10"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"After making a payment, refund or cancellation request, the merchant can use the query interface to obtain the transaction status."}),"\n",(0,r.jsxs)(n.p,{children:["The merchant can use the query interface to enquire transaction status of one or multiple transactions. In case the interface does not return ",(0,r.jsx)(n.code,{children:"syssn"})," in time, use ",(0,r.jsx)(n.code,{children:"out_trade_no"})," as a condition to query the transaction status."]}),"\n",(0,r.jsxs)(n.p,{children:["If merchants would like to query transactions in a month, they can provide ",(0,r.jsx)(n.code,{children:"start_time"})," and ",(0,r.jsx)(n.code,{children:"end_time"})," then records will be filtered according to the system transaction time ",(0,r.jsx)(n.code,{children:"sysdtm"}),". The interval must be within one calendar month. Otherwise, it is recommended to include the ",(0,r.jsx)(n.code,{children:"syssn"})," parameter as a query condition."]}),"\n",(0,r.jsxs)(n.p,{children:["When the query transaction is a refund then an additional parameter ",(0,r.jsx)(n.code,{children:"origssn"})," will be returned. The ",(0,r.jsx)(n.code,{children:"origssn"})," shows the QFPay transaction number of the original transaction that has been refunded."]}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Parameter code"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Parameter type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Merchant number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mchid"})}),(0,r.jsx)(n.td,{children:"For Agents"}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsxs)(n.td,{children:["If MCHID is given, it is mandatory to provide the ",(0,r.jsx)(n.code,{children:"mchid."}),"On the contrary, if ",(0,r.jsx)(n.code,{children:" mchid"})," is not provided, merchants shall not pass the ",(0,r.jsx)(n.code,{children:"mchid"})," field in the API request."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"Multiple entries are seperated by commas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API order number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number / Merchant platform transaction number, multiple entries are seperated by commas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsx)(n.td,{children:"Multiple entries are seperated by commas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transaction return code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsx)(n.td,{children:"Returns all orders with return code status by default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Starting time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"start_time"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["It is ignored when ",(0,r.jsx)(n.code,{children:"syssn"})," or ",(0,r.jsx)(n.code,{children:"out_trade_number"})," is provided. The default date time is the start of current month. Cross-month queries must add the time query parameters ",(0,r.jsx)(n.code,{children:"start_time"})," and ",(0,r.jsx)(n.code,{children:"end_time"}),". ",(0,r.jsx)("br",{}),"Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"End Time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"end_time"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["It is ignored when ",(0,r.jsx)(n.code,{children:"syssn"})," or ",(0,r.jsx)(n.code,{children:"out_trade_number"})," is provided. The default date time is the end of current month. Cross-month queries must add the time query parameters ",(0,r.jsx)(n.code,{children:"start_time"})," and ",(0,r.jsx)(n.code,{children:"end_time"}),". ",(0,r.jsx)("br",{}),"Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time zone"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txzone"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"String(5)"}),(0,r.jsx)(n.td,{children:"Used to record the local order time. The default is Beijing time UTC+8 (+0800)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Number of pages"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"page"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Int(8)"}),(0,r.jsx)(n.td,{children:"Default value is 1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Number of items displayed per page"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"page_size"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Int(8)"}),(0,r.jsxs)(n.td,{children:["By default 10 transactions will be displayed. The maximum ",(0,r.jsx)(n.code,{children:"page_size"})," value is 100"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter name"}),(0,r.jsx)(n.th,{children:"Parameter code"}),(0,r.jsx)(n.th,{children:"Parameter type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Page number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"page"})}),(0,r.jsx)(n.td,{children:"Int(8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request result description"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resperr"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Display number of items per page"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"page_size"})}),(0,r.jsx)(n.td,{children:"Int(8)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request result code"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsx)(n.td,{children:"0000 - Interface call succeeded"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Query result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"data"})}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"JSON format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QFPay transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"syssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API order number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"out_trade_no"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"External transaction number / Merchant platform transaction number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Wallet/Channel transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"chnlsn"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"goods_name"})}),(0,r.jsx)(n.td,{children:"String(64)"}),(0,r.jsxs)(n.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,r.jsx)(n.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transaction currency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txcurrcd"})}),(0,r.jsx)(n.td,{children:"String(3)"}),(0,r.jsxs)(n.td,{children:["View the ",(0,r.jsx)(n.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Original transaction number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"origssn"})}),(0,r.jsx)(n.td,{children:"String(40)"}),(0,r.jsxs)(n.td,{children:["Refers to the original QFPay transaction number. This parameter is only available when the ",(0,r.jsx)(n.code,{children:"syssn"})," of a refund is queued"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pay_type"})}),(0,r.jsx)(n.td,{children:"String(6)"}),(0,r.jsxs)(n.td,{children:["Please refer to the section ",(0,r.jsx)(n.a,{href:"../preparation/paycode#payment-codes",children:"Payment Codes"})," for a complete list of payment types"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Order type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"order_type"})}),(0,r.jsx)(n.td,{children:"String(16)"}),(0,r.jsx)(n.td,{children:"Payment: Payment transaction Refund: Refund transaction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Request transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Request transaction time provided by merchant in payment and refund request. Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transaction amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"txamt"})}),(0,r.jsx)(n.td,{children:"Int(11)"}),(0,r.jsx)(n.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System transaction time"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sysdtm"})}),(0,r.jsx)(n.td,{children:"String(20)"}),(0,r.jsxs)(n.td,{children:["Format: YYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cancellation or refund indicator"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cancel"})}),(0,r.jsx)(n.td,{children:"String(1)"}),(0,r.jsxs)(n.td,{children:["Transaction cancel status: ",(0,r.jsx)("br",{})," 0 = Not cancelled ",(0,r.jsx)("br",{})," 1 = For CPM: Transaction reversed or refunded successfully ",(0,r.jsx)("br",{})," 2 = For MPM: Transaction canceled successfully ",(0,r.jsx)("br",{})," 3 = Transaction refunded ",(0,r.jsx)("br",{})," 4 = Alipay Preauth order finished ",(0,r.jsx)("br",{})," 5 = Transaction partially refunded"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment status"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"respcd"})}),(0,r.jsx)(n.td,{children:"String(4)"}),(0,r.jsxs)(n.td,{children:["0000 = transaction succeeded ",(0,r.jsx)("br",{})," 1143/1145 = Please wait to evaluate the transaction status. All other response codes indicate transaction failure"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment status message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"errmsg"})}),(0,r.jsx)(n.td,{children:"String(128)"}),(0,r.jsx)(n.td,{children:"Payment result description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Currency exchange rate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"exchange_rate"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Applied currency conversion exchange rate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Net payment amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_fee"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Actual payment amount by user = transaction amount - discounts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Payment currency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_fee_type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Actual payment currency e.g. CNY"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Net refund amount"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_refund_fee"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Actual refund amount"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Refund currency"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cash_refund_fee_type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Actual refund currency e.g. CNY"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"account-statement",children:"Account Statement"}),"\n",(0,r.jsxs)(n.p,{children:["The clearing statement for a particular payment channel is downloaded regularly. Additional requests can only be made in the production environment. The system response is in form of a compressed zip file. Data is based on the selected payment channel and contains all merchants therefore the ",(0,r.jsx)(n.code,{children:"mchid"})," cannot be passed in as a request parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"api-endpoint-for-account-statement",children:"API Endpoint for Account Statement"}),"\n",(0,r.jsx)(n.h3,{id:"http-request-1",children:"HTTP Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET ../download/v1/trade_bill"})}),"\n",(0,r.jsx)(n.h3,{id:"request-parameter",children:"Request Parameter"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Request code"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Parameter type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trade_date"})}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"String(10)"}),(0,r.jsx)(n.td,{children:"Get a specific account statement for the selected date. Example: 2017-10-17"})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),s=t(34164),d=t(23104),i=t(56347),a=t(205),c=t(57485),l=t(31682),o=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(d),(0,r.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,d=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:d}))),[l,h]=p({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),y=(()=>{const e=l??x;return m({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,d]),tabValues:d}}var j=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,d.a_)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==r&&(l(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:d}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...d,className:(0,s.A)("tabs__item",y.tabItem,d?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function v(e){const n=(0,j.A)();return(0,f.jsx)(_,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);
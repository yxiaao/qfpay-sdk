"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[79],{75136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),s=n(11470),i=n(19365),d=n(28774);const c={},o="WeChat Web QRC Payments",l={id:"online-shop/wechat/wechat-web-qrc-payments",title:"WeChat Web QRC Payments",description:"The above command returns JSON structured like this:",source:"@site/docs/03-online-shop/wechat/01-wechat-web-qrc-payments.md",sourceDirName:"03-online-shop/wechat",slug:"/online-shop/wechat/wechat-web-qrc-payments",permalink:"/qfpay-sdk/zh/docs/online-shop/wechat/wechat-web-qrc-payments",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-online-shop/wechat/01-wechat-web-qrc-payments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WeChat",permalink:"/qfpay-sdk/zh/docs/category/wechat"},next:{title:"WeChat Pay JSAPI (in wechat browser)",permalink:"/qfpay-sdk/zh/docs/online-shop/wechat/wechat-pay-jsapi"}},h={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"wechat-web-qrc-payments",children:"WeChat Web QRC Payments"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\nFor code instructions select Python, Java, Node.js or PHP with the tabs above.\n\n"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"#coding=utf8\nimport urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib\nimport requests\nimport datetime\nimport string\n\n# Enter Client Credentials\nenvironment = 'https://openapi-test.qfpay.com'\napp_code = 'D5589D2A1F2E42A9A60C37*********'\nclient_key = '0E32A59A8B454940A2FF39**********'\n\n\n# Create parameter values for data payload\ncurrent_time = datetime.datetime.now().replace(microsecond=0)                                \n\nprint(current_time)\n\n# Create signature\ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append('%s=%s'%(k,v))\n    unsign_str = ('&'.join(p) + key).encode(\"utf-8\")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\n\n# Body payload\ntxamt = '10' #In USD,EUR,etc. Cent\ntxcurrcd = 'EUR'\npay_type = '800201'\nauth_code='283854702356157409' #CPM only\nout_trade_no = '01234567890123'\ntxdtm = current_time\ngoods_name = 'test1'   \nmchid = 'ZaMVg*****'\nkey = client_key\n\n\n#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}\ndata ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}\n\nr = requests.post(environment+\"/trade/v1/payment\",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})\n\nprint(r.json())\n"})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n\npublic class TestMain {\n    public static void main(String args[]){\n        String appcode="D5589D2A1F2E42A9A60C37*********";\n        String key="0E32A59A8B454940A2FF39*********";\n        String mchid="ZaMVg*****";\n\n        String pay_type="800201";\n        String out_trade_no= "01234567890123";\n        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        String date=df.format(new Date());\n        String txdtm=date;\n        String txamt="10";\n        String txcurrcd="EUR";\n\n        Map<String, String> unsortMap = new HashMap<>();\n        unsortMap.put("mchid", mchid);\n        unsortMap.put("pay_type", pay_type);\n        unsortMap.put("out_trade_no", out_trade_no);\n        unsortMap.put("txdtm", txdtm);\n        unsortMap.put("txamt", txamt);\n        unsortMap.put("txcurrcd", txcurrcd);\n        //unsortMap.put("product_name", product_name);\n        //unsortMap.put("valid_time", "300");\n\n        String data=QFPayUtils.getDataString(unsortMap);\n        System.out.println("Data:\\n"+data+key);\n        String md5Sum=QFPayUtils.getMd5Value(data+key);\n        System.out.println("Md5 Value:\\n"+md5Sum);\n\n        String url="https://openapi-test.qfpay.com";\n        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);\n        System.out.println(resp);\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"javascript",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Enter Client Credentials\nconst environment = 'https://openapi-test.qfpay.com'\nconst app_code = 'D5589D2A1F2E42A9A60C37*********'\nconst client_key = '0E32A59A8B454940A2FF39*********'\n\n// Generate Timestamp\nvar dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\\..+/, '')\nconsole.log(dateTime)\n\n// Body Payload\nconst key = client_key\nvar tradenumber = String(Math.round(Math.random() * 1000000000))\nconsole.log(tradenumber)\n\nvar payload = {\n'txamt': '10', // In USD,EUR,etc. Cent\n'txcurrcd': 'EUR',\n'pay_type': '800201',\n'out_trade_no': tradenumber,\n'txdtm': dateTime,\n'mchid': 'ZaMVg*****'\n};\n\n// Signature Generation\nconst ordered = {};\nObject.keys(payload).sort().forEach(function(key) {\n  ordered[key] = payload[key] });\nconsole.log(ordered)\n\nvar str = [];\nfor (var p in ordered)\nif (ordered.hasOwnProperty(p)) {\nstr.push((p) + \"=\" + (ordered[p]));\n}\nvar string = str.join(\"&\")+client_key;\nconsole.log(string)\n\nconst crypto = require('crypto')\nvar hashed = crypto.createHash('md5').update(string).digest('hex')\nconsole.log(hashed)\n\n\n// API Request\nvar request = require(\"request\");\nrequest({\n  uri: environment+\"/trade/v1/payment\",\n  headers: {\n    'X-QF-APPCODE': app_code,\n    'X-QF-SIGN': hashed\n  },\n  method: \"POST\",\n  form: payload,\n  }, \n  function(error, response, body) {\n  console.log(body);\n});\n"})})}),(0,r.jsx)(i.A,{value:"php",label:"Php",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\nob_start();\n  function GetRandStr($length){\n  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n  $len=strlen($str)-1;\n  $randstr='';\n  for($i=0;$i<$length;$i++){\n  $num=mt_rand(0,$len);\n  $randstr .= $str[$num];\n  }\n  return $randstr;\n  }\n  \n     $url = 'https://test-openapi-eur.qfapi.com';\n     $api_type = '/trade/v1/payment';\n     $pay_type = '800201';\n     //$mchid = \"MNxMp11FV35qQN\"; //Only agents must provide this parameter\n     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay\n     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay\n     $now_time = date(\"Y-m-d H:i:s\"); //Get current date-time\n     \n     $fields_string = '';\n     $fields = array(\n      //'mchid' => urlencode($mchid),\n      'pay_type' => urlencode($pay_type),\n      'out_trade_no' => urlencode(GetRandStr(20)),\n      'txcurrcd' => urlencode('EUR'),\n      'txamt' => urlencode(2200),\n      'txdtm' => $now_time\n    );\n    ksort($fields); //\u5b57\u5178\u6392\u5e8fA-Z\u5347\u5e8f\u65b9\u5f0f\n    print_r($fields);\n    \n    foreach($fields as $key=>$value) { \n  $fields_string .= $key.'='.$value.'&' ;\n  }\n  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);\n  \n  $sign = strtoupper(md5($fields_string . $app_key));\n  \n  //// Header ////\n  $header = array();\n  $header[] = 'X-QF-APPCODE: ' . $app_code;\n  $header[] = 'X-QF-SIGN: ' . $sign;\n  \n  //Post Data\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url . $api_type);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);\n  $output = curl_exec($ch);\n  curl_close($ch);    \n\n  $final_data = json_decode($output, true);\n  print_r($final_data);\n\nob_end_flush();\n?>\n"})})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "sysdtm": "2020-04-10 11:45:44", \n  "paydtm": "2020-04-10 11:45:44", \n  "txcurrcd": "THB", \n  "respmsg": "OK", \n  "qrcode": "weixin://wxpay/bizpayurl?pr=4PsXP5N", \n  "pay_type": "800201", \n  "cardcd": "", \n  "udid": "qiantai2", \n  "txdtm": "2020-04-10 11:45:44", \n  "txamt": "300", \n  "resperr": "success", \n  "out_trade_no": "3Z6HPCS6RN54J2Y8LUQM8RBDVBA9URYE", \n  "syssn": "20200410000300020086358791", \n  "respcd": "0000", \n  "chnlsn": ""\n  }\n'})}),"\n",(0,r.jsxs)(d.A,{href:"/img/online_qr_process.png",target:"_blank",children:[" ",(0,r.jsx)(t.img,{alt:"Online QR Code Payment process-flow",src:n(85486).A+"",width:"1860",height:"1290"})]}),"\n",(0,r.jsx)(t.p,{children:'Customers can use WeChat\'s "Scan" feature to scan a payment code generated by a merchant on a web page to make a payment. Web payments allows order information to be embedded in a unique QR code. By scanning the code in WeChat, users complete the payment after passing obligatory security checks.'}),"\n",(0,r.jsx)(t.p,{children:"Optionally merchants can activate real-name authentication with WeChat. Currently real-name identification is only available for Mainland Chinese citizens and include a person's real name and national ID card number. In case identification is provided the payer's wallet information like a connected bank card must be identical with the data provided by merchants. If customers did not yet bind their WeChat account to a bank card the payment will go through regardless."}),"\n",(0,r.jsx)(t.h3,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)(t.code,{children:"PayType: 800201"})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Parameter code"}),(0,r.jsx)(t.th,{children:"Secondary parameter"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment amount"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Currency"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txcurrcd"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsxs)(t.td,{children:["Transaction currency. View the ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pay_type"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(6)"}),(0,r.jsxs)(t.td,{children:["WeChat online payments PayType ",(0,r.jsx)(t.code,{children:"800201"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API Order Number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"out_trade_no"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Request transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txdtm"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Transaction time format\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Order expiration time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"expired_time"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["No",(0,r.jsx)("br",{})," (MPM only)"]}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsxs)(t.td,{children:["QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.",(0,r.jsx)("br",{})," Available for: ",(0,r.jsx)("br",{}),"800201 - WeChat scan code"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product name identification"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"goods_name"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsxs)(t.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,r.jsx)(t.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QF Pay merchant number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Time zone"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txzone"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(5)"}),(0,r.jsx)(t.td,{children:"Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Device ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"udid"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RMB Tag"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"rmb_tag"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(1)"}),(0,r.jsxs)(t.td,{children:["WeChat Pay in Hong Kong uses ",(0,r.jsx)(t.code,{children:"rmb_tag"})," = Y together with ",(0,r.jsx)(t.code,{children:"txcurrcd"})," = CNY to indicate that the transaction currency is RMB."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Extended Customer Info"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"extend_info"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"user_creid"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(t.code,{children:"user_truename"})]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsxs)(t.td,{children:["Real name customer identification. This parameter is currently only available for Mainland Chinese citizens and needs to be explicitly activated with WeChat for the selected ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#payment-codes",children:"PayType"}),". The consumer's ",(0,r.jsx)(t.strong,{children:"national ID card number"})," is contained in the parameter ",(0,r.jsx)(t.code,{children:"user_creid"})," and the payer's ",(0,r.jsx)(t.strong,{children:"real name"})," in encoded form or written in Chinese characters must be provided in ",(0,r.jsx)(t.code,{children:"user_truename"}),'. An example looks like this; extend_info = \'{"user_creid":"430067798868676871","user_truename":"\\\\u5c0f\\\\u6797"}\'']})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Parameter code"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pay_type"})}),(0,r.jsx)(t.td,{children:"String(6)"}),(0,r.jsxs)(t.td,{children:["WeChat online payments PayType ",(0,r.jsx)(t.code,{children:"800201"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"System transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sysdtm"})}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Request transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txdtm"})}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Response message"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"resperr"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment amount"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Other message information"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"respmsg"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"External transaction number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"out_trade_no"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"External transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QFPay transaction number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return code"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"respcd"})}),(0,r.jsx)(t.td,{children:"String(4)"}),(0,r.jsxs)(t.td,{children:["0000 = Request successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the transaction result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),d=n(205),c=n(57485),o=n(31682),l=n(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,h]=m({queryString:n,groupId:a}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,l.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),a=d[n].value;a!==r&&(o(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:l,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function v(e){const t=(0,j.A)();return(0,b.jsx)(_,{...e,children:h(e.children)},String(t))}},85486:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/online_qr_process-02c1b5b23210721fd62b3b3269cf0fbc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
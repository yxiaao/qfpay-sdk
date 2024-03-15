import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WeChat Web QRC Payments

```plaintext

For code instructions select Python, Java, Node.js or PHP with the tabs above.

```

<Tabs>
<TabItem value="python" label="Python">

```python
#coding=utf8
import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib
import requests
import datetime
import string

# Enter Client Credentials
environment = 'https://openapi-test.qfpay.com'
app_code = 'D5589D2A1F2E42A9A60C37*********'
client_key = '0E32A59A8B454940A2FF39**********'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)                                

print(current_time)

# Create signature
def make_req_sign(data, key):
    keys = list(data.keys())
    keys.sort()
    p = []
    for k in keys: 
        v = data[k]
        p.append('%s=%s'%(k,v))
    unsign_str = ('&'.join(p) + key).encode("utf-8")
    s = hashlib.md5(unsign_str).hexdigest()
    return s.upper()


# Body payload
txamt = '10' #In USD,EUR,etc. Cent
txcurrcd = 'EUR'
pay_type = '800201'
auth_code='283854702356157409' #CPM only
out_trade_no = '01234567890123'
txdtm = current_time
goods_name = 'test1'   
mchid = 'ZaMVg*****'
key = client_key


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}
data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid}

r = requests.post(environment+"/trade/v1/payment",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class TestMain {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37*********";
        String key="0E32A59A8B454940A2FF39*********";
        String mchid="ZaMVg*****";

        String pay_type="800201";
        String out_trade_no= "01234567890123";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txamt="10";
        String txcurrcd="EUR";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("pay_type", pay_type);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);
        unsortMap.put("txamt", txamt);
        unsortMap.put("txcurrcd", txcurrcd);
        //unsortMap.put("product_name", product_name);
        //unsortMap.put("valid_time", "300");

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

        String url="https://openapi-test.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/payment", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37*********'
const client_key = '0E32A59A8B454940A2FF39*********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'txamt': '10', // In USD,EUR,etc. Cent
'txcurrcd': 'EUR',
'pay_type': '800201',
'out_trade_no': tradenumber,
'txdtm': dateTime,
'mchid': 'ZaMVg*****'
};

// Signature Generation
const ordered = {};
Object.keys(payload).sort().forEach(function(key) {
  ordered[key] = payload[key] });
console.log(ordered)

var str = [];
for (var p in ordered)
if (ordered.hasOwnProperty(p)) {
str.push((p) + "=" + (ordered[p]));
}
var string = str.join("&")+client_key;
console.log(string)

const crypto = require('crypto')
var hashed = crypto.createHash('md5').update(string).digest('hex')
console.log(hashed)


// API Request
var request = require("request");
request({
  uri: environment+"/trade/v1/payment",
  headers: {
    'X-QF-APPCODE': app_code,
    'X-QF-SIGN': hashed
  },
  method: "POST",
  form: payload,
  }, 
  function(error, response, body) {
  console.log(body);
});
```

</TabItem>
<TabItem value="php" label="Php">

```php
<?php
ob_start();
  function GetRandStr($length){
  $str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  $len=strlen($str)-1;
  $randstr='';
  for($i=0;$i<$length;$i++){
  $num=mt_rand(0,$len);
  $randstr .= $str[$num];
  }
  return $randstr;
  }
  
     $url = 'https://test-openapi-eur.qfapi.com';
     $api_type = '/trade/v1/payment';
     $pay_type = '800201';
     //$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
     $now_time = date("Y-m-d H:i:s"); //Get current date-time
     
     $fields_string = '';
     $fields = array(
      //'mchid' => urlencode($mchid),
      'pay_type' => urlencode($pay_type),
      'out_trade_no' => urlencode(GetRandStr(20)),
      'txcurrcd' => urlencode('EUR'),
      'txamt' => urlencode(2200),
      'txdtm' => $now_time
    );
    ksort($fields); //字典排序A-Z升序方式
    print_r($fields);
    
    foreach($fields as $key=>$value) { 
  $fields_string .= $key.'='.$value.'&' ;
  }
  $fields_string = substr($fields_string , 0 , strlen($fields_string) - 1);
  
  $sign = strtoupper(md5($fields_string . $app_key));
  
  //// Header ////
  $header = array();
  $header[] = 'X-QF-APPCODE: ' . $app_code;
  $header[] = 'X-QF-SIGN: ' . $sign;
  
  //Post Data
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url . $api_type);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  $output = curl_exec($ch);
  curl_close($ch);    

  $final_data = json_decode($output, true);
  print_r($final_data);

ob_end_flush();
?>
```

</TabItem>
</Tabs>

> The above command returns JSON structured like this:

```json
{
  "sysdtm": "2020-04-10 11:45:44", 
  "paydtm": "2020-04-10 11:45:44", 
  "txcurrcd": "THB", 
  "respmsg": "OK", 
  "qrcode": "weixin://wxpay/bizpayurl?pr=4PsXP5N", 
  "pay_type": "800201", 
  "cardcd": "", 
  "udid": "qiantai2", 
  "txdtm": "2020-04-10 11:45:44", 
  "txamt": "300", 
  "resperr": "success", 
  "out_trade_no": "3Z6HPCS6RN54J2Y8LUQM8RBDVBA9URYE", 
  "syssn": "20200410000300020086358791", 
  "respcd": "0000", 
  "chnlsn": ""
  }
```

<Link href="/img/online_qr_process.png" target="_blank"> ![Online QR Code Payment process-flow](@site/static/img/online_qr_process.png)</Link>

Customers can use WeChat's "Scan" feature to scan a payment code generated by a merchant on a web page to make a payment. Web payments allows order information to be embedded in a unique QR code. By scanning the code in WeChat, users complete the payment after passing obligatory security checks.

Optionally merchants can activate real-name authentication with WeChat. Currently real-name identification is only available for Mainland Chinese citizens and include a person's real name and national ID card number. In case identification is provided the payer's wallet information like a connected bank card must be identical with the data provided by merchants. If customers did not yet bind their WeChat account to a bank card the payment will go through regardless.  

### HTTP Request

`POST ../trade/v1/payment` `PayType: 800201`

### Request Parameters

Parameter name | Parameter code | Secondary parameter | Mandatory | Type | Description
--------- | -------- | --------- | ------- | ------- | ------- 
Payment amount | `txamt` | | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1) 
Currency | `txcurrcd` | | Yes | String(3) | Transaction currency. View the [Currencies](../../preparation/paycode#currencies) table for a complete list of available currencies
Payment type | `pay_type` | | Yes | String(6) | WeChat online payments PayType `800201`
API Order Number | `out_trade_no` | | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | |Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss 
Order expiration time | `expired_time` | | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.<br/> Available for: <br/>800201 - WeChat scan code
Product name identification | `goods_name` | | No | String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
QF Pay merchant number | `mchid` | | No | String(16) | May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request. 
Time zone | `txzone` | | No | String(5) | Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800). 
Device ID | `udid` | | No | String(40) | Unique transaction device ID. Is displayed on the merchant portal. 
RMB Tag | `rmb_tag` | | No | String(1) | WeChat Pay in Hong Kong uses `rmb_tag` = Y together with `txcurrcd` = CNY to indicate that the transaction currency is RMB.
Extended Customer Info | `extend_info` | `user_creid` <br/> `user_truename` | No | Object | Real name customer identification. This parameter is currently only available for Mainland Chinese citizens and needs to be explicitly activated with WeChat for the selected [PayType](../../preparation/paycode#payment-codes). The consumer's **national ID card number** is contained in the parameter `user_creid` and the payer's **real name** in encoded form or written in Chinese characters must be provided in `user_truename`. An example looks like this; extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}'

### Response Parameters

Parameter name | Parameter code | Type | Description 
--------- | -------- | --------- | ------- 
Payment type | `pay_type` | String(6) | WeChat online payments PayType `800201`
System transaction time | `sysdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements. | 
Request transaction time | `txdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss  | 
Response message | `resperr` | String(128) |  
Payment amount | `txamt` | Int(11) |  
Other message information | `respmsg` | String(128) |  
External transaction number | `out_trade_no` | String(128) | External transaction number  
QFPay transaction number | `syssn` | String(40) | 
Return code | `respcd` | String(4) | 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](../../preparation/paycode#transaction-status-codes) for a complete list of response codes. 

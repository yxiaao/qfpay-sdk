import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# PayMe Offline Payment

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
txamt = '200' # In cents
txcurrcd = 'HKD'
pay_type = '805801' # PayMe Offline Payment = 805801
out_trade_no = '16565588217444950016'
txdtm = current_time
goods_name = 'qfpay_payme'
return_url = 'http://www.qfpay.com'
txzone = '+0800'
udid = 'my_udid'

key = client_key

data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'return_url': return_url, 'txzone': txzone}

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


        String pay_type="805801";
        String out_trade_no= "165655882174";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txzone="+0800";
        String txamt="200";
        String txcurrcd="HKD";
        String usid="myudid";
        String return_url="http://www.qfpay.com";
        String goods_name="qfpay_payme";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("udid", udid);
        unsortMap.put("pay_type", pay_type);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);
        unsortMap.put("txzone", txzone);
        unsortMap.put("txamt", txamt);
        unsortMap.put("txcurrcd", txcurrcd);
        unsortMap.put("return_url", return_url);
        unsortMap.put("goods_name", goods_name);

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

var payload = {
'txamt' : '200' # In cents
'txcurrcd' : 'HKD'
'pay_type' : '805801' # PayMe Offline Payment = 805801
'out_trade_no' : '16565588217444950016'
'txdtm' = dateTime
'goods_name' : 'qfpay_payme'   
'return_url' : 'http://www.qfpay.com'
'txzone' : '+0800'
'udid' : 'my_udid'
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

$url = 'https://openapi-test.qfapi.com';
$api_type = '/trade/v1/payment';
$pay_type = '805801'; //PayMe Offline Payment = 805801
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get current date-time

$fields_string = '';
$fields = array(
    'pay_type' => urlencode($pay_type),
    'out_trade_no' => urlencode(16565588217444950016),
    'txcurrcd' => urlencode('HKD'),
    'txamt' => urlencode(200),
    'txzone' => urlencode('+0800'),
    'txdtm' => $now_time,
    'goods_name' => urlencode('qfpay_payme'),
    'return_url' => urlencode('http://www.qfpay.com'),
    'udid' => urlencode($myudid),
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
  "pay_type" : "805801",
  "sysdtm" : "2022-06-30 11:14:29",
  "paydtm" : "2022-06-30 11:14:29",
  "resperr" : "交易成功",
  "txcurrcd" : "HKD",
  "txdtm" : "2022-06-30 11:13:41",
  "txamt" : "200",
  "payme_logo" : "https://shopfront.paymebiz.hsbc.com.hk/onboarding/dfbd33ed8dd4282ccb0f0db0e9301a9a04ab29db0b7e2b7597bff9fd7382776d/businessLogo_300x300.png",
  "respmsg" : "PR001:Request for Payment Initiated",
  "out_trade_no" : "16565588217444950016",
  "syssn" : "20220630154100020012764799",
  "respcd" : "0000",
  "qrcode" : "https://qr.payme.hsbc.com.hk/2/CmJBJZAXRgCh8GmBXJKuXG",
  "udid" : "my_udid",
  "pay_url" : "",
  "chnlsn" : "5f43d654-d309-4560-8585-fb78f8dc694b",
  "cardcd" : ""
}
```

### Offline Payment
For MPM Mode, The merchant generates a dynamic QR code based on the Payme protocol and presents it to the customer. The user opens their PayMe wallet and scans the displayed QR Code in order to complete payment. For CPM Mode, the customer generates a dynamic QR code in their QR code wallet and presents it to the cashier for scanning. If the response codes 1143/1145 are returned, the transaction is being processed or the customer is required to input the wallet password. Merchants have to query the transaction result for a final assessment of the transaction status.

### HTTP Request

`POST ../trade/v1/payment` <br/>
`PayType: 805801` `PayMe Merchant Presented QR Code Payment in store (MPM) (HK Merchants)` <br/>
`PayType: 805808` `PayMe Consumer Presented QR Code Payment (CPM) (HK Merchants)` <br/>

### Request Parameters

Parameter name | Parameter code | Mandatory | Type | Description
--------- | -------- | --------- | ------- | ------- 
Payment amount | `txamt` | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1) 
Currency | `txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](/docs/In-Store/Payments#currencies) table for a complete list of available currencies
Payment type | `pay_type` | Yes | String(6) | PayMe Web Payment = 805801
API Order Number | `out_trade_no` | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss 
Order expiration time | `expired_time` | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.
Product name identification | `goods_name` | No | String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters.
QF Pay merchant number | `mchid` | No | String(16) | May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request. 
Time zone | `txzone` | No | String(5) | Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800). 
Device ID | `udid` | No | String(40) |  Unique transaction device ID. Is displayed on the merchant portal. 
Redirect URL | `return_url` | No | String(512) |  URL that the user will be redirected to when the payment finishes.

### Response Parameters

Parameter name | Parameter code | Type | Description 
--------- | -------- | --------- | ------- 
Payment type | `pay_type` | String(6) | PayMe Web/Wap Payment |
System transaction time | `sysdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss <br/> This parameter value is used as the cut-off time for settlements. | 
Request transaction time | `txdtm` | String(20) | Format：YYYY-MM-DD hh:mm:ss  | 
Response message | `resperr` | String(128) |  
Payment amount | `txamt` | Int(11) |  
Other message information | `respmsg` | String(128) |  
External transaction number | `out_trade_no` | String(128) | External transaction number  
QFPay transaction number | `syssn` | String(40) | 
Return code | `respcd` | String(4) | 0000 = Request successful. <br/> 1143/1145 = merchants are required to continue to query the transaction result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](/docs/In-Store/Payments#transaction-status-codes) for a complete list of response codes.  |
Payment URL | `pay_url` | String(512) | generate QR code in Desktop web; redirect URL in WAP
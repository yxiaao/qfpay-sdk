import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refunds

:::tip
Only transactions with the return code 0000 (transaction successful) can be refunded.
:::

## API Endpoint for Refunds

```plaintext
Request Header:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

Request Body:

{
  txamt=10&syssn=20191227000200020061752831&out_trade_no=12345678&txdtm=2019-12-27 10:39:39&key=0E32A59A8B454940A2FF39**********&mchid=ZaMVg*****
}

```

<Tabs>
<TabItem value="python" label="Python">

```python
import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib
import requests
from hashids import Hashids
import datetime
import string
import random

# Enter Client Credentials
environment = 'https://openapi-test.qfpay.com'
app_code = 'D5589D2A1F2E42A9A60C37**********'
client_key = '0E32A59A8B454940A2FF39**********'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)         
random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))                       
  

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
txamt = '10' #Partial or full refund amount
syssn = '20191227000200020061752831' #Original transaction number
out_trade_no = random_string
txdtm = current_time 
key = client_key
mchid = 'ZaMVg*****'


#data ={'txamt': txamt, 'syssn': syssn, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'udid': udid, 'mchid': mchid}
data ={'mchid': mchid, 'txamt': txamt, 'syssn': syssn,  'out_trade_no': out_trade_no, 'txdtm': txdtm}

r = requests.post(environment+"/trade/v1/refund",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class Refund {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37**********";
        String key="0E32A59A8B454940A2FF39**********";
        String mchid="ZaMVg*****"; // Only Agents must provide the mchid

        String out_trade_no= "22333444455555";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txamt="15";
        String syssn="20191227000300020061662295";
         //如果是国内钱台，产品名称对应的字段是goods_name，不是product_name.
         //String product_name="Test Name";


        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("txamt", txamt);
        unsortMap.put("syssn", syssn);
        unsortMap.put("out_trade_no", out_trade_no);
        unsortMap.put("txdtm", txdtm);

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

         //如果是国内钱台，网址是：https://openapi-test.qfpay.com.
        String url="https://openapi-test.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/refund", data, appcode,key);
        System.out.println(resp);
    }
}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37**********'
const client_key = '0E32A59A8B454940A2FF3***********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'syssn': '20191231000300020063521806',
'txamt': '10',
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
  uri: environment+"/trade/v1/refund",
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
     $api_type = '/trade/v1/refund';
     $syssn = '20200311066100020000977840';
     //$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
     $now_time = date("Y-m-d H:i:s"); //Get the currend date-time  
     
     $fields_string = '';
     $fields = array(
	  //'mchid' => urlencode($mchid),
    'syssn' => urlencode($syssn),
	  'out_trade_no' => urlencode(GetRandStr(20)),
	  'txamt' => urlencode(2200),
	  'txdtm' => $now_time
    );
    ksort($fields); //Sort parameters in ascending order from A to Z
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
"orig_syssn": "20191227000200020061752831", 
"sysdtm": "2019-12-27 11:11:23", 
"paydtm": "2019-12-27 11:11:26", 
"txdtm": "2019-12-27 11:10:38", 
"udid": "qiantai2", 
"txcurrcd": "EUR", 
"txamt": "10", 
"resperr": "success", 
"respmsg": "", 
"out_trade_no": "RGNOEIVU9JZLNP9GGYXWXCW7OEMI720F", 
"syssn": "20191227000300020061652643", 
"respcd": "0000", 
"chnlsn": "2019122722001411461404119764", 
"cardcd": ""
}
```

### HTTP Request

`POST ../trade/v1/refund`

Merchants can use the refund interface to refund transactions. The merchant account must have a sufficient transaction amount on the same trading day in order to refund transactions. The maximum refund amount for a transaction must not exceed to original payment amount. Unless otherwise specified, once a refund request is submitted and accepted, it is not reversible. The refund capability and the maximum time period for refund varies across payment channels. Please contact your QFPay support representative for more information.



### Request Parameters

|Parameter name|Parameter code|Mandatory|Parameter type|Description|
|----    |---|----- |-----   |-----   |
|QF Pay transaction number | ` syssn ` |Yes |String(128)  | Original transaction ID `syssn`  that is supposed to be refunded|
|API order number | ` out_trade_no `  |Yes |String(128)  | External refund transaction number / Merchant platform refund transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.|
|Refund amount | ` txamt `   |Yes |Int(11)  | Amount of the refund. Unit in cents (i.e. 100 = $1) <br/> Required for both full refund and partial refund. Some payment channel may not support partial refund.|
|Transaction request time | ` txdtm `   |Yes |String(20) |Format: YYYY-MM-DD hh&#58;mm:ss|
|Merchant ID | ` mchid `  |No |String(16)  | May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID. On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request. |
|Transaction time | ` txzone `   |No |String(5)  |Used to record the local transaction time. The default is Beijing time UTC+8 (+0800)|
|Device ID | ` udid `    |No |String(40)  |Unique transaction device ID|



### Response Parameters

|Parameter name|Parameter code|Parameter type|Description|
|-----    |----|------ |-----   |-----   |
|Refund Transaction ID | `syssn`  |String(40)   |New transaction ID referring to the newly created refund transaction|
|Original Transaction ID| `orig_syssn`  |String(128)   |Previous transaction ID referring to the original transaction that has been refunded|
|Refund amount| `txamt`   |Int(11)  | Amount of the refund. Unit in cents (i.e. 100 = $1)|
|System transaction time | `sysdtm`  | String(20)  |Format: YYYY-MM-DD hh&#58;mm:ss <br/> This parameter value is used as the cut-off time for settlements.|
|Return code| `respcd` |  String(4)|  0000-Request successful.<br/>1143/1145 - merchants are required to continue to query the refund transaction result. <br/>All other return codes indicate transaction failure. Please refer to the section [payment status codes](#transaction-status-codes) for a complete list of return codes.|
|Response message| `resperr` |  String(128)| Error message |
| Net payment amount |`cash_fee`  | String | Actual payment amount by user = transaction amount - discounts |
| Payment currency |`cash_fee_type` | String | Actual payment currency e.g. CNY |
| Net refund amount | `cash_refund_fee` | String | Actual refund amount |
| Refund currency | `cash_refund_fee_type` | String | Actual refund currency e.g. CNY |

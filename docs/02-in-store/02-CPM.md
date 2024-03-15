import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Consumer Present Mode (CPM)

![CPM process-flow](@site/static/img/cpm_process.jpg)

## CPM API Request

```plaintext
Request Header:

{
  Content-Type: application/x-www-form-urlencoded; 
  charset=UTF-8,
  Content-Length: 218,
  Chunked: false
  X-QF-APPCODE:A6A49A66B4C********94EA95032
  X-QF-SIGN:3b020a6349646684ebeeb0ec2cd3d1fb
}

Request Body:

{
  auth_code=13485790*******88557&goods_name=qfpay&mchid=R1zQrTdJnn&out_trade_no=Native201907221520536a25477909&pay_type=800208&txamt=10&txcurrcd=HKD&txdtm=2019-07-22 15:20:54&udid=AA
}
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
pay_type = '800108' # Alipay CPM = 800108 , WeChat Pay CPM = 800208
auth_code = '280438849930815813' # Mandatory for CPM
out_trade_no = '01234567890123'
txdtm = current_time
goods_name = 'test1'   
mchid = 'ZaMVg*****'
notify_url = 'https://xxx.com/notify/success'
key = client_key


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid, 'notify_url': notify_url}
data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'mchid': mchid, 'auth_code': auth_code}

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

        String pay_type="800108";
        String auth_code="280438849930815813";
        String out_trade_no= "01234567890123";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;
        String txamt="10";
        String txcurrcd="EUR";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("pay_type", pay_type);
        unsortMap.put("auth_code", auth_code);
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
<TabItem value="javascript" label="Javascript">

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
'pay_type': '800108', // Alipay CPM = 800108, WeChat Pay CPM = 800208
'auth_code': '280438849930815813',
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
     $pay_type = '800108'; //Alipay CPM = 800108, WeChat Pay CPM = 800208
     $auth_code = '280438849930815813';
     //$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
     $app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
     $app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
     $now_time = date("Y-m-d H:i:s"); //Get current date-time
     
     $fields_string = '';
     $fields = array(
      //'mchid' => urlencode($mchid),
      'pay_type' => urlencode($pay_type),
      'auth_code' => urlencode($auth_code),
      'out_trade_no' => urlencode(GetRandStr(20)),
      'txcurrcd' => urlencode('EUR'),
      'txamt' => urlencode(2200),
      'txdtm' => $now_time
    );
    ksort($fields); //Ascending dictionary sorting A-Z 
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
  "pay_type": "800108", 
  "sysdtm": "2019-07-22 15:20:54",  
  "paydtm": "2019-07-22 15:20:56",  
  "txdtm": "2019-07-22 15:20:54", 
  "udid": "AA", 
  "txcurrcd": "EUR",  
  "txamt": 10, 
  "resperr": "交易成功", 
  "respmsg": "OK", 
  "out_trade_no": "201907221520536a25477909", 
  "syssn": "20190722000300020081074842", 
  "respcd": "0000", 
  "chnlsn": "4200000384201907223585006133"
}
```

`POST ../trade/v1/payment`

The customer generates a dynamic QR code in their QR code wallet and presents it to the cashier for scanning. This szenario applies to offline payments only. If the response codes `1143/1145` are returned, the transaction is being processed or the customer is required to input the wallet password. Merchants have to [query the transaction result](../common-api/transaction-enquiry) for a final assessment of the transaction status.

## Request Parameters

|Parameter name | Parameter code | Mandatory | Parameter type | Description |
|:----    |:---|:----- |-----   |----   |
|Public payment parameters | — | — |— |— |
Authorization Code | `auth_code` | Yes<br/> (CPM only) | String(128) | Specifies the authorization code for scanning a barcode/QR Code. The `auth_code` returned is unique in each authorization. Each `auth_code` can only be used once and will automatically expire. For testing CPM with Alipay and WeChat Pay the `auth_code` can be extracted by any QRC reader or manually found in the consumer wallet below the barcode.

## Response Parameters

|Parameter name | Parameter code | Mandatory | Parameter type | Description |
|:----    |:---|:----- |-----   |----   |
|Public payment parameters | — | — |— |— |

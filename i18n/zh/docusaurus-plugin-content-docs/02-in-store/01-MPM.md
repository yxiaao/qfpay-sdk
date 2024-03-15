import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Merchant Present Mode (MPM)

![MPM process-flow](@site/static/img/mpm_process.jpg)

## MPM API Request

```plaintext
Request Header:

{
  Content-Type: application/x-www-form-urlencoded; 
  charset=UTF-8,
  Content-Length: 218,
  Chunked: false, 
  X-QF-APPCODE: A6A49A66B4C********94EA95032,
  X-QF-SIGN: 3b020a6349646684ebeeb0ec2cd3d1fb
}

Request Body:

{
  expired_time=10&goods_name=qfpay&limit_pay=no_credit&mchid=R1zQrTdJnn&out_trade_no=Native20190722145741431794b8d1&pay_type=800201&txamt=20&txcurrcd=HKD&txdtm=2019-07-22 14:57:42&udid=AA
}
```

<Tabs>
<TabItem value="python" label="Python">

```python
#coding=utf8
import urllib.request, urllib.parse, urllib.error, urllib.request, urllib.error, urllib.parse, hashlib
import requests
from hashids import Hashids
import datetime
import string
import random

# Enter Client Credentials
environment = 'https://openapi-eur.qfapi.com'
app_code = 'FADB8A87E0674012979F5443AA81ECF1'
client_key = 'F644B1389AD24C25BEFE8BE10C31C878'


# Create parameter values for data payload
current_time = datetime.datetime.now().replace(microsecond=0)                                
random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=32))

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
    print(unsign_str)
    s = hashlib.md5(unsign_str).hexdigest()
    return s.upper()

# Body payload
txamt = '1' #In USD,EUR,etc. Cent
txcurrcd = 'EUR'
pay_type = '800101' # Alipay MPM = 800101, WeChat Pay MPM = 800201
#auth_code = '287255838063025836' # CPM only
out_trade_no = random_string
txdtm = current_time
goods_name = 'Food'   
mchid = 'lkbqahlRYj' #Hashids("qfpay").encode(2546286, 2532824) #(Agent ID, Merchant ID)
key = client_key
notify_url = 'https://xxx.com/notify/success'

#data = {'txamt': txamt, 'txcurrcd': txcurrcd, 'auth_code': auth_code, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'mchid': mchid}
data = {'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm}

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

        String pay_type="800101";
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
'pay_type': '800101', // Alipay MPM = 800101, WeChat Pay MPM = 800201
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
$pay_type = '800101'; //Alipay MPM = 800101, WeChat Pay MPM = 800201
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
  "surcharge_fee": 0, 
  "qrcode": "https://qr.alipay.com/bax03190uxd47wbekffy6033", 
  "pay_type": "800101", 
  "surcharge_rate": 0, 
  "resperr": "success", 
  "txdtm": "2020-04-23 11:09:24", 
  "out_trade_no": "364ZK6BAJGYHMU3TUX0X7MGIGQL4O8KI", 
  "syssn": "20200423066200020000976054", 
  "sysdtm": "2020-04-23 11:09:27", 
  "txcurrcd": "EUR", 
  "respmsg": "", 
  "chnlsn2": "", 
  "cardcd": "", 
  "udid": "qiantai2", 
  "txamt": "1", 
  "respcd": "0000", 
  "chnlsn": ""
}
```

`POST ../trade/v1/payment`

The merchant generates a dynamic QR code based on the Alipay / WeChat Pay protocol and presents it to the customer. The user opens their Alipay / WeChat Pay wallet and scans the displayed QRC in order to complete payment. This szenario applies to offline as well as online payments, for instance on websites.

## Request Parameters

|Parameter name| Parameter code|Mandatory|Parameter type|Description|
|:----    |:---|:----- |-----   |-----   |
|Public payment parameter | —  | — | — | — |
|Payment mark | `pay_tag`  | No |     String(16) | The default value is: ALIPAYHK<br/>Alipay Continental version: ALIPAYCN<br/>801103 - Alipay overseas online refund (QF_BUSICD_ALIPAY_ONLINE_REFUND)<br/>801104 - Alipay overseas online inquiry (QF_BUSICD_ALIPAY_ONLINE_QUERY)<br/>801110 - Alipay overseas online APP payment (QF_BUSICD_ALIPAY_ONLINE_APP)<br/>801501 - Alipay Hong Kong pc scan code<br/>801512 - Alipay Hong Kong WAP payment<br/>801510 - Alipay Hong Kong APP payment  |
Order expiration time | `expired_time` | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.<br/> Available for: <br/>800201 - WeChat scan code<br/>800101 - Alipay scan code <br/>801512 - Alipay Hong Kong WAP payment<br/>801501 - Alipay Hong Kong scan code<br/>801107 - Alipay overseas WAP payment<br/>801101 - Alipay overseas scan code<br/>801010 - WeChat Hong Kong APP<br/>801510 - Alipay Hong Kong APP
|Designated payment method    |`limit_pay`|No |String   |The parameter value is specified as no_credit, and credit card payment is prohibited. This setting only applies to mainland China.  |

## Response Parameters

|Parameter code|Secondary parameter code|Parameter type|Parameter name|Description|
|:----    |:---|:----- |-----   |-----   |
|QR Code |  |String(512) | QR code link   | |
|Public payment parameter | —  | — | — | — |

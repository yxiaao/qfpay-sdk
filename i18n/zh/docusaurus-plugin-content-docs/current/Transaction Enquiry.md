import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transaction Enquiry

:::warning 
If the `mchid` is provided, it is mandatory to submit the `mchid` when calling the API (unless otherwise specified). On the contrary, if `mchid` is not provided, merchants shall not pass the `mchid` field in the API request.
:::

## API Endpoint for Transaction Enquiry

### HTTP Request

`POST ../trade/v1/query`

```plaintext
Request Header:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

Request Body:

{
  mchid=ZaMVg*****&syssn=20191227000200020061752831&start_time=2019-12-27 00:00:00&end_time=2019-12-27 23:59:59
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
mchid = 'ZaMVg*****' #(Agent ID, Merchant ID)
syssn = '20191227000200020061752831' #Search by transaction number only
out_trade_no = '2019122722001411461404119764' #Search by out_trade_no only
start_time = '2019-12-27 00:00:00'
end_time = '2019-12-27 23:59:59'
key = client_key


#data ={'mchid': mchid, 'syssn': syssn, 'out_trade_no': out_trade_no, 'start_time': start_time, 'end_time': end_time}
data ={'mchid': mchid, 'syssn': syssn}

r = requests.post(environment+"/trade/v1/query",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(make_req_sign(data, key))  
print(r.json())
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class Enquiry {
    public static void main(String args[]){
        String appcode="D5589D2A1F2E42A9A60C37**********";
        String key="0E32A59A8B454940A2FF39*********";
        String mchid="ZaMVg*****"; // Only Agents must provide the mchid

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date=df.format(new Date());
        String txdtm=date;

        String syssn="20191227000300020061662295";
        String start_time = "2019-12-27 00:00:00";
        String end_time = "2019-12-27 23:59:59";

        Map<String, String> unsortMap = new HashMap<>();
        unsortMap.put("mchid", mchid);
        unsortMap.put("syssn", syssn);

        String data=QFPayUtils.getDataString(unsortMap);
        System.out.println("Data:\n"+data+key);
        String md5Sum=QFPayUtils.getMd5Value(data+key);
        System.out.println("Md5 Value:\n"+md5Sum);

        String url="https://openapi-test.qfpay.com";
        String resp= Requests.sendPostRequest(url+"/trade/v1/query", data, appcode,key);
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
const client_key = '0E32A59A8B454940A2FF39**********'

// Generate Timestamp
var dateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
console.log(dateTime)

// Body Payload
const key = client_key
var tradenumber = String(Math.round(Math.random() * 1000000000))
console.log(tradenumber)

var payload = {
'syssn': '20191231000300020063521806',
'start_time': '2019-12-27 00:00:00',
'end_time': '2019-12-31 23:59:59',
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
  uri: environment+"/trade/v1/query",
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
$api_type = '/trade/v1/query';
$syssn = '20200311066100020000977841';
//$out_trade_no = 'zCvo0IqTg0SaQkGnHd6w';
//$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get the current date-time  

$fields_string = '';
$fields = array(
//'mchid' => urlencode($mchid),
'syssn' => urlencode($syssn),
//'out_trade_no' => urlencode($out_trade_no),
//'start_time' = '2020-03-01 00:00:00',
//'end_time' = '2020-03-04 23:59:59'
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
"respmsg": "", 
"resperr": "请求成功", 
"respcd": 0000, 
"data": 
[{
"cardtp": "5", 
"cancel": "0", 
"pay_type": "800101", 
"order_type": "payment", 
"clisn": "038424", 
"txdtm": "2019-12-27 10:39:39", 
"goods_detail": "", 
"out_trade_no": "CHZ7D61JN1ANJF2R2K1I7TXP2JTCEWBL", 
"syssn": "20191227000200020061752831", 
"sysdtm": "2019-12-27 10:40:24", 
"paydtm": "2019-12-27 10:42:18", 
"goods_name": "", 
"txcurrcd": "EUR", 
"chnlsn2": "", 
"udid": "qiantai2", 
"userid": "2605489", 
"txamt": "10", 
"chnlsn": "2019122722001411461404119764", 
"respcd": "0000", 
"goods_info": "", 
"errmsg": "success"
}], 
"page": "1", 
"page_size": "10"
}
```


After making a payment, refund or cancellation request, the merchant can use the query interface to obtain the transaction status.

The merchant can use the query interface to enquire transaction status of one or multiple transactions. In case the interface does not return `syssn` in time, use `out_trade_no` as a condition to query the transaction status.

If merchants would like to query transactions in a month, they can provide `start_time` and `end_time` then records will be filtered according to the system transaction time `sysdtm`. The interval must be within one calendar month. Otherwise, it is recommended to include the `syssn` parameter as a query condition.

When the query transaction is a refund then an additional parameter `origssn` will be returned. The `origssn` shows the QFPay transaction number of the original transaction that has been refunded.   


### Request Parameters

|Parameter name| Parameter code|Mandatory|Parameter type|Description|
|----    |---|----- |-----   |-----   |
|Merchant number | ` mchid ` | For Agents |String(16) | If MCHID is given, it is mandatory to provide the `mchid.`On the contrary, if ` mchid` is not provided, merchants shall not pass the `mchid` field in the API request.|
|QFPay transaction number | ` syssn ` |No |String(128) | Multiple entries are seperated by commas   |
|API order number | ` out_trade_no ` |No |String(128) | External transaction number / Merchant platform transaction number, multiple entries are seperated by commas   |
|Payment type | ` pay_type ` |No |String(6) | Multiple entries are seperated by commas   |
|Transaction return code | ` respcd ` |No |String(4) | Returns all orders with return code status by default   |
|Starting time | ` start_time ` |No |String(20) | It is ignored when `syssn` or `out_trade_number` is provided. The default date time is the start of current month. Cross-month queries must add the time query parameters `start_time` and `end_time`. <br/>Format: YYYY-MM-DD hh&#58;mm:ss   |
|End Time | ` end_time ` |No | String(20) | It is ignored when `syssn` or `out_trade_number` is provided. The default date time is the end of current month. Cross-month queries must add the time query parameters `start_time` and `end_time`. <br/>Format: YYYY-MM-DD hh&#58;mm:ss   |
|Time zone | ` txzone ` |No | String(5) | Used to record the local order time. The default is Beijing time UTC+8 (+0800)   |
|Number of pages | ` page `   |No |  Int(8) | Default value is 1   |
|Number of items displayed per page | ` page_size ` |No |  Int(8) | By default 10 transactions will be displayed. The maximum `page_size` value is 100  |


### Response Parameters


|Parameter name|Parameter code|Parameter type|Description|
|----    |------|------  |------   |
| Page number| `page`  | Int(8)  |  |
| Request result description| `resperr` | String(128) ||
| Display number of items per page| `page_size` | Int(8)  |  |
| Request result code | `respcd`   | String(4)  |0000 - Interface call succeeded  |
| Query result | `data` | Object | JSON format |
| QFPay transaction number   |  `syssn`  |String(40) |  |
| API order number | `out_trade_no` | String(128) | External transaction number / Merchant platform transaction number | 
| Wallet/Channel transaction number | `chnlsn` | String |  | 
| Product name | `goods_name` | String(64) | Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters. |
| Transaction currency | `txcurrcd` | String(3) | View the [Currencies](#currencies) table for a complete list of available currencies |
| Original transaction number | `origssn` | String(40) | Refers to the original QFPay transaction number. This parameter is only available when the `syssn` of a refund is queued |
| Payment type | `pay_type` | String(6) | Please refer to the section [Payment Codes](#payment-codes) for a complete list of payment types |
| Order type |  `order_type` |  String(16) | Payment: Payment transaction Refund: Refund transaction |
| Request transaction time | `txdtm` | String(20) | Request transaction time provided by merchant in payment and refund request. Format: YYYY-MM-DD hh&#58;mm:ss |
| Transaction amount | `txamt` | Int(11) |  Amount of the transaction. Unit in cents (i.e. 100 = $1) |
| System transaction time | `sysdtm` | String(20) |  Format: YYYY-MM-DD hh&#58;mm:ss <br/> This parameter value is used as the cut-off time for settlements. |
| Cancellation or refund indicator | `cancel` | String(1) |  Transaction cancel status: <br/> 0 = Not cancelled <br/> 1 = For CPM: Transaction reversed or refunded successfully <br/> 2 = For MPM: Transaction canceled successfully <br/> 3 = Transaction refunded <br/> 4 = Alipay Preauth order finished <br/> 5 = Transaction partially refunded |
| Payment status |  `respcd` | String(4) | 0000 = transaction succeeded <br/> 1143/1145 = Please wait to evaluate the transaction status. All other response codes indicate transaction failure |
| Payment status message | `errmsg` | String(128) | Payment result description |
| Currency exchange rate |`exchange_rate`  | String | Applied currency conversion exchange rate |
| Net payment amount |`cash_fee`  | String | Actual payment amount by user = transaction amount - discounts |
| Payment currency |`cash_fee_type` | String | Actual payment currency e.g. CNY |
| Net refund amount | `cash_refund_fee` | String | Actual refund amount |
| Refund currency | `cash_refund_fee_type` | String | Actual refund currency e.g. CNY |



## Account Statement 

The clearing statement for a particular payment channel is downloaded regularly. Additional requests can only be made in the production environment. The system response is in form of a compressed zip file. Data is based on the selected payment channel and contains all merchants therefore the `mchid` cannot be passed in as a request parameter.


## API Endpoint for Account Statement

### HTTP Request

`GET ../download/v1/trade_bill`

### Request Parameter

|Request code | Mandatory | Parameter type | Description
|----    |---|----- |-----   |
| `trade_date` | Yes | String(10) | Get a specific account statement for the selected date. Example: 2017-10-17



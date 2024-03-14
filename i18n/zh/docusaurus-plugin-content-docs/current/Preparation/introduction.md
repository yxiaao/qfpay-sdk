import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Introduction

Welcome to the **official QF Pay open API documentation**. To get started, please review the [Developer Instructions](#developer-instructions) below.

There are language bindings available in Python, Java, Node.js and PHP! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right corner.

If you would like to quickly test the payment function in <Link href="https://www.postman.com/">Postman</Link> we provide a collection that includes a pre-request script to generate the signature, download the file from [here](#api-endpoint-for-payments).

## Developer Instructions

:::note
 If the `mchid` is provided, it is mandatory to submit the `mchid` when calling the API (unless otherwise specified). On the contrary, if `mchid` is not provided, merchants shall not pass in the `mchid` parameter in the API request.
:::

In order to use the QF Pay open API, you must have active API credentials, including an **app_code** and **client_key**. In case of technical issues please contact **technical.support@qfpay.com**.

There are seperate environments available for application testing and development as well as production.

Please note that transactions conducted in the sandbox environment will not have settlement. Therefore, make sure to test with small amounts and process refunds using the API refund endpoint or Merchant APP on the same day as the original transaction day.

Each merchant will be provided with a set of app code and key with or without `mchid`. Merchants with multiple branches will usually be supplied with app code, key and `mchid`. The hashed `mchid` is used to identify shops and outlets. Otherwise, only app code and key will be given.

### Encoding Description

All return parameters from API are in `UTF-8` code unless otherwise noted.

## Environments

:::warning
Remember to immediately refund transactions that were made in the test environment.
:::

### API Environments

The table below depicts **base URLs** for each country/ region. There is a general sandbox available to everybody, and country/ region specifiy test environments.

Environment Name                           | Test URL                           | Prod. URL
------------------------------------------ | ---------------------------------- | -------
Sandbox (Only for credit card simulations) | https://openapi-int.qfapi.com      |
Live Test                                  | https://openapi-test.qfpay.com     |
China Mainland                             | https://openapi-test.qfpay.com     | https://openapi.qfpay.com 
Hong Kong                                  | https://test-openapi-hk.qfapi.com  | https://openapi-hk.qfapi.com
Japan                                      |                                    | https://openapi-jp.qfapi.com
Thailand                                   | https://test-openapi-th.qfapi.com  | https://openapi-th.qfapi.com 
Dubai                                      | https://test-openapi-db.qfapi.com  | https://openapi-db.qfapi.com
Singapore, Malaysia, Canada, Philippines   | https://test-openapi-sg.qfapi.com  | https://openapi-sg.qfapi.com
Indonesia                                  | https://test-openapi-id.qfapi.com  | https://openapi-id.qfapi.com
Europe                                     | https://test-openapi-eur.qfapi.com | https://openapi-eur.qfapi.com

## Signature Generation

```plaintext
For code instructions select Python, Java, Node.js or PHP with the tabs above.
```

<Tabs groupId="signature-generation">
<TabItem value="python" label="Python">

```python
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
txamt = '10' # In USD,EUR,etc. Cent
txcurrcd = 'EUR'
pay_type = '800101' # Alipay CPM = 800108 , MPM = 800101
auth_code='283854702356157409' #CPM only
out_trade_no = random_string
txdtm = current_time
goods_name = 'test1'   
auth_code = '280438849930815813'
key = client_key
mchid = 'ZaMVg*****' # ID is provided during merchant onboarding


#data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'udid': udid, 'auth_code': auth_code, 'mchid': mchid}
data ={'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'goods_name': goods_name, 'mchid': mchid}


r = requests.post(environment+"/trade/v1/payment",data=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})

print(make_req_sign(data, key))

```

</TabItem>
<TabItem value="java" label="Java">

```java
/* 
This class is the utility for QFPay Payment API. 
Note:This is just an example.
getMd5Value:
After do the string manipulation, like:abc=value&bad=value&bcd=valueKey
This method generates MD5 signature using hexadecimal format.
getDataString:
This method pass in with the map, and generate the string like:abc=value&bad=value&bcd=value.
*/
public class QFPayUtils {
    
    public static String getMd5Value(String input) {
        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(input.getBytes( "UTF-8" ));
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < array.length; i++) {
                sb.append( String.format( "%02x", array[i]));
            }
            return sb.toString().toUpperCase();
        } catch ( NoSuchAlgorithmException | UnsupportedEncodingException e) {
            return null;
        }
    }
   
    public static <T> String getDataString(Map resultMap) {
        Map<String, String> map = new TreeMap<String, String>(
                new Comparator<String>() {
                    public int compare(String obj1, String obj2) {
                        return obj1.compareTo(obj2);
                    }
                });

        Iterator<Map.Entry<String, String>> it = resultMap.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, String> entry = it.next();
            map.put(entry.getKey(), entry.getValue());
        }

        StringBuilder sb = new StringBuilder();
        it = map.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<String, String> entry = it.next();
            sb.append(entry.getKey()+"="+entry.getValue()+"&");
        }
        return sb.deleteCharAt(sb.length() - 1).toString();
    }


}
```

</TabItem>
<TabItem value="javascript" label="Javascript">

```javascript
// Enter Client Credentials
const environment = 'https://openapi-test.qfpay.com'
const app_code = 'D5589D2A1F2E42A9A60C37**********'
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
'pay_type': '800101', // Alipay CPM = 800108 , MPM = 800101
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
$pay_type = '800101';
//$mchid = "MNxMp11FV35qQN"; //Only agents must provide this parameter
$app_code = 'FF2FF74F2F2E42769A4A73*********'; //API credentials are provided by QFPay
$app_key = '7BE791E0FD2E48E6926043B*********'; //API credentials are provided by QFPay
$now_time = date("Y-m-d H:i:s"); //Get the current date-time  

$fields_string = '';
$fields = array(
    //'mchid' => urlencode($mchid),
    'pay_type' => urlencode($pay_type),
    'out_trade_no' => urlencode(GetRandStr(20)),
    'txcurrcd' => urlencode('EUR'),
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

ob_end_flush();
?>
```

</TabItem>
</Tabs>

> The above command returns JSON structured like this:

```json
{
"B3B251B202801388BE4AC8E5537B81B1"
}
```

:::tip
Always submit the signature in the HTTP header `X-QF-SIGN` unless noted otherwise.
:::

**Step 1:** Sort all parameters in ascending order according to parameter names

Parameter list: abc=value1 bcd=value2 bad=value3
Sort result: abc=value1 bad=value3 bcd=value2

**Step 2:** Connect all parameters with ‘&’,and get the string to be signed

abc=value1&bad=value3&bcd=value2

**Step 3:** Combine the string with `client_key` from QFPay.

abc=value1&bad=value3&bcd=value2Key

**Step 4:** Sign the string from step 3 with MD5 or SHA256. We recommend to use SHA256.

MD5(abc=value1&bad=value3&bcd=value2Key)
HASH(“SHA256”, abc=value1&bad=value3&bcd=value2Key)

**Step 5:** Request API with the signature

Save the signature in the http header field `X-QF-SIGN` unless otherwise specified in this document.

### Request Description

:::note
The API will return response content in JSON format. We encourage developers to verify the signature in the response header in order to ensure message integrity.
:::

Field | Description
--------- | -------
Character | `UTF-8`  
Method | **POST/ GET** (Depends on individual API function)
Content-type | `application/x-www-form-urlencoded`

### Required Parameter Settings in HTTP Header to Request the API

Field | Mandatory | Description
--------- | ------- | -------
`X-QF-APPCODE` | Yes | App code assigned to the merchant
`X-QF-SIGN` | Yes | Signature generated according to the signature formulation method described above
`X-QF-SIGNTYPE` | No | Signature algorithm used to generate the signature. If SHA256 is used, the developer must pass the value as `SHA256`. The default value is `MD5` in case this field is not passed to the API.

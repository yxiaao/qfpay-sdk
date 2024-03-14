import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WeChat Pay JSAPI (in wechat browser)

<Link href="https://sdk.qfapi.com/images/wechat_jsapi_process.jpg" target="_blank">![WeChat JSAPI process-flow](/img/wechat_jsapi_process.jpg)</Link>

:::warning
Official account payments must be initiated from the WeChat in-app browser. They cannot be initiated from another browser, such as Chrome or Safari.
:::

**JSAPI Payment Types**

Note: Merchants in Canada, please refer to [this](/docs/Online%20Shop/Alipay/Alipay%20Online%20Payments) section for payment request and response parameters with `pay_type` 800207. <br/>

There are two different methods how JSAPI payments can be implemented. 

<br/>

**1. JSAPI with Real Name Authenticated Official Accounts**

For this kind of integration, merchants shall register their own official account with WeChat and we will bind the official account to the merchant's QF Pay payment account. In this case merchants can create and publish their own content, access customer information and collect their own followers. When choosing this implementation method, merchants have to acquire the `oauth_code`, user `openid` and trigger WeChat Pay via the <Link href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1">official WeChat platform</Link>. Merchants only need to refer to the QF Pay [transaction enquiry API endpoint](/docs/Common%20API/Transaction%20Enquiry).

**Step 1:** WeChat official account payments are available to developers after they completed real name authentication on the WeChat official account platform. Once authentication has been completed developers can obtain the openid parameter of the certified public account. Please refer to the official [WeChat documentation](https://developers.weixin.qq.com/doc/offiaccount/en/Getting_Started/Overview.html) for more information.

**Step 2:** Request the QFPAY order payment API `/trade/v1/payment` by providing the appointed `openid` and return the `pay_params` data, for further instructions please refer to the [API Endpoint for Payments](/docs/In-Store/Payments#api-endpoint-for-payments). 

**Step 3:** Open JSAPI Payment Authorization Directory at the time of the merchant certification application to initiate payments. For more details please refer to the [official WeChat Pay documentation](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6).

<br/>

**2. JSAPI without a Real Name Registered Official Account**

For this kind of payment, merchants can build upon QF Pay's official account. This integration is only applicable to merchants who are using the indirect settlement option (i.e. settlement is provided by QFPay). For this implementation, merchants shall use QFPay's API to get the `oauth_code`, user `openid` and trigger WeChat Pay as described below.

## GET oauth_code

```plaintext
GET WeChat oauth_code request:

{
  https://openapi-test.qfpay.com/tool/v1/get_weixin_oauth_code?app_code=5D81D64E602043F7AF51CEXXXXXXXXXX&sign=F4D8FB00894F213993B33116BC1B4E10&redirect_uri=https://sdk.qfapi.com
}
```

```python
import hashlib
import requests
from flask import Flask, redirect
from flask import request
import json
import random
import datetime
import string
import urllib
import urllib.parse

# Enter Client Credentials
environment = 'https://openapi-test.qfpay.com'
app_code = "******"
client_key = "******"

# Create MD5 signature 
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

def get_out_code():
    # Body payload
    redirect_uri = 'http://49ae4dbd47a6.ngrok.io/getcode'  
    data = {'app_code': app_code, 'redirect_uri': redirect_uri}   
    sign = make_req_sign(data, client_key)
    
    return environment+"/tool/v1/get_weixin_oauth_code?app_code="+app_code+"&sign="+sign+"&redirect_uri="+redirect_uri #+"&mchid="+mchid
```

> Redirect to URL after the GET oauth_code request has been successful:

```json
{
  "http://xg.fshop.top/index.php/wap/pay/wxredirect?showwxpaytitle=1&code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv"
}
```

### HTTP Request

`GET ../tool/v1/get_weixin_oauth_code`

Both the `app_code` and `sign` have to be submitted as parameters instead of in the http header. The URL request has to be send in the WeChat environment. Everytime a payment is initiated the WeChat `oauth_code` and `openid` have to be obtained again.

### Request Parameters

|Parameter name| Parameter code | Mandatory | Parameter type | Description |
|:----    |:---|:----- |-----   |-----   |
|Developer ID | `app_code` | Yes | String(32) | The app_code is assigned to partners by QFPay  |
|Callback URL |`redirect_uri` | Yes |  String(512) | After the request has been successful the user will be redirected to the callback address  |
|Merchant ID | `mchid` | No | String(16) | The `mchid` is a unique identification for every merchant assigned by QFPay  |
| Signature| `sign`  | Yes | String | Signature obtained according to the unified framework |

## GET openid

```plaintext

HTTP Request:

{
  https://openapi.qfpay.com/tool/v1/get_weixin_openid?code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv
}

```

```python
def get_open_id(data):
    
    try:
        r = requests.get(environment+"/tool/v1/get_weixin_openid",params=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, client_key)})
        print (r.request.url)
        print (r.content)
        if r.json()["respcd"]=="0000":
            return r.json()["openid"]
        else:
            pass
    except:
        print("An exception occurred")
```

> The above command returns JSON structured like this:

```json
{
  "resperr": "",
  "respcd": 0000,
  "respmsg": "",
  "openid": "oo3Lss8d0hLOuyTuSJMVwLTk68JE"
}
```

:::note Everytime the payment interface is called a new `oauth_code` and `openid` must be obtained. In order to request the `openid` the `X-QF-APPCODE` and `X-QF-SIGN` have to be submitted in the http header.
:::

### HTTP Request

`GET ../tool/v1/get_weixin_openid`

### Request Parameters

|Parameter code|Secondary parameter code | Mandatory| Parameter type | Description |
|:-----  |:-----|----- |----- |----- |
|WeChat oauth_code|  `code` |Yes  | String | The code is returned by the [GET oauth_code request](#get-oauth_code). It is unique and can only be used once. |
|Merchant ID|  `mchid`  |No  | String(16) | The `mchid` is a unique identification for every merchant assigned by QFPay |


### Response Parameters

|Parameter code|Secondary parameter code | Parameter type |Parameter name | Description |
|:-----  |:-----|----- |----- |----- |
|`openid`|   | String(64)  | WeChat openid | Every WeChat user is assigned a unique openid |


## POST Payments 

```plaintext
For code instructions select Python with the tabs above.
```

```python
def payment(openid):
    # Create parameter values for data payload
    current_time = datetime.datetime.now().replace(microsecond=0)                                
    # Body payload
    txamt = '1' #In USD,EUR,etc. Cent
    txcurrcd = 'THB'
    pay_type = '800207' 
    letters = string.digits   
    out_trade_no = ''.join(random.choice(letters) for i in range(20)) 
    txdtm = current_time
    key = client_key
    
    
    data = {'txamt': txamt, 'txcurrcd': txcurrcd, 'pay_type': pay_type, 'out_trade_no': out_trade_no, 'txdtm': txdtm, 'sub_openid':openid}    
    
    try:
        r = requests.post(environment+"/trade/v1/payment",params=data,headers={'X-QF-APPCODE':app_code,'X-QF-SIGN':make_req_sign(data, key)})
        if r.json()["respcd"]=="0000":
            
            return r.json()['pay_params']
        else:
            pass
    except:
        print("An exception occurred")
    
    
app = Flask(__name__)

@app.route("/payment",methods=['GET', 'POST'])
def api_payment():
    
    if "MichroMessenger" in request.headers.get('User-Agent'):  #get an oauth_code
        print (get_out_code())
        return redirect(get_out_code(), code=302)    
    
@app.route("/getcode",methods=['GET', 'POST'])
def api_get_code():      
    print ("------------------------------------")
    print (request.args)                      
    print (request.args.get("code"))
    code = request.args.get('code')
    print (code)
    if code != "":    # user returned with oauth_code      
        
        sub_openid=get_open_id({"code": code})  # get open id using oauth_code
        param=payment(sub_openid)   # payment request to QFPay
        
        # add necessary parameters and redirect
        param["mchntnm"]="Pet Shop"
        param["txamt"]="1"
        param["currency"]="THB"
        param["redirect_url"]="www.example.com"
        return redirect("https://o2-th.qfapi.com/q/direct?"+urllib.parse.urlencode(param), code=302)             # direct user"""
    else:
        print("unable to obtain code")
        return     

if __name__ == '__main__':
    app.run(host="127.0.0.1",port = 80)
```

Optionally merchants can activate real-name authentication with WeChat. Currently real-name identification is only available for Mainland Chinese citizens and include a person's real name and national ID card number. In case identification is provided the payer's wallet information like a connected bank card must be identical with the data provided by merchants. If customers did not yet bind their WeChat account to a bank card the payment will go through regardless.

### HTTP Request

`POST ../trade/v1/payment` `PayType: 800207`

### Request Parameters

|Parameter name|  Parameter code | Mandatory| Parameter type | Description |
|:----    |:---|:----- |-----   |-----   |
|Public payment parameters |—  |— |—  | Refer to the general documentation about transactions |
|WeChat authorization code   |`sub_openid`|Yes  |String    |WeChat OpenID. Refer to the **GET openid** documentation   |
|Designated payment method    |`limit_pay`|No|String   |Used to limit credit card transactions   |
|Extended Customer Info    |`extend_info`|No|Object   | Real name customer identification. This parameter is currently only available for Mainland Chinese citizens and needs to be explicitly activated with WeChat for the selected [PayType](/docs/In-Store/Payments#payment-codes). The consumer's **national ID card number** is contained in the parameter `user_creid` and the payer's **real name** in encoded form or written in Chinese characters must be provided in `user_truename`. An example looks like this; extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}'  |

### Response Parameters

|Parameter code| Secondary parameter code | Parameter type | Parameter name | Description |
|:----    |:---|:----- |-----   |-----   |
|`pay_params`|`appId`   |String(16)  |Public number id   | The App ID is provided by Tencent once developers register their Mini Program on the WeChat developer portal  |
|— |`timeStamp`  |String(32) |Timestamp  | Current time |
|— |`nonceStr`  |String(32) |Random string  | Random string with no more than 32 bits |
|— |`package`   |String(128)|Transaction details  | The value of the `prepay_id` parameter returned by the interface has the format: prepay_id=**|
|— |`signType`   |String(32) |Signature method  | Signature method, default is MD5|
|— |`paySign`    |String(64) |Signature   | Signature method, default is MD5|
|— |Public response parameters    |— |—   | —|
|`txcurrcd`  | |  String(3) |  | Transaction currency. View the [Currencies](/docs/In-Store/Payments#currencies) table for a complete list of available currencies |

## GET WeChat Pay Data

:::note Directly submit the related parameters to the interface, there is no need to define `X-QF-APPCODE` or `X-QF-SIGN` in the HTTP header during this step.
:::

### HTTP Request

`GET https://o2.qfpay.com/q/direct`

### Request Parameters

|Parameter code | Mandatory | Parameter type | Description |
|:----    |:---|:----- | -----   |-----   |
|`mchntnm` | Yes | String(128) | Custom business name. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters |
|`txamt`  | Yes  | Int(11) | Amount |
|`currency`   | Yes  | String(3)|  |
|`goods_name`   | No  | String(64)|  Custom goods name. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters |
|`redirect_url`   | Yes  | String(512)| Redirect URL after Payment is complete.  **Urlencode** handles this parameter |
|`package`     | Yes | String(128) |Parameter return from WeChat after calling the payment API   |
|`timeStamp`     | Yes | String(32) |Parameter return from WeChat after calling the payment API  |
|`signType`      | Yes | String(32) |Parameter return from WeChat after calling the payment API  |
|`paySign`       | Yes | String(64) |Parameter return from WeChat after calling the payment API  |
|`appId`        | Yes | String(16) |Parameter return from WeChat after calling the payment API  |
|`nonceStr`  | Yes | String(32) |Parameter return from WeChat after calling the payment API  |

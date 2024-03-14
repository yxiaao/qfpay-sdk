import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WeChat in-APP Payments

<Link href="https://sdk.qfapi.com/images/wechat-in-app.png" target="_blank">![WeChat APP Payment process-flow](/img/wechat-in-app.png)</Link>

### HTTP Request

`POST ../trade/v1/payment`
`PayType: 800210`

WeChat in-APP payments require a formal application on the WeChat Open Platform. Merchants have to register an account and the APP and then receive an `appid` to enable payments. For more information, please refer to the official [Wechat documentation](https://pay.weixin.qq.com/wiki/doc/api/wxpay/en/pay/In-AppPay/chapter6_2.shtml#menu1).

Optionally merchants can activate real-name authentication with WeChat. Currently real-name identification is only available for Mainland Chinese citizens and include a person's real name and national ID card number. In case identification is provided the payer's wallet information like a connected bank card must be identical with the data provided by merchants. If customers did not yet bind their WeChat account to a bank card the payment will go through regardless.

To download Wechat SDK please refer to this [link](https://developers.weixin.qq.com/doc/oplatform/Downloads/iOS_Resource.html).

### Request Parameters

```plaintext

Request Body:

{
  goods_info=test_app&goods_name=qfpay&out_trade_no=O5DNgEgL1XpvbvQSfPhN&pay_type=800210&txamt=10&txcurrcd=HKD&txdtm=2019-09-13 04:53:03&udid=AA
}

```

> The above command returns JSON structured like this:

```json
{
  "sysdtm": "2019-09-13 12:53:04",
  "paydtm": "2019-09-13 12:53:04",
  "txcurrcd": "HKD",
  "respmsg": "",    
  "pay_params": 
        {
        "package": "Sign=WXPay",
        "timestamp": 1568350384,
        "sign": "XwFjohEKWdkhhT4ueg7BxeDn8tT9LcqoZYdXzifTMYyDGe3/tRchpii6vWgOn21tPSaAtqo766gvifXgDEOwR+ILKN8t97r624IJlrH0EkvSUSLh9E/cga9scXGVy0jPWHM/oVvVzJIvXew79CwZFCNTSJok2KmpSm9X9oPg7PGXbqvNMHltf+YlIOsuiz391qVmFtTE5A/cpA50+06T7iW8GYsOJQTTJed75VY+aSzNo5C6ju6WSgJKpAJJ0ocl+ONtmOp6GLVBSQXaMC4PitQcebcoP2J6fFgQ+YcPwHXasCYEnn4LaFN7zT/AjGg3E3gdCx3ksGNBOazYBRVz+g==",
        "partnerid": "316525492",
        "appid": "wx3c6896fa9b351f2a",
        "prepayid": "wx131253044253463a81dc336e1254149882",
        "noncestr": "7786db42d9a245c2b1cfc717ac59376e"
        },
  "pay_type": "800210",
  "cardcd": "",    
  "udid": "AA",
  "txdtm": "2019-09-13 04:53:03",
  "txamt": "10",
  "resperr": "交易成功",
  "out_trade_no": "O5DNgEgL1XpvbvQSfPhN",
  "syssn": "20190913152100020001567741",   
  "respcd": "0000",
  "chnlsn": ""
}
```

| Parameter name | Parameter code | Mandatory | Parameter type | Description |
|:----    |:---|:----- |-----   |----   |
|Merchant ID    | `mchid`  | No | String  | The unique merchant ID is created by QF Pay during the merchant onboarding process. |
|External transaction number    | `out_trade_no` | Yes | String    |Developer platform transaction number |
|Transaction amount    | `txamt`  | Yes | String |The actual amount of consumption, the maximum deduction amount cannot exceed the fozen funds|
|Currency | `txcurrcd` | Yes | String(3) | Transaction currency. View the Currencies table for a complete list of available currencies|
|RMB Tag | `rmb_tag` | No | String(1) | WeChat Pay in Hong Kong uses `rmb_tag` = Y together with `txcurrcd` = CNY to indicate that the transaction currency is RMB.|
|Transaction request time    | `txdtm`   | Yes | String      | Format: YYYY-MM-DD hh&#58;mm:ss|
| Device ID   | `udid`   | No | String         |Must be unique|
| Time zone | `txzone`    | No | String        |Used to record the local order time. The default is Beijing time GMT+8 (+0800)|
| Redirect URL   | `return_url`   | No | String        | Redirect to address after successful payment. Mandatory parameter to submit for GrabPay Online. Alipay WAP restricts the `return_url` to maximum 200 characters.|
|Extended Customer Info    | `extend_info`  | No | Object  | Real name customer identification. This parameter is currently only available for Mainland Chinese citizens and needs to be explicitly activated with WeChat for the selected [PayType](/docs/In-Store/Payments#payment-codes). The consumer's **national ID card number** is contained in the parameter `user_creid` and the payer's **real name** in encoded form or written in Chinese characters must be provided in `user_truename`. An example looks like this; extend_info = '\{"user_creid":"430067798868676871","user_truename":"\\\u5c0f\\\u6797"\}' |

### Response Parameters

| Parameter code | Parameter type | Parameter name | Description |
|:----    |:---|:----- |-----   |
|`syssn` |   String(40) | QF Pay Transaction number | QFPay transaction number, returned by the system once payment is completed |
|`orig_syssn`    |String(40)| External transaction number | Developer platform transaction number |
|`txdtm`     | String(20) | Transaction request time | Format: YYYY-MM-DD hh&#58;mm:ss  |
|`txamt`    |Int(11)| Transaction amount | |
|`sysdtm`     |String(20)| System transaction time |Format: YYYY-MM-DD hh&#58;mm:ss <br/> This parameter value is used as the cut-off time for settlements.|
|`respcd`    |String(4)| Return code |  |
|`respmsg`    |String(128)| Information description|  |
|`resperr`     |String(128)| Description error |  |
|`cardcd`     |String| Card number |  |
|`txcurrcd`      |String| Currency  | Transaction currency. View the [Currencies](/docs/In-Store/Payments#currencies) table for a complete list of available currencies |
|`pay_params`      |Object| payment data  | Payment data to call Wechat SDK |
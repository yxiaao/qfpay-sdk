import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Asynchronous Notifications


:::note
 To configure your notification URL of choice, please send the address as well as merchant and store information via email to technical.support@qfpay.com
:::

Notifications are available for payments **"notify_type": "payment"** and refunds **"notify_type": "refund"**. The request parameters from Asynchronous Notifications may include additional parameters in future versions. Developers must ensure that their programs can support new parameters. In addition, developers can get the latest development documentation from this website. 


### Description

Upon successful payment and refund, QFPay API will send an asynchronous notification message to the URL address defined by the merchant. Merchant can develop an end-point to receive this notification message and update the status of a transaction accordingly. We recommend merchants to use the query function of the API in conjunction with the asynchronous notification end point to retireve the payment status. Asynchronous notifications only work with ports 80 and 443 due to security requirements.

## Asynchronous Notification Rules

1) The merchant will only be notified after the payment or refund transaction has been successful.

2) Please send an email with your notification endpoint URL address to **technical.support@qfpay.com** for the asynchronous notification setup. Our technical support team will setup the provided URL for you.

3) Upon receiving the notification, merchant shall verifiy the message integrity according to signature verification procedure described below. If the verification is successful, the system is required to response with status code 200 OK and the string SUCCESS in the response body.

4) If our API does not receive a response with status code 200 OK and SUCCESS message, we will send out asynchronous notifications at the following intervals after the first message; 2m, 10m, 10m, 60m, 2h, 6h, 15h. Notifications will stop when the response with status code 200 OK and SUCCESS message is received.

5) One set of app code and key can be setup with one notification URL address only. Patners shall use one notification URL address for their sub-merchants.

6) Method: POST content-type: `application/json`

## Signature Verification


```plaintext
For code instructions select Python with the tabs above.
```

<Tabs>
<TabItem value="python" label="Python">

```python
import hashlib
import json

# Client Credentials
client_key = "3ABB1BFFE2E0497BB9270978B0BXXXXX"

# Raw Content Data
data = {"status": "1", "pay_type": "800101", "sysdtm": "2020-06-15 10:32:58", "paydtm": "2020-06-15 10:33:35", "goods_name": "", "txcurrcd": "THB", "txdtm": "2020-06-15 10:32:58", "mchid": "O37MRh6Qq5", "txamt": "10", "exchange_rate": "", "chnlsn2": "", "out_trade_no": "9G3ZIWTG1R3IVSC2AH2O5EGKJQ7I72QO", "syssn": "20200615000200020000641807", "cash_fee_type": "", "cancel": "0", "respcd": "0000", "goods_info": "", "cash_fee": "0", "notify_type": "payment", "chnlsn": "2020061522001453561406303428", "cardcd": "2088032341453564"}

combine_str = (json.dumps(data)+client_key).encode()

signature = hashlib.md5(combine_str).hexdigest().upper()

print(signature)
```

</TabItem>
</Tabs>

> Signature String:

```json
"A4021A3B1EBBB0F05451EF94E9EXXXXX"
```

The signature generation method for notifications is slightly different from other POST requests. In order to generate the signature simply take the raw content and add the `client_key` to the end. Then hash the encoded string with the MD5 algorithm.

**Step 1:** Obtain the signature from the `X-QF-SIGN` field in the HTTP request header

**Step 2:** Attach the key to the end of the request body received by the end point

**Step 3:** Sign the string from step 2 with MD5 algorithm

**Step 4:** Compare the MD5 result with the signature from `X-QF-SIGN`, return an HTTP response with status code 200 OK and SUCCESS in the response body if the verification is successful


## Response Parameters of Asynchronous Notifications

> Asynchronous Notifications POST data in JSON form structured like this:

```json
{
  "status": "1",
  "pay_type": "800101",
  "sysdtm": "2020-05-14 12:32:56",
  "paydtm": "2020-05-14 12:33:56",
  "goods_name": "",
  "txcurrcd": "THB",
  "txdtm": "2020-05-14 12:32:56",
  "mchid": "lkbqahlRYj",
  "txamt": "10",
  "exchange_rate": "",
  "chnlsn2": "",
  "out_trade_no": "YEPE7WTW46NVU30JW5N90H7DHD94N56B",
  "syssn": "20200514000300020093755455",
  "cash_fee_type": "",
  "cancel": "0",
  "respcd": "0000",
  "goods_info": "",
  "cash_fee": "0",
  "notify_type": "payment",
  "chnlsn": "2020051422001453561444935817",
  "cardcd": "2088032341453564"
}
```

Parameter | Send always | Type | Description  
--------- | ------- | --------- | ------- 
`status` | Yes | String | 1 = payment success 
`pay_type` | Yes | String | Please refer to the section [Payment Codes](../preparation/paycode#payment-codes) for a complete list of payment types.
`sysdtm` | Yes | String | Transaction creation time in the system. This parameter value is used as the cut-off time for settlements.
`paydtm` | Yes | String | Payment time of the transaction. 
`txcurrcd` | Yes | String | Transaction currency. View the [Currencies](../preparation/paycode#currencies) table for a complete list of available currencies.
`txdtm` | Yes | String | Order creation time provided by the merchant in the payment request.
`txamt` | Yes | String | Transaction amount in Cents.
`out_trade_no` | Yes | String | External transaction number.
`syssn` | Yes | String | QFPay transaction number.
`cancel` | Yes | String  | Transaction cancel status: <br/> 0 = Not cancelled <br/> 1 = For CPM: Transaction reversed or refunded successfully <br/> 2 = For MPM: Transaction canceled successfully <br/> 3 = Transaction refunded <br/> 4 = Alipay Preauth order finished <br/> 5 = Transaction partially refunded.
`respcd` | Yes | String | Transaction status - will be `0000` in the async notification message 
`notify_type` | Yes | String | Notification Type: `payment` or `refund` 
`mchid` | No |  String | Unique merchant ID. This parameter is only returned to agents.
`goods_name` | No | String | Goods name or marking. Custom goods name. Parameter needs to be **UTF-8** encoded if it is written in Chinese characters. 
`exchange_rate` | No | String | Applied currency conversion exchange rate
`chnlsn2` | No | String | Additional transaction number added to the order
`goods_info` | No | String | Product description
`chnlsn` | No | String | Transaction number from the payment channel 
`cardcd` | No | String | Card number
`cash_fee` | No | String | Actual payment amount by user = transaction amount - discounts 
`cash_fee_type` | No | String | Actual payment currency e.g. CNY 
`cash_refund_fee` | No | String | Actual refund amount
`cash_refund_fee_type` | No | String | Actual refund currency e.g. CNY 
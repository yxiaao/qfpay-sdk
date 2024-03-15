import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Alipay in-APP Payments

<Link to="/img/alipay-in-app.png" target="_blank">![Alipay APP Payment process-flow](@site/static/img/alipay-in-app.png)</Link>

To download Alipay Oversea SDK , please refer to this [link](https://global.alipay.com./ac/app/client_integration). <br/>
To download Alipay HK SDK, please refer to this [link](https://global.alipay.com./ac/app_hk/download). <br/>
To know how to trigger Alipay HK SDK , please refer to this [link](https://global.alipay.com./ac/hkapi/securitypay_pay).

### HTTP Request

`POST ../trade/v1/payment` <br/>
`PayType: 801110 Oversea Merchants` <br/>
`PayType: 801510 Hong Kong Merchants`

### Request Parameters

```plaintext

Request Body:

txamt=1&txcurrcd=HKD&pay_type=801510&out_trade_no=052711570017898&txdtm=2021-05-27+11%3A57%3A00&goods_name=goods_name&goods_info=goods_info&mchid=nDB64h9qJ1An&trade_name=trade_name&goods_detail=goods_detail&return_url=http%3A%2F%2Fwww.qfpay.com%2F&pay_tag=ALIPAYHK&seller_id=testoverseas9191%40alipay.com

```

> QFPay Response:

```json
{
  "pay_type": "801510",
  "sysdtm": "2021-05-27 11:57:02",
  "paydtm": "2021-05-27 11:57:02",
  "udid": "qiantai2",
  "txcurrcd": "HKD",
  "txdtm": "2021-05-27 11:57:00",
  "txamt": "1",
  "resperr": "交易成功",
  "respmsg": "",
  "out_trade_no": "052711570017898",
  "syssn": "20210527154100020004180921",
  "pay_params": {
    "body": "goods_info",
    "forex_biz": "FP",
    "seller_id": "2088231067382451",
    "secondary_merchant_id": "1000007081",
    "service": "mobile.securitypay.pay",
    "payment_inst": "ALIPAYHK",
    "it_b_pay": "30m",
    "secondary_merchant_name": "IFlare Hong Kong Limited (external) - online",
    "_input_charset": "UTF-8",
    "sign": "iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D",
    "currency": "HKD",
    "out_trade_no": "20210527154100020004180921",
    "payment_type": "1",
    "total_fee": 0.01,
    "sign_type": "RSA",
    "notify_url": "https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify",
    "partner": "2088231067382451",
    "secondary_merchant_industry": "5941",
    "product_code": "NEW_WAP_OVERSEAS_SELLER",
    "return_url": "http://www.qfpay.com/",
    "subject": "goods_name"
  },
  "respcd": "0000",
  "chnlsn": "",
  "cardcd": ""
}
```

```plaintext
Request using Alipay SDK：

(After you receive the content of pay_params, when you call Alipay SDK, 
the orderinfo request parameters need to be adjusted in the following format:
Combine all the array values in the format of key="value", request parameters 
in ascending order of parameter name, then use "&" to link the parameters, 
"sign" and "sign_type" parameters need to be placed at the end.) 

Sample:

_input_charset="UTF-8"&body="goods_info"&currency="HKD"&forex_biz="FP"&it_b_pay="30m"&notify_url="https://test-o2-hk.qfapi.com/trade/alipay_hk/v1/notify"&out_trade_no="20210527154100020004180921"&partner="2088231067382451"&payment_inst="ALIPAYHK"&payment_type="1"&product_code="NEW_WAP_OVERSEAS_SELLER"&return_url="http://www.qfpay.com/"&secondary_merchant_id="1000007081"&secondary_merchant_industry="5941"&secondary_merchant_name="IFlare Hong Kong Limited (external) - online"&seller_id="2088231067382451"&service="mobile.securitypay.pay"&subject="goods_name"&total_fee="0.01"&sign="iU1yXUnsCK7rJAu0DoN61arVexbIfo3GLR5jr3QzjkZ29INSPhcA4e%2F2%2BdPrsf5huzQAkxVKP0CTfvaGPMYqNkxmhoaJWUH0ZhgYDgKugMvtweBvRqOX2W0h3A%2F%2FIdJuxeyOAuh7bHiuazSB3ZH%2BEQwRGP%2Bkk8Jpha930gHwPtw%3D"&sign_type="RSA"

```

|Parameter name | Parameter code  |Mandatory | Parameter type | Description |
|:----    |:---|:----- |-----   |----   |
|Public payment parameters    |—|— |—   |—   |
|Product description    |`goods_info`|No | String  | Must not contain special characters   |
|Payment mark    |`pay_tag`|No | String(16)  | The default value is: ALIPAYHK<br/>Alipay Continental version: ALIPAYCN<br/>801103 - Alipay overseas online refund (QF_BUSICD_ALIPAY_ONLINE_REFUND)<br/>801104 - Alipay overseas online inquiry (QF_BUSICD_ALIPAY_ONLINE_QUERY)<br/>801110 - Alipay overseas online APP payment (QF_BUSICD_ALIPAY_ONLINE_APP)<br/>801501 - Alipay Hong Kong pc scan code<br/>801512 - Alipay Hong Kong Wap payment<br/>801510 - Alipay Hong Kong APP payment  |
Order expiration time | `expired_time` | No<br/> (MPM only) | String(3)  | QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes.<br/> Available for: <br/>800201 - WeChat scan code<br/>800101 - Alipay scan code <br/>801512 - Alipay Hong Kong Wap payment<br/>801501 - Alipay Hong Kong scan code<br/>801107 - Alipay overseas Wap payment<br/>801101 - Alipay overseas scan code<br/>801010 - WeChat Hong Kong APP<br/>801510 - Alipay Hong Kong APP

### Response Parameters

|Parameter code | Secondary parameter code  | Parameter name |
|:----    |:---|:----- |
| `pay_params`   | `partner`         |Partner |
|              | `seller_id`                    |  Unique Alipay user number referencing the Alipay payment account                        |
|              | `subject`                      | Product name / transaction number / order number / order keyword, etc.                    |
|              | `body`                         | A specific description of a transaction. If it refers to a basket of products, please accumulate the product description string in the body. |
|              | `total_fee`                    | Total amount                                                  |
|              | `notify_url`                   | Notification address                                       |
|              | `service`                      | Service                                                          |
|              | `cardcd`                       | Card number                                   |
|              | `payment_type`                 | Payment type                                  |
|              | `\_input_charset`              | Encoding format                                     |
|              | `it_b_pay`                     | Custom timeout parameter                                |
|              | `return_url`                   | Redirect URL                                   |
|              | `payment_inst`                 | Payment institution                                    |
|              | `currency`                     | Currency                                                       |
|              | `product_code`                 | Product code                                             |
|              | `sign`                         | Required or not                                                 |
|              | `sign_type`                    | Signature type                                                   |
|              | `secondary_merchant_id`        | Secondary merchant identification            |
|              | `secondary_merchant_name`      | Secondary business name                         |
|              | `secondary_merchant_industry`  | Secondary merchant industry                   |
| `chnlsn`       |                              | Channel coding                                                    |
| Public response parameters| —                            | —                                              |

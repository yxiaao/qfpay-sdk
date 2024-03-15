import Link from '@docusaurus/Link';

# Checkout

## Introduction

Welcome to the **QFPay Online Checkout documentation.** This manual introduces QFPay's hosted checkout page, through which developers can add a variety of payment methods to their online store. There are language bindings available in HTML. You can view code examples in the dark area to the right.

## Checkout Page Design

<Link href="/img/shouyintai.png"> ![shouyintai](@site/static/img/shouyintai.png) </Link>

The checkout page is fully responsive and automatically adjust to all screen sizes. The UI currently supports English as well as simplified and traditional Chinese languages. Available eWallets as well as the design and descriptions can be configured based on merchant demand. If you have explicit requirements please send an email to **technical.support@qfpay.com** for assistance.

## API Environment

:::danger
Remember to immediately refund test transactions via the Merchant Management System, QFPay APP or open API.
:::

The table below depicts base URLs for each region.

| Environment Name | URL              |
| ---------- | ------------------------- |
| Hong Kong | https://openapi-hk.qfapi.com/checkstand/#/? |

## Process Flow

<Link href="/img/flowchart.png"> ![shouyintai](@site/static/img/flowchart.png) </Link>

Customers browse the client's website and proceed to make payment. Once they click the pay button they will be forwarded to the QFPay hosted checkout page. Here consumers can find a variety of payment methods available for checkout and complete payment on desktop or mobile devices. Once payment has been conducted successfully the user is redirected back to the merchant website for a "payment successful notification" and to continue to browse the shop.

## API Request Parameters

`GET https://openapi-hk.qfapi.com/checkstand/#/?..` <br/>
The following body parameters are necessary to create a new checkout request;

 | Parameter | Type | Mandatory | Description | Example |
| ---------- | ----------- | ----------- | ----------- | ----------- |
 | appcode | String(64) | Yes|API credentials assigned by QFPay|	A6A49A******************5032|
|sign_type | String(256)|Yes|SHA256 or MD5, SHA256 is recommended|	sha256|
|sign | String(128)	|Yes|	Request signature for authentication|	3b020a6349646684ebeeb0ec2cd3d1fb|
|paysource	 | String(12)|	Yes|	Must end in _checkout|	remotepay_checkout|
|txamt	 | Int(11)|	Yes|	Payment amount in unit cents|	1099|
|txcurrcd |String(3)|	Yes	Currency code|	HKD|
|out_trade_no|	String(128)|	Yes|	Unique external transaction number|	202005270001|
|txdtm	|String(32)	|Yes|	Order time	|2020-06-24 20:04:37, Format: YYYY-MM-DD hh:mm:ss|
|return_url|	String(256)|	Yes	|Redirect URL after payment has been successful	|https://xxx.com/return/success|
|failed_url	|String(256)|	Yes	|Redirect URL after payment has failed	|https://xxx.com/return/failed|
|notify_url	|String(256)|	Yes	|Asynchronous notification URL	|https://xxx.com/notify/success|
|mchntid	|String(16)|	No|QFPay Merchant Identifier for Agents|PAKjVHJmQe|
|goods_name	|String(64)|	No	|No special characters, no more than 20 letters or Chinese characters (app payment parameters must be |passed). If you want to display the merchant name on the clearing file, this parameter must be empty.|
|txzone	|String(5)	|No	|Timezone	|This field is used to record the local order time, the default is Beijing time +0800.|
|udid	|String(40	|No	|Unique device ID	|0001|
|expired_time	|String(3)	|No	|QRC expiration time|Unit in minutes, minimum 5 minutes, maximum 120 minutes, only WeChat Pay, Alipay |and Alipay_hk support this parameter|
|checkout_expired_time	|String(3)	|No	|client side expiration time|Unit in minutes, the checkout page will be redirect to fail url when time is up|
|limit_pay	|String(3)	|No	|Prohibit credit card use|The parameter value is specified as no_credit, which prohibits the use of |credit card payments, only WeChat Pay supports this feature.|
|lang|String(5)|No|UI Language|possible values: <br/> zh-hk (Hong Kong Traditional Chinese) <br/> zh-cn (Simplified Chinese) <br/> en (English) <br/> The checkout page will use default language of browser if do not pass this parameter in checkout request. If pass this parameter in checkout request, do not include this parameter in generating signature.|

## Create a New Checkout Order

:::info
Each checkout order is unique so merchants are requested to create a unique external transaction number `out_trade_no` when redirecting to the hosted checkout page.
::: 

In order to create a new checkout order, a GET request with authentication signature must be send. For this signature the above parameters have to be concatenated and then hashed with the app_key which is provided by QFPay. For API credentials or technical support please contact **technical.support@qfpay.com**.

The example to the right illustrates the signature generation algorithm. You can also download the [QFPay Online Checkout Boilerplate](@site/static/files/qfpay_online_checkout.html download) and open the HTML in your default browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>checkout</title>
    <style>

a{
  font-size: 20px;
}
    </style>
</head>
<body>
 <a id="standard">QFPay Online Checkout</a>

</body>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>

<script> 
window.onload = function(){
  let standard = document.getElementById('standard')

  let origin = 'https://openapi-hk.qfapi.com/checkstand/#/?'
   let obj = {
    appcode: "CC6FB660837E49F7A675D2**********",
    goods_name: "remotfpay_checkout_names",
    out_trade_no: "13322916216626239614",
    paysource: "remotepay_checkout",
    return_url: "https://www.baidu.com",
    failed_url: "https://www.baidu.com",
    notify_url: "https://www.baidu.com",
    sign_type: "sha256",
    txamt: "1",
    txcurrcd: "HKD",
    txdtm: "2020-06-28 18:33:20"
   }

   let api_key = "B3D4CCFD4AB049DCA82C25**********";
   let params = paramStringify(obj) 
   let sign = sha256(`${params}${api_key}`)
    standard.setAttribute('href', `${origin}${paramStringify(obj,true)}&sign=${sign}`)

}   

function paramStringify(json,flag) {
      let str = "";
      let keysArr = Object.keys(json);
      keysArr.sort().forEach(val => {
        if (!json[val]) return;
        str += `${val}=${flag ? encodeURIComponent(json[val]) : json[val]}&`;
      });
      return str.slice(0, -1);
    }

</script>
</html>
```

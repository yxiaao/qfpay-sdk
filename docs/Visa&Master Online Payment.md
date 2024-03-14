import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#  Visa / Mastercard Online Payments

We currently support credit card payments in the [Hong Kong environment](/docs/Preparation/introduction#environments). All major credit card issuers are supported.

| PayType | Description                       |
|-------- |---------------------------------- |
| 802801  | Visa / Mastercard Online Payments |


## Payment Steps

![Credit Card Payment Flow](@site/static/img/credit_card_payment_flow_integration.png)

### 1. DDC request
Merchant server requests a Data collector form before the merchant checkout is loaded. The DDC JWT is returned

```shell
curl --location --request POST 'https://openapi-int.qfapi.com/trade/v1/payment' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'X-QF-APPCODE: A060091DA6034502B6075C4F4605061B' \
--header 'X-QF-SIGN: acf9eabe97c36ef065aa2be81e35651e' \
--data-urlencode 'txamt=1' \
--data-urlencode 'txcurrcd=HKD' \
--data-urlencode 'pay_type=802828' \
--data-urlencode 'out_trade_no=464025641' \
--data-urlencode 'txdtm=2021-12-02 05:18:11'
```

Parameter name | Parameter code | Mandatory | Type | Description
--------- | -------- | --------- | ------- | ------- 
Payment amount | `txamt` | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1) 
Currency | `txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](/docs/In-Store/Payments#currencies) table for a complete list of available currencies
Payment type | `pay_type` | Yes | String(6) | Please refer to the section [Payment Codes](/docs/In-Store/Payments#payment-codes) for a complete list of payment types
API Order Number | `out_trade_no` | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss 



### 2. Get SessionId
On the payment page, create a hidden iframe and submit form POST when the "Pay now" button is just clicked. A Data collector sessionId is returned.
View page: [DDC_Test.html](/files/DDC_Test.html)

```html
<iframe name='iframet' height="1" width="1" style="display: none;"></iframe>
<form target='iframet' method="post" action="https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect" name="f1">
    <table>
        <div>
            <span>Bin(Card No.) :</span>
            <textarea rows="3" cols="200" name="Bin"></textarea>
        </div>
        <div>
            <span>JWT :</span>
            <textarea rows="3" cols="200" name="JWT"></textarea>
        </div>
    </table>
    <button type="submit">submit</button>
</form>
<h3 id='referenceId'></h3>
<script type="text/javascript">
    window.addEventListener("message", function (event) {
        console.log(JSON.parse(event.data));
        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
            var data = JSON.parse(event.data);
            console.log('Merchant received a message:', data);
            if (data !== undefined && data.Status) {
                document.getElementById('referenceId').innerHTML = data.SessionId
            }
        }
    }, false);
</script>
```

### 3. Payment request
The merchant server collects the payment information with sessionId and sends a payment request to QFPay. 
Encryption is required for sensitive information such as card number, expiry year/month, CVC, customer information

```shell
curl --location --request POST 'https://openapi-int.qfapi.com/trade/v1/payment' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'X-QF-APPCODE: A060091DA6034502B6075C4F4605061B' \
--header 'X-QF-SIGN: d33aadf2df78e568329a2d2dcf82070f' \
--data-urlencode 'txamt=1' \
--data-urlencode 'txcurrcd=HKD' \
--data-urlencode 'pay_type=802801' \
--data-urlencode 'out_trade_no=299085842' \
--data-urlencode 'txdtm=2021-12-02 05:46:23' \
--data-urlencode 'extend_info={"payment_data_enc":"d5715af3e290dae1c5980f4ceacd2fb7633962b26293de08f1fd9137802608c8e197e1f6fb6ef2eafa33e8933474876c46e31e7418021b9bfa5ea367421a307e80a1c4df74253b04112b6617b4bd5c7542327e61192f0010c0822de31f53c7dce6bce1b83d6eaeaa0e3020b98fabb93342433d7f0de43bdbe33a87c2e58220b614c859c3c4dc15afc234a1cec2dd3806b3f9957449cfcf2fee7910dd84ec64bd5a987914ab1d19d4d413e455e66c65eb50da71db62f4ea4a610d050ac051d82879cb83c00f9d78c017674a5f4287ce185db222f8d89f989896c504620c075b688b81a07211f98361587532b848abf488d78e3aaf7e49f398aba8f95561b00bcbc655b7e570df1fb169ddbd3b0289b38d05ae225ccf294c901a7559a382bf0e585e037158de0a479a25d0add81326bd3e91cee2e522b1f0c9e12ab5d7922eb626d6ab7a7132516614f900fa6b6401019ad9199cc09bab0a9b0dbd4b6edac964fd0d1e6f24a2a4c530fb231d24549d9751938b64407bdadf0149be0e687521e595c5f8d350e170cee4157758c7299e4fc4a6578676516e2ceabb1f631f39808eee7f40217e77055b64910658e6e4ad41b3d6a16cd6a53217632eb01c5ed9f6993e7fcd8814ce98ca86578047e741eef31ff9780f91323a9ed0bf18cbb0a9d20983e52b3c2ed1df80e9d48dfd6d3ce2eaf2bc870cbfdf5fb4fc89d34dfe6920f2d829b7751f81b3f68222a4e7187f302f77a0d218adad9540be675205e8ee82a603684ce15865dc3e815db91f723c489122266b85ac705390a4e58796803512dbc5c80b2cb4104db559e55f6d6fc10635b68f5f0a216cd3106558ece137dc7675f3ec9c2e9a3f8cb41fd377c3098941f4b85fd45347f97a55cae4af1549cfb3b8bf","return_url":"https://example.com"}'
```

Parameter name           | Parameter code | Mandatory | Type | Description
------------------------ | -------- | --------- | ------- | ------- 
Payment amount           | `txamt` | Yes | Int(11) | Amount of the transaction. Unit in cents (i.e. 100 = $1) 
Currency                 | `txcurrcd` | Yes | String(3) | Transaction currency. View the [Currencies](#currencies) table for a complete list of available currencies
Payment type             | `pay_type` | Yes | String(6) | Please refer to the section [Payment Codes](#payment-codes) for a complete list of payment types
API Order Number         | `out_trade_no` | Yes | String(128)| External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system.
Request transaction time | `txdtm` | Yes | String(20) | Transaction time format：<br/> YYYY-MM-DD hh:mm:ss 
Credit Card              | `extend_info` | Yes | json | Json encoded string that contains the following information:

<br/>

**In extend_info:**

Field name         | Mandatory | Type   | Description
------------------ | --------- | ------ | ----------- 
`payment_data_enc` | Yes       | String | encrypted payment information, please refer to payment_data table below
`return_url`       | Yes       | String | The return url after going through 3DS authentication

> Payment data sample:

```json
{
   "card": {
     "number": "5200000000001096",
     "cardholder_name": "chan tai man",
     "exp_month": "12",
     "exp_year": " 2034",
     "cvc": "567"
   },
   "billing_address": {
     "address1": "1007",
     "address2": "tins enterprise center",
     "address3": "777 lai chi kok road",
     "postal_code": "000000",
     "city": "hong kong",
     "country_code": "HK"
   },
   "customer": {
     "browser": {
       "accept_header": "text/html",
       "user_agent_header": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36",
       "browser_language": "en-GB"
     },
     "email": "test@example.com",
     "session_id": "86650cfa-9ea3-11ec-b909-0242ac120002",
     "ip_address": "12.34.56.78",
     "reference_id": "0_48af32ba-e658-4b4c-82b1-e85355a0e9f4"
   }
 }
```

> Encryption code example of the payment_data


```php
<?php
$plaintext = '{"card":{"number":"5200000000001096","cardholder_name":"chan tai man","exp_month":"12","exp_year":" 2034","cvc":"567"},"billing_address":{"address1":"1007","address2":"tins enterprise center","address3":"777 lai chi kok road","postal_code":"000000","city":"hong kong","country_code":"HK"},"customer":{"browser":{"accept_header":"text/html","user_agent_header":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36","browser_language":"en-GB"},"email":"test@example.com","session_id":"6227228bc7740","ip_address":"12.34.56.78","reference_id":"0_48af32ba-e658-4b4c-82b1-e85355a0e9f4"}}';
$cipher = "aes-256-cbc";
$key = 'APP_KEY'; // paste your key here
if (in_array($cipher, openssl_get_cipher_methods()))
{
   $ivlen = openssl_cipher_iv_length($cipher);
   $iv = openssl_random_pseudo_bytes($ivlen);
   $ciphertext = openssl_encrypt($plaintext, $cipher, $key, $options=0, $iv, $tag);
 
   $ciphertext = bin2hex(base64_decode($ciphertext));
 
   echo bin2hex(($iv)).$ciphertext;
   echo "\n";
 
 
   // decrypt test
   $ciphertext = base64_encode(hex2bin($ciphertext));
   $original_plaintext = openssl_decrypt($ciphertext, $cipher, $key, $options=0, $iv, $tag);
   echo $original_plaintext."\n";
}
else {
 echo 'algo not support';
}
?>
```

<br/>

**payment_data scheme before encryption:**

Level 2           | Level 3           | Level 4             | Mandatory | Type   | Description
------------------| ----------------- | ------------------- | ---------- | ------ | ---------
`card`            | `number`          |                     | Y          | String | card number
                  | `exp_month`       |                     | Y          | String | expiration month in format MM
                  | `exp_year`        |                     | Y          | String | expiration year in format YYYY
                  | `cardholder_name` |                     | Y          | String | card holder name
                  | `cvc`             |                     | N          | String | card cvc
`customer`        | `ip_address`      |                     | Y          | String | IP Address of the shopper
                  | `reference_id`    |                     | Y          | String | reference id (SessionId) return from DDC
                  | `session_id`      |                     | Y          | String | unique identifier, highly recommend UUID
                  | `email`           |                     | Y (if 3ds) | String | email address of the shopper
                  | `browser`         | `accept_header`     | N          | String | browser accept header, default text/html
                  |                   | `user_agent_header` | Y          | String | browser user agent header
                  |                   | `browser_language`  | Y          | String | browser language
`billing_address` | `address1`        |                     | N          | String | First line of address, required if `city` is not empty
                  | `address2`        |                     | N          | String | Second line of address
                  | `address3`        |                     | N          | String | Third line of address
                  | `city`            |                     | N          | String | city, required if `address1` is not empty
                  | `postal_code`     |                     | Y (if 3ds) | String | postal code, e.g. 000000 (if not applicable)
                  | `country_code`    |                     | Y (if 3ds) | String | country code, refer to [ISO 3166](https://www.iso.org/iso-3166-country-codes.html). e.g. HK

**Encryption algorithm of the payment_data**

* Sensitive data is transformed to JSON string
* Asymmetric encryption using AES-256-CBC with App Key
* Presents encrypted data as hexadecimal encoded string
                  

### 4. Verification (3DS) form data / payment result
Please pay attention to the variety of the API response, there are two different handlings.

**Case 1: 3DS required**

> Response for 3DS required case

```json
{
   "qrcode": "",
   "pay_type": "802801",
   "resperr": "success",
   "txdtm": "2021-12-08 07:04:15",
   "out_trade_no": "354267281",
   "syssn": "20211208180500020000001637",
   "sysdtm": "2021-12-08 15:04:16",
   "paydtm": "2021-12-08 15:04:16",
   "txcurrcd": "USD",
   "respmsg": "",
   "respcd": "0000",
   "pay_url": "",
   "cardcd": "",
   "udid": "qiantai2",
   "txamt": "1",
   "pay_params": {
       "3ds_challenge_details": {
           "url": "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
           "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZXR1cm5VcmwiOiJodHRwczovL2hrLnlhaG9vLmNvbSIsImlzcyI6IjYxNTViZThlYTJlNDhkNzAzYTM5ODI1NSIsIk9iamVjdGlmeVBheWxvYWQiOnRydWUsImp0aSI6IjdmZDkxOGM2LTJkNjItNDE2My1iOTJiLWUxZGU0YjY3MzJmMCIsImlhdCI6MTYzODk0NzA1NywiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovLzBtZXJjaGFudGFjc3N0YWcuY2FyZGluYWxjb21tZXJjZS5jb20vTWVyY2hhbnRBQ1NXZWIvY3JlcS5qc3AiLCJUcmFuc2FjdGlvbklkIjoia0VJVlRiWDFRc21DUkpWM05OMzAiLCJQYXlsb2FkIjoiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNUzR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUppT1dZNVkyVXdOeTB3TldJekxUUTJNR1F0T0RJMk5TMWlNVGt6T1ROaFlqa3dOVFlpTENKaFkzTlVjbUZ1YzBsRUlqb2lOVGRoWVdReU1HSXRNakUyWkMwME0ySmhMVGxqWldJdFl6azNPV00xTkRKa05USmhJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQXlJbjAifSwiT3JnVW5pdElkIjoiNjE1NWJlOGU1NjFlNWQyNGNlZWY0MGYyIn0.6xvBDFB4qV4RN-XvceNH7PllWChrQQthmbtskar0qAw"
       },
       "set-cookie": "machine=0a854015;path=/",
       "order_code": "20211208180500020000001637"
   },
   "chnlsn": ""
}
```

If there is pay_params.3ds_challenge_details or pay_params.request_3d_secure item, which contains 3DS form POST data, the shopper will be redirected to the bank verification page by composing automatic form POST in frontend.
<br/>
**Case 2: Frictionless**

> Case 2: Response for 3DS Frictionless flow

```json
{
    "qrcode": "",
    "pay_type": "802801",
    "resperr": "success",
    "txdtm": "2022-05-03 02:38:51",
    "out_trade_no": "312717842",
    "syssn": "20220503180500020000003749",
    "sysdtm": "2022-05-03 10:38:51",
    "paydtm": "2022-05-03 10:38:51",
    "txcurrcd": "USD",
    "respmsg": "",
    "respcd": "0000",
    "pay_url": "",
    "cardcd": "",
    "udid": "qiantai2",
    "txamt": "7000",
    "pay_params": {
        "payment_method": "VISA_CREDIT-SSL",
        "3ds_secure_result": "Cardholder authenticated",
        "last_event": "AUTHORISED",
        "order_code": "20220503180500020000003749",
        "set-cookie": "machine=0a844015;path=/"
    },
    "chnlsn": ""
}
```

Case 2b: Error Response Example

```json
{
  "pay_type": "802801",
  "sysdtm": "2022-09-12 22:07:05",
  "paydtm": "2022-09-12 22:07:05",
  "udid": "qiantai2",
  "txcurrcd": "USD",
  "txdtm": "2022-09-12 14:07:05",
  "txamt": "39900",
  "resperr": "ISO8583 Error Code 34: FRAUD SUSPICION",
  "respmsg": "",
  "out_trade_no": "93FXFJ2UXX",
  "syssn": "20220912154200020014859811",
  "respcd": "1205",
  "chnlsn": "",
  "cardcd": ""
}
```

If the 3DS Frictionless is in place, which decision was made by the bank. Steps 4, 5 will be skipped, the direct response (Step 6.) will be returned
<br/>

### 5. Redirect to 3DS page using form POST

> Code reference for redirect to 3DS page

```html
<form method="post" action="https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp" name="f1">
    <table>
        <div>
            <span>JWT :</span>
            <textarea rows="3" cols="200" name="JWT"></textarea>
        </div>
    </table>
    <button type="submit">submit</button>
    <script type="text/javascript">
    </script>
</form>
```

Code reference: [Browser_Redirect_3DS_input.html](/files/Browser_Redirect_3DS_input.html)
<br/>


### 6. Payment Verify

> Payment verify request

```shell
curl --location --request POST 'https://openapi-int.qfapi.com/trade/v1/payment_verify' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'X-QF-APPCODE: A060091DA6034502B6075C4F4605061B' \
--header 'X-QF-SIGN: cc1b6a456731b85cc136c214a4a1f6c1' \
--data-urlencode 'syssn=20211202180500020000003515' \
--data-urlencode 'txdtm=2021-12-02 06:37:57' \
--data-urlencode 'chnl_ext={"session_id": "86650cfa-9ea3-11ec-b909-0242ac120002","set_cookie": "machine=0a854015;path=/"}' \
--data-urlencode 'out_trade_no=385913749'
```

Notify QFPay when 3DS is completed, and the payment result can be determined from the API response. We recommend doubling confirm with the payment notification

Level 1    | Level 2      | Mandatory | Type   | Description
-----------| ------------ | --------- | ------ | ---------
`chnl_ext` | `set_cookie` | Y         | String | the cookie value return from the payment request, e.g. machine=0a854015;path=/
           | `session_id` | Y         | String | same unique identifier in the payment request, e.g. 86650cfa-9ea3-11ec-b909-0242ac120002



<br/>



### 7. Asynchronous Notification
QFPay will also send the asynchronous payment notification for the transaction status update

> Sample notification payload

```json
{
    "cardtp": "5",
    "cancel": "0",
    "pay_type": "802801",
    "order_type": "payment",
    "clisn": "054256",
    "txdtm": "2021-12-08 07:04:15",
    "goods_detail": "",
    "out_trade_no": "354267281",
    "syssn": "20211208180500020000001637",
    "sysdtm": "2021-12-08 15:04:16",
    "paydtm": "2021-12-08 15:06:51",
    "goods_name": "",
    "txcurrcd": "USD",
    "chnlsn2": "",
    "cardcd": "",
    "udid": "qiantai2",
    "userid": "1130000355",
    "txamt": "1",
    "chnlsn": "",
    "respcd": "0000",
    "goods_info": "",
    "errmsg": "success"
}
```

## Resources

* Postman API example: [LINK](https://documenter.getpostman.com/view/18699233/UVJkADBE)

## Test values

Test values are available for the Sandbox environment for result simulation. By using Test values to simulate an expected result, the Payment steps: DDC request and Get SessionId must pass

Field             | Value            | Expected Result
------------------| ---------------- | ---------------
card - MasterCard | 5200000000001096 | valid
card - Visa       | 4000000000001091 | valid
card - MasterCard | 5200000000001005 | valid (3DS frictionless)
card - Visa       | 4000000000001000 | valid (3DS frictionless)
card - MasterCard | 5200000000001120 | failed (at verification)
card - Visa       | 4000000000001125 | failed (at verification)
card - MasterCard | 5200000000001013 | failed (at  3DS frictionless)
card - Visa       | 4000000000001018 | failed (at  3DS frictionless)

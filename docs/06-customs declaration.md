import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Customs Declaration

Customs declaration API auto-sends the WeChat/Alipay payment data to the customs to simplify the clearance process and saves time for online cross-border stores.

## Push Customs Declaration

### HTTP Request

`POST ../custom/v1/declare`

### Request Parameters

| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|weixin or alipay|
|`syssn`|Y|String(32)|QFPay transaction number|
|`customs`|Y|String(20)|Customs for declaration. Example：SHANGHAI_ZS|
|`mch_customs_no`|Y|String(20)|Customs registration No. of the merchant|
|`action_type`|N|String(256)|Declaration type. Only valid when `trate_type` is "wechat". "ADD" - new appplication, "MODIFY" - modification of applied declaration|
|`mch_customs_name`|N|String(256)|Merchant customs record name. Must be passed when `trate_type` is "alipay". Exaple: jwyhanguo_card|
|`out_request_no`|N|String(32)|Merchant order number. Must be passed when `trate_type` is "alipay". Exaple: 15725904083420588032|
|`amount`|N|String(20)|Declaration amount. Must be passed when `trate_type` is "alipay". Example: 2.00|
The following fields should be passed in case splitting or modifying order: <br/>
###
| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`sub_order_no`|C|String(64)|Merchant sub-order No. It is required if there is a split order. Example：1111960490|
|`fee_type`|C|String(8)|Currency. Must be passed when `trate_type` is "wechat". It can only be CNY|
|`order_fee`|C|String(8)|Sub-order amount (in 0.01 CNY). Cannot exceed the original order amount. order_fee=transport_fee+product_fee. It is required if there is a split order Example：888|
|`product_fee`|C|String(8)|Product price (in 0.01 CNY). It is required if there is a split order. Example：888|
|`transport_fee`|C|String(8)|Logistics fee (in 0.01 CNY). It is required if there is a split order. Example：888|

### Response Parameters

| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay transaction number|
|`respcd`||String(4)|0000 = Declaration successful. <br/> 1143/1145 = merchants are required to continue to query the declaration result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](./preparation/paycode#transaction-status-codes) for a complete list of response codes.|
|`resperr`||String(128)|Response message|
|`respmsg`||String(128)|Other message information|
|`verify_department`|||Verification organization|
|`verify_department_trade_id`|||Transaction number of verification organization|

## Query Customs Declaration

Merchants query declaration status by QFPay transaction number.

### HTTP Request

`POST/GET ../custom/v1/query`

### Request Parameters

| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|weixin or alipay|
|`customs`|Y|String(20)|Customs for declaration. Example：SHANGHAI_ZS|
|`syssn`|Y|String(32)|QFPay transaction number|
|`sub_order_no`|N|String(40)|Sub order number. It is required if there is a split order.|

### Response Parameters

| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay transaction number|
|`respcd`||String(4)|0000 = Declaration successful. <br/> 1143/1145 = merchants are required to continue to query the declaration result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](./preparation/paycode#transaction-status-codes) for a complete list of response codes.|
|`resperr`||String(128)|Response message|
|`respmsg`||String(128)|Other message information|
|`data`|||Customs declaration details \[\{"resperr" : "", "errmsg" : null, "sub_order_no" : "15752730835729139712", "verify_department" : "OTHERS", "verify_department_trade_id" : "4200000459201911265585026208"\}\]|

## Repush Customs Declaration

If additional order information has been submitted to the customs but is lost in the electronic port, the customs declaration re-push API can be used to push the information to the customs again.

### HTTP Request

`POST ../custom/v1/redeclare`

### Request Parameters
| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`trade_type`|Y|String(8)|weixin or alipay|
|`customs`|Y|String(20)|Customs for declaration. Example：SHANGHAI_ZS|
|`syssn`|Y|String(32)|QFPay transaction number|
|`mch_customs_no`|Y|String(20)|Customs registration No. of the merchant. Example: 110084111|
|`sub_order_no`|N|String(40)|Sub order number. It is required if there is a split order.|
### Response Parameters
| Parameter code| Mandatory| Parameter type|Description|
|:---|:----- |-----   |----   |
|`syssn`||String(40)|QFPay transaction number|
|`respcd`||String(4)|0000 = Declaration successful. <br/> 1143/1145 = merchants are required to continue to query the declaration result. <br/> All other return codes indicate transaction failure. Please refer to the page [Transaction Status Codes](./preparation/paycode#transaction-status-codes) for a complete list of response codes.|
|`resperr`||String(128)|Response message|
|`respmsg`||String(128)|Other message information|

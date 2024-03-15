import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# WeChat Pay H5 (in mobile browser)

<Link href="https://sdk.qfapi.com/images/wechat-h5.png" target="_blank">![WeChat H5 process-flow](@site/static/img/wechat-h5.png)</Link>

### HTTP Request

`POST ../trade/v1/payment` `PayType: 800212`

### Request Parameters

|Parameter name|  Parameter code | Mandatory| Parameter type | Description |
|:----    |:---|:----- |-----   |-----   |
|Public payment parameters |—  |— |—  | Refer to the general documentation about transactions |
|Extended Customer Info|`extend_info`|Yes|Object||

```plaintext
extend_info:
{"scene_info":{
                "h5_info": { // h5支付固定传"h5_info"
                             "type": "Wap", //场景类型
                              "wap_url": "https://qfpay.com/h5/pay", //WAP网站URL地址
                              "wap_name": "qfpay" //WAP 网站名
                            }              },
  "spbill_create_ip": "192.168.1.10"// 用户真实ip地址获取指引 https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_5
}
```

<br/> **`extend_info:`**  <br/>

|Parameter code|  Parameter code | Parameter code | Mandatory| Parameter type | Description |
|:----    |:---|:----- |-----   |-----  |-----   |
|`scene_info`|||Yes|Object||
||`h5_info`||Yes|Object||
|||`type`|Yes|String|scene type **"Wap"**|
|||`wap_url`|Yes|String|mobile website address|
|||`wap_name`|Yes|String|mobile website name|
|`spbill_create_ip`|||Yes|String|IP address of user|



### Response Parameters

|Parameter code| Secondary parameter code| Parameter Type| Parameter name|Description|
|:----    |:---|:----- |-----   |----   |
|Public response parameters    |—  |— |—  | — |
|Payment URL|`pay_url`|Yes|String||

:::warning
In normal process after payment, the user will return to the page where payment is initiated. If you want user to return to the specified page, you can insert redirect_url parameter to returned payment URL. For example, if you want user to jump to https://www.wechatpay.com.cn it can be processed as follows: <br/>
:::
**pay_url** <br/>

https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096 <br/>

**Payment URL after redirect_url inserted** <br/>

https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096<br/>&redirect_url=https%3A%2F%2Fwww.wechatpay.com.cn

# QFPay Element SDK
![Element Sequence diagram](https://www.plantuml.com/plantuml/png/VLF1ZXCn3BtdAwozmuAuzO1s0Qs4458H7r0bgQTZTPBCEiukvUjn9bEbhO1BbTX-p--zPXwoM9OI9cEz90PVigI033OlPpDhcppDDWhSVKVsOpqzSOg2SG-VH_J7L0Isze1t5HM6Vs0-MNzKI1jorqC_dhRs13XXGBt-_F9jcNeUjFAtmKvLXvpUZ36sI8ebE6HJbSERZwfb0_wiK0rIYYOCIyTTT1YV2whNu6gh4MgRqGh2R4-BAAg6nSIaDQR3AEPn-tK3zsj_jug_Vtb_tv2xSsT5rhWgsZ1AuVWVukiElD8qWKF0NpCnxhKC7zv1e5W4SwSDxcnvNT2okYPhzbko6wsHa9teDuAtl8SXST1rCjwYMg8TE5H9CgumYXLeQxpNqK_aZv2B2oJWYaYApUQ4WvWARqK82geEASmjHNNfJX3MfzCztgX_IKVKcufzwrCSYCDsrJsKw8MkzhLKTeMdwXCqIMBq0dFXEMNiInRw_X3MBFepQVKB8NqWbqaQlcNGUpvLRsgiJiqfwi83fp833N2XZ39alA4uA-qVfwHBp2kwJB8OC2lfOpv5FtAAgUHgYWRoxV_fueFhwdBn7lFDQELxq9yIfZy0)

create your own checkout flows by using QFPay prebuilt UI components

#### import JS library
```js
// sanbox environment
<script src="https://cdn-int.qfapi.com/qfpay_element/qfpay.js"></script>
// live test environment
<script src="https://test-cdn-hk.qfapi.com/qfpay_element/qfpay.js"></script>
// production environment
<script src="https://cdn-hk.qfapi.com/qfpay_element/qfpay.js"></script>
```

#### Code examples
1. payment mode
```js
//1.1 credit card form (visa/mastercard)

// initialize qfpay object
const qfpay = QFpay.config()

// initialize payment object
const payment = qfpay.payment()

// set payment related parameters
payment.pay({
  goods_name: "goods",
  paysource: "payment_element"
}, "e487a02e3e1143e482db765ccec63d58")

// initialize element object and generate card form
const elements = qfpay.element()
elements.createEnhance({
  selector: "#container"
})

// trigger card form submission and receive payment response
const response = qfpay.confirmPayment({
  return_url: 'https://xxx.xxx.com'
})
```
```js
//1.2 wallet list (including credit card form, Alipay HK, Alipay CN, WechatPay, QuickPass, FPS, Payme
// initialize qfpay object
const qfpay = QFpay.config()

// initialize payment object
const payment = qfpay.payment()

// validate payment intent valye
qfpay.retrievePaymentIntent()

// set payment parameters
payment.walletPay({
	lang:  'zh-cn',
	goods_info:  'goods_info',
	goods_name:  "goods_name",
	paysource:  "payment_element_checkout",
	out_trade_no: intentParams.out_trade_no,
	txamt:  intentParams.txamt,
	txcurrcd:  intentParams.txcurrcd,
},intentParams.payment_intent);
// initalize element object and create wallet list
const  appearance = {
	variables: {
		colourComponentText:  'black',
		colorQRCodeTopPromptContent:  '#000000',
		colorQRCodeBottomPromptContent:  '#000000',
		fontWeightQRCodeTopPrompt:  '900',
		fontWeightQRCodeBottomPrompt:  '300'
	},
	billingAddressDisplay: {
		city:  true,
		address1:  true,
		address2:  true,
	}
}
const elements = qfpay.element(appearance)
elements.createWallet({
	selector:  "#container"
})

//trigger submission and retrieve payment response
const response = qfpay.confirmWalletPayment({
return_url:  'https://xxx.xxx.com'
})
```
2. payment token creation mode
```js
//2.1 credit card form
// initialize qfpay object
const qfpay = QFpay.config()

// initialize token object
const token = qfpay.token()

// set token cereation parameters
token.intent({
  paysource: "payment_element"
},"e487a02e3e1143e482db765ccec63d58")

// initialize element object,and generate card-form 
const elements = qfpay.element()
elements.createEnhance({
  seletor: "#container",
  element: "token"
})

// trigger form submission and receive response
const response = qfpay.createToken({
  return_url: 'https://xxx.xxx.com'
})
```

#### Instruction Manual
```Prerequisites:
import SDK library (qfpay.js) according to your environment and purpose
```

##### global object QFPay and related APIs
1. QFpay.config(params)
```js
/**
 * parameters: optional, Object, default valie: {region: 'hk', env: 'prod'},
 *      region possible values：
 *        'hk' 		- live/live test
 *        'qa' 		- sandbox
 *
 *      env possible values:
 *        'prod' 	- live environment
 *        'test' 	- live test environment
 *        'qa' 		- sandbox environment
 * return: qfpay object
 * purpose: generate qfpay global object
 */
const qfpay = QFpay.config()
```
2. qfpay.retrievePaymentIntent()
```js
/**
 * parameters: N/A
 * return: response code, payment intent is available for use if '0000' value, otherwise not available
 * purpose: validate payment intent is correct and available for use
 */
const intentResponse = qfpay.retrievePaymentIntent()
```

3. qfpay.element(appearance)
```js
/**
 * parameters: optional, Object, {theme: string, variables: Object, billingAddressDisplay: Object}
 *      theme: support only value 'night', night mode, 
 *      if values are set in variables, the style will apply those values only
 *      variables: {
 *        fontFamily: 'cursive',         // Font Family
 *        fontWeight: '400',             // Font Weight
 *        colorText: 'black',            // Text Color
 *        sizeFontSubTitle: 'inherit',   // Font Size
 *        colourBackground: '#fff',      // Background Color
 *        colourPrimary: '#ced4da',      // Input Box Color
 *        colourComponentText: 'purple', // Input Box Text Color
 *        sizeComponentText: '15px',     // Input Box Font Size
 *        colourErrorMessage: '#da5d4a', // Error Message Color
 *        sizeErrorMessage: 'inherit'    // Error Message Font Size
 *        colorPaymentButton: '#000000' //payment button color
 *        colorPaymentButtonText: '#FFFFFF'  //payment button text color
 *        colorQRCodeTopPromptContent: '#000000'  // QRCode Top memo text color
 *        colorQRCodeBottomPromptContent: '#000000'  //QRCode bottom memo text color
 *       fontWeightQRCodeTopPrompt: '900'  //QRCode Top memo font weight
 *       fontWeightQRCodeBottomPrompt: '300'  //QRCode bottom memo font weight
 *      }
 *      billingAddressDisplay: {
 *        city: true      // flag for controlling displayment of city &  postal code in billing address
 *        address1: true  // flag for controlling displayment of address1 in billing address
 *        address2: true  // flag for controlling displayment of address2 in billing address
 *      }
 * return：element object
 * purpose: generate element object
 */
const elements = qfpay.element()
```

4. qfpay.payment()
```js
/**
 * parameters: N/A
 * return： payment object
 * purpose: generate payment object
 */
const qfpay = QFpay.config()
const payment = qfpay.payment()
```


5. qfpay.confirmPayment()
```js
/**
 * parameters：optional, Object type, {return_url: 'https://xxx.xxx.xxx'}, the page will be redirect to specific page mentioned in return_url parameter after payment completed. Otherwise, will stay in the same page
 * return：
 *   1. card payment
 *      return value：code, description, out_trade_no, syssn
 *      '0000' response code if success payment,
 *      otherwise failure payment, error message can reference to description
 *
 *   2. ApplePay
 *      return value：code, description; 
 *      code value:'1111', Applepay payment cancalled
 *      code value:'0000', payment success, can refer to description value for payment status description
 * purpose：return payment result
 */
const paymentResponse = qfpay.confirmPayment({
  return_url: 'https://www.baidu.com'
})
```
6. qfpay.confirmWalletPayment()
```js
/**
 * parameters：optional, Object type, {return_url: 'https://xxx.xxx.xxx'}, the page will be redirect to specific page mentioned in return_url parameter after payment completed. Otherwise, will stay in the same page
 * return：
 *   1. card payment
 *      return value：code, description, out_trade_no, syssn
 *      '0000' response code if success payment,
 *      otherwise failure payment, error message can reference to description
 * purpose：return payment result
 */
const paymentResponse = qfpay.confirmPayment({
  return_url: 'https://www.baidu.com'
})
```

7. qfpay.token()
```js
/**
 * parameters: N/A
 * return：token object
 * purpose: generate token object
 */
const qfpay = QFpay.config()
const payment = qfpay.token()
```

8. qfpay.retrieveTokenIntent()
```js
/**
 * parameters: N/A
 * return: code
 *     code value: '0000', token is available for use
 *     otherwise token is not available for use
 * purpose: validate token intent is correct and available for use
 */
const intentResponse = qfpay.retrievePaymentIntent()
```

9. qfpay.createToken()
```js
/**
 * 参数：optional，Object，{return_url: 'https://xxx.xxx.xxx'},the page will be redirect to specific page mentioned in return_url parameter after action completed. Otherwise, will stay in the same page
 * 
 * return：code,description,customer_id, card info,token info
 *     code value '0000', action success
 *     customer_id: QFPay generated customer Id
 *     card: {
 *         brand: "xxxx", // card scheme, e.g. VISA
 *         suffix: "xxxx" // card number last 4 digits, e.g. 1000
 *     }
 *     token: {
 *         event: "CREATE", // create token action
 *         token_id: "xxxxxxx" // generated payment token id
 *     }
 *     other code value, please refer to descirption value for fail reason
 * purpose：return token related info.
 */
```


##### payment object and APIs
```js
const qfpay = QFpay.config()
const payment = qfpay.payment()
```
1. payment.pay(params1, params2)
```js
/**
 * parameters：	
 *     	   params1，mandatory，Object, 
 *              {goods_name: '', paysource: 'payment_element'}
 *               goods_name: goods name,optional;
 *               paysource: fixed, value:payment_element, mandatory
 *         params2, mandatory, string, payment intent value from API
 * extra special parameters in 'params1'：
 *         customer_id: params1 optional parameter，QFPay generated customer Id
 *         token_expiry: params1 optional parameter, Token expiry date
 *         token_reason: params1 optional parameter, Reason for token creation
 *         token_reference: params1 optional parameter, Reference for token
 *         no need pass above special parameters if use payment function only
 *         if would like to collect card information for tokenization purpose, then need pass above parameters
 * return: No
 * purpose：set payment parameters
 */
payment.pay({
  goods_name: 'goods',
  paysource: 'payment_element'
}, 'SDF8980SFFSDF890SDF')
```
2. payment.walletPay(params1, params2)
```js
/**
 * parameters:
 *     params1, mandatory, Object, { lang: 'zh-cn', goods_name: '', paysource: 'payment_element', paysource: "payment_element_checkout", out_trade_no: intentParams.out_trade_no, txamt: intentParams.txamt, txcurrcd: intentParams.txcurrcd}
 *     lang: language, optional, zh-cn:simplify chinese, zh-hk traditional chinese, en: english
 *     goodsname: goods name, optional,
 *     paysource: fix value, payment_element_checkout,mandatory
 *     out_trade_no: merchant order id, mandatory
 *     txamt: transaction amount, mandatory
 *     txcurrcd: transaction currency, mandatory
 *     params2, mandatory, string, payment intent value from 
 * extra special parameters in 'params1':
 *         customer_id: params1 optional parameter，QFPay generated customer Id
 *         token_expiry: params1 optional parameter, Token expiry date
 *         token_reason: params1 optional parameter, Reason for token creation
 *         token_reference: params1 optional parameter, Reference for token
 *         no need pass above special parameters if use payment function only
 *         if would like to collect card information for tokenization purpose, then need pass above parameters
 * return: No
 * purpose：set payment parameters
 */
payment.walletPay({
	goods_info:  'goods_info',
	goods_name:  "goods_name",
	paysource:  "payment_element_checkout",
	out_trade_no:  intentParams.out_trade_no,
	txamt:  intentParams.txamt,
	txcurrcd:  intentParams.txcurrcd,
}, 'SDF8980SFFSDF890SDF')
```

3. payment.inquiry(params1, params2)
```js
/**
 * parameters: 
 *      params1, mandatory， Object, {syssn: string, out_trade_no: string, pay_type: string, respcd: stirng, start_time: string, end_time: string} | {}
 *               syssn: QF QF system serial no, use comma to separate mutliple values
 *               out_trade_no: merchant order ID, use comma to separate multiple values
 *               pay_type: payment type, use comma to separate multiple values
 *               respcd: response code, default all response code
 *               start_time: start time, format: 'YYYY-MM-DD HH:mm:ss', default current month start
 *               end_time: end time, format: 'YYYY-MM-DD HH:mm:ss', default current month end
 *      params2, mandatory, string, payment intent from API
 * return: inquiry result
 * purpose：inquiry payment result
 */
const inquiryResponse = payment.inquiry({}, 'SDF8980SFFSDF890SDF')
```

##### token object and APIs
```js
const qfpay = QFpay.config()
const token = qfpay.token()
```
1. token.intent(params1, params2)
```js
/**
 * parameters：
 *      params1, mandatory，Object, {paysource: 'payment_element'}
 *               paysource: fixed, value: payment_element，mandatory
 *      params2, mandatory, string, payment intent from API
 * return: N/A
 * purpose：set token intent parameters
 */
token.intent({
  paysource: 'payment_element'
}, 'SDF8980SFFSDF890SDF')
```

##### element object and APIs
```js
const qfpay = QFpay.config()
const elements = qfpay.element()
```

1. elements.create(params1, params2, params3) --- support Visa/Mastercard card payment only
```js
/**
 * parameters：
 *      params1, mandatory, string, card form id
 *      params2, optional, boolean, default value is:true, card form will show email address input if true value
 *      params3, optional, string, default value:payment, generate card form
 * return: N/A
 * purpose: generate card form
 */
elements.create("#container")
```

2. elements.createEnhance(params) ---  support Visa Mastercard card payment, ApplePay payment,  token creation,  token creation in payment mode
```js
/**
 * parameters：params: Object, {selector: string, email: boolean, tab: boolean, element: string}
 *      selector: mandatory, string, element wallet id
 *      email: optional, boolean, default value:true, card form will show email address input if true
 *      tab: optional, boolean, default value:false, 
 *           true:  element wallet switch way is tab 
 *           false: wallet list switch way is vertical list
 *      element: optional, string, default value:payment, 
 *           payment: normal payment mode
 *           token: token creation mode  
 * return: N/A
 * purpose: generate element wallet
 * NOTICE：tab parameter only effecitve in payment mode
 */
elements.createEnhance({
  selector: '#container'
})
```

##### retrieve selected wallet type
```js
window.addEventListener('walletType', ({detail}) => {
  /**
   * detail: possible: ApplePay and Card
   * detail:ApplePay, selected payment method is applepay
   * detail:Card, selected payment method is card payment
   */
})
```

import Link from '@docusaurus/Link';

# Appendix

## Transaction Information Field Description

| Field Name | Type              | M/O | Description                     | 
| ---------- | ------------------------- |-----|---------------------------------|
| id | String  |   M   | Transaction idendity number |
| amt | Long | M | Transaction Amount |
| time | String | M | Transaction time yyy-MM-dd HH:mm:ss |
| channel | String | M | Transaction channel like weixin, alipay |
| status | Integer | M | Transaction status |
| type | String | M | Transaction type, payment or refund |
| originId | String | O | Original transaction id, mandatory if the transaction is refund |
| mchntName | String | M | Sore name |
| remarks | String | O | Transaction remarks |
| confirmCode | String | O | Transaction confirmation code |
| operatorAccount | String | M | Operator name |
| appCode | String | O | Application code (swipe card) |
| customerId | String | O | Idendity of customer wallet (pre-authorization) |
| customerAccount | String | O | Account of customer wallet (pre-authorization)|
| completeTransId | String | O | Newly generated transaction id when the pre-authorization transaction is completed (pre-authorization) |
| completeTime | String | O | Complete time when the pre-authorization transaction is completed yyyy-MM-dd HH:mm:ss (pre-authorization) |

## Channel Information Field Description

| Field Name | Type              | M/O | Description                     | 
| ---------- | ------------------------- |-----|---------------------------------|
| name | String | M | Channel name |
| desc | String | M | Channel description |

## Transaction Status Field Description

| Transaction Status | Description       |
| ------------------ | ------------------|
| 0 | Normal transaction |
| -1/-2 | Waiting for payment |
| -3 | Failed |
| 1 | Reversal |
| 2 | Void |
| 3 | Refund |
| 4 | Partial Refund |
| 5 | Pre-authorization Frozen |
| 6 | Pre-authorization Unfrozen |
| 7 | Pre-authorization Completed |

## Result Code Description

| Result Code        | Description       |
| ------------------ | ------------------|
| -1 | Unknown error |
| 0 | Success |
| 100 | Client error |
| 101 | Amount error |
| 102 | AppId is empty |
| 103 | Order id is empty |
| 104 | Other parameter is empty |
| 105 | User cancel |
| 106 | Network error |
| 107 | User not logged in |
| 108 | Application not installed |
| 109 | Launch App failed |
| 110 | Non-support API invoke |
| 111 | Time period error |
| 112 | Cross-month query not allowed |
| 113 | Failed to get config info |
| 114 | Card adjust failed |
| 115 | Device does not support card swiping |
| 116 | Password input error |
| 200 | Server error |
| 201 | Order id does not exist |
| 202 | Transaction Failed |
| 203 | Insufficient account balance |
| 204 | Transaction is confirming |
| 205 | Login status expired |
| 206 | Refund is confirming |
| 207 | Refund Failed |
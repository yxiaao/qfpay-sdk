# Transaction Notes

:::note
This Endpoint is only available to merchants who do not pass in the `mchid`
:::

Merchant can use this interface to add remarks to a transaction. This remarks value will be displayed in the Merchant Management System (MMS) and on the transaction report.

## API Endpoint for Transaction Notes

```plaintext
Request Header:

{
  Content-Type: application/x-www-form-urlencoded;
  X-QF-APPCODE: D5589D2A1F2E42A9A60C37**********
  X-QF-SIGN: 6FB43AC29175B4602FF95F8332028F19
}

Request Body:

{
  code=A6A49A6******DFE94EA95032&note=add_note&syssn=20190722000200020081075691
}
```

> The above command returns JSON structured like this:

```json
{
  "resperr": "Success",
  "respcd": 0000,
  "respmsg": "",
  "data":
{
  "syssn": "20190722000200020081084545"
}
}
```

### HTTP Request

`POST ../trade/v1/add_note`

### Request Parameters

|Parameter name|Parameter code|Mandatory|Parameter type|Description|
|----    |---|----- |-----   |-----   |
|Merchant app code| `code`   |Yes   |String(32)   | Provided by QF Pay |
|Transaction number | `syssn` | Yes |String(40) | QFPay transaction number, returned by the system once payment is completed |
|Remarks| `note`   |Yes   |String(200）   | Remarks value  |

### Response Parameters

|Parameter code|Parameter type | Parameter name |Description|
|----    |---|-----   |-----   |-----   |
| `resperr`   |String(128)   |Transaction result description   |  | 
| `respmsg`   |String(128)  |Error message   |    | 
| `respcd`    |String(4)  |Return code   |   0000 = Interface call succeeded | 
| `syssn`     |String(40)   |Error message   | Transaction number returned by the system when payment is completed | 

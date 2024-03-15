# FAQs

**Q1. In provided test account credentials which one is the partner or the merchant identifier?** <br/>
A1. If you're an agent which provides payment services for merchants; X-QF-APPCODE and ClientKey are the partner while MCHID is the merchant identifier.
    If you're a merchant then X-QF-APPCODE and ClientKey are merchant identifier and MCHID is not provided.

**Q2. Can I use given (Test/Production) account in another country?** <br/>
A2. No. An (Test/Production) account is country specific.

**Q3. How can I test a transaction?** <br/>
A3. Since test environment is a replica of production you can use production wallets to test transactions. If you need any assistance please contact tech support.

**Q4. I receive a <code>1143/1145</code> response code, what should I do next?** <br/>
A4. It's advised to keep querying transaction status. If partner/merchant wants to process as binary status (success/fail), can mark the transaction as failed and upon a successful asynchronous notifications can apply for refund at backend.

**Q5. There is no specific title for the payment method I want to integrate, what should I do?** <br/>
A5. You should use [Public Payment Parameters](./preparation/paycode#api-endpoint-for-payments) and check the special cases in Notes section at the end of the [Payment Codes](./preparation/paycode#payment-codes).

**Q6. Can I refund a transaction made n day(s) ago?** <br/>
A6.	Only if the total transaction of the day is equal or greater than the refund amount you can refund.

**Q7. Do you transfer funds to our bank account when we test transactions in the sandbox environment?** <br/>
A7. There are no settlements possible in the sandbox environment. Please make sure that you refund test transactions immediately after testing. 

**Q8. Can I use my overseas Alipay wallet to pay?** <br/>
A8. No, currently only real-name identified Alipay wallets which belong to Mainland Chinese citizens can be used to conduct cross-border transactions.  

<br/>
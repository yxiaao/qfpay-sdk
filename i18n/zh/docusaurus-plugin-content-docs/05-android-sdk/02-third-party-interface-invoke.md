import Link from '@docusaurus/Link';

# Third-party Interface Invoke Sample

## Collection

Calling a collection request:

<Link href="@site/static/img/android/invoke__collection.png" target="_blank"> ![Collection](@site/static/img/android/invoke__collection.png)</Link>

## Refund 

Calling a refund request:

<Link href="@site/static/img/android/invoke__refund.png" target="_blank"> ![Refund](@site/static/img/android/invoke__refund.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__refund.png" target="_blank"> ![Refund](@site/static/img/android/parse__refund.png)</Link>

## Query Multiple Transaction

Calling a query request:

<Link href="@site/static/img/android/multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/multiple__query.png)</Link>

:::note
<br/>
1. Check the supported channels.<br/>
2. Only support querying of two transaction types (payment, refund)<br/>
3. Querying by time period has higher priority than querying by month.<br/>
4. The time format is "yyyy-MM-dd HH:mm:ss"<br/>
5. The month format is "yyyyMM"<br/>
6. Split page number starts from one.<br/>
:::

Parse the return value:

<Link href="@site/static/img/android/parse__multiple__query.png" target="_blank"> ![Query Multiple Transaction](@site/static/img/android/parse__multiple__query.png)</Link>

## Query Transaction Details

Calling a query request:

<Link href="@site/static/img/android/query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/query__details.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__details.png" target="_blank"> ![Query Transaction Details](@site/static/img/android/parse__query__details.png)</Link>

## View Transaction Summary

Calling a view transaction summary request:

<Link href="@site/static/img/android/view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/view__summary.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__view__summary.png" target="_blank"> ![View Transaction Summary](@site/static/img/android/parse__view__summary.png)</Link>

## Query Transaction Channel Configuration(Deprecated)

This interface has been marked as deprecated and can be replaced with the GetUserConfig interface. See [Query User Configuration Information](#query-user-configuration-information) for details. <br/>
Calling a Query transaction channel configuration request:

<Link href="@site/static/img/android/query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/query__channel__config.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__channel__config.png" target="_blank"> ![Query Transaction Channel Configuration(Deprecated)](@site/static/img/android/parse__query__channel__config.png)</Link>

## Query User Configuration Information

Call a query user configuration information request:

<Link href="@site/static/img/android/quey__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/quey__user__info.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__user__info.png" target="_blank"> ![Query User Configuration Information](@site/static/img/android/parse__query__user__info.png)</Link>

## Pre-authorization Transaction Deduction

Call a pre-authorization transaction deduction request:

<Link href="@site/static/img/android/pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/pre-aut__deduct.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__deduct.png" target="_blank"> ![Pre-authorization Transaction Deduction](@site/static/img/android/parse__pre-aut__deduct.png)</Link>

## Pre-authorization Transaction Cancel

Call pre-authorization transaction cancel request:

<Link href="@site/static/img/android/pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/pre-aut__cancel.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__cancel.png" target="_blank"> ![Pre-authorization Transaction Cancel](@site/static/img/android/parse__pre-aut__cancel.png)</Link>

## Pre-authorization Transaction List

Call pre-authorization transaction list request:

<Link href="@site/static/img/android/pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/pre-aut__list.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__list.png" target="_blank"> ![Pre-authorization Transaction List](@site/static/img/android/parse__pre-aut__list.png)</Link>

## Pre-authorization Transaction Detail

Call pre-authorization transaction detail request:

<Link href="@site/static/img/android/pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/pre-aut__detail.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__pre-aut__detail.png" target="_blank"> ![Pre-authorization Transaction Detail](@site/static/img/android/parse__pre-aut__detail.png)</Link>

## Card Refund

Calling a refund request:

<Link href="@site/static/img/android/card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/card__refund.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__refund.png" target="_blank"> ![Card Refund](@site/static/img/android/parse__card__refund.png)</Link>

## Query Multiple Card Transactions

Calling a query request:

<Link href="@site/static/img/android/multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/multiple__card__query.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__multiple__card__query.png" target="_blank"> ![Query Multiple Card Transactions](@site/static/img/android/parse__multiple__card__query.png)</Link>

## Query Card Transaction Details

Calling a query request:

<Link href="@site/static/img/android/query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/query__card__details.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__query__card__details.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details.png)</Link>
<Link href="@site/static/img/android/parse__query__card__details2.png" target="_blank"> ![Query Card Transaction Details](@site/static/img/android/parse__query__card__details2.png)</Link>

## Card Adjust

Calling an adjust request:

<Link href="@site/static/img/android/card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/card__adjust.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__adjust.png" target="_blank"> ![Card Adjust](@site/static/img/android/parse__card__adjust.png)</Link>

## Card Settle

Calling a settle request:

<Link href="@site/static/img/android/card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/card__settle.png)</Link>

Parse the return value:

<Link href="@site/static/img/android/parse__card__settle.png" target="_blank"> ![Card Settle](@site/static/img/android/parse__card__settle.png)</Link>